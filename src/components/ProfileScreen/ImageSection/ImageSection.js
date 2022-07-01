import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './Styles'
import Concert from '../../../assets/Concert.svg'
import { Feather } from '@expo/vector-icons'

const ImageSection = ({ user }) => {
	return (
		<View style={styles.container}>
			<Concert style={styles.image} />

			<View style={styles.nameContainer}>
				<Text style={styles.name}>{user.name}</Text>
				<TouchableOpacity>
					<Feather name="edit-3" size={14} color="white" />
				</TouchableOpacity>
			</View>

			<Text style={styles.email}>{user.email}</Text>
		</View>
	)
}

export default ImageSection
