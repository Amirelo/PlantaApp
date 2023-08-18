import {ScrollView, StyleSheet, View, ViewStyle} from 'react-native';
import React from 'react';

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
  let row = hasRow ? {flexDirection: 'row', flex: 0} : {};
  let justifyContent = justify ? {justifyContent: justify} : {};
  let w = width ? {width: width} : {};
  let h = height ? {height: height} : {};
  let alignI = alignItems ? {alignItems: alignItems} : {alignItems: 'center'};
  return scrollable ? (
    <ScrollView
      automaticallyAdjustKeyboardInsets={true}
      style={[styles.default2, row, justifyContent, w, h, alignI] as ViewStyle}
      contentContainerStyle={styles.default}>
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
  },
  default2: {
    flex: 1,
  },
  viewDefault: {
    alignItems: 'center',
  },
});
