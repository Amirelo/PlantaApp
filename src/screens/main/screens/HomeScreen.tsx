import React from 'react';
import {
  CustomImage,
  CustomPressable,
  CustomText,
  CustomView,
} from '../../../components/atoms';
import {ic_arrow_right, ic_cart} from '../../../assets/images';
import {screenWidth} from '../../../utils/helper';
import ItemProduct from '../../../components/molecules/ItemProduct';
import {FlatList} from 'react-native-gesture-handler';
import ItemProductCombo from '../../../components/molecules/ItemProductCombo';
// import database from '@react-native-firebase/database';

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

const HomeScreen = () => {
  // const reference = database().ref('/plants/1');
  // console.log('Reference:', reference);

  return (
      <CustomView bgColor='backgroundColor' scrollable>
        <CustomView height={250} width={'80%'}>
          <CustomImage
            position="absolute"
            positionTop={46}
            width={screenWidth}
            height={200}
            source={
              'https://images.pexels.com/photos/776656/pexels-photo-776656.jpeg'
            }
            linkType="uri"
          />
          <CustomView hasRow={true} justify="space-between" width={'100%'}>
            <CustomText
              justify="left"
              textSize="text_subheader"
              maxWidth={'70%'}
              lineHeight={37}>
              Planta - toả sáng không gian nhà bạn
            </CustomText>
            <CustomPressable type="white">
              <CustomImage type="icon" source={ic_cart} />
            </CustomPressable>
          </CustomView>
          <CustomView hasRow width={'100%'}>
            <CustomText
              marginTop={0}
              justify="left"
              textColor="primaryColor"
              textSize="text_subtitle">
              Xem hàng mới về
            </CustomText>
            <CustomImage tintColor="primaryColor" source={ic_arrow_right} />
          </CustomView>
        </CustomView>
        <CustomView alignItems="flex-start" width={'80%'}>
          <CustomText textSize="text_subheader">Cây trồng</CustomText>
          <FlatList
            data={fakeData}
            style={{marginTop: 16}}
            columnWrapperStyle={{gap: 8}}
            numColumns={2}
            key={'#'}
            scrollEnabled={false}
            renderItem={({item}) => {
              return (
                <ItemProduct
                  source={item.image}
                  prodName={'sefj'}
                  prodPrice={item.price}
                  lightPref={item.lightPref}
                />
              );
            }}
          />
          <CustomText justify='flex-end' textDecor='underline' >Xem thêm Cây Trồng</CustomText>
          <CustomText textSize="text_subheader">Chậu cây trồng</CustomText>
          <FlatList
            data={fakeData}
            style={{marginTop: 16}}
            columnWrapperStyle={{gap: 8}}
            numColumns={2}
            key={'#'}
            scrollEnabled={false}
            renderItem={({item}) => {
              return (
                <ItemProduct
                  source={item.image}
                  prodName={item.name}
                  prodPrice={item.price}
                  lightPref={item.lightPref}
                />
              );
            }}
          />
          <CustomText textSize="text_subheader">
            Combo chăm sóc (mới)
          </CustomText>
          <FlatList
            data={fakeData}
            style={{marginTop: 16}}
            contentContainerStyle={{gap: 8, marginBottom: 16}}
            scrollEnabled={false}
            renderItem={({item}) => {
              return (
                <ItemProductCombo
                  source={item.image}
                  name={item.name}
                  description={item.description}
                />
              );
            }}
          />
        </CustomView>
      </CustomView>
  );
};

export default HomeScreen;
