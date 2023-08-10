import React, {useState} from 'react';
import {
  CustomText,
  CustomImage,
  CustomView,
  CustomInput,
  CustomPressable,
} from '../../../components/atoms';
import {Animated} from 'react-native';

function App(): JSX.Element {
  const [email, setEmail] = useState('');

  const onSignInPressed = () => {};

  const onNotNowPressed = () => {};

  const imgAnimValue = React.useRef(new Animated.Value(50)).current;
  const hideAnim = () => {
    Animated.timing(imgAnimValue, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };

  const showAnim = () => {
    Animated.timing(imgAnimValue, {
      toValue: 50,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };

  return (
    <CustomView>
      <Animated.View
        style={{
          transform: [
            {
              scaleY: imgAnimValue.interpolate({
                inputRange: [0, 100],
                outputRange: [0, 2],
              }),
            },
          ],
          height: imgAnimValue.interpolate({
            inputRange: [0, 100],
            outputRange: ['0%', '100%'],
          }),
        }}>
        <CustomImage
          linkType={'uri'}
          type="loginBanner"
          source="https://images.unsplash.com/photo-1473081556163-2a17de81fc97"
        />
      </Animated.View>

      <CustomText
        isBold
        textSize="text_header"
        textColor="primaryColor"
        marginTop={28}>
        Planta
      </CustomText>

      <CustomText hasLineHeight maxWidth={'80%'} marginTop={30}>
        Mua sắm và trải nghiệm sản phẩm cây trồng cùng phụ kiện độc đáo duy nhất
        tại Việt Nam
      </CustomText>
      <CustomInput
        placeHolder="Email"
        value={email}
        onChangeText={setEmail}
        marginTop={12}
        onFocus={hideAnim}
        onBlur={showAnim}
      />
      <CustomPressable marginTop={20} onPress={onSignInPressed}>
        <CustomText
          textColor="textContrastColor"
          textSize="text_subtitle"
          marginTop={0}>
          Đăng nhập / Đăng ký
        </CustomText>
      </CustomPressable>
      <CustomText
        marginTop={12}
        textDecor="underline"
        onPress={onNotNowPressed}>
        Chưa phải bây giờ
      </CustomText>
    </CustomView>
  );
}

export default App;
