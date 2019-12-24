import React from 'react';
import {Text, ScrollView} from 'react-native';

import Collection from './Collection';
import Category from './Category';
import TopProduct from './TopProduct';

export default class Home extends React.Component {
  render() {
    return (
      <ScrollView style={{flex: 1, backgroundColor: '#DBDBD8'}}>
        <Category />
        <Collection />
        <TopProduct />
      </ScrollView>
    );
  }
}
