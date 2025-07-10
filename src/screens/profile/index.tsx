import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../../store';
import {getUserInfo} from '../../store/actions/userActions';
import Avatar from '../../components/user/Avatar';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';
import {colors} from '../../theme/colors';
import Button from '../../components/ui/Button';
import {userLogOut} from '../../store/actions/authActions';
import {useNavigation} from '@react-navigation/native';
import {AUTHNAVIGATOR} from '../../utils/routes';

const Profile = () => {
  const {user} = useSelector((state: RootState) => state.userStr);
  const {isLogin} = useSelector((state: RootState) => state.authStr);
  const dispatch = useDispatch<AppDispatch>();
  const navigation = useNavigation<any>();

  useEffect(() => {
    dispatch(getUserInfo({id: 6}));
  }, []);
  return (
    <ScrollView style={defaultScreenStyle.container}>
      {isLogin ? (
        <View>
          <View style={styles.avatarContainer}>
            <Avatar
              name={user?.name.firstname}
              surname={user?.name.lastname}
              size={150}
            />
            <Text style={styles.name}>
              {user?.name.firstname} {user?.name.lastname}
            </Text>
            <Text style={styles.email}>{user?.email}</Text>
            <Text style={styles.address}>{user?.address?.street}</Text>
            <Text style={styles.address}>
              {user?.address?.city}, {user?.address?.zipcode}
            </Text>
          </View>
          <View style={styles.buttons}>
            <Button title="Profili Düzenle" btnsize="large" onPress={() => {}} />
            <Button
              title="Çıkış Yap"
              btnsize="large"
              onPress={() => {
                dispatch(userLogOut());
              }}
            />
          </View>
        </View>
      ) : (
        <View style={styles.loginpage}>
          <Text style={styles.text}>Lütfen giriş yapınız.</Text>
          <Button
            title="Giriş Yap"
            btnsize="large"
            onPress={() => {
              navigation.navigate(AUTHNAVIGATOR.LOGIN);
            }}
          />
        </View>
      )}
    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  avatarContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
    flex: 1,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 15,
    color: colors.BLACK,
  },
  email: {
    fontSize: 18,
    marginVertical: 5,
  },
  address: {
    fontSize: 16,
    marginVertical: 5,
  },
  buttons: {
    marginVertical: 30,
  },
  loginpage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 50,
    backgroundColor: colors.WHITE,
    padding: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
});
