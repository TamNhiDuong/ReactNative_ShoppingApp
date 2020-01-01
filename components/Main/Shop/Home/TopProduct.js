import React from 'react';
import { Text, View, StyleSheet, Image, Dimensions, TouchableOpacity, FlatList } from 'react-native';

import product1 from '../../../../images/temp/product1.jpeg';
import product2 from '../../../../images/temp/product2.jpeg';
import product3 from '../../../../images/temp/product3.jpeg';
import product4 from '../../../../images/temp/product4.jpeg';

import color from '../../../GlobalStyles/color';

const url = 'http://localhost:8080/api/images/product/';
export default class TopProduct extends React.Component {
  gotoProductDetails(product) {
    const { navigator } = this.props;
    navigator.push({ name: 'PRODUCTDETAILS', product });
  }
  render() {
    const {
      container,
      titleContainer,
      title,
      body,
      productContainer,
      product,
      priceStyle,
      productName,
    } = styles;

    return (
      <View style={container}>
        <View style={titleContainer}>
          <Text style={title}>TOP PRODUCT</Text>
        </View>

        <FlatList
          data={this.props.topProducts}
          numColumns={2}
          renderItem={({ item }) => (
            <TouchableOpacity
              key={item.id}
              style={productContainer}
              onPress={() => this.gotoProductDetails(item)}>
              <Image
                source={{ url: 'http://localhost:8080/api/images/product/' + item.images[0] }}
                style={product}
              />
              <Text style={productName}>{item.name.toUpperCase()}</Text>
              <Text style={priceStyle}>{item.price}€</Text>
            </TouchableOpacity>
          )}
        />

      </View>
    );
  }
}
//361/452
const { width, height } = Dimensions.get('window');
const productWidth = (width - 50) / 2;
const productHeight = (productWidth / 361) * 452;
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    margin: 10,
    shadowColor: '#2E272B',
    shadowOffset: { width: 0, height: 3 },
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
    paddingBottom: 10,
    justifyContent: 'space-around',
  },
  productContainer: {
    width: productWidth,
    paddingBottom: 20,
    flex: 1,
    margin: 5,
    alignItems: 'center',
  },
  product: {
    width: productWidth,
    height: productHeight,
  },
  priceStyle: {
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
