import { SafeAreaView } from 'react-native'
import React from 'react'
import screenContainer from '../global/screenContainer'
import ImageSection from '../components/ProfileScreen/ImageSection/ImageSection'
import useAuth from '../hooks/useAuth'
import Settings from '../components/ProfileScreen/Settings/Settings'
import LogoutButton from '../components/ProfileScreen/LogoutButton/LogoutButton'

const ProfileScreen = ({ navigation }) => {
	const { user, logOut } = useAuth()

	return (
		<SafeAreaView style={screenContainer.container}>
			<ImageSection user={user} />
			<Settings user={user} navigation={navigation} />
			<LogoutButton logOut={logOut} />
		</SafeAreaView>
	)
}

export default ProfileScreen
