import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './Styles'

const LogoutButton = ({ logOut }) => {
	return (
		<TouchableOpacity
			style={[styles.button, styles.outlineButton]}
			onPress={() => logOut()}
		>
			<Text style={styles.text}>Log Out</Text>
		</TouchableOpacity>
	)
}

export default LogoutButton
