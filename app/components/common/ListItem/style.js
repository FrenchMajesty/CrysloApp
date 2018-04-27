import { StyleSheet } from 'react-native';
import styling from 'app/config/styling';

export default StyleSheet.create({
	row: {
		display: 'flex',
		flexDirection: 'row',
		padding: 20,
		paddingTop: 10,
		paddingBottom: 10,
		justifyContent: 'space-between',
	},
	rowContent: {
		flexDirection: 'column',
	},
	name: {
		fontSize: 18,
		color: styling.black,
		...styling.text.prop.heavy
	},
	number: {
		color: styling.text.lightgray,
	},
	black: {
		color: styling.black,
	},
	separator: {
		flex: 1,
    	height: StyleSheet.hairlineWidth,
		backgroundColor: styling.text.gray,
	},
});