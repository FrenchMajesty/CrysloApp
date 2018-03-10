import React from 'react';
import { View, Text, Slider } from 'react-native';
import style from './style';
import styling from 'app/config/styling';

const FormSlider = (props) => {

	return (
		<View style={[props.style, style.sliderContainer]}>
			<Slider
				minimumTrackTintColor="#94a4e3"
				maximumTrackTintColor="#e2e6f8"
				thumbTintColor={styling.mainColor}
				step={1}
				{...props}
			/>
			{props.label ? 
				<Text style={[style.label]}>{props.label}</Text>
				: ''
			}
		</View>
	);
};

export default FormSlider;