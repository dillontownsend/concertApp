import React, { useEffect, useState } from 'react'
import SplashScreen from '../screens/SplashScreen'
import { NavigationContainer } from '@react-navigation/native'
import UnAuthedNavigation from '../navigation/UnauthedNavigation'
import useAuth from '../hooks/useAuth'
import CityCheckNavigation from './CityCheckNavigation'

const MainNavigation = () => {
	const { user } = useAuth()

	const [splash, setSplash] = useState(true)

	useEffect(() => {
		setTimeout(() => {
			setSplash(false)
		}, 2000)
	}, [])

	return (
		<NavigationContainer>
			{splash ? (
				<SplashScreen />
			) : (
				<>{!user ? <UnAuthedNavigation /> : <CityCheckNavigation />}</>
			)}
		</NavigationContainer>
	)
}

export default MainNavigation
