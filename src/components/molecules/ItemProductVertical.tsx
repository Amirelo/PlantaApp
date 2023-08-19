import React from 'react';
import {CustomImage, CustomText, CustomView} from '../atoms';
import {screenWidth} from '../../utils/helper';

type Props = {
  name: string;
  description: string;
  source: any;
};

const ItemProductVertical = ({name, description, source}: Props) => {
  return (
    <CustomView borderRad={8} width={'100%'} hasRow>
      <CustomImage source={source} type="productComboItem" linkType="uri" />
      <CustomView alignItems='flex-start' width={screenWidth * 0.5}>
        <CustomText>{name}</CustomText>
        <CustomText>{description}</CustomText>
      </CustomView>
    </CustomView>
  );
};

export default ItemProductVertical;
