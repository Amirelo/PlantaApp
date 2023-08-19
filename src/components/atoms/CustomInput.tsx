import {StyleSheet, TextInput, TextStyle} from 'react-native';
import React from 'react';
import {screenWidth} from '../../utils/helper';
import CustomImage from './CustomImage';
import CustomView from './CustomView';

type Props = {
  value?: string;
  onChangeText?: any;
  placeHolder?: string;
  marginTop?: number;
  onFocus?: any;
  onBlur?: any;
  source?: string;
};

const CustomInput = ({
  value,
  onChangeText,
  placeHolder,
  marginTop,
  onFocus,
  onBlur,
  source,
}: Props) => {
  const mTop = {marginTop: marginTop};
  return (
    <CustomView hasRow>
      <TextInput
        style={[styles.default, mTop] as TextStyle}
        onChangeText={onChangeText}
        value={value}
        placeholder={placeHolder}
        onFocus={onFocus}
        onBlur={onBlur}
        editable={true}
      />
      {source ? <CustomImage source={source} type='icon' customStyles={{position: 'absolute', right:0}} /> : <></>}
    </CustomView>
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
