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
// import database from '@react-native-firebase/database';

const HomeScreen = () => {
  // const reference = database().ref('/plants/1');
  // console.log('Reference:', reference);

  return (
    <CustomView>
      <CustomView height={'50%'} width={'80%'}>
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
        <ItemProduct
          source="https://images.pexels.com/photos/834657/pexels-photo-834657.jpeg"
          prodName="something"
          prodPrice={30000}
          lightPref={1}
        />
        <CustomText textSize="text_subheader">Chậu cây trồng</CustomText>
        <CustomText textSize="text_subheader">Combo chăm sóc (mới)</CustomText>
      </CustomView>
    </CustomView>
  );
};

export default HomeScreen;
