import { StyleSheet } from 'react-native';
import styling from 'app/config/styling';

export default StyleSheet.create({
	button: {
		width: styling.floatingButton.size,
		height: styling.floatingButton.size,
		borderRadius: 50,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
});