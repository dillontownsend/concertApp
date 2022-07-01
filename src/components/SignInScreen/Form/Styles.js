import { StyleSheet } from 'react-native'
import globalColors from '../../../global/globalColors'

const styles = StyleSheet.create({
	container: {
		width: '95%',
		alignSelf: 'center',
		marginTop: '14%',
		flex: 1,
	},
	fieldContainer: {
		marginBottom: 40,
	},
	label: {
		color: globalColors.gray100,
		fontSize: 16,
		fontWeight: 'bold',
		marginBottom: 10,
	},
	field: {
		color: globalColors.gray200,
		paddingBottom: 8,
		borderBottomWidth: 1,
		borderBottomColor: globalColors.gray200,
	},
	errorText: {
		color: globalColors.red500,
		fontSize: 12,
		marginTop: 6,
	},

	topErrorText: {
		color: globalColors.red500,
		marginBottom: 10,
	},
})

export const fieldColor = {
	placeHolder: globalColors.gray500,
}

export default styles
