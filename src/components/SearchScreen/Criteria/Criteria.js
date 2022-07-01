import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './Styles'

const Criteria = ({ criteria, active, setActive, setQuery }) => {
    const handlePress = () => {
        setActive(criteria)
        setQuery('')
    }

	return (
		<TouchableOpacity
			onPress={() => handlePress()}
			style={[
				styles.container,
				active == criteria
					? styles.activeContainer
					: styles.inactiveContainer,
			]}
		>
			<Text
				style={[
					styles.text,
					active == criteria
						? styles.activeText
						: styles.inactiveText,
				]}
			>
				{criteria}
			</Text>
		</TouchableOpacity>
	)
}

export default Criteria
