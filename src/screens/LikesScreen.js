import { SafeAreaView } from 'react-native'
import React from 'react'
import screenContainer from '../global/screenContainer'
import NoLikes from '../components/LikesScreen/NoLikes/NoLikes'
import Header from '../components/LikesScreen/Header/Header'
import useAuth from '../hooks/useAuth'
import LikesList from '../components/LikesScreen/LikesList/LikesList'

const LikesScreen = ({ navigation }) => {
	const { user } = useAuth()

	return (
		<SafeAreaView style={screenContainer.container}>
			{user.likes.length === 0 ? (
				<NoLikes />
			) : (
				<>
					<Header user={user} />
					<LikesList navigation={navigation} />
				</>
			)}
		</SafeAreaView>
	)
}

export default LikesScreen
