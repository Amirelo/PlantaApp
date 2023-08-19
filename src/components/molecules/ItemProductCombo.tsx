import React from 'react';
import {CustomImage, CustomText, CustomView} from '../atoms';
import {screenWidth} from '../../utils/helper';

type Props = {
  name: string;
  description: string;
  source: any;
};

const ItemProductCombo = ({name, description, source}: Props) => {
  return (
    <CustomView borderRad={8} width={'100%'} hasRow>
      <CustomView width={screenWidth * 0.5}>
        <CustomText>{name}</CustomText>
        <CustomText>{description}</CustomText>
      </CustomView>
      <CustomImage source={source} type="productComboItem" linkType="uri" />
    </CustomView>
  );
};

export default ItemProductCombo;
