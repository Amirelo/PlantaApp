import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';

const Stack = createStackNavigator();
const MainNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen options={{headerShown:false}} name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default MainNavigation;
