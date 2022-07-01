import { SafeAreaView, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React, { useState } from 'react'
import screenContainer from '../global/screenContainer'
import SearchBar from '../components/SearchScreen/SearchBar/SearchBar'
import CriteriaList from '../components/SearchScreen/CriteriaList/CriteriaList'
import ResultsList from '../components/SearchScreen/ResultsList/ResultsList'

const SearchScreen = ({ navigation }) => {
	const [active, setActive] = useState('Artist')
	const [query, setQuery] = useState(null)

	return (
		<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
			<SafeAreaView style={screenContainer.container}>
				<SearchBar setQuery={setQuery} />
				<CriteriaList
					active={active}
					setActive={setActive}
					setQuery={setQuery}
				/>
				<ResultsList
					active={active}
					query={query}
					navigation={navigation}
				/>
			</SafeAreaView>
		</TouchableWithoutFeedback>
	)
}

export default SearchScreen
