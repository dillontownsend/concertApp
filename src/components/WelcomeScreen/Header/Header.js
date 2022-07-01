import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import styles from './Styles'

const Header = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.largeText}>Welcome!</Text>
			<Text style={styles.smallText}>Sign in or create a new account</Text>
		</View>
	)
}

export default Header
