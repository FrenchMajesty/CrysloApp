import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { number, node, object, array, func } from 'prop-types';
import * as Animatable from 'react-native-animatable';
import style from './style';

const Card = ({children, depth, card, body, animation, onPress}) => {

	const hasLink = onPress ? 0.7 : 1;
	const getDepthStyle = () => {
		switch(depth) {
			case 2:
				return style.depth2;
			case 3:
				return style.depth3;
			default:
				return style.depth1;
		}
	};

	return (
		<Animatable.View 
			{...animation}
		>
			<TouchableOpacity 
				activeOpacity={hasLink} 
				style={[style.card, getDepthStyle(), ...card]}
				onPress={onPress}
			>
				<View style={[style.cardBody, ...body]}>
					{children}
				</View>
			</TouchableOpacity>
		</Animatable.View>
	)
};

Card.propTypes = {
	children: node.isRequired,
	depth: number,
	animation: object,
	body: array,
	card: array,
	onPress: func,
};

Card.defaultProps = {
	depth: 1,
	animation: {},
	body: [],
	card: [],
	onPress: null,
};

export default Card;