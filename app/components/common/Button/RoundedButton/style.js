import { StyleSheet } from 'react-native';
import styling from 'app/config/styling';

export default StyleSheet.create({
	container: {
		borderRadius: 23,
		backgroundColor: '#fff',
		padding: 14,
		width: '80%',
		flex: 1,
		alignItems: 'center',
	},
	text: {
		color: styling.mainColor,
		textAlign: 'center',
		fontSize: 13,
		...styling.text.prop.heavy
	},
});