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
  const [showTerms, setShowTerms] = useState(false);

  const onSignInPressed = () => {};

  const onNotNowPressed = () => {};

  const imgAnimValue = React.useRef(new Animated.Value(50)).current;
  const hideAnim = () => {
    Animated.timing(imgAnimValue, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: false,
    }).start();
    setShowTerms(true);
  };

  const showAnim = () => {
    Animated.timing(imgAnimValue, {
      toValue: 50,
      duration: 1000,
      useNativeDriver: false,
    }).start();
    setShowTerms(false);
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
      <CustomPressable
        type="secondary"
        marginTop={20}
        onPress={onSignInPressed}
        disable={email ? false : true}>
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

      {showTerms ? (
        <CustomText marginTop={100} maxWidth={'80%'}>
          Bằng việc đăng ký, bạn đồng ý với{' '}
          <CustomText textColor="primaryColor" textDecor="underline">
            Điều khoản
          </CustomText>{' '}
          và{' '}
          <CustomText textColor="primaryColor" textDecor="underline">
            Chính sách bảo mật
          </CustomText>{' '}
          chúng tôi.
        </CustomText>
      ) : (
        <></>
      )}
    </CustomView>
  );
}

export default App;
