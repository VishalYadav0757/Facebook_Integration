import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import login from './screens/login';
import fbLogin from './screens/fbLogin';

const AppNavigator = createStackNavigator({
  login: {
    screen: login,
    navigationOptions: {
      title: 'Login',
    },
  },
  fbLogin: {
    screen: fbLogin,
    navigationOptions: {
      title: 'Login via Facebook'
    },
  },
});

export default createAppContainer(AppNavigator);