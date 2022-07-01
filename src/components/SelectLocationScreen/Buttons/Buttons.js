import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import styles from './Styles'
import useGetAndUpdateLocation from '../../../hooks/useGetAndUpdateLocation'
import useAuth from '../../../hooks/useAuth'

const Buttons = ({ navigation, route }) => {
	const { user, setUser } = useAuth()
	const [loading, setLoading] = useState(false)

	const handleGetLocation = () => {
		setLoading(true)
		useGetAndUpdateLocation(user, setUser)
        .then(() => {
            if (route.params?.fromScreen == 'ProfileScreen') {
                navigation.navigate('ProfileScreen')
            }
        })
        .catch((error) => {
			console.log(error)
			setLoading(false)
		})
	}

	if (loading) {
		return (
			<ActivityIndicator
				style={styles.spinner}
				color={'white'}
				size={'large'}
			/>
		)
	}

	return (
		<View style={styles.container}>
			<TouchableOpacity
				style={[styles.button, styles.solidButton]}
				onPress={() => handleGetLocation()}
			>
				<Text style={styles.text}>Use location</Text>
			</TouchableOpacity>

			<TouchableOpacity
				style={[styles.button, styles.outlineButton]}
				onPress={() => navigation.navigate('SearchLocationScreen', {
                    fromScreen: route.params ? route.params.fromScreen: 'CityCheck'
                })}
			>
				<Text style={styles.text}>Search for city</Text>
			</TouchableOpacity>
		</View>
	)
}

export default Buttons
