import React, { Component } from 'react';
import { Text, View } from 'react-native';
import IconButton from 'app/components/common/Button/IconButton/';
import styling from 'app/config/styling';

class ForgotPassword extends Component {

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
			<View>
			<IconButton
					icon="arrow-left"
					style={styling.fixedNavButton}
					onPress={() => navigation.goBack(null)}
				/>
			<Text style={{marginTop: 100}}>FORGOT PASSWORD? FILL OUT FORM BELOW</Text>
			</View>
		);
	}
}

export default ForgotPassword;