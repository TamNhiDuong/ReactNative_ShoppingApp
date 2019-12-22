import React from 'react';
import {Text, View, StatusBar} from 'react-native';

import AppContainer from './components/AppNavigator'; 

StatusBar.setHidden(true);
export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'gray'}}>
        <AppContainer />
      </View>
    );
  }
}
