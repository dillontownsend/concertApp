import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'
import { FontAwesome } from '@expo/vector-icons'
import HomeNavigation from './HomeNavigation'
import ProfileNavigation from './ProfileNavigation'
import SearchNavigation from './SearchNavigation'
import LikesNavigation from './LikesNavigation'
import globalColors from '../global/globalColors'

const Tab = createBottomTabNavigator()

const AuthedNavigation = () => {
	return (
		<Tab.Navigator
			screenOptions={{
				tabBarShowLabel: false,
				headerShown: false,
				tabBarStyle: {
					backgroundColor: globalColors.gray900,
					borderTopWidth: 0,
				},
			}}
		>
			<Tab.Screen
				name="Home"
				component={HomeNavigation}
				options={{
					tabBarIcon: ({ focused }) => {
						return (
							<Ionicons
								name={focused ? 'home' : 'home-outline'}
								size={25}
								color="white"
							/>
						)
					},
				}}
			/>
			<Tab.Screen
				name="Search"
				component={SearchNavigation}
				options={{
					tabBarIcon: ({ focused }) => {
						return (
							<Ionicons
								name={
									focused
										? 'md-search-sharp'
										: 'md-search-outline'
								}
								size={25}
								color="white"
							/>
						)
					},
				}}
			/>
			<Tab.Screen
				name="Likes"
				component={LikesNavigation}
				options={{
					tabBarIcon: ({ focused }) => {
						return (
							<Ionicons
								name={
									focused
										? 'md-heart-sharp'
										: 'md-heart-outline'
								}
								size={25}
								color="white"
							/>
						)
					},
				}}
			/>
			<Tab.Screen
				name="Profile"
				component={ProfileNavigation}
				options={{
					tabBarIcon: ({ focused }) => {
						return (
							<FontAwesome
								name={focused ? 'user-circle' : 'user-circle-o'}
								size={25}
								color="white"
							/>
						)
					},
				}}
			/>
		</Tab.Navigator>
	)
}

export default AuthedNavigation
