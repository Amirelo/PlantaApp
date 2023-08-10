/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import CustomText from './src/components/atoms/CustomText';
import CustomImage from './src/components/atoms/CustomImage';
import CustomView from './src/components/atoms/CustomView';

function App(): JSX.Element {
  return (
    <CustomView>
      <CustomImage
        linkType={'uri'}
        type="loginBanner"
        source="https://cdn.pixabay.com/photo/2023/08/03/14/14/night-8167272_1280.jpg"
      />
      <CustomText
        isBold
        textSize="text_header"
        textColor="primaryColor"
        marginTop={28}>
        Planta
      </CustomText>

      <CustomText hasLineHeight maxWidth={'80%'} marginTop={30}>
        Mua sắm và trải nghiệm sản phẩm cây trồng cùng phụ kiện độc đáo duy nhất
        tại Việt Nam
      </CustomText>
    </CustomView>
  );
}

export default App;
