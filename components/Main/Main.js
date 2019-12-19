import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Drawer from 'react-native-drawer';

import Shop from './Shop/Shop';
import Menu from './Menu';
import AppContainer from '../AppNavigator';

export default class Main extends React.Component {
  closeControlPanel = () => {
    this.drawer.close();
  };
  openControlPanel = () => {
    this.drawer.open();
  };
  render() {
    const {navigation} = this.props; 
    return (
      <Drawer
        ref={
          (ref) => { this.drawer = ref; }
        }
        content={<Menu navigation={navigation}/>}
        openDrawerOffset={0.4}
        tapToClose={true}>
        <Shop open={this.openControlPanel.bind(this)} />
      </Drawer>

    );
  }
}
