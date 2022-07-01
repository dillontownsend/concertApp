import { StyleSheet } from 'react-native'
import globalColors from '../../../global/globalColors'

const styles = StyleSheet.create({
	container: {
		backgroundColor: globalColors.appBlue,
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	logo: {
		color: 'white',
		fontSize: 75,
		letterSpacing: -4,
		fontWeight: '900',
		textAlign: 'center',
	},
})

export default styles
