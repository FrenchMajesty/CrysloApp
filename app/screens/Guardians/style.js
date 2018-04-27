import { StyleSheet } from 'react-native';
import styling from 'app/config/styling';

export default StyleSheet.create({
	sectionTitle: {
		fontFamily: styling.text.font.heavy,
		color: styling.black,
		fontSize: 23,
		marginTop: 25,
		marginBottom: 25,
	},
	sectionSubtitle: {
		fontSize: 18,
		color: styling.mainColor,
		marginBottom: 20,
	},
	alertOption: {
		display: 'flex',
		flexDirection: 'row',
		marginTop: 8,
		marginBottom: 8,
	},
	alertText: {
		color: styling.text.gray,
		marginLeft: 20,
		fontSize: 17,
		lineHeight: 28,
	},
	sliderValue: {
		color: styling.text.darkgray,
		textAlign: 'center',
		marginRight: 15,
	},
	sliderContainer: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	sliderWrapper: {
		flexDirection: 'column',
		flex: 1,
	},
	buttonContainer: {
		alignItems: 'center',
		marginTop: 30,
		paddingBottom: 170,
		marginBottom: 50,
	}
});