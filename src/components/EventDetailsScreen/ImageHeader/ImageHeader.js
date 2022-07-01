import { View, TouchableOpacity, ImageBackground } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles, imageStyles } from './Styles'
import { Ionicons, AntDesign } from '@expo/vector-icons'
import useAuth from '../../../hooks/useAuth'
import useChangeLike from '../../../hooks/useChangeLike'
import globalColors from '../../../global/globalColors'

const ImageHeader = ({ eventId, imageURI, navigation }) => {
	const [liked, setLiked] = useState(false)
	const { user, setUser } = useAuth()

	useEffect(() => {
		if (user.likes.includes(eventId)) {
			setLiked(true)
		} else {
            setLiked(false)
        }
	}, [user])

	const handleLike = () => {
		setLiked((currLiked) => !currLiked)
		useChangeLike(eventId, user, setUser)
	}

	return (
		<ImageBackground
			source={require('../../../assets/mic.png')}
			imageStyle={imageStyles}
		>
			<ImageBackground
				style={styles.imageBackground}
				imageStyle={imageStyles}
				source={{ uri: imageURI }}
			>
				<View style={styles.iconContainer}>
					<TouchableOpacity onPress={() => navigation.pop()}>
						<Ionicons name="arrow-back" size={24} color="white" />
					</TouchableOpacity>

					<View style={styles.smallContainer}>
						<TouchableOpacity
							style={styles.icon}
							onPress={() => handleLike()}
						>
							<Ionicons
								name={
									liked
										? 'md-heart-sharp'
										: 'md-heart-outline'
								}
								size={24}
								color={liked ? globalColors.appBlue : 'white'}
							/>
						</TouchableOpacity>

						<TouchableOpacity>
							<AntDesign
								name="sharealt"
								size={24}
								color="white"
							/>
						</TouchableOpacity>
					</View>
				</View>
			</ImageBackground>
		</ImageBackground>
	)
}

export default ImageHeader
