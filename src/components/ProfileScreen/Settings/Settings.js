import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './Styles'

const Settings = ({ user, navigation }) => {
	return (
		<View>
			<Text style={styles.title}>Settings</Text>

			<TouchableOpacity
				onPress={() => navigation.navigate('SelectLocationScreen', {
                    fromScreen: 'ProfileScreen'
                })}
			>
				<View style={styles.rowContainer}>
					<Text style={styles.rowText}>Primary City</Text>
					<Text style={styles.rowText}>{user.city.cityName}</Text>
				</View>
			</TouchableOpacity>
		</View>
	)
}

export default Settings
