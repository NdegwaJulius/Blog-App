import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import IndexScreen from './src/screens/IndexScreen';
import { Provider } from './src/context/BlogContext';


const navigation = createStackNavigator ({
  Index: IndexScreen
},{
  initialRouteName: 'Index',
  defaultNavigationOptions:{
    title: 'Blogs'
  }
}
);

const App =  createAppContainer(navigation);
export default () => {
  return <Provider>
    <App/>

  </Provider> 
};