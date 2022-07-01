import { StyleSheet } from 'react-native'
import globalColors from '../../../global/globalColors'

const styles = StyleSheet.create({
	container: {
		borderRadius: 7,
        width: '25%',
        paddingVertical: 10,
	},
	activeContainer: {
		backgroundColor: globalColors.appBlue,
	},
	inactiveContainer: {
        backgroundColor: globalColors.gray700
    },
    text: {
        fontSize: 12,
        textAlign: 'center',
    },
	activeText: {
        color: 'white'
    },
	inactiveText: {
        color: globalColors.gray200
    },
})

export default styles
