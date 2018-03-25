import { StyleSheet } from 'react-native';
import styling from 'app/config/styling';

export default StyleSheet.create({
	container: {
		marginTop: 10,
	},
	text: {
		...styling.text.prop.light,
		color: 'rgba(0,0,0,0.5)',
	},
	error: {
		color: 'red',
	}
});