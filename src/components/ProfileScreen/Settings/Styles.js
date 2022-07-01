import { Dimensions, StyleSheet } from 'react-native'
import globalColors from '../../../global/globalColors'

const styles = StyleSheet.create({
	title: {
		color: 'white',
		fontSize: 18,
		fontWeight: '600',
        marginTop: '20%',
        marginLeft: '2%',
        marginBottom: '5%'
	},
    rowContainer: {
        width: '100%',
        height: Dimensions.get('screen').height * 0.052,
        backgroundColor: globalColors.gray900,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: '5%'
    },
    rowText: {
        color: 'white',
        fontSize: 12
    }
})

export default styles
