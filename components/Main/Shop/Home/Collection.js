import React from 'react';
import {Text, View, ImageBackground, StyleSheet, Dimensions} from 'react-native';
import Swiper from 'react-native-swiper'

import littleDress from '../../../../images/temp/little.jpg';
import maxiDress from '../../../../images/temp/maxi.jpg';
import partyDress from '../../../../images/temp/party.jpg';


const {height, width} = Dimensions.get('window');

export default class Collection extends React.Component {
  render() {
    const {wrapper, image, text, cateTitle, cateWrap} = styles;
    return (
      <View style={wrapper}>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <Text style={text}>LIST OF CATEGORY</Text>
        </View>
        <View style={{flex: 4}}>
          <Swiper>
            <ImageBackground style={image} source={littleDress}>
              <View style={cateWrap}>
                <Text style={cateTitle}>Little Dress</Text>
              </View>
            </ImageBackground>
            <ImageBackground style={image} source={maxiDress}>
              <View style={cateWrap}>
                <Text style={cateTitle}>Maxi Dress</Text>
              </View>
            </ImageBackground>
            <ImageBackground style={image} source={partyDress}>
              <View style={cateWrap}>
                <Text style={cateTitle}>Party Dress</Text>
              </View>
            </ImageBackground>
          </Swiper>
        </View>
      </View>
    );
  }
}
const imageWidth = width - 40;
const imageHeight = (imageWidth / 933) * 465;
const styles = StyleSheet.create({
  wrapper: {
    height: height * 0.31,
    backgroundColor: '#FFF',
    margin: 10,
    shadowColor: '#2E272B',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.2,
    padding: 10,
  },
  image: {
    height: imageHeight,
    width: imageWidth,
  },
  text: {
    fontSize: 20,
    color: '#AFAEAF',
    justifyContent: 'space-around',
  },
  cateTitle: {
    fontSize: 22,
    color: '#9A9A9A',
  },
  cateWrap: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
