/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView} from 'react-native';

import CustomText from './src/components/atoms/CustomText';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <CustomText textColor="primaryColor">Hello</CustomText>
    </SafeAreaView>
  );
}

export default App;
