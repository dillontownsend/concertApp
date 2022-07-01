import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import useAuth from './useAuth'
import { API_URL, API_KEY } from '@env'

const useFetchLikes = () => {
	const [results, setResults] = useState({
		data: null,
		loading: true,
		error: null,
	})

	const { user } = useAuth()

	const fetchData = async (eventId) => {
		const res = await fetch(
			`${API_URL}/events/${eventId}.json?apikey=${API_KEY}`
		)
		const data = await res.json()
		const info = data.resultsPage.results.event

		return info
	}

	const iterateCalls = async () => {
		const promises = user.likes.map(async (eventId) => {
			const info = await fetchData(eventId)
			return info
		})

		const resolves = await Promise.all(promises)

		setResults({
			data: resolves,
			loading: false,
			error: null,
		})
	}

	useEffect(() => {
		iterateCalls()
	}, [user.likes])

	return results
}

export default useFetchLikes
