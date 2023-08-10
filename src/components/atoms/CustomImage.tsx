import {Image, ImageStyle, StyleSheet} from 'react-native';
import React from 'react';
import {screenHeight, screenWidth} from '../../utils/helper';

type Props = {
  source: any;
  linkType?: string;
  type?: keyof typeof styles;
};

const CustomImage = ({source, linkType, type}: Props) => {
  let src = linkType == 'uri' ? {uri: source} : source;
  let imageSize = type ? styles[type] : styles.icon;
  return <Image style={[imageSize] as ImageStyle} source={src} />;
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
});
