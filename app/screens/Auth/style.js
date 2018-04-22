import { StyleSheet } from 'react-native';
import styling from 'app/config/styling';

export default StyleSheet.create({
	gradientBg: {
		height: '100%',
	},
	container: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-around',
	},
	text: {
		...styling.text.prop.light,
		color: 'white',
		textAlign: 'center',
	},
	touchId: {
		flex: 0,
		flexDirection: 'row',
		justifyContent: 'center',
		marginTop: 10,
	},
	underline: {
		textDecorationLine: 'underline',
	},
	formContainer: {
		flex: 4,
		alignSelf: 'center',
		width: 300,
	},
	inputContainer: {
		flex: 1,
		width: '100%',
		margin: 10,
	},
	submitContainer: {
		flex: 1,
		marginTop: 20,
	},
	submitButton: {
		flex: 0,
		width: '100%',
		alignSelf: 'center'
	},
	title: {
		color: 'black',
		fontSize: 25,
	},
	subtitle: {
		color: 'black',
		fontSize: 18,
	},
	actionButtonContainer: {
		marginBottom: 150,
	}
});