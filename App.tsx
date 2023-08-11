import React from 'react';

import {AuthContextProvider} from './src/screens/auth/AuthContext';
import {MainContextProvider} from './src/screens/main/MainContext';
import AppNavigation from './src/navigation/AppNavigation';

function App(): JSX.Element {
  return (
    <AuthContextProvider>
      <MainContextProvider>
        <AppNavigation />
      </MainContextProvider>
    </AuthContextProvider>
  );
}

export default App;
