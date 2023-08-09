import {Text, ViewStyle} from 'react-native';
import React from 'react';
import {light} from '../../themes/light';

type Props = {
  textColor?: keyof typeof light;
  isBold?: boolean;
  children: string;
};

const CustomText = ({children, textColor, isBold}: Props) => {
  let color = {color: textColor ? light[textColor] : light.textColor};
  let bold = isBold ? {fontWeight: 700} : {};
  let fontFamily = {fontFamily: 'Lato-Regular'};
  return <Text style={[color, bold, fontFamily] as ViewStyle}>{children}</Text>;
};

export default CustomText;
