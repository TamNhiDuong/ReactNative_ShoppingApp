import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native';

import profileIcon from '../../images/temp/profile.png';

export default class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isLogIn: true};
  }
  render() {
    const {
      container,
      profileIc,
      btnStyle,
      btnText,
      smallContainer,
      nameText,
    } = styles;
    const notSignInJSX = (
      <View>
        <TouchableOpacity style={btnStyle}>
          <Text style={btnText}>Sign In</Text>
        </TouchableOpacity>
      </View>
    );
    const signInJSX = (
      <View style={smallContainer}>
        <Text style={nameText}>Tanja D</Text>
        <View>
          <TouchableOpacity style={btnStyle}>
            <Text style={btnText}>Order History</Text>
          </TouchableOpacity>
          <TouchableOpacity style={btnStyle}>
            <Text style={btnText}>Change Infor</Text>
          </TouchableOpacity>
          <TouchableOpacity style={btnStyle}>
            <Text style={btnText}>Sign Out</Text>
          </TouchableOpacity>
        </View>
        <View />
      </View>
    );
    const show = this.state.isLogIn ? signInJSX : notSignInJSX;
    return (
      <View style={container}>
        <Image source={profileIcon} style={profileIc} />
        {show}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#437777',
    borderRightWidth: 3,
    borderColor: '#FFF',
    alignItems: 'center',
  },
  profileIc: {
    width: 130,
    height: 130,
    borderRadius: 65,
    marginTop: 50,
    marginBottom: 20,
  },
  btnStyle: {
    height: 40,
    paddingHorizontal: 50,
    backgroundColor: "#FFF",
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 30,
  },
  btnText: {
    color: '#437777',
    fontSize: 20,
  },
  smallContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  nameText: {
    color: '#FFF',
    fontSize: 20,
  },
});

