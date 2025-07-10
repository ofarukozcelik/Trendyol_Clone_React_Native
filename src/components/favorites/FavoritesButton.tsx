import { Alert, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { colors } from '../../theme/colors';
import { ProductItemProps } from '../../models/ui/productItemProps';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import { useNavigation } from '@react-navigation/native';
import { AUTHNAVIGATOR } from '../../utils/routes';
import { addFavoriteProduct } from '../../store/slice/favoriteSlice';
import { addFavoriteOther } from '../../store/slice/productSlice';
import { addFavoriteSearch } from '../../store/slice/searchSlice';

const FavoritesButton = ({ product }: ProductItemProps) => {
  const { isLogin } = useSelector((state: RootState) => state.authStr);
  const { singleProduct } = useSelector((state: RootState) => state.productsStr);
  const navigation = useNavigation<any>();
  const dispatch = useDispatch<AppDispatch>();

  const checkLogin = () => {
    if (!isLogin) {
      Alert.alert('Login', 'Lütfen giriş yapınız.', [
        {
          text: 'Çıkış',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'Giriş',
          onPress: () => navigation.navigate(AUTHNAVIGATOR.LOGIN),
        },
      ]);
    } else {
      dispatch(addFavoriteProduct(product));
      dispatch(addFavoriteOther(product));
      dispatch(addFavoriteSearch(product));
    }
  };
  return (
    <TouchableOpacity onPress={checkLogin} style={styles.container}>
      <Ionicons
        name={product?.isFavorite ? 'heart' : 'heart-outline'}
        color={product?.isFavorite ? colors.PRIMARY : colors.GRAY}
        size={25}
      />
    </TouchableOpacity>
  );
};

export default FavoritesButton;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 4,
    right: 8,
    margin: 5,
    zIndex: 99,
    borderWidth: 0.5,
    borderColor: colors.LIGHT_GRAY,
    padding: 5,
    borderRadius: 50,
    elevation: 6,
    backgroundColor: colors.WHITE,
  },
});
