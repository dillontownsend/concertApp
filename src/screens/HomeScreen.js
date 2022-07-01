import { SafeAreaView } from 'react-native'
import React from 'react'
import screenContainer from '../global/screenContainer'
import Header from '../components/HomeScreen/Header/Header'
import PreviewList from '../components/HomeScreen/PreviewList/PreviewList'
import Divider from '../components/HomeScreen/Divider/Divider'
import useAuth from '../hooks/useAuth'

const HomeScreen = ({ navigation }) => {
	const { user } = useAuth()

	return (
		<SafeAreaView style={screenContainer.container}>
			<Header user={user} />
			<Divider />
			<PreviewList navigation={navigation} user={user} />
		</SafeAreaView>
	)
}

export default HomeScreen
