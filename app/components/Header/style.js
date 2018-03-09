import { StyleSheet } from 'react-native';
import styling from 'app/config/styling';

export default StyleSheet.create({
	container: {
		flex: 1,
		flexWrap: 'wrap',
		marginTop: 10,
		width: '100%',
	},
	elevated: {
		backgroundColor: '#fff',
		borderStyle: 'solid',
	    borderColor: 'rgba(0,0,0, .125)',
	    marginTop: 25,
	    paddingBottom: 20,
	    shadowOffset: {
	    	width: 0,
	    	height: 8,
	    },
	    shadowRadius: 7,
	    shadowOpacity: .03,
	},
	title: {
		fontFamily: styling.text.font.light,
		fontSize: 23,
		textAlign: 'center',
		alignItems: 'center',
		lineHeight: 37,
		marginLeft: 'auto',
		marginRight: 'auto',
	},
	hint: {
		marginTop: 18,
		fontSize: 13,
		color: styling.text.darkgray
	}
});