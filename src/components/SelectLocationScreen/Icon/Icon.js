import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Map from '../../../assets/Map.svg'
import styles from './Styles'

const Icon = () => {
	return (
        <View style={styles.container}>
            <Map />
        </View>
    )
}

export default Icon
