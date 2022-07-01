import { API_URL, API_KEY } from '@env'
import {
	collection,
	doc,
	getDocs,
	query,
	setDoc,
	where,
} from 'firebase/firestore'
import { db } from '../firebase/firebase'

const getCityNameAndId = async (city) => {
	try {
		const res = await fetch(
			`${API_URL}/search/locations.json?query=${city}&apikey=${API_KEY}`
		)
		const data = await res.json()

		const { displayName, id } = await data.resultsPage.results.location[0]
			.metroArea

		return { displayName, id }
	} catch (error) {
		return error
	}
}

const useSearchandUpdateLocation = async (user, setUser, city) => {
	try {
		const { displayName, id } = await getCityNameAndId(city)

		const userRef = collection(db, 'users')
		const q = query(userRef, where('uid', '==', user.uid))

		const querySnapshot = await getDocs(q)
		querySnapshot.forEach((userDoc) => {
			setDoc(
				doc(db, 'users', userDoc.id),
				{
					city: {
						cityName: displayName,
						cityId: id,
					},
				},
				{ merge: true }
			).then(async () => {
				const updatedQ = await getDocs(q)
				updatedQ.forEach((updatedDoc) => {
					const updatedUser = updatedDoc.data()
					setUser(updatedUser)
				})
			})
		})
	} catch (error) {
		return error
	}
}

export default useSearchandUpdateLocation
