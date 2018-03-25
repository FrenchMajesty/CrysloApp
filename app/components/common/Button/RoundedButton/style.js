import { StyleSheet } from 'react-native';
import styling from 'app/config/styling';

export default StyleSheet.create({
	container: {
		borderRadius: 23,
		padding: 14,
		width: '80%',
		flex: 1,
		alignItems: 'center',
	},
	normalContainer: {
		backgroundColor: '#fff',
	},
	invertedContainer: {
		backgroundColor: styling.mainColor,
	},
	text: {
		textAlign: 'center',
		fontSize: 13,
		...styling.text.prop.heavy
	},
	normalText: {
		color: styling.mainColor,
	},
	invertedText: {
		color: '#fff',
	},
});