import { SafeAreaView } from 'react-native'
import React from 'react'
import screenContainer from '../global/screenContainer'
import Icon from '../components/SelectLocationScreen/Icon/Icon'
import Body from '../components/SelectLocationScreen/Body/Body'
import Buttons from '../components/SelectLocationScreen/Buttons/Buttons'

const SelectLocationScreen = ({ navigation, route }) => {
	return (
		<SafeAreaView style={screenContainer.container}>
			<Icon />
			<Body />
			<Buttons navigation={navigation} route={route} />
		</SafeAreaView>
	)
}

export default SelectLocationScreen
