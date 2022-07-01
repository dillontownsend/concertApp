import React from 'react'
import { StatusBar } from 'expo-status-bar'
import MainNavigation from './src/navigation/MainNavigation'
import { AuthProvider } from './src/contexts/AuthContext'

import { LogBox } from 'react-native'
LogBox.ignoreLogs([`AsyncStorage has been extracted from react-native core and will be removed in a future release. It can now be installed and imported from '@react-native-async-storage/async-storage' instead of 'react-native'.`])

const App = () => {
	return (
		<AuthProvider>
			<MainNavigation />
			<StatusBar style="light" />
		</AuthProvider>
	)
}

export default App
