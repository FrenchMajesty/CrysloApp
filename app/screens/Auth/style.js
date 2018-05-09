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
		color: styling.black,
		fontSize: 25,
	},
	subtitle: {
		color: styling.black,
		fontSize: 18,
	},
	actionButtonContainer: {
		marginBottom: 150,
	},
	submitContainer2: {
		flex: 1,
		height: 40,
		alignSelf: 'center',
		marginTop: 30
	},
	submitButton2: {
		padding: 13,
		height: 8,
		paddingRight: 120,
		paddingLeft: 120,
	},
	blackText: {		
		color: styling.black,
	},
	errors: {
		color: 'red',
		textAlign: 'center',
		top: '5%',
	},
});