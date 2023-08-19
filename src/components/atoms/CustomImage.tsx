import {Image, ImageStyle, StyleSheet} from 'react-native';
import React from 'react';
import {screenHeight, screenWidth} from '../../utils/helper';
import {light} from '../../themes/light';

type Props = {
  source: any;
  linkType?: string;
  type?: keyof typeof styles;
  width?: number | string;
  height?: number | string;
  position?: string;
  tintColor?: keyof typeof light;
  positionTop?: number | string;
};

const CustomImage = ({
  source,
  linkType,
  type,
  width,
  height,
  position,
  positionTop,
  tintColor,
}: Props) => {
  const src = linkType == 'uri' ? {uri: source} : source;
  const imageSize = type ? styles[type] : styles.icon;
  const w = width ? {width: width} : {};
  const h = height ? {height: height} : {};
  const pos = position ? {position: position} : {};
  const posTop = positionTop ? {top: positionTop} : {};
  const tintCol = tintColor ? {tintColor: light[tintColor]} : {};
  return (
    <Image
      style={[imageSize, w, h, pos, posTop, tintCol] as ImageStyle}
      source={src}
    />
  );
};

export default CustomImage;

const styles = StyleSheet.create({
  loginBanner: {
    width: screenWidth,
    height: screenHeight * 0.5,
  },
  icon: {
    width: 24,
    height: 24,
  },
  productItem: {
    width: 155,
    height: 134,
  },
  productComboItem:{
    width:108,
    height:134,
  }
});
