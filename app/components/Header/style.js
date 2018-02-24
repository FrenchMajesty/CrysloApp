import { StyleSheet } from 'react-native';
import styling from 'app/config/styling';

export default StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		flexWrap: 'wrap',
		marginTop: 10,
		marginBottom: 30,
		width: '100%',
	},
	title: {
		fontFamily: styling.text.font.light,
		fontSize: 23,
		textAlign: 'center',
		alignItems: 'center',
		lineHeight: 37,
		marginLeft: 'auto',
		marginRight: 'auto'
	}
});