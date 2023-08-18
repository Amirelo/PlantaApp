import React from 'react';
import {CustomImage, CustomText, CustomView} from '../atoms';
import {priceFormat} from '../../utils/helper';

type Props = {
  source: string;
  prodName: string;
  prodPrice: number;
  lightPref: number;
};

const ItemProduct = ({source, prodName, prodPrice, lightPref}: Props) => {
  return (
    <CustomView alignItems="flex-start" width={155} height={217}>
      <CustomImage linkType="uri" type="productItem" source={source} />
      <CustomText textSize="text_subtitle">{prodName}</CustomText>
      <CustomText
        textSize="text_normal"
        textColor="primaryOffColor"
        marginTop={4}>
        {lightPref == 1 ? 'Ưa sáng' : 'Ưa bóng'}
      </CustomText>
      <CustomText
        textSize="text_subtitle"
        textColor="primaryColor"
        isBold
        marginTop={4}>
        {priceFormat(prodPrice)}
      </CustomText>
    </CustomView>
  );
};

export default ItemProduct;
