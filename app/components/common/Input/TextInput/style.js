import { StyleSheet } from 'react-native';
import styling from 'app/config/styling';

export default StyleSheet.create({
	input: {
		...styling.text.prop.light,
		color: styling.black,
		fontSize: 15,
		padding: 15,
		borderRadius: 5,
	},
	label: {
		...styling.text.prop.heavy,
		fontSize: 16,
		color: styling.mainColor,
		marginBottom: 5,
	},
});