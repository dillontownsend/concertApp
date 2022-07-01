import { View, Text } from 'react-native'
import React from 'react'
import styles from './Styles'
import { Ionicons } from '@expo/vector-icons'
import globalColors from '../../../global/globalColors'

const NoLikes = () => {
	return (
		<View style={styles.container}>
			<Ionicons
				name="md-heart-sharp"
				size={84}
				color={globalColors.appBlue}
                style={styles.heart}
			/>

			<Text style={styles.boldText}>No likes yet</Text>

			<Text style={styles.lightText}>When you like an event, it will appear here</Text>
		</View>
	)
}

export default NoLikes
