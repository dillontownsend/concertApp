import { Text, FlatList, ActivityIndicator } from 'react-native'
import React, { useState, useRef } from 'react'
import styles from './Styles'
import LargePreview from '../LargePreview/LargePreview'
import SmallPreview from '../SmallPreview/SmallPreview'
import useFetchScroll from '../../../hooks/useFetchScroll'
import { useScrollToTop } from '@react-navigation/native'
import { API_KEY } from '@env'

const PreviewList = ({ user, navigation }) => {
	const [page, setPage] = useState(1)

	const ref = useRef(null)
	useScrollToTop(ref)

	const todayDate = new Date().toISOString().slice(0, 10)
	const url = `/metro_areas/${user.city.cityId}/calendar.json?apikey=${API_KEY}&per_page=15&page=${page}&min_date=${todayDate}`

	const { events, loading, error } = useFetchScroll(
		url,
		[page, user.city],
		setPage
	)

	const fetchMoreData = () => {
		setPage((currentPage) => currentPage + 1)
	}

	if (loading) {
		return (
			<ActivityIndicator
				size={'large'}
				color={'white'}
				style={styles.spinner}
			/>
		)
	}

	if (error) {
		return <Text>{error}</Text>
	}

	if (events) {
		return (
			<FlatList
				ref={ref}
				data={events.slice(1)}
				keyExtractor={(event) => event.id}
				showsVerticalScrollIndicator={false}
				onEndReachedThreshold={0.2}
				onEndReached={fetchMoreData}
				ListFooterComponent={
					<ActivityIndicator
						color="white"
						style={styles.footerSpinner}
					/>
				}
				ListHeaderComponent={
					<LargePreview
						user={user}
						name={events[0].performance[0]?.artist.displayName}
						date={events[0].start.date}
						time={events[0].start.datetime}
						location={events[0].venue.displayName}
						city={events[0].location.city}
						eventId={events[0].id}
						imageURI={`https://images.sk-static.com/images/media/profile_images/artists/${events[0].performance[0]?.artist.id}/huge_avatar`}
						navigation={navigation}
					/>
				}
				renderItem={({ item, index }) => {
					return (
						<SmallPreview
							user={user}
							name={item.performance[0]?.artist.displayName}
							date={item.start.date}
							time={item.start.datetime}
							location={item.venue.displayName}
							city={item.location.city}
							imageURI={`https://images.sk-static.com/images/media/profile_images/artists/${item.performance[0]?.artist.id}/huge_avatar`}
							eventId={item.id}
							index={index}
							navigation={navigation}
						/>
					)
				}}
			/>
		)
	}
}

export default PreviewList
