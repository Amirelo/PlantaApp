import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {useAuthContext} from '../screens/auth/AuthContext';
import MainNavigation from '../screens/main/MainNavigation';
import AuthNavigation from '../screens/auth/AuthNavigation';


const AppNavigation = () => {
  const {isLoggedIn} = useAuthContext();
  return (
    <NavigationContainer>
      {isLoggedIn ? <MainNavigation /> : <AuthNavigation />}
    </NavigationContainer>
  );
};

export default AppNavigation;
