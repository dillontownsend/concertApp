import { SafeAreaView, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React from 'react'
import screenContainer from '../global/screenContainer'
import Header from '../components/SignUpScreen/Header/Header'
import Form from '../components/SignUpScreen/Form/Form'

const SignUpScreen = () => {
	return (
		<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
			<SafeAreaView style={screenContainer.container}>
				<Header />
				<Form />
			</SafeAreaView>
		</TouchableWithoutFeedback>
	)
}

export default SignUpScreen
