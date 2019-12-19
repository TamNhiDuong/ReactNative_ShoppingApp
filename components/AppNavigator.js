import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

import Authentication from './Authentication/Authentication'
import ChangeInfor from './ChangeInfor/ChangeInfor';
import Main from './Main/Main';
import OrderHistory from './OrderHistory/OrderHistory'; 

const AppNavigator = createStackNavigator({
    AUTHENTICATION: {screen: Authentication},
    CHANGEINFOR: {screen: ChangeInfor},   
    MAIN: {screen: Main},
    ORDERHISTORY: {screen: OrderHistory}, 
},
{
    initialRouteName: 'MAIN'
});
const AppContainer = createAppContainer(AppNavigator);
export default AppContainer; 