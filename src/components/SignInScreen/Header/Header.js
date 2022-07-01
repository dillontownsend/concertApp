import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import styles from './Styles'

const Header = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.header}>Welcome Back!</Text>
		</View>
	)
}

export default Header
