import { useEffect, useState } from 'react'
import { API_URL, API_KEY } from '@env'

const useSearchScroll = (dependencies, setPage) => {
	const [prevCriteria, setPrevCriteria] = useState(dependencies[1])
	const [prevQuery, setPrevQuery] = useState(dependencies[2])

	const [results, setResults] = useState({
		data: null,
		loading: true,
		error: null,
	})

	useEffect(() => {
		if (!dependencies[2]) {
			setResults({
				data: null,
				loading: false,
				error: null,
			})
		} else {
			setResults({
				data: results.data,
				loading: dependencies[0] === 1 ? true : false,
				error: null,
			})

			if (
				prevCriteria != dependencies[1] ||
				prevQuery != dependencies[2]
			) {
				setPage(1)
			}

			let category
			let search
			if (dependencies[1] == 'Artist') {
				category = 'artists'
				search = category
			} else if (dependencies[1] == 'City') {
				category = 'locations'
				search = 'metro_areas'
			} else {
				category = 'venues'
				search = category
			}

			const getSearchId = async () => {
				const res = await fetch(
					`${API_URL}/search/${category}.json?apikey=${API_KEY}&query=${dependencies[2]}&per_page=1`
				)
				const data = await res.json()
				const info = await data.resultsPage.results

				try {
					if (Object.keys(info).length === 0) {
						throw 'No results :/'
					}

					if (dependencies[1] == 'Artist') {
						return info.artist[0]?.id
					} else if (dependencies[1] == 'City') {
						return info.location[0]?.metroArea.id
					} else {
						return info.venue[0]?.id
					}
				} catch (error) {
					setResults({
						data: null,
						loading: false,
						error: error,
					})
				}
			}

			const getEvents = async () => {
				const searchId = await getSearchId()

				if (!searchId) {
					return
				}

				const todayDate = new Date().toISOString().slice(0, 10)
				try {
					const res = await fetch(
						`${API_URL}/${search}/${searchId}/calendar.json?apikey=${API_KEY}&per_page=15&page=${dependencies[0]}&min_date=${todayDate}`
					)
					const data = await res.json()

					if (Object.keys(data.resultsPage.results).length === 0) {
						throw 'No upcoming events :/'
					}

					return data
				} catch (error) {
					setResults({
						data: null,
						loading: false,
						error: error,
					})
				}
			}

			const updateEvents = async () => {
				const data = await getEvents()

				if (!data) {
					return
				}

				if (
					prevCriteria != dependencies[1] ||
					prevQuery != dependencies[2]
				) {
					setPrevCriteria(dependencies[1])
					setPrevQuery(dependencies[2])

					setResults({
						data: [...data?.resultsPage.results.event],
						loading: false,
						error: null,
					})
				} else {
					setResults({
						data: [
							...results.data,
							...data?.resultsPage.results.event,
						],
						loading: false,
						error: null,
					})
				}
			}

			updateEvents()
		}
	}, dependencies)

	return results
}

export default useSearchScroll
