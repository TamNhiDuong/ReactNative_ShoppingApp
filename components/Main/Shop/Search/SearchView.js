import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

export default class SearchView extends React.Component {
  gotoProductDetails() {
    const {navigator} = this.props;
    navigator.push({name: 'PRODUCTDETAILS'});
}
  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#b35fa9'}}>
        <Text>Search component</Text>
        <TouchableOpacity onPress={this.gotoProductDetails.bind(this)}>
            <Text>Go to Product Details</Text>
        </TouchableOpacity>
      </View>
    );
  }
}