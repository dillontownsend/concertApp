import { Dimensions, StyleSheet } from 'react-native'
import globalColors from '../../../global/globalColors'

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		alignSelf: 'center',
		width: '92.5%',
		paddingTop: Dimensions.get('screen').height * 0.05,
        paddingBottom: Dimensions.get('screen').height * 0.035,
        backgroundColor: 'black'
	},
	searchContainer: {
		width: '90%',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		borderBottomColor: globalColors.gray300,
		borderBottomWidth: 0.5,
	},
	textInput: {
		width: '90%',
		paddingVertical: 12,
		color: globalColors.gray300,
		fontSize: 16,
	},
})

export default styles
