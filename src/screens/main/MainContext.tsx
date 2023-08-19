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
    const fakeData = [
      {
        id:1,
        image:
          'https://cdn.pixabay.com/photo/2015/10/09/00/55/lotus-978659_1280.jpg',
        lightPref: 1,
        name: 'Lotus',
        origin: 'Africa',
        price: 300000,
        quantity: 10,
        size: '1',
        description:'description description description description description description'
      }, 
      {
        id:2,
        image:
          'https://cdn.pixabay.com/photo/2015/10/09/00/55/lotus-978659_1280.jpg',
        lightPref: 1,
        name: 'Lotus',
        origin: 'Africa',
        price: 300000,
        quantity: 10,
        size: '1',
        description:'description'
      },
      {
        id:3,
        image:
          'https://cdn.pixabay.com/photo/2015/10/09/00/55/lotus-978659_1280.jpg',
        lightPref: 1,
        name: 'Lotus',
        origin: 'Africa',
        price: 300000,
        quantity: 10,
        size: '1',
        description:'description'
      },
      {
        id:4,
        image:
          'https://cdn.pixabay.com/photo/2015/10/09/00/55/lotus-978659_1280.jpg',
        lightPref: 1,
        name: 'Lotus',
        origin: 'Africa',
        price: 300000,
        quantity: 10,
        size: '1',
        description:'description'
      },
    ];
    return fakeData;
  };
  return (
    <MainContext.Provider value={{onGetAllProducts}}>
      {children}
    </MainContext.Provider>
  );
};
