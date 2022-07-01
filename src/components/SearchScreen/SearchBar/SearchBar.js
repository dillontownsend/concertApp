import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import styles from './Styles'
import { Ionicons } from '@expo/vector-icons'
import globalColors from '../../../global/globalColors'

const SearchBar = ({ setQuery }) => {
	const [input, setInput] = useState('')

	const handleEndEditing = () => {
		if (!input) return
		setQuery(input)
		setInput('')
	}

	return (
		<View style={styles.container}>
			<TextInput
				style={styles.textInput}
				placeholder="Search..."
				placeholderTextColor={globalColors.gray600}
				keyboardAppearance="dark"
				value={input}
				onChangeText={(text) => setInput(text)}
				onEndEditing={handleEndEditing}
			/>

			<Ionicons
				name={'md-search-sharp'}
				size={16}
				color={globalColors.gray300}
			/>
		</View>
	)
}

export default SearchBar
