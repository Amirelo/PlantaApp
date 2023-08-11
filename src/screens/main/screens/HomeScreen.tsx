import {View, Text, Image} from 'react-native';
import React from 'react';
import {
  CustomImage,
  CustomPressable,
  CustomText,
  CustomView,
} from '../../../components/atoms';
import { ic_cart } from '../../../assets/images';

type Props = {};

const HomeScreen = (props: Props) => {
  return (
    <CustomView>
      <CustomText maxWidth={'50%'}>
        Planta - tỏa sáng không gian nhà bạn
      </CustomText>
      <CustomPressable>
        <CustomImage source="https://images.pexels.com/photos/776656/pexels-photo-776656.jpeg" />
        <CustomImage source={ic_cart} />
      </CustomPressable>
    </CustomView>
  );
};

export default HomeScreen;
