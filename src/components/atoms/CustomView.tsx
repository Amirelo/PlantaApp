import {StyleSheet, View} from 'react-native';
import React from 'react';

type Props = {
  children: any;
};

const CustomView = ({children}: Props) => {
  return <View style={styles.default}>{children}</View>;
};

export default CustomView;

const styles = StyleSheet.create({
  default: {
    alignItems: 'center',
  },
});
