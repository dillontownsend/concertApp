import { StyleSheet } from "react-native";
import globalColors from "../../../global/globalColors";

const styles = StyleSheet.create({
    container: {
      alignSelf: 'center',
      position: 'absolute',
      bottom: '10%',
      width: '100%',
    },
    text: {
		fontSize: 16,
		fontWeight: '500',
	},
	button: {
		width: '80%',
		alignItems: 'center',
		justifyContent: 'center',
		paddingVertical: 17,
		borderRadius: 10,
	},
	enabledBackground: {
		backgroundColor: globalColors.appBlue,
	},
    disabledBackground: {
        backgroundColor: globalColors.gray700,
    },
    enabledText: {
        color: 'white',
    },
    disabledText: {
        color: globalColors.gray400
    },
})

export default styles