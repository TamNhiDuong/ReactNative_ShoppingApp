import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Drawer from 'react-native-drawer';

import Shop from './Shop/Shop';
import Menu from './Menu';
import ProductList from './Shop/ProductList/ProductList';
import Header from './Shop/Header'; 

import checkToken from '../../api/checkToken';

const testToken='eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6InRhbmphQGdtYWlsLmNvbSIsImlhdCI6MTU3ODM5NDE4OSwiZXhwaXJlIjoxNTc4NTY2OTg5fQ.rkdvjsA1XQkLErkGokt11ixx3eiXbe6Hcrl-qAJccr8';

export default class Main extends React.Component {
  closeControlPanel = () => {
    this.drawer.close();
  };
  openControlPanel = () => {
    this.drawer.open();
  };
  componentDidMount() {
    checkToken(testToken)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }
  render() {
    const {navigation} = this.props;
    return (
      <Drawer
        ref={
         (ref) => { this.drawer = ref; }
      }
        content={<Menu navigation={navigation} />}
        openDrawerOffset={0.4}
        tapToClose={true}>
        <Shop open={this.openControlPanel.bind(this)} navigation={navigation} />
      </Drawer>
    );
  }
}
