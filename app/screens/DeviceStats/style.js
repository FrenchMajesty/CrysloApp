import { StyleSheet } from 'react-native';
import styling from 'app/config/styling';

export default StyleSheet.create({
	container: {
		backgroundColor: '#fff',
		height: '100%',
		marginBottom: 200,
	},
	title: {
		marginTop: 20,
		fontSize: 20,
		textAlign: 'center',
		color: styling.black,
	},
	rowContainer: {
		marginTop: 20,
		marginBottom: 100,
		width: '90%',
		flexDirection: 'column',
		alignSelf: 'center',
	},
});