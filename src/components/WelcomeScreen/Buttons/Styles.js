import { StyleSheet } from "react-native"
import globalColors from "../../../global/globalColors"

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		position: 'absolute',
        bottom: "10%",
        width: '100%'
	},
	text: {
		color: 'white',
		fontSize: 16,
		fontWeight: '500',
	},
	button: {
		width: '95%',
		alignItems: 'center',
		justifyContent: 'center',
		paddingVertical: 17,
		borderRadius: 10,
	},
	solidButton: {
		backgroundColor: globalColors.appBlue,
		marginBottom: 15,
	},
	outlineButton: {
		borderWidth: 1,
		borderColor: 'white',
	},
})

export default styles