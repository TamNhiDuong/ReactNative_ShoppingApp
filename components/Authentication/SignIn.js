import React from 'react';
import {View, TextInput, Text, TouchableOpacity, StyleSheet} from 'react-native';
export default class SignIn extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {inputStyle, bigButton, textStyle} = styles;
    return (
      <View>
        <TextInput placeholder="Enter your email" style={inputStyle} />
        <TextInput placeholder="Enter your password" style={inputStyle} />
        <TouchableOpacity style={bigButton}>
          <Text style={textStyle}>SIGN IN NOW</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  inputStyle: {
    height: 50,
    backgroundColor: '#fff',
    marginBottom: 10,
    borderRadius: 20,
    paddingLeft: 30,
  },
  bigButton: {
    height: 50,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    color: '#fff',
    fontSize: 20,
  }
});