import {View, Text} from 'react-native';
import React from 'react';

const AuthContext = React.createContext('Default');

type Props = {
  children: any;
};

export const useAuthContext = () => {
  return React.useContext(AuthContext);
};

export const AuthContextProvider = ({children}: Props) => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const userLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <AuthContext.Provider value={{userLogin, isLoggedIn}}>
      {children}
    </AuthContext.Provider>
  );
};
