import { useEffect, useState } from 'react'
import { API_URL } from '@env'

const useFetchScroll = (url, dependencies, setPage) => {
	const [prevUser, setPrevUser] = useState(dependencies[1])

	const [results, setResults] = useState({
		events: [],
		loading: true,
		error: null,
	})

	useEffect(() => {
		try {
			if (prevUser != dependencies[1]) {
				setPage(1)
			}

			fetch(API_URL + url).then(async (res) => {
				const data = await res.json()

				if (prevUser != dependencies[1]) {
					setPrevUser(dependencies[1])
					setResults({
						events: [...data?.resultsPage.results.event],
						loading: false,
						error: null,
					})
				} else {
					setResults({
						events: [
							...results.events,
							...data?.resultsPage.results.event,
						],
						loading: false,
						error: null,
					})
				}
			})
		} catch (error) {
			setResults({
				events: null,
				loading: false,
				error: error,
			})
		}
	}, dependencies)
	return results
}

export default useFetchScroll
