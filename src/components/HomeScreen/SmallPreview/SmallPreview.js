import {
	View,
	Text,
	TouchableOpacity,
	Image,
	ImageBackground,
} from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles, imageStyles } from './Styles'
import { MaterialCommunityIcons, Ionicons, AntDesign } from '@expo/vector-icons'
import globalColors from '../../../global/globalColors'
import useChangeLike from '../../../hooks/useChangeLike'
import useAuth from '../../../hooks/useAuth'

const SmallPreview = ({
	name,
	date,
	time,
	location,
	city,
	imageURI,
	eventId,
	index,
	navigation,
}) => {
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
		<TouchableOpacity
			onPress={() =>
				navigation.navigate('EventDetailsScreen', {
					name,
					date,
					time,
					location,
					city,
					eventId,
					imageURI,
				})
			}
			style={[styles.container, index != 0 && { marginTop: '3%' }]}
		>
			<ImageBackground
				style={styles.imageContainer}
				imageStyle={imageStyles}
				source={require('../../../assets/mic.png')}
			>
				<Image style={styles.image} source={{ uri: imageURI }} />
			</ImageBackground>

			<View style={styles.textContainer}>
				<Text style={styles.date}>
					{new Date(
						date.replace(/-/g, '/').replace(/T.+/, '')
					).toLocaleDateString('en-us', {
						weekday: 'long',
						year: 'numeric',
						month: 'short',
						day: 'numeric',
					})}
				</Text>
				<Text numberOfLines={1} style={styles.name}>
					{name}
				</Text>
				<View style={styles.locationContainer}>
					<MaterialCommunityIcons
						name="map-marker-outline"
						size={16}
						color="white"
					/>
					<Text numberOfLines={1} style={styles.location}>
						{location}
					</Text>
				</View>
			</View>

			<View style={styles.iconContainer}>
				<TouchableOpacity onPress={() => handleLike()}>
					<Ionicons
						name={liked ? 'md-heart-sharp' : 'md-heart-outline'}
						size={20}
						color={liked ? globalColors.appBlue : 'white'}
					/>
				</TouchableOpacity>
				<TouchableOpacity style={styles.icon}>
					<AntDesign name="sharealt" size={20} color="white" />
				</TouchableOpacity>
			</View>
		</TouchableOpacity>
	)
}

export default SmallPreview
