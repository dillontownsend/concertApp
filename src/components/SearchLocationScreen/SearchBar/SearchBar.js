import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import styles from './Styles'
import { Ionicons } from '@expo/vector-icons'
import globalColors from '../../../global/globalColors'

const SearchBar = ({ input, searchFilter, navigation }) => {

	return (
		<View style={styles.container}>
			<TouchableOpacity onPress={() => navigation.pop()}>
				<Ionicons
					name="arrow-back"
					size={18}
					color={globalColors.gray300}
				/>
			</TouchableOpacity>

			<View style={styles.searchContainer}>
				<TextInput
					style={styles.textInput}
					placeholder="Search for City..."
					placeholderTextColor={globalColors.gray600}
					keyboardAppearance="dark"
					value={input}
					onChangeText={(text) => searchFilter(text)}
				/>

				<Ionicons
					name={'md-search-sharp'}
					size={16}
					color={globalColors.gray300}
				/>
			</View>
		</View>
	)
}

export default SearchBar
