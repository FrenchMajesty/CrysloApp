import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { shape, string, func, number, oneOfType } from 'prop-types';
import { LinearGradient } from 'expo';
import CommonText from 'app/components/common/CommonText/';
import cardStyle from 'app/components/common/Card/style';
import styling from 'app/config/styling';
import style from './style';

const DataRow = ({metric: {type, value}, onPress}) => {
	
	let count = null;
	let gradient = styling.gradient;

	if(type =='heart' || type == 'breath') {
		count = 'bpm';
	}else if(type == 'sleep') {
		count = 'hours';
	}

	if(type == 'mood' && value == 'Frustrated') {
		gradient = ['#ed5a60','#ff88a3'];
	}else if(type == 'energy' && value == 'Energetic') {
		gradient = ['#6dd569','#c4eeb9'];
	}

	const styleProps = [
		cardStyle.card,
		cardStyle.depth1,
		{shadowRadius: 5},
		style.row,
		style[type],
	];

	/**
	 * Get the displayable name for the measurement data type
	 * @param  {String} identifier The measurement data type identifier
	 * @return {String}            
	 */
	const getDisplayableName = (identifier) => {
		const id = {
			sleep: 'Sleep',
			heart: 'Heart Pulse',
			breath: 'Breaths Pulse',
			mood: 'Mood',
			default: 'INVALID_IDENTIFIER',
		};

		return id[identifier] || id.default;
	}

	return (
		<TouchableOpacity onPress={onPress}>
			<LinearGradient colors={gradient} style={styleProps}>
					<CommonText 
						weight="light"
						style={[style.rowName, style.typeName]}
					>
						{getDisplayableName(type)}
					</CommonText>
				<View style={[style.rowData]}>
					<View style={[style.countContainer]}>
						<CommonText 
							weight="light"
							style={[style.metricValue]}
						>{value} </CommonText>

						{count && 
							<CommonText
								weight="light"
								color="white"
							>{count}</CommonText>}
					</View>
					{
						count == 'hours' ? 
							<CommonText weight="light" style={[style.countSubscript]}>Last night</CommonText>
						:
							<CommonText weight="light" style={[style.countSubscript]}>On average today</CommonText>
					}
				</View>
			</LinearGradient>
		</TouchableOpacity>
	);
};

DataRow.propTypes = {
	metric: shape({
		type: string.isRequired,
		value: oneOfType([string, number]).isRequired,
	}).isRequired,
	onPress: func,
};

DataRow.defaultProps = {
	onPress: null,
};

export default DataRow;