import React from 'react';
import {Text, ScrollView} from 'react-native';

import Collection from './Collection';
import Category from './Category';
import TopProduct from './TopProduct';

export default class HomeView extends React.Component {
  render() {
    const {types} = this.props;
    return (
      <ScrollView style={{flex: 1, backgroundColor: '#DBDBD8'}}>
        <Collection />
        <Category navigator={this.props.navigator} types={types} />
        <TopProduct navigator={this.props.navigator} />
      </ScrollView>
    );
  }
}