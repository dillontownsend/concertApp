import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import styles from './Styles'

const Buttons = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<TouchableOpacity
				style={[styles.button, styles.solidButton]}
				onPress={() => navigation.navigate('SignInScreen')}
			>
				<Text style={styles.text}>Sign In</Text>
			</TouchableOpacity>

			<TouchableOpacity
				style={[styles.button, styles.outlineButton]}
				onPress={() => navigation.navigate('SignUpScreen')}
			>
				<Text style={styles.text}>No account yet? Sign Up</Text>
			</TouchableOpacity>
		</View>
	)
}

export default Buttons
