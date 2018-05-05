import React from 'react';
import { View, Text } from 'react-native';
import Card from 'app/components/common/Card/';
import style from './style';

const StatsRow = ({rowStyle, depth, label, content, hint, button, animation, icon}) => {

	return (
		<Card 
			depth={depth}
			card={[style.row, rowStyle]}
			animation={animation}
		>
			<Text style={[style.label]}>{label}:</Text>
			<View style={[style.statContainer]}>
				<Text style={[style.stat]}>{content}</Text>
				{ icon ? <View style={style.icon}>{icon}</View> : null}
			</View>
			{hint ? <Text style={style.hint}>{hint}</Text> : null}
			{button ? <View style={style.button}>{button}</View> : null}
		</Card>
	);
};

export default StatsRow;