import { Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './Styles'

const SubmitButton = ({ isValid, handleSubmit }) => {
	return (
		<TouchableOpacity
			style={[
				styles.button,
				styles.container,
				isValid ? styles.enabledBackground : styles.disabledBackground,
			]}
			disabled={!isValid}
			onPress={handleSubmit}
		>
			<Text
				style={[
					styles.text,
					isValid ? styles.enabledText : styles.disabledText,
				]}
			>
				Sign In
			</Text>
		</TouchableOpacity>
	)
}

export default SubmitButton
