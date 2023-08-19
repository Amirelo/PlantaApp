import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ExploreScreen from './screens/ExploreScreen';
import NotificationScreen from './screens/NotificationScreen';
import ProfileScreen from './screens/ProfileScreen';
import { CustomImage } from '../../components/atoms';
import { ic_bell, ic_home, ic_search, ic_user } from '../../assets/images';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const tabNav = () =>{
  return (
    <Tab.Navigator initialRouteName='Home'>
      <Tab.Screen options={{headerShown: false, tabBarIcon: () => (<CustomImage source={ic_home} type='icon'/>) }} name='Home' component={HomeScreen}/>
      <Tab.Screen options={{tabBarIcon: () => (<CustomImage source={ic_search} type='icon'/>)}} name='Explore' component={ExploreScreen}/>
      <Tab.Screen options={{tabBarIcon: () => (<CustomImage source={ic_bell} type='icon'/>)}} name='Notification' component={NotificationScreen}/>
      <Tab.Screen options={{tabBarIcon: () => (<CustomImage source={ic_user} type='icon'/>)}} name='Profile' component={ProfileScreen}/>
    </Tab.Navigator>
  )
}

const MainNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen options={{headerShown:false}} name="Tab" component={tabNav} />
    </Stack.Navigator>
  );
};

export default MainNavigation;
