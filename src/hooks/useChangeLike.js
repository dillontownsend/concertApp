import React from 'react'
import {
	doc,
	getDocs,
	setDoc,
	query,
	where,
	collection,
	updateDoc,
} from 'firebase/firestore'
import { db } from '../firebase/firebase'

const useChangeLike = async (eventId, user, setUser) => {
	const userRef = collection(db, 'users')
	const q = query(userRef, where('uid', '==', user.uid))

	const querySnapshot = await getDocs(q)
	querySnapshot.forEach((userDoc) => {
		updateDoc(
			doc(db, 'users', userDoc.id),
			{
				likes: !user.likes.includes(eventId)
					? [...user.likes, eventId]
					: user.likes.filter((item) => {
							return item !== eventId
					  }),
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
}

export default useChangeLike
