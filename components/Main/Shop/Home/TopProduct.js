import React from 'react';
import {Text, View, StyleSheet, Image, Dimensions} from 'react-native';

import product1 from '../../../../images/temp/product1.jpeg';
import product2 from '../../../../images/temp/product2.jpeg';
import product3 from '../../../../images/temp/product3.jpeg';
import product4 from '../../../../images/temp/product4.jpeg';
import product5 from '../../../../images/temp/product5.jpeg';

export default class TopProduct extends React.Component {
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
          <View style={productContainer}>
            <Image source={product1} style={product} />
            <Text style={productName}>PRODUCT NAME</Text>
            <Text style={price}>99‎€</Text>
          </View>
          <View style={productContainer}>
            <Image source={product2} style={product} />
            <Text style={productName}>PRODUCT NAME</Text>
            <Text style={price}>99‎€</Text>
          </View>

          <View style={{height: 10, width}} />
  
          <View style={productContainer}>
            <Image source={product3} style={product} />
            <Text style={productName}>PRODUCT NAME</Text>
            <Text style={price}>99‎€</Text>
          </View>
          <View style={productContainer}>
            <Image source={product4} style={product} />
            <Text style={productName}>PRODUCT NAME</Text>
            <Text style={price}>99‎€</Text>
          </View>
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
    color: '#D3D3CF',
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
    shadowColor: '#2E272B',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.2,
  },
  product: {
    width: productWidth,
    height: productHeight,
  },
  price: {
    color: '#a195d5',
    fontWeight: '600',
    paddingLeft: 20,
  },
  productName: {
    color: '#D3D3CF',
    paddingLeft: 20,
    marginVertical: 5,
  },
});
