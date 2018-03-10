import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import style from './style';

const ContactRow = ({item: {id, name, number}, onPress}) => {

	return (
		<TouchableOpacity 
			activeOpacity={0.6}
			style={[style.row]}
			onPress={() => onPress(id)}
		>
			<View style={[style.rowContent]}>
				<Text style={[style.name]}>{name}</Text>
				<Text style={[style.number]}>{number}</Text>
			</View>
			<Icon name="ios-arrow-forward" size={24} style={style.black} />
		</TouchableOpacity>
	);
};

export default ContactRow;