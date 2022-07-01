import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SelectLocationScreen from '../screens/SelectLocationScreen'
import SearchLocationScreen from '../screens/SearchLocationScreen'

const Stack = createNativeStackNavigator()

const SelectLocationNavigation = () => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen
				name="SelectLocationScreen"
				component={SelectLocationScreen}
			/>
			<Stack.Screen
				name="SearchLocationScreen"
				component={SearchLocationScreen}
			/>
		</Stack.Navigator>
	)
}

export default SelectLocationNavigation
