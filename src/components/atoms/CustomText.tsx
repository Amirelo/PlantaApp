import {Text, TextStyle} from 'react-native';
import React from 'react';
import {light} from '../../themes/light';
import {textStyles} from '../../assets/styles/textStyles';

type Props = {
  textColor?: keyof typeof light;
  textSize?: keyof typeof textStyles;
  isBold?: boolean;
  marginTop?: number;
  maxWidth?: number | string;
  hasLineHeight?: boolean;
  textDecor?: string;
  onPress?: any;
  children: string;
};

const CustomText = ({
  children,
  textColor,
  textSize,
  isBold,
  marginTop,
  maxWidth,
  hasLineHeight,
  textDecor,
  onPress,
}: Props) => {
  let color = {color: textColor ? light[textColor] : light.textColor};
  let bold = isBold ? {fontWeight: 700} : {};
  let fontFamily = {fontFamily: 'Lato-Regular'};
  let fontSize = {
    fontSize: textSize ? textStyles[textSize] : textStyles.text_normal,
  };
  let mTop = marginTop != null ? {marginTop: marginTop} : {marginTop: 8};
  let maxW = maxWidth ? {maxWidth: maxWidth} : {};
  let lineHeight = hasLineHeight ? {lineHeight: 29} : {};
  let justifyText = {textAlign: 'justify'};
  let textDecoration = textDecor ? {textDecorationLine: textDecor} : {};

  return (
    <Text
      onPress={onPress}
      style={
        [
          color,
          bold,
          fontFamily,
          fontSize,
          mTop,
          maxW,
          lineHeight,
          justifyText,
          textDecoration,
        ] as TextStyle
      }>
      {children}
    </Text>
  );
};

export default CustomText;
