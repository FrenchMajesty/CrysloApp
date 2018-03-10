import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import style from './style';

const ContactRow = ({item: {name, number}}) => {
	return (
		<View style={[style.row]}>
			<View style={[style.rowContent]}>
				<Text style={[style.name]}>{name}</Text>
				<Text style={[style.number]}>{number}</Text>
			</View>
			<Icon name="ios-arrow-forward" size={24} style={style.black} />
		</View>
	);
};

export default ContactRow;