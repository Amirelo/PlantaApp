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
  let src = linkType == 'uri' ? {uri: source} : source;
  let imageSize = type ? styles[type] : styles.icon;
  let w = width ? {width: width} : {};
  let h = height ? {height: height} : {};
  let pos = position ? {position: position} : {};
  let posTop = positionTop ? {top: positionTop} : {};
  let tintCol = tintColor ? {tintColor: light[tintColor]} : {};
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
});
