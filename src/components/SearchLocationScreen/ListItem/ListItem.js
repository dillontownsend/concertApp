import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './Styles'
import useSearchandUpdateLocation from '../../../hooks/useSearchandUpdateLocation'
import useAuth from '../../../hooks/useAuth'

const ListItem = ({ city, state, index, setLoading, navigation, route }) => {
	const { user, setUser } = useAuth()

	const handleSelect = async () => {
        setLoading(true)
		try {
			useSearchandUpdateLocation(user, setUser, city)
            .then(() => {
                if (route.params.fromScreen == 'ProfileScreen') {
                    navigation.navigate('ProfileScreen')
                }
            })
		} catch (error) {
			console.log(error)
            setLoading(false)
		}
	}

	return (
		<TouchableOpacity
			style={[styles.container, index == 0 && styles.firstItem]}
			onPress={() => handleSelect()}
		>
			<Text style={styles.cityText}>{city}</Text>
			<Text style={styles.stateText}>{state}</Text>
		</TouchableOpacity>
	)
}

export default ListItem
