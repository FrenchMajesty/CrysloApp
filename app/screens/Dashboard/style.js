import { StyleSheet } from 'react-native'

export default StyleSheet.create({
	list: {
		marginTop: 0,
		margin: 0,
		flex: 1,
		justifyContent: 'space-around',
        flexDirection: 'row',
        flexWrap: 'wrap',
	},
	container: {
		display: 'flex',
		flexDirection: 'column',
		paddingLeft: 10,
		paddingRight: 10,
	}
})