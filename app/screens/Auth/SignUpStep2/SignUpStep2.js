import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import IconButton from 'app/components/common/Button/IconButton/';
import Input from 'app/components/common/Input/TextWithIcon/';
import styling from 'app/config/styling';
import style from './style';
import phoneImg from '../../../../assets/images/text.png';

class SignUpStep2 extends Component {

	/**
	 * Component constructor
	 */
	constructor(props) {
		super(props);
	}

	/**
	 * Render the component
	 * @return {ReactElement} 
	 */
	render() {
		const {navigation} = this.props;

		return (
			<View style={[styling.statusBarPadding, style.container]}>
				<IconButton
					icon="arrow-left"
					style={styling.fixedNavButton}
					onPress={() => navigation.goBack(null)}
				/>
				<View style={{flex: 1}}>
					<Image source={phoneImg} />
				</View>
				<View style={{flex: 2}}>
					<Text>Enter your number here..</Text>
				</View>
			</View>
		);
	}
}

export default SignUpStep2;