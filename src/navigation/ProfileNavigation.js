import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ProfileScreen from '../screens/ProfileScreen'
import SelectLocationScreen from '../screens/SelectLocationScreen'
import SearchLocationScreen from '../screens/SearchLocationScreen'

const Stack = createNativeStackNavigator()

const ProfileNavigation = () => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name="ProfileScreen" component={ProfileScreen} />
			<Stack.Screen
				name="SelectLocationScreen"
				component={SelectLocationScreen}
			/>
            <Stack.Screen name='SearchLocationScreen' component={SearchLocationScreen} />
		</Stack.Navigator>
	)
}

export default ProfileNavigation
