import { View, Text, ImageBackground, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { imageStyles, styles } from './Styles'
import { MaterialCommunityIcons, Ionicons, AntDesign } from '@expo/vector-icons'
import globalColors from '../../../global/globalColors'
import useChangeLike from '../../../hooks/useChangeLike'
import useAuth from '../../../hooks/useAuth'

const LargePreview = ({
	user,
	name,
	date,
	time,
	location,
	city,
	imageURI,
	eventId,
	navigation,
}) => {
	const [liked, setLiked] = useState(false)
	const { setUser } = useAuth()

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
		<View style={styles.container}>
			<Text style={styles.header}>Upcoming in {user.city.cityName}</Text>

			<TouchableOpacity
				onPress={() =>
					navigation.navigate('EventDetailsScreen', {
						name,
						date,
						time,
						location,
						city,
						imageURI,
						eventId,
					})
				}
			>
				<ImageBackground
					source={require('../../../assets/mic.png')}
					style={styles.imageBackground}
					imageStyle={imageStyles}
				>
					<ImageBackground
						imageStyle={imageStyles}
						style={styles.imageBackground}
						source={{ uri: imageURI }}
					>
						<View style={styles.badgeContainer}>
							<Text style={styles.badgeText}>Tonight</Text>
						</View>

						<View style={styles.viewContainer}>
							<View style={styles.textContainer}>
								<Text style={styles.date}>
									{new Date(
										date
											.replace(/-/g, '/')
											.replace(/T.+/, '')
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
									<Text
										numberOfLines={1}
										style={styles.location}
									>
										{location}
									</Text>
								</View>
								<View style={styles.iconContainer}>
									<TouchableOpacity
										onPress={() => handleLike()}
									>
										<Ionicons
											name={
												liked
													? 'md-heart-sharp'
													: 'md-heart-outline'
											}
											size={20}
											color={
												liked
													? globalColors.appBlue
													: 'white'
											}
										/>
									</TouchableOpacity>
									<TouchableOpacity style={styles.icon}>
										<AntDesign
											name="sharealt"
											size={20}
											color="white"
										/>
									</TouchableOpacity>
								</View>
							</View>
						</View>
					</ImageBackground>
				</ImageBackground>
			</TouchableOpacity>
		</View>
	)
}

export default LargePreview
