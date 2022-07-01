import { View, Text } from 'react-native'
import React from 'react'
import styles from './Styles'

const Header = ({ user }) => {
	return (
		<View style={styles.container}>
			<Text style={styles.header}>Likes</Text>

			<View style={styles.circle}>
				<Text style={styles.number}>{user.likes.length}</Text>
			</View>
		</View>
	)
}

export default Header
