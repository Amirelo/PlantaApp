import {ScrollView, StyleSheet, View, ViewStyle} from 'react-native';
import React from 'react';

type Props = {
  children: any;
  scrollable?: boolean;
  isRow?: boolean;
};

const CustomView = ({children, scrollable, isRow}: Props) => {
  let row = isRow ? {flexDirection: 'row'} : {};
  return scrollable ? (
    <ScrollView
      automaticallyAdjustKeyboardInsets={true}
      style={(styles.default2, row as ViewStyle)}
      contentContainerStyle={styles.default}>
      {children}
    </ScrollView>
  ) : (
    <View style={styles.viewDefault}>{children}</View>
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
    flex: 1,
    alignItems: 'center',
  },
});
