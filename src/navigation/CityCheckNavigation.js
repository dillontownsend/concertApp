import React from 'react'
import useAuth from '../hooks/useAuth'
import SelectLocationNavigation from './SelectLocationNavigation'
import AuthedNavigation from './AuthedNavigation'

const CityCheckNavigation = () => {
	const { user } = useAuth()

	return (
		<>
			{user.city.cityId ? (
				<AuthedNavigation />
			) : (
				<SelectLocationNavigation />
			)}
		</>
	)
}

export default CityCheckNavigation
