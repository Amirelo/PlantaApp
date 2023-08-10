import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SignInScreen from './screens/SignInScreen';

const Stack = createStackNavigator();
const AuthNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="SignIn">
      <Stack.Screen name="SignIn" component={SignInScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigation;
