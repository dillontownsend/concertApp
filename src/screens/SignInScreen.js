import { SafeAreaView, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React from 'react'
import screenContainer from '../global/screenContainer'
import Header from '../components/SignInScreen/Header/Header'
import Form from '../components/SignInScreen/Form/Form'

const SignInScreen = () => {
	return (
		<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
			<SafeAreaView style={screenContainer.container}>
				<Header />
				<Form />
			</SafeAreaView>
		</TouchableWithoutFeedback>
	)
}

export default SignInScreen
