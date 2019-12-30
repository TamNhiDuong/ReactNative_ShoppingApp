import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

export default class CartView extends React.Component {
  gotoProductDetails() {
    const {navigator} = this.props;
    navigator.push({name: 'PRODUCTDETAILS'});
  }
  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#5fb375'}}>
        <Text>Cart component</Text>
        <TouchableOpacity onPress={this.gotoProductDetails.bind(this)}>
          <Text>Go to Product details</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
