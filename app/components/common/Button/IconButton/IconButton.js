import React from 'react';
import { func, string, object, bool } from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import FloatingIcon from '../FloatingIcon/';
import styling from 'app/config/styling';

const IconButton = ({icon, onPress, inverted, style: customStyle, color}) => {

	return (
		<FloatingIcon onPress={onPress} customStyle={[customStyle, inverted ? {backgroundColor: color} : null]}>
    		<Icon name={icon} color={inverted ? '#fff' : color} size={styling.floatingButton.iconSize} />
    	</FloatingIcon>
    );
    	
};

IconButton.propTypes = {
	icon: string.isRequired,
	color: string.isRequired,
	onPress: func,
	inverted: bool,
	style: object,
};

IconButton.defaultProps = {
	onPress: null,
	inverted: false,
	style: {},
};

export default IconButton;