import { View, Text } from 'react-native'
import React from 'react'
import styles from './Styles'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const Header = ({user}) => {
	return (
		<View style={styles.container}>
			<Text style={styles.smallText}>Find events in</Text>
			<View style={styles.largeContainer}>
				<MaterialCommunityIcons
					name="map-marker-outline"
					size={16}
					color="white"
				/>
				<Text style={styles.largeText}>{user.city.cityName}</Text>
			</View>
		</View>
	)
}

export default Header
