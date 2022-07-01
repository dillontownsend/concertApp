import { Dimensions, StyleSheet } from 'react-native'
import globalColors from '../../../global/globalColors'

export const styles = StyleSheet.create({
	container: {
		width: '95%',
		height: Dimensions.get('screen').height * 0.12,
		alignSelf: 'center',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	imageContainer: {
		width: '24%',
	},
	image: {
		width: '100%',
		aspectRatio: 1,
		resizeMode: 'cover',
		borderRadius: 10,
	},
	textContainer: {
		height: '80%',
		width: '48%',
		justifyContent: 'space-around',
		marginRight: '2%',
	},
	date: {
		color: globalColors.gray200,
		fontSize: 12,
	},
	name: {
		color: 'white',
		fontSize: 16,
		fontWeight: 'bold',
	},
	locationContainer: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	location: {
		color: globalColors.gray200,
		fontSize: 12,
		marginLeft: 3,
	},
	iconContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'flex-end',
		marginRight: '3%',
	},
	icon: {
		marginLeft: 15,
	},
})

export const imageStyles = {
	borderRadius: 10,
	aspectRatio: 1,
	resizeMode: 'cover',
	width: '100%',
}
