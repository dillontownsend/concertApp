import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Frame from '../../../assets/Frame.svg'
import styles from './Styles'

const Image = () => {
	return (
		<View style={styles.container}>
			<Frame width="100%" />
		</View>
	)
}

export default Image

