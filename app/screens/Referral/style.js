import { StyleSheet } from 'react-native';
import styling from 'app/config/styling';

export default StyleSheet.create({
	container: {
		backgroundColor: '#fff',
	},
	image: {
		width: 100, 
		height: 100,
		alignSelf: 'center',
		marginTop: 40,
		marginBottom: 40,
	},
	text: { 
		...styling.text.prop.light,
	},
	title: {
		fontSize: 23,
		textAlign: 'center',
		marginBottom: 14,
		color: styling.black,
	},
	subtitle: {
		opacity: 0.6,
		textAlign: 'center',
	},
	code: {
		...styling.text.prop.heavy,
		textAlign: 'center',
		color: styling.black,
		fontSize: 26,
	},
	buttonContainer: {
		marginTop: 20,
		alignItems: 'center',
	},
	button: {
		marginTop: 7.5,
		marginBottom: 7.5,
		width: '85%', 
		borderRadius: 5,
	},
	steps: {
		opacity: 0.75,
		marginBottom: 10,
	},
});