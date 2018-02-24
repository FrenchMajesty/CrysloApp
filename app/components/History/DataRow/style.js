import { StyleSheet } from 'react-native';
import styling from 'app/config/styling';

export default StyleSheet.create({
	row: {
		borderRadius: 12,
		padding: 10,
		display: 'flex',
		flexDirection: 'row',
		margin: 10,
	},
	rowName: {
		flex: 1,
	},	
	rowData: {
		flex: 1,
	},
	countContainer: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'baseline',
		justifyContent: 'flex-end',
	},
	countSubscript: {
		color: 'white',
		textAlign: 'right',
		fontSize: 13,
		opacity: 0.85,
	},
	typeName: {
		color: 'white',
		fontSize: 16,
	},
	metricValue: {
		color: 'white',
		fontSize: 28,
	}
});