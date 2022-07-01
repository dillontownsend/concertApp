import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LikesScreen from '../screens/LikesScreen'
import EventDetailsScreen from '../screens/EventDetailsScreen'

const Stack = createNativeStackNavigator()

const LikesNavigation = () => {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
			}}
		>
			<Stack.Screen name="LikesScreen" component={LikesScreen} />
			<Stack.Screen name="EventDetailsScreen" component={EventDetailsScreen} />
		</Stack.Navigator>
	)
}

export default LikesNavigation
