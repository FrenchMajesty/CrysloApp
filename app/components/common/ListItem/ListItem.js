import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
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

export default ListItem;