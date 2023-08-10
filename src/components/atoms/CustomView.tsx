import {ScrollView, StyleSheet} from 'react-native';
import React from 'react';

type Props = {
  children: any;
  scrollable?: boolean;
};

const CustomView = ({children, scrollable}: Props) => {
  return (
    <ScrollView
      scrollEnabled={scrollable}
      automaticallyAdjustKeyboardInsets={true}
      style={styles.default2}
      contentContainerStyle={styles.default}>
      {children}
    </ScrollView>
  );
};

export default CustomView;

const styles = StyleSheet.create({
  default: {
    alignItems: 'center',
    flexGrow: 1,
  },
  default2: {
    flex: 1,
  },
});
