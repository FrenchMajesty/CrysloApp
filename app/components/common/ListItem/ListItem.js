import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { string, func, bool } from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons';
import style from './style';

const ListItem = ({primaryText, secondaryText, onPress, separator}) => {

	return (
		<View>
			<TouchableOpacity 
				activeOpacity={0.6}
				style={[style.row]}
				onPress={onPress}
			>
				<View style={[style.rowContent]}>
					<Text style={[style.name]}>{primaryText}</Text>
					<Text style={[style.number]}>{secondaryText}</Text>
				</View>
				<Icon name="ios-arrow-forward" size={24} style={style.black} />
			</TouchableOpacity>
			{separator === false ? null : <View style={[style.separator]} />}
		</View>
	);
};

ListItem.propTypes = {
	primaryText: string.isRequired,
	secondaryText: string,
	onPress: func,
	separator: bool,
};

ListItem.defaultProps = {
	secondaryText: '',
	onPress: null,
	separator: true,
};

export default ListItem;