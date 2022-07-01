import { Text, ActivityIndicator, FlatList } from 'react-native'
import React, { useState, useRef } from 'react'
import styles from './Styles'
import useSearchScroll from '../../../hooks/useSearchScroll'
import SmallPreview from '../../HomeScreen/SmallPreview/SmallPreview'
import { useScrollToTop } from '@react-navigation/native'
import useAuth from '../../../hooks/useAuth'
import ListHeader from '../ListHeader/ListHeader'

const ResultsList = ({ active, query, navigation }) => {
	const [page, setPage] = useState(1)
	const { user } = useAuth()

	const ref = useRef(null)
	useScrollToTop(ref)

	const { data, error, loading } = useSearchScroll(
		[page, active, query],
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
		return <Text style={styles.error}>{error}</Text>
	}

	if (data) {
		return (
			<FlatList
				ref={ref}
				data={data}
				keyExtractor={(data) => data.id}
				showsVerticalScrollIndicator={false}
				onEndReachedThreshold={0.2}
				onEndReached={fetchMoreData}
				ListHeaderComponent={<ListHeader query={query} />}
				stickyHeaderIndices={[0]}
				ListFooterComponent={
					<ActivityIndicator
						color="white"
						style={styles.footerSpinner}
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

	return <></>
}

export default ResultsList
