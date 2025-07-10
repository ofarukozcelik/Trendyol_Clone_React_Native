import {
  Alert,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';
import CustomInput from '../../components/ui/CustomInput';
import Button from '../../components/ui/Button';
import {height, width} from '../../utils/constants';
import {colors} from '../../theme/colors';
import {Formik} from 'formik';
import {LoginFormProps} from '../../models/ui/loginFormProps';
import LoginSchema from '../../utils/validationSchema';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../../store';
import {userLogin} from '../../store/actions/authActions';
import {useNavigation} from '@react-navigation/native';

type Props = {};

const LoginScreen = (props: Props) => {
  const {isLogin, pending} = useSelector((state: RootState) => state.authStr);
  const navigation = useNavigation<any>();
  const dispatch = useDispatch<AppDispatch>();

  const initialValues: LoginFormProps = {
    username: 'david_r',
    password: '3478*#54',
  };

  return (
    <SafeAreaView style={defaultScreenStyle.container}>
      <ScrollView>
        <Formik
          initialValues={initialValues}
          validationSchema={LoginSchema}
          onSubmit={values => {
            dispatch(userLogin(values));
            navigation.goBack();
          }}>
          {({values, errors, handleChange, handleBlur, handleSubmit}) => (
            <View>
              <Image
                source={require('../../assets/images/trendyol2.png')}
                style={styles.image}
              />
              <View>
                <CustomInput
                  title="Kullanıcı Adı"
                  onChangeText={handleChange('username')}
                  onBlur={handleBlur('username')}
                  value={values.username}
                  caption={errors.username}
                  status={errors.username ? 'danger' : 'success'}
                />
                <CustomInput
                  title="Şifre"
                  value={values.password}
                  onChangeText={handleChange('password')}
                  secureTextEntry
                  onBlur={handleBlur('password')}
                  caption={errors.password}
                  status={errors.password ? 'danger' : 'success'}
                />
                <Text style={styles.forgotPassword}>Parolanızı mı unuttunuz ?</Text>
                <View style={styles.btn}>
                  <Button
                    disabled={pending}
                    title="Giriş Yap"
                    btnsize="large"
                    onPress={handleSubmit}
                  />
                </View>
              </View>
            </View>
          )}
        </Formik>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  image: {
    width: width * 0.4,
    height: width * 0.4,
    alignSelf: 'center',
    marginTop: 20,
  },
  btn: {
    marginTop: height * 0.04,
  },
  forgotPassword: {
    marginTop: height * 0.01,
    textAlign: 'right',
    color: colors.RED,
    fontSize: 16,
    fontWeight: 'bold',
    marginRight:10
  },
});
