import { View } from 'react-native'
import React from 'react'
import ImageHeader from '../components/EventDetailsScreen/ImageHeader/ImageHeader'
import screenContainer from '../global/screenContainer'
import Body from '../components/EventDetailsScreen/Body/Body'

const EventDetailsScreen = ({ navigation, route }) => {
	const { name, date, time, location, city, imageURI, eventId } = route.params

	return (
		<View style={screenContainer.container}>
			<ImageHeader
				imageURI={imageURI}
				eventId={eventId}
				navigation={navigation}
			/>
			<Body
				name={name}
				date={date}
				time={time}
				location={location}
				city={city}
			/>
		</View>
	)
}

export default EventDetailsScreen
