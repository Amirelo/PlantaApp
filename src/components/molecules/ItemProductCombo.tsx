import {View, Text} from 'react-native';
import React from 'react';
import {CustomImage, CustomText, CustomView} from '../atoms';
import { screenWidth } from '../../utils/helper';

type Props = {
  name: string;
  description: string;
  source: any;
};

const ItemProductCombo = ({name, description, source}: Props) => {
  return (
    <CustomView width={screenWidth *0.9} hasRow>
      <CustomView width={screenWidth*0.5}>
        <CustomText>{name}</CustomText>
        <CustomText>{description}</CustomText>
      </CustomView>
      <CustomImage source={source} type="productComboItem" linkType="uri" />
    </CustomView>
  );
};

export default ItemProductCombo;
