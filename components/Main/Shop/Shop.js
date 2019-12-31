import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';

import Home from './Home/Home';
import Contact from './Contact/Contact';
import Cart from './Cart/Cart';
import Search from './Search/Search';
import Header from './Header';
import ProductList from './ProductList/ProductList';
import global from '../../global';

import homeIconS from '../../../images/appIcon/home.png';
import homeIcon0 from '../../../images/appIcon/home0.png';
import cartIconS from '../../../images/appIcon/cart.png';
import cartIcon0 from '../../../images/appIcon/cart0.png';
import searchIconS from '../../../images/appIcon/search.png';
import searchIcon0 from '../../../images/appIcon/search0.png';
import contactIconS from '../../../images/appIcon/contact.png';
import contactIcon0 from '../../../images/appIcon/contact0.png';

export default class Shop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'home',
      types: [],
      topProducts: [],
      cartArray: [],
    };
    global.addProductToCart = this.addProductToCart.bind(this);
  }
  addProductToCart(product) {
    this.setState({cartArray: this.state.cartArray.concat(product)});
  }
  componentDidMount() {
    fetch('http://localhost:8080/api/')
      .then(res => res.json())
      .then(resJSON => {
        const {type, product} = resJSON;
        this.setState({types: type, topProducts: product});
      });
  }
  openMenu() {
    const {open} = this.props;
    open();
  }

  render() {
    const {icons, title} = styles;
    const {navigation} = this.props;
    const {selectedTab, types, topProducts, cartArray} = this.state;
    return (
      <View style={{flex: 1}}>
        <Header onOpen={this.openMenu.bind(this)} />
        <TabNavigator>
          <TabNavigator.Item
            selected={selectedTab === 'home'}
            title="Home"
            onPress={() => this.setState({selectedTab: 'home'})}
            renderIcon={() => <Image source={homeIcon0} style={icons} />}
            renderSelectedIcon={() => <Image source={homeIconS} style={icons}/>}
            selectedTitleStyle={title}>
            <Home 
              navigation={navigation}
              types={types}
              topProducts={topProducts}
            />
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={selectedTab === 'cart'}
            title="Cart"
            onPress={() => this.setState({selectedTab: 'cart'})}
            renderIcon={() => <Image source={cartIcon0} style={icons} />}
            renderSelectedIcon={() => <Image source={cartIconS} style={icons} />}
            badgeText={cartArray.length}
            selectedTitleStyle={title}>
            <Cart cartArray={cartArray}/>
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={selectedTab === 'search'}
            title="Search"
            onPress={() => this.setState({selectedTab: 'search'})}
            renderIcon={() => <Image source={searchIcon0} style={icons} />}
            renderSelectedIcon={() => <Image source={searchIconS} style={icons} />}
            selectedTitleStyle={title}>
            <Search />
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={selectedTab === 'contact'}
            title="Contact"
            onPress={() => this.setState({selectedTab: 'contact'})}
            renderIcon={() => <Image source={contactIcon0} style={icons} />}
            renderSelectedIcon={() => <Image source={contactIconS} style={icons} />}
            selectedTitleStyle={title}>
            <Contact />
          </TabNavigator.Item>
        </TabNavigator>
      </View>
    );
  }
}
const styles = ({
  icons: {height: 25, width: 25, padding: 15},
  title: {color:'#437777'},
});
