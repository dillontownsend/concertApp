import { Dimensions, StyleSheet } from 'react-native'
import globalColors from '../../../global/globalColors'

export const styles = StyleSheet.create({
	container: {
		alignSelf: 'center',
		width: '95%',
		height: Dimensions.get('screen').height * 0.29,
		marginTop: '5%',
		marginBottom: '18%',
	},
	imageBackground: {
		width: '100%',
		height: '100%',
		marginTop: 15,
		justifyContent: 'flex-end',
	},
	header: {
		color: globalColors.gray100,
		fontSize: 16,
	},
	viewContainer: {
		width: '100%',
		height: '45%',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'rgba(17, 24, 39, 0.75)',
		borderBottomStartRadius: 10,
		borderBottomEndRadius: 10,
	},
	textContainer: {
		width: '94%',
		height: '83%',
		justifyContent: 'space-between',
	},
	date: {
		color: globalColors.gray200,
		fontSize: 12,
	},
	name: {
		color: 'white',
		fontSize: 24,
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
	},
	icon: {
		marginLeft: 15,
	},
	badgeContainer: {
		position: 'absolute',
		backgroundColor: globalColors.appBlue,
		padding: 7,
		borderRadius: 10,
		top: -7,
		right: -7,
	},
	badgeText: {
		color: 'white',
	},
})

export const imageStyles = {
	resizeMode: 'cover',
	borderRadius: 10,
}
