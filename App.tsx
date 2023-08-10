import React from 'react';

import AuthNavigation from './src/screens/auth/AuthNavigation';
import {NavigationContainer} from '@react-navigation/native';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <AuthNavigation />
    </NavigationContainer>
  );
}

export default App;
