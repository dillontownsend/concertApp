import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import WelcomeScreen from '../screens/WelcomeScreen'
import SignInScreen from '../screens/SignInScreen'
import SignUpScreen from '../screens/SignUpScreen'

const Stack = createNativeStackNavigator()

const UnauthedNavigation = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="WelcomeScreen"
				component={WelcomeScreen}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="SignInScreen"
				component={SignInScreen}
				options={{
					headerBackTitleVisible: false,
					headerTitle: false,
					title: '',
					headerTintColor: 'white',
					headerStyle: { backgroundColor: 'black' },
				}}
			/>
			<Stack.Screen
				name="SignUpScreen"
				component={SignUpScreen}
				options={{
					headerBackTitleVisible: false,
					headerTitle: false,
					title: '',
					headerTintColor: 'white',
					headerStyle: { backgroundColor: 'black' },
				}}
			/>
		</Stack.Navigator>
	)
}

export default UnauthedNavigation
