import {Pressable, StyleSheet, ViewStyle} from 'react-native';
import React from 'react';
import {light} from '../../themes/light';
import {screenWidth} from '../../utils/helper';

type Props = {
  children: any;
  type?: keyof typeof styles;
  disable?: boolean;
  marginTop?: number;
  onPress?: any;
};

const CustomPressable = ({
  children,
  type,
  disable,
  marginTop,
  onPress,
}: Props) => {
  let bgColor = type
    ? disable
      ? styles[`${type}_disabled`]
      : styles[type]
    : styles.primary;
  let mTop = marginTop ? {marginTop: marginTop} : {marginTop: 0};
  return (
    <Pressable
      onPress={onPress}
      disabled={disable}
      style={[styles.default, bgColor, mTop] as ViewStyle}>
      {children}
    </Pressable>
  );
};

export default CustomPressable;

const styles = StyleSheet.create({
  default: {
    borderRadius: 8,
    width: screenWidth * 0.8,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primary: {
    backgroundColor: light.primaryColor,
  },
  primary_disabled: {
    backgroundColor: light.primaryOffColor,
  },
  secondary: {
    backgroundColor: light.secondaryColor,
  },
  secondary_disabled: {
    backgroundColor: light.secondaryOffColor,
  },
});
