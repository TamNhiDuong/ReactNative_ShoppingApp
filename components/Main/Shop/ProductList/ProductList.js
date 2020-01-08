import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import Drawer from 'react-native-drawer';

import Header from '../../Shop/Header';
import Menu from '../../Menu';

import backList from '../../../../images/appIcon/backList.png';
import product1 from '../../../../images/temp/product1.jpeg';

export default class ProductList extends Component {
  goBack() {
    const { navigator } = this.props;
    navigator.pop();
  }
  gotoProductDetails() {
    const { navigator } = this.props;
    navigator.push({ name: 'PRODUCTDETAILS' });
  }
  render() {
    const {
      container,
      wrapper, 
      header,
      backStyle,
      titleStyle,
      productContainer,
      productImage,
      productInfor,
      detailsRow,
      txtName, txtPrice, txtMaterial, txtColor, txtDetails,
    } = styles;
    const {category} = this.props;
    return (
      <View style={container}>
        <ScrollView style={wrapper}>
          <View style={header}>
            <TouchableOpacity onPress={this.goBack.bind(this)}>
              <Image source={backList} style={backStyle} />
            </TouchableOpacity>
            <Text style={titleStyle}>{category.name}</Text>
            <View style={{ width: 30 }} />
          </View>

          <TouchableOpacity onPress={this.gotoProductDetails.bind(this)}>
            <View style={productContainer}>
              <Image style={productImage} source={product1} />
              <View style={productInfor}>
                <Text style={txtName}>Lace Sleeve Si</Text>
                <Text style={txtPrice}>117$</Text>
                <Text style={txtMaterial}>Material silk</Text>
                <View style={detailsRow}>
                  <Text style={txtColor}>Color RoyalBlue</Text>
                  <View style={{ backgroundColor: 'blue', width: 10, height: 10, borderRadius: 5 }} />
                </View>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.gotoProductDetails.bind(this)}>
            <View style={productContainer}>
              <Image style={productImage} source={product1} />
              <View style={productInfor}>
                <Text style={txtName}>Lace Sleeve Si</Text>
                <Text style={txtPrice}>117$</Text>
                <Text style={txtMaterial}>Material silk</Text>
                <View style={detailsRow}>
                  <Text style={txtColor}>Color RoyalBlue</Text>
                  <View style={{ backgroundColor: 'blue', width: 10, height: 10, borderRadius: 5 }} />
                </View>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.gotoProductDetails.bind(this)}>
            <View style={productContainer}>
              <Image style={productImage} source={product1} />
              <View style={productInfor}>
                <Text style={txtName}>Lace Sleeve Si</Text>
                <Text style={txtPrice}>117$</Text>
                <Text style={txtMaterial}>Material silk</Text>
                <View style={detailsRow}>
                  <Text style={txtColor}>Color RoyalBlue</Text>
                  <View style={{ backgroundColor: 'blue', width: 10, height: 10, borderRadius: 5 }} />
                </View>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.gotoProductDetails.bind(this)}>
            <View style={productContainer}>
              <Image style={productImage} source={product1} />
              <View style={productInfor}>
                <Text style={txtName}>Lace Sleeve Si</Text>
                <Text style={txtPrice}>117$</Text>
                <Text style={txtMaterial}>Material silk</Text>
                <View style={detailsRow}>
                  <Text style={txtColor}>Color RoyalBlue</Text>
                  <View style={{ backgroundColor: 'blue', width: 10, height: 10, borderRadius: 5 }} />
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DBDBD8',
    padding: 10,
  },
  header: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
  },
  wrapper: {
    backgroundColor: '#fff',
    shadowColor: '#2E272B',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    paddingHorizontal: 10,
    margin: 10,
  },
  backStyle: {
    width: 30,
    height: 30,
  },
  titleStyle: {
    fontSize: 20,
    color: '#B10D65',
  },
  productContainer: {
    flexDirection: 'row',
    padding: 10,
    borderTopColor: '#D6D6D6',
    borderWidth: 1,
    borderLeftColor: '#FFF',
    borderRightColor: '#FFF',
    borderBottomColor: '#FFF',

  },
  productImage: {
    width: 130,
    height: (130 * 452) / 361,
  },
  productInfor: {
    justifyContent: 'space-between',
    marginLeft: 15,
    flex: 1,
    paddingVertical: 10,
  },
  detailsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'stretch',
    alignItems: 'center',
  },
  txtName: {
    fontSize: 17,
    color: '#9A9A9A',
    fontWeight: '400',
  },
  txtPrice: {
    color: '#B10D65',
  },
  txtMaterial: {
    color: '#5c5c5c',
  },
  txtDetails: {
    color: '#B10D65',
    fontSize: 13,
  },
  txtColor: {
    color: '#5c5c5c',
  },
});