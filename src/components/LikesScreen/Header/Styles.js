import { Dimensions, StyleSheet } from 'react-native'
import globalColors from '../../../global/globalColors'

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		width: '95%',
		alignSelf: 'center',
		marginTop: '10%',
		marginBottom: '5%',
	},
	header: {
		color: 'white',
		fontSize: 20,
		fontWeight: 'bold',
		marginRight: '2.5%',
	},
	circle: {
		backgroundColor: globalColors.appBlue,
		width: Dimensions.get('screen').width * 0.075,
		height: Dimensions.get('screen').width * 0.075,
		borderRadius: 25,
		alignItems: 'center',
		justifyContent: 'center',
	},
	number: {
		color: 'white',
		fontSize: 16,
		fontWeight: 'bold',
	},
})

export default styles
