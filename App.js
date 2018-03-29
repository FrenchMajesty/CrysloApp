import React from 'react';
import { StyleSheet, Text, View, ListView } from 'react-native';
import { Font } from 'expo';
import { SwitchNavigation } from './app/config/router';
import { Provider } from 'react-redux';
import store from 'app/store/store';

export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      ready: false,
    };
  }

  async componentWillMount() {
    await Font.loadAsync({
      'montserrat-medium': require('./assets/fonts/montserrat/Montserrat-Medium.ttf'),
      'montserrat-regular': require('./assets/fonts/montserrat/Montserrat-Regular.ttf'),
      'ionicons': require('./assets/fonts/Ionicons.ttf'),
      'font-awesome': require('./assets/fonts/FontAwesome.ttf'),
    });

    this.setState({ready: true});
  }

  render() {
    const {ready} = this.state;


    return ready ? (<Provider store={store}><SwitchNavigation /></Provider>) : (<View />);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
