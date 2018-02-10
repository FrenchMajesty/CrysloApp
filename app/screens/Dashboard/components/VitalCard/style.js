import { StyleSheet } from 'react-native'
import styling from 'app/config/styling'

export default StyleSheet.create({
	card: {
		width: 135,
		height: 135,
		margin: 0,
		display: 'flex',
		position: 'relative',
		flexDirection: 'row',
		justifyContent: 'center',
	},
	body: {
		padding: 10,
	},
	name: {
		color: styling.text.lightgray,
		fontSize: 13.1,
		fontFamily: 'montserrat-regular',
		textAlign: 'center',
		flex: 1,
		position: 'relative',
	},
	date: {
		color: styling.text.lightgray,
		fontSize: 8,
		fontFamily: 'montserrat-regular',
		marginTop: 'auto',
		marginLeft: 40,
	},
	logo: {
		flex: 3,
		backgroundColor: 'lightblue',
		opacity: .5,
	},
	vitalValue: {
		flex: 1,
		textAlign: 'center',
		fontFamily: 'montserrat-medium',
	},
})