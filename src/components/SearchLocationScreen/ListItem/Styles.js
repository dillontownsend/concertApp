import { Dimensions, StyleSheet } from 'react-native'
import globalColors from '../../../global/globalColors'

const styles = StyleSheet.create({
	container: {
		width: '92.5%',
		height: Dimensions.get('screen').height * 0.09,
		alignSelf: 'center',
		justifyContent: 'space-between',
		paddingVertical: Dimensions.get('screen').height * 0.016,
	},
	cityText: {
		color: globalColors.gray200,
		fontSize: 18,
		fontWeight: '600',
	},
	stateText: {
		color: globalColors.gray400,
		fontSize: 16,
	},
    firstItem: {
        marginTop: Dimensions.get('screen').height * 0.015,
    }
})

export default styles
