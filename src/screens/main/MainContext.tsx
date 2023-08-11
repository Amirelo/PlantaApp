import React from 'react';

const MainContext = React.createContext('Default');

export const useMainContext = () => {
  return React.useContext(MainContext);
};

type Props = {
  children: any;
};

export const MainContextProvider = ({children}: Props) => {
  const onGetAllProducts = () => {
    console.log('get all products');
    return [];
  };
  return (
    <MainContext.Provider value={{onGetAllProducts}}>
      {children}
    </MainContext.Provider>
  );
};
