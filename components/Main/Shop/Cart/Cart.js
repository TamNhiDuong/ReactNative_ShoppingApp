import React from 'react';
import {Text, ScrollView} from 'react-native';
import CustomComponents from 'react-native-deprecated-custom-components';

import CartView from './CartView';
import ProductDetails from '../ProductDetails/ProductDetails';

export default class Cart extends React.Component {
  render() {
    return (
      <CustomComponents.Navigator
        initialRoute={{name: 'CARTVIEW'}}
        renderScene={(route, navigator) => {
        switch(route.name) {
            case 'CARTVIEW':
              return <CartView navigator={navigator} />;
            default:
              return <ProductDetails navigator={navigator} />;
        }
      }}
      />
    );
  }
}
