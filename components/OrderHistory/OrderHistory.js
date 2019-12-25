import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
export default class OrderHistory extends React.Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'blue'}}>
        <Text>Order History</Text>
        <TouchableOpacity
          style={{backgroundColor: '#FFF', fontSize: 100, paddingTop: 100}} 
          onPress={() => this.props.navigation.navigate('MAIN')}>
          <Text>Go Back To Main</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
