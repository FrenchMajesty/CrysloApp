import React, { Component } from 'react';
import { View, Text, ActivityIndicator as Spinner } from 'react-native';
import Header from 'app/components/Header/';
import RoundedButton from 'app/components/common/Button/RoundedButton/';
import styling from 'app/config/styling';
import style from './style';

class WatchSync extends Component {

	/**
	 * Component constructor
	 */
	constructor(props) {
		super(props);

		this.state = this.getInitialState();

		this.onConnect = this.onConnect.bind(this);
	}

	/**
	 * Return the component's initial state
	 * @return {Object} 
	 */
	getInitialState() {
		return {
			searching: false,
		};
	}

	/**
	 * When the button is pressed, search for the Helo watch device
	 * @return {Void} 
	 */
	onConnect() {
		this.setState({searching: true});

		setTimeout(() => {
			this.setState({searching: false});
		}, 1000);
	}

	/**
	 * Render the component
	 * @return {ReactElement} Markup
	 */
	render() {
		const {searching} = this.state;
		const {navigation} = this.props;

		return (
			<View style={[styling.statusBarPadding, styling.screenPadding, style.container]}>
				<Header 
					title="Sync Your Device"
					style={[{flex: 0, marginBottom: 20}]}
					navigation={navigation}
				/>
				<View style={{backgroundColor: 'red', width: 200, height: 200, alignSelf: 'center'}} />

				<View style={[{marginTop: 80}]}>
					<Text style={[styling.text.prop.heavy, style.title]}>Press the button below to search for your Helo watch device.</Text>
				</View>

				<View style={[style.buttonContainer]}>
					{searching ? 
						<RoundedButton
							inverted={true}
							center={true}
							style={[{padding: 23}]}
						><Spinner color="#fff" /></RoundedButton>
					:
						<RoundedButton
							text="Search for device"
							inverted={true}
							center={true}
							onPress={this.onConnect}
							style={[{paddingTop: 15, padding: 30}]}
						/>	
					}
				</View>
			</View>
		);
	}
}

export default WatchSync;