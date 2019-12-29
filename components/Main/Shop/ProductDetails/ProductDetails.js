import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

export default class ProductDetails extends Component {
  goBack() {
    const {navigator} = this.props;
    navigator.pop();
  }
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#F2F2F2' }}>
        <Text>Product Details</Text>
        <TouchableOpacity
          onPress={this.goBack.bind(this)}
          style={{ backgroundColor: '#FFF' }}>
          <Text>Go Back</Text>
        </TouchableOpacity>
      </View>
    );
  }
}