import React, { Component } from 'react';
import { Animated, View } from 'react-native';

class FadeInView extends Component {

	/** The component's constructor */
	constructor(props) {
		super(props);

		this.state = this.getInitialState();
	}

	/**
	 * Start the animation to fade in the view
	 */
	componentDidMount() {
		const {duration} = this.props;

		Animated.timing(
			this.state.fade,
			{ toValue: 1, duration: duration ? duration : 1000 }
		).start();
	}

	/**
	 * Return the component's initial state
	 * @return {Object} 
	 */
	getInitialState() {
		return {
			fade: new Animated.Value(0),
		};
	}

	/**
	 * Render the component's markup
	 * @return {ReactElement} 
	 */
	render() {
		const {children, style} = this.props;
		const {fade} = this.state;

		return (
			<Animated.View style={[style, {opacity: fade}]}>
				{children}
			</Animated.View>
		);
	}
}

export default FadeInView;