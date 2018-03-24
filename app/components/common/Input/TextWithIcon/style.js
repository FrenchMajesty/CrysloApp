import { StyleSheet } from 'react-native';
import styling from 'app/config/styling';

export default StyleSheet.create({
	inputRow: {
		flex: 1,
		margin: 10,
	},
	inputWrapper: {
		padding: 1,
		borderRadius: 6,
		width: '95%',
	},
	input: {
		...styling.text.prop.light,
		fontSize: 15,
	},
});