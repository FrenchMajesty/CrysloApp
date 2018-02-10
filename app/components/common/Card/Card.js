import React from 'react'
import { Text, View } from 'react-native'
import style from './style'

export default Card = ({children, depth, card, body, style: additionalStyle}) => {

	let depthStyle = style.depth1
	let cardStyle = null

	if(depth == 2) {
		depthStyle = style.depth2
	}else if(depth == 3) {
		depthStyle = style.depth3
	}

	return (
		<View style={[style.card, depthStyle, card, additionalStyle]}>
			<View style={[style.cardBody, body]}>
				{children}
			</View>
		</View>
	)
}