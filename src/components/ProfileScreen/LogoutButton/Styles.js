import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    button: {
		width: '96%',
		alignItems: 'center',
		justifyContent: 'center',
        alignSelf: 'center',
		paddingVertical: 17,
		borderRadius: 10,
        position: 'absolute',
        bottom: '4%',
	},
    outlineButton: {
		borderWidth: 1,
		borderColor: 'white',
	},
    text: {
		color: 'white',
		fontSize: 16,
		fontWeight: '500',
	},
})

export default styles