import { Dimensions, StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        marginTop: '8%'
    },
    image: {
        height: Dimensions.get('screen').height * 0.12,
    },
    nameContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: '7%'
    },
    name: {
        color: 'white',
        fontSize: 18,
        fontWeight: '600',
        marginRight: '3%'
    },
    email: {
        color: 'white',
        fontSize: 12,
        alignSelf: 'center',
        marginTop: '1.5%'
    }
})

export default styles