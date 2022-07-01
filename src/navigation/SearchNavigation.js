import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SearchScreen from '../screens/SearchScreen'
import EventDetailsScreen from '../screens/EventDetailsScreen'

const Stack = createNativeStackNavigator()

const SearchNavigation = () => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name="SearchScreen" component={SearchScreen} />
			<Stack.Screen name="EventDetailsScreen" component={EventDetailsScreen} />
		</Stack.Navigator>
	)
}

export default SearchNavigation
