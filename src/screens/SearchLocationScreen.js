import { SafeAreaView, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React from 'react'
import screenContainer from '../global/screenContainer'
import CityList from '../components/SearchLocationScreen/CityList/CityList'

const SearchLocationScreen = ({ navigation, route }) => {
	return (
		<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
			<SafeAreaView style={screenContainer.container}>
				<CityList navigation={navigation} route={route} />
			</SafeAreaView>
		</TouchableWithoutFeedback>
	)
}

export default SearchLocationScreen
