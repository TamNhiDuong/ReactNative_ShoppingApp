import React, { Component } from 'react';
import {
  View, Text, TouchableOpacity,
  Dimensions, StyleSheet, Image, FlatList
} from 'react-native';

import global from '../../../global';

function toTitleCase(str) {
  return str.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
}

class CartView extends Component {
  incrQuantity(id) {
    global.incrQuantity(id);
  }
  decrQuantity(id) {
    global.decrQuantity(id);
  }
  removeItem(id) {
    global.removeItem(id);
  }
  gotoDetail() {
    const { navigator } = this.props;
    navigator.push({ name: 'PRODUCTDETAILS' });
  }
  render() {
    const { cartArray } = this.props;
    console.log("Cart", cartArray);
    const { main, checkoutButton, checkoutTitle, wrapper,
      product, mainRight, productController,
      txtName, txtPrice, productImage, numberOfProduct,
      txtShowDetail, showDetailContainer } = styles;
    return (
      <View style={wrapper}>
        <FlatList
          data={cartArray}
          renderItem={({ item }) => (
            <View style={product}>
              <Image source={{ url: 'http://localhost:8080/api/images/product/' + item.product.images[0]}} style={productImage} />
              <View style={[mainRight]}>
                <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                  <Text style={txtName}>{toTitleCase(item.product.name)}</Text>
                  <TouchableOpacity onPress={() => this.removeItem(item.product.id)}>
                    <Text style={{ fontFamily: 'Avenir', color: '#969696' }}>X</Text>
                  </TouchableOpacity>
                </View>
                <View>
                  <Text style={txtPrice}>{item.product.price}€</Text>
                </View>
                <View style={productController}>
                  <View style={numberOfProduct}>
                    <TouchableOpacity onPress={() => this.incrQuantity(item.product.id)}>
                      <Text>+</Text>
                    </TouchableOpacity>
                    <Text>{item.quantity}</Text>
                    <TouchableOpacity onPress={() => this.decrQuantity(item.product.id)}>
                      <Text>-</Text>
                    </TouchableOpacity>
                  </View>
                  <TouchableOpacity style={showDetailContainer}>
                    <Text style={txtShowDetail}>SHOW DETAILS</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )}
        />

        <TouchableOpacity style={checkoutButton}>
          <Text style={checkoutTitle}>TOTAL {1000}$ CHECKOUT NOW</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const { width } = Dimensions.get('window');
const imageWidth = width / 4;
const imageHeight = (imageWidth * 452) / 361;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#DFDFDF'
  },
  checkoutButton: {
    height: 50,
    margin: 10,
    marginTop: 0,
    backgroundColor: '#437777',
    borderRadius: 2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  main: {
    width, backgroundColor: '#DFDFDF'
  },
  checkoutTitle: {
    color: '#FFF',
    fontSize: 15,
    fontWeight: 'bold',
    fontFamily: 'Avenir'
  },
  product: {
    flexDirection: 'row',
    margin: 10,
    padding: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 2,
    shadowColor: '#3B5458',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2
  },
  productImage: {
    width: imageWidth,
    height: imageHeight,
    flex: 1,
    resizeMode: 'center'
  },
  mainRight: {
    flex: 3,
    justifyContent: 'space-between'
  },
  productController: {
    flexDirection: 'row'
  },
  numberOfProduct: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  txtName: {
    paddingLeft: 20,
    color: '#A7A7A7',
    fontSize: 20,
    fontWeight: '400',
    fontFamily: 'Avenir'
  },
  txtPrice: {
    paddingLeft: 20,
    color: '#C21C70',
    fontSize: 20,
    fontWeight: '400',
    fontFamily: 'Avenir'
  },
  txtShowDetail: {
    color: '#C21C70',
    fontSize: 10,
    fontWeight: '400',
    fontFamily: 'Avenir',
    textAlign: 'right',
  },
  showDetailContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end'
  }
});

export default CartView;