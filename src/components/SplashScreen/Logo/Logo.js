import { Text, View } from 'react-native'
import React from 'react'
import styles from './Styles'


const SplashScreen = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.logo}>In Town</Text>
		</View>
	)
}

export default SplashScreen
