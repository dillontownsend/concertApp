import { View, Text, FlatList, ActivityIndicator } from 'react-native'
import React, { useRef } from 'react'
import styles from './Styles'
import useFetchLikes from '../../../hooks/useFetchLikes'
import SmallPreview from '../../HomeScreen/SmallPreview/SmallPreview'
import { useScrollToTop } from '@react-navigation/native'

const LikesList = ({ navigation }) => {
	const { data, loading, error } = useFetchLikes()

	const ref = useRef(null)
	useScrollToTop(ref)

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

	return (
		<FlatList
			ref={ref}
			data={data}
			keyExtractor={(data) => data.id}
			showsVerticalScrollIndicator={false}
			renderItem={({ item, index }) => {
				return (
					<SmallPreview
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

export default LikesList
