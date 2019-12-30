import React from 'react';
import {Text, View, StyleSheet, Image, Dimensions, TouchableOpacity} from 'react-native';

import product1 from '../../../../images/temp/product1.jpeg';
import product2 from '../../../../images/temp/product2.jpeg';
import product3 from '../../../../images/temp/product3.jpeg';
import product4 from '../../../../images/temp/product4.jpeg';

import color from '../../../GlobalStyles/color';


export default class TopProduct extends React.Component {
  gotoProductDetails() {
    const {navigator} = this.props;
    navigator.push({name: 'PRODUCTDETAILS'});
  }
  render() {
    const {
      container,
      titleContainer,
      title,
      body,
      productContainer,
      product,
      price,
      productName,
    } = styles;
    return (
      <View style={container}>
        <View style={titleContainer}>
          <Text style={title}>TOP PRODUCT</Text>
        </View>

        <View style={body}>
          <TouchableOpacity style={productContainer} onPress={this.gotoProductDetails.bind(this)}>
            <Image source={product1} style={product} />
            <Text style={productName}>PRODUCT NAME</Text>
            <Text style={price}>99‎€</Text>
          </TouchableOpacity>
          <TouchableOpacity style={productContainer} onPress={this.gotoProductDetails.bind(this)}>
            <Image source={product2} style={product} />
            <Text style={productName}>PRODUCT NAME</Text>
            <Text style={price}>99‎€</Text>
          </TouchableOpacity>

          <View style={{height: 10, width}} />
  
          <TouchableOpacity style={productContainer} onPress={this.gotoProductDetails.bind(this)}>
            <Image source={product3} style={product} />
            <Text style={productName}>PRODUCT NAME</Text>
            <Text style={price}>99‎€</Text>
          </TouchableOpacity>
          <TouchableOpacity style={productContainer} onPress={this.gotoProductDetails.bind(this)}>
            <Image source={product4} style={product} />
            <Text style={productName}>PRODUCT NAME</Text>
            <Text style={price}>99‎€</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
//361/452
const {width, height} = Dimensions.get('window');
const productWidth = (width - 50) / 2;
const productHeight = (productWidth * 452) / 361;
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    margin: 10,
    shadowColor: '#2E272B',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.2,
  },
  titleContainer: {
    height: 50,
    justifyContent: 'center',
    paddingLeft: 10,
  },
  title: {
    color: '#AFAEAF',
    fontSize: 20,
  },
  body: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    paddingBottom: 10,
  },
  productContainer: {
    width: productWidth,
    paddingBottom: 20,
  },
  product: {
    width: productWidth,
    height: productHeight,
  },
  price: {
    color: '#B10D65',
    fontWeight: '600',
    paddingLeft: 20,
  },
  productName: {
    color: '#9A9A9A',
    paddingLeft: 20,
    marginVertical: 5,
  },
});
