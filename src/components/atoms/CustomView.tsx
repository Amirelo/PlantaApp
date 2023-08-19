import {ScrollView, StyleSheet, View, ViewStyle} from 'react-native';
import React from 'react';
import { screenHeight } from '../../utils/helper';
import { light } from '../../themes/light';

type Props = {
  children: any;
  scrollable?: boolean;
  hasRow?: boolean;
  justify?: string;
  width?: number | string;
  height?: number | string;
  alignItems?: string;
  borderRad?: number;
  bgColor?: keyof typeof light;
};

const CustomView = ({
  children,
  scrollable,
  hasRow,
  justify,
  width,
  height,
  alignItems,
  borderRad,
  bgColor,
}: Props) => {
  const row = hasRow ? {flexDirection: 'row', flex: 0} : {};
  const justifyContent = justify ? {justifyContent: justify} : {};
  const w = width ? {width: width} : {};
  const h = height ? {height: height} : {};
  const alignI = alignItems ? {alignItems: alignItems} : {alignItems: 'center'};
  const borderRadius = borderRad ? {borderRadius: borderRad}: {};
  const backgroundColor = bgColor ? {backgroundColor: light[bgColor]} : {};
  return scrollable ? (
    <ScrollView
    scrollEnabled={true}
      style={[styles.default2, row, w, h, borderRadius, backgroundColor] as ViewStyle}
      contentContainerStyle={
        [styles.default, justifyContent, alignI] as ViewStyle
      }>
      {children}
    </ScrollView>
  ) : (
    <View
      style={
        [styles.viewDefault, row, justifyContent, w, h, alignI, borderRadius, backgroundColor] as ViewStyle
      }>
      {children}
    </View>
  );
};

export default CustomView;

const styles = StyleSheet.create({
  default: {
    alignItems: 'center',
    width: '100%',
    overflow: 'hidden'
    
  },
  default2: {
    overflow: 'hidden'
  },
  viewDefault: {
    alignItems: 'center',
    overflow: 'hidden'
  },
});
