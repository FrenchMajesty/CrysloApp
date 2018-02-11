import React from 'react';
import { StyleSheet, Text, View, ListView } from 'react-native';
import { Font } from 'expo';
import { TabsInDrawer } from './app/config/router';

export default class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      ready: false,
    }
  }

  async componentWillMount() {
    await Font.loadAsync({
      'montserrat-medium': require('./assets/fonts/montserrat/Montserrat-Medium.ttf'),
      'montserrat-regular': require('./assets/fonts/montserrat/Montserrat-Regular.ttf')
    })

    this.setState({ready: true})
  }

  render() {
    const {ready} = this.state


    return ready ? <TabsInDrawer /> : (<View />);
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
