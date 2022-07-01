import { StyleSheet } from 'react-native'
import globalColors from '../../../global/globalColors'

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		justifyContent: 'center',
		flex: 1,
	},
	heart: {
		marginBottom: '5%',
	},
	boldText: {
		color: 'white',
		fontSize: 18,
		fontWeight: 'bold',
		marginBottom: '3%',
	},
	lightText: {
		color: globalColors.gray200,
		fontSize: 16,
        width: '60%',
        textAlign: 'center'
	},
})

export default styles
