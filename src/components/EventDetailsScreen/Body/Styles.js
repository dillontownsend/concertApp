import { Dimensions, StyleSheet } from "react-native"
import globalColors from '../../../global/globalColors'

const styles = StyleSheet.create({
    container: {
        alignSelf: 'center',
        width: '95%',
        marginTop: '5%',
    },
    name: {
        color: 'white',
        fontSize: 24,
        fontWeight: '600',
        marginBottom: '7%'
    },
    sectionContainer: {
        height: Dimensions.get('screen').height * 0.085,
        width: '95%',
        justifyContent: 'space-between',
        marginBottom: '7%'
    },
    sectionRow: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    sectionTitle: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: '3%'
    },
    sectionText: {
        color: globalColors.gray200,
        fontSize: 12,
        marginLeft: '3%'
    },
    sectionLink: {
        color: globalColors.appBlue,
        marginLeft: '3%',
        fontWeight: 'bold',
        fontSize: 12
    },
    aboutTitle: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: '3%'
    },
    aboutText: {
        color: globalColors.gray200
    }
})

export default styles