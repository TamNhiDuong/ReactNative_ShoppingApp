import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Dimensions, Image, TextInput, StyleSheet} 
from 'react-native';

import icMenu from '../../../images/appIcon/ic_menu.png';
import icLogo from '../../../images/appIcon/ic_logo.png';


const {height} = Dimensions.get('window');

export default class Header extends Component {
  render() {
    const {wrapper, row1, input, icons, title} = styles;
    return (
      <View style={wrapper}>
        <View style={row1}>
          <TouchableOpacity onPress={this.props.onOpen}>
            <Image source={icMenu} style={icons} />
          </TouchableOpacity>
          <Text style={title}>Wearing a dress</Text>
          <Image source={icLogo} style={icons} />
        </View>
        <TextInput style={input} placeholder="What do you want to buy?"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    height: height / 6,
    backgroundColor: '#437777',
    padding: 10,
    justifyContent: 'space-around',
  },
  row1: {flexDirection: 'row', justifyContent: 'space-between'},
  input: {height: height / 25, backgroundColor: '#FFF', paddingLeft: 10},
  icons: {height: 25, width: 25},
  title: {
    color: '#FFF',
    fontSize: 22,
    paddingTop: 15,
    fontFamily: 'Zapfino',
  },
});
