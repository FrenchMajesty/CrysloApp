import React, { Component } from 'react';
import { TextInput, View } from 'react-native';
import { bool, string, array } from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Hideo } from 'react-native-textinput-effects';
import Hint from '../Hint/';
import style from './style';

const Text = ({backgroundColor, textColor, hint, containerStyle, ...others}) => {
	
	return (
		<View style={[style.inputRow, ...containerStyle]}>
			<Hideo
				iconClass={Icon}
				iconBackgroundColor={backgroundColor}
				spellCheck={false}
				autoCapitalize="none"
				inputStyle={[style.input, {backgroundColor, color: textColor}]}
				{...others}
			/>
			{hint ? 
				(<Hint 
					containerStyle={{flex: 1}} 
					text={hint} 
					isError={hasError} 
				/>) : null}
		</View>
	);
};

Text.propTypes = {
	backgroundColor: string,
	textColor: string,
	hint: string,
	hasError: bool,
	containerStyle: array,
};

Text.defaultProps = {
	containerStyle: [],
	backgroundColor: 'white',
	textColor: 'white',
	hasError: false,
	hint: '',
};

export default Text;