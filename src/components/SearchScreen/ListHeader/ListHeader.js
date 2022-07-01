import { View, Text } from 'react-native'
import React from 'react'
import styles from './Styles'

const ListHeader = ({ query }) => {
	return (
		<View style={styles.container}>
			<Text style={styles.header}>Results for {query}</Text>
		</View>
	)
}

export default ListHeader
