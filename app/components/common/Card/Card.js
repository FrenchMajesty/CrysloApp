import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import style from './style'

export default Card = ({children, depth, card, body, onPress, style: additionalStyle}) => {

	let depthStyle = style.depth1
	let cardStyle = null

	if(depth == 2) {
		depthStyle = style.depth2
	}else if(depth == 3) {
		depthStyle = style.depth3
	}

	const hasLink = onPress ? 0.7 : 1;
	return (
		<TouchableOpacity 
			activeOpacity={hasLink} 
			style={[style.card, depthStyle, card, additionalStyle]}
			onPress={onPress}
		>
			<View style={[style.cardBody, body]}>
				{children}
			</View>
		</TouchableOpacity>
	)
}