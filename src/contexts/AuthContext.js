import { createContext, useEffect, useState } from 'react'
import { auth, db } from '../firebase/firebase'
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	onAuthStateChanged,
} from 'firebase/auth'
import { collection, addDoc, query, where, getDocs } from 'firebase/firestore'

export const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null)

	const signUp = async (name, email, password) => {
		try {
			const userCredentials = await createUserWithEmailAndPassword(
				auth,
				email,
				password
			)
			const newUser = userCredentials.user

			addDoc(collection(db, 'users'), {
				uid: newUser.uid,
				name: name,
				email: newUser.email,
				city: {
					cityName: null,
					cityId: null,
				},
				likes: [],
			})
			return false
		} catch (error) {
			return true
		}
	}

	const signIn = async (email, password) => {
		try {
			await signInWithEmailAndPassword(auth, email, password)
			return false
		} catch (error) {
			return true
		}
	}

	const logOut = () => {
		return signOut(auth)
	}

	const queryThenSetUser = async (user) => {
		const userRef = collection(db, 'users')
		const q = query(userRef, where('uid', '==', user.uid))

		const querySnapshot = await getDocs(q)
		querySnapshot.forEach((doc) => {
			const userDoc = doc.data()
			setUser(userDoc)
		})
	}

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			user ? queryThenSetUser(user) : setUser(null)
		})
		return (currUser) => {
			setUser(currUser)
		}
	}, [])

	const value = {
		user,
		signUp,
		signIn,
		logOut,
		setUser,
	}

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
