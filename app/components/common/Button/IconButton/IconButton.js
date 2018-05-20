import React from 'react';
import { func, string, object, bool, array } from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import FloatingIcon from '../FloatingIcon/';
import styling from 'app/config/styling';

const IconButton = ({icon, onPress, inverted, style: customStyle, color}) => {

	return (
		<FloatingIcon onPress={onPress} customStyle={[...customStyle, inverted ? {backgroundColor: color} : null]}>
    		<Icon name={icon} color={inverted ? '#fff' : color} size={styling.floatingButton.iconSize} />
    	</FloatingIcon>
    );
    	
};

IconButton.propTypes = {
	icon: string.isRequired,
	color: string,
	onPress: func,
	inverted: bool,
	style: array,
};

IconButton.defaultProps = {
	onPress: null,
	inverted: false,
	color: styling.black,
	style: [],
};

export default IconButton;