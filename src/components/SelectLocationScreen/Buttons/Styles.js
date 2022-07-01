import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		position: 'absolute',
		bottom: '10%',
		width: '100%',
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
		backgroundColor: '#30C0ED',
		marginBottom: 15,
	},
	outlineButton: {
		borderWidth: 1,
		borderColor: 'white',
	},
	spinner: {
        flex: 1
    },
})

export default styles
