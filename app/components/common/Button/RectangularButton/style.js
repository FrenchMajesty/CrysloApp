import { StyleSheet } from 'react-native';
import styling from 'app/config/styling';

export default StyleSheet.create({
	container: {
		borderRadius: 10,
		borderWidth: 3,
		padding: 14,
		width: '80%',
		flex: 1,
		alignItems: 'center',
	},
	disabled: {
		borderColor: styling.text.lightgray,
	},
	text: {
		color: styling.mainColor,
		textAlign: 'center',
		fontSize: 13,
		...styling.text.prop.heavy
	},
	disabledText: {
		color: styling.text.lightgray,
	}
});