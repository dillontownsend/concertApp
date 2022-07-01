import { StyleSheet } from 'react-native'
import globalColors from '../../../global/globalColors'

const styles = StyleSheet.create({
    container: {
        marginHorizontal: "2.5%",
        marginTop: '7%',
        marginBottom: '5%'
    },
    smallText: {
        color: globalColors.gray300,
        fontSize: 12
    },
    largeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10
    },
    largeText: {
        color: 'white',
        fontSize: 18,
        fontWeight: '600',
        marginLeft: 3
    },
})

export default styles
