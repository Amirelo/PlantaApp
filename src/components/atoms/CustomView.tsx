import {ScrollView, StyleSheet, View, ViewStyle} from 'react-native';
import React from 'react';
import { screenHeight } from '../../utils/helper';

type Props = {
  children: any;
  scrollable?: boolean;
  hasRow?: boolean;
  justify?: string;
  width?: number | string;
  height?: number | string;
  alignItems?: string;
};

const CustomView = ({
  children,
  scrollable,
  hasRow,
  justify,
  width,
  height,
  alignItems,
}: Props) => {
  const row = hasRow ? {flexDirection: 'row', flex: 0} : {};
  const justifyContent = justify ? {justifyContent: justify} : {};
  const w = width ? {width: width} : {};
  const h = height ? {height: height} : {};
  const alignI = alignItems ? {alignItems: alignItems} : {alignItems: 'center'};
  return scrollable ? (
    <ScrollView
    scrollEnabled={true}
      style={[styles.default2, row, w, h] as ViewStyle}
      contentContainerStyle={
        [styles.default, justifyContent, alignI] as ViewStyle
      }>
      {children}
    </ScrollView>
  ) : (
    <View
      style={
        [styles.viewDefault, row, justifyContent, w, h, alignI] as ViewStyle
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
  },
  default2: {
  },
  viewDefault: {
    alignItems: 'center',
  },
});
