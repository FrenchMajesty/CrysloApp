import { StyleSheet } from 'react-native'
import styling from 'app/config/styling'

export default StyleSheet.create({
	card: {
		width: 140,
		height: 140,
		marginBottom: 25,
		display: 'flex',
		position: 'relative',
		flexDirection: 'row',
		justifyContent: 'center',
	},
	body: {
		padding: 10,
	},
	name: {
		...styling.text.prop.light,
		color: styling.text.lightgray,
		fontSize: 13.1,
		textAlign: 'center',
		flex: 1,
		position: 'relative',
	},
	date: {
		...styling.text.prop.light,
		color: styling.text.lightgray,
		fontSize: 8,
		marginTop: 'auto',
		marginLeft: 40,
		width: '100%',
	},
	logoContainer: {
		flex: 3,
		justifyContent: 'center',
		alignSelf: 'center',
	},
	logo: {
		height: 80,
		width: 80,
	},
	vitalValue: {
		...styling.text.prop.heavy,
		textAlign: 'center',
		color: styling.black,
		flex: 1,
	},
})