import { StyleSheet } from 'react-native';
import styling from 'app/config/styling';

export default StyleSheet.create({
    dayContainer: {
		marginTop: 20,
		display: 'flex',
		flexDirection: 'column',
		width: '100%',
	},
	dayNum: {
      fontSize: 28,
      fontWeight: '200',
      color: styling.black,
    },
    dayText: {
        fontSize: 14,
        fontWeight: '300',
        color: styling.black,
        marginTop: -5,
        backgroundColor: 'rgba(0,0,0,0)'
    },
    day: {
        width: 63,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    empty: {
        marginTop: 5,
        textAlign: 'center',
        fontSize: 15,
    },
});