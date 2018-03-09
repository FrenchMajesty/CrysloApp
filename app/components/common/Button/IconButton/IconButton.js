import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import FloatingIcon from '../FloatingIcon/';
import styling from 'app/config/styling';

const IconButton = ({icon, onPress, style: customStyle}) => {

	return (
		<FloatingIcon onPress={onPress} customStyle={customStyle}>
    		<Icon name={icon} size={styling.floatingButton.iconSize} />
    	</FloatingIcon>
    );
    	
};

export default IconButton;