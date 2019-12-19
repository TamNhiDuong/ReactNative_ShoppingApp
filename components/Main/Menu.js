import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';


export default class Menu extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'green' }}>
        <Text>Menu</Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('AUTHENTICATION')}>
          <Text>Go to Authentication</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('CHANGEINFOR')}>
          <Text>Go to Change Infor</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('ORDERHISTORY')}>
          <Text>Go to Order History</Text>
        </TouchableOpacity>

      </View>
    );
  }
}
