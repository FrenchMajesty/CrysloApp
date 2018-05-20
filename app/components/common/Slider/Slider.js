import React from 'react';
import { View, Text, Slider } from 'react-native';
import { string, object } from 'prop-types';
import styling from 'app/config/styling';
import style from './style';

const FormSlider = ({label, style: customStyle, ...others}) => {

	return (
		<View style={[customStyle, style.sliderContainer]}>
			<Slider
				minimumTrackTintColor="#94a4e3"
				maximumTrackTintColor="#e2e6f8"
				thumbTintColor={styling.mainColor}
				step={1}
				{...others}
			/>
			{label ? <Text style={[style.label]}>{label}</Text> : null}
		</View>
	);
};

FormSlider.propTypes = {
	label: string,
	style: object,
};

FormSlider.defaultProps = {
	label: '',
	style: {},
};

export default FormSlider;