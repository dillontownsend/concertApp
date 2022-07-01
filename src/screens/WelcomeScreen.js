import { SafeAreaView } from 'react-native'
import React from 'react'
import Header from '../components/WelcomeScreen/Header/Header'
import Image from '../components/WelcomeScreen/Image/Image'
import Buttons from '../components/WelcomeScreen/Buttons/Buttons'
import screenContainer from '../global/screenContainer'

const WelcomeScreen = ({ navigation }) => {
	return (
		<SafeAreaView style={screenContainer.container}>
			<Header />
			<Image />
			<Buttons navigation={navigation} />
		</SafeAreaView>
	)
}

export default WelcomeScreen
