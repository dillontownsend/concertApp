import { StyleSheet } from 'react-native'
import globalColors from '../../../global/globalColors'

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		width: '95%',
		alignSelf: 'center',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginTop: '10%',
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
