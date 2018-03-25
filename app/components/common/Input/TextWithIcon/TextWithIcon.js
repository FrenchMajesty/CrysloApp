import React, { Component } from 'react';
import { TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Hideo } from 'react-native-textinput-effects';
import Hint from '../Hint/';
import style from './style';

export default Text = (props) => {

	const bg = props.backgroundColor ? props.backgroundColor : 'white';
	const textColor = props.textColor ? props.textColor : 'white';
	
	return (
		<View style={[style.inputRow, props.containerStyle]}>
			<Hideo
				iconClass={Icon}
				iconBackgroundColor={bg}
				spellCheck={false}
				autoCapitalize="none"
				{...props}
				inputStyle={[style.input, {backgroundColor: bg, color: textColor}]}
			/>
			{props.hint ? 
				(<Hint 
					containerStyle={{flex: 1}} 
					text={props.hint} 
					isError={props.hasError} 
				/>) : null}
		</View>
	);
};