import * as Location from 'expo-location'
import { API_URL, API_KEY } from '@env'
import {
	doc,
	getDocs,
	setDoc,
	query,
	where,
	collection,
} from 'firebase/firestore'
import { db } from '../firebase/firebase'

const getLocation = async () => {
	const { status } = await Location.requestForegroundPermissionsAsync()

	if (status === 'granted') {
		const { coords } = await Location.getCurrentPositionAsync()
		const latitude = coords.latitude
		const longitude = coords.longitude

		const city = await fetch(
			`${API_URL}/search/locations.json?location=geo:${latitude},${longitude}&apikey=${API_KEY}`
		)
		const data = await city.json()

		const cityName =
			data.resultsPage.results.location[0].metroArea.displayName
		const cityId = data.resultsPage.results.location[0].metroArea.id

		return {
			cityName: cityName,
			cityId: cityId,
		}
	}
}

const useGetAndUpdateLocation = async (user, setUser) => {
	try {
		const { cityName, cityId } = await getLocation()

		const userRef = collection(db, 'users')
		const q = query(userRef, where('uid', '==', user.uid))

		const querySnapshot = await getDocs(q)
		querySnapshot.forEach((userDoc) => {
			setDoc(
				doc(db, 'users', userDoc.id),
				{
					city: {
						cityName: cityName,
						cityId: cityId,
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

export default useGetAndUpdateLocation
