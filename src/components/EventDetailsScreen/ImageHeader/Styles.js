import { Dimensions, StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
	imageBackground: {
		height: Dimensions.get('screen').height * 0.3333,
		width: '100%',
		justifyContent: 'flex-end',
	},
	iconContainer: {
		width: '95%',
		flexDirection: 'row',
		alignSelf: 'center',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: '5%',
	},
	smallContainer: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	icon: {
		marginRight: 15,
	},
})

export const imageStyles = {
	resizeMode: 'cover',
}
