import {StyleSheet, TextInput, TextStyle} from 'react-native';
import React from 'react';
import {screenWidth} from '../../utils/helper';

type Props = {
  value?: string;
  onChangeText?: any;
  placeHolder?: string;
  marginTop?: number;
};

const CustomInput = ({value, onChangeText, placeHolder, marginTop}: Props) => {
  let mTop = {marginTop: marginTop};
  return (
    <TextInput
      style={[styles.default, mTop] as TextStyle}
      onChangeText={onChangeText}
      value={value}
      placeholder={placeHolder}
      editable={true}
    />
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  default: {
    width: screenWidth * 0.8,
    borderBottomWidth: 1,
    borderBottomColor: '#ABABAB',
  },
});
