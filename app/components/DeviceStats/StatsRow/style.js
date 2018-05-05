import { StyleSheet } from 'react-native';
import styling from 'app/config/styling';

export default StyleSheet.create({
	row: {
		marginTop: 13,
		marginBottom: 13,
		width: '100%',
		alignSelf: 'center',
	},
	label: {
		...styling.text.prop.light,
		opacity: 0.5,
	},
	statContainer: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	stat: {
		...styling.text.prop.heavy,
		fontSize: 17,
		maxWidth: '93%',
		color: styling.black,
	},
	icon: {
		marginLeft: 15,
	},
	hint: {
		...styling.text.prop.light,
		marginTop: 5,
		color: styling.text.gray,	
	},
	button: {
		marginTop: 20,
		marginBottom: 8,
		alignItems: 'center',
	}
});