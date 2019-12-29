import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Drawer from 'react-native-drawer';

import Header from '../../Shop/Header';
import Menu from '../../Menu';

export default class ProductList extends Component {
  goBack() {
    const {navigator} = this.props;
    navigator.pop();
  }
  gotoProductDetails() {
    const {navigator} = this.props;
    navigator.push({name: 'PRODUCTDETAILS'});
  }
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#F2F2F2' }}>
        <Text>Product List</Text>
        <TouchableOpacity
          onPress={this.goBack.bind(this)}
          style={{ backgroundColor: '#FFF' }}>
          <Text>Go Back</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={this.gotoProductDetails.bind(this)}
          style={{ backgroundColor: '#FFF' }}>
          <Text>Go To Details</Text>
        </TouchableOpacity>
      </View>
    );
  }
}; 