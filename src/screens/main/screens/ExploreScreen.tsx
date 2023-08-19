import {View, Text} from 'react-native';
import React from 'react';
import {CustomInput, CustomView} from '../../../components/atoms';
import {ic_search} from '../../../assets/images';
import {FlatList} from 'react-native-gesture-handler';
import {useMainContext} from '../MainContext';
import ItemProduct from '../../../components/molecules/ItemProduct';
import ItemProductVertical from '../../../components/molecules/ItemProductVertical';

const ExploreScreen = () => {
  const [listProducts, setListProducts] = React.useState();

  const {onGetAllProducts} = useMainContext();

  React.useEffect(() => {
    setListProducts(onGetAllProducts);
  }, []);
  return (
    <CustomView hasFlex bgColor="backgroundColor">
      <CustomInput placeHolder="Search" source={ic_search} />
      <FlatList
        data={listProducts}
        style={{marginTop: 16}}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{gap: 8, marginBottom: 16}}
        renderItem={({item}) => {
          return (
            <ItemProductVertical
              source={item.image}
              name={item.name}
              description={item.price}
            />
          );
        }}
      />
    </CustomView>
  );
};

export default ExploreScreen;
