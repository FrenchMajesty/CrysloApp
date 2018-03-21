import Dimensions from 'Dimensions';

const {height: screenHeight, width: screenWidth} = Dimensions.get('window');

const styling = {};
const screenPaddingSize = 16;

styling.mainColor = '#8299f3';
styling.black = '#464d56';

styling.screenSize = {
	width: screenWidth,
	height: screenHeight,
};

styling.text = {
	gray: '#73787f',
	lightgray: '#c0c2c5',
	darkgray: '#90949a',
	font: {
		light: 'montserrat-regular',
		heavy: 'montserrat-medium',
	},
};

styling.text.prop = {
	light: {
		fontFamily: styling.text.font.light,
	},
	heavy: {
		fontFamily: styling.text.font.heavy,
	}
};

styling.grayScreenBackground = {
	backgroundColor: '#faf9f9',
};

styling.screenPadding = {
	paddingLeft: screenPaddingSize,
	paddingRight: screenPaddingSize,
};

styling.statusBarPadding = {
	paddingTop: 20,
};

styling.tabIcon = {
	size: 25,
};

styling.floatingButton = {
	size: 35,
	iconSize: 16,
};

export default styling;