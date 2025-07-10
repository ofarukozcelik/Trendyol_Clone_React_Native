import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ProductItemProps} from '../../models/ui/productItemProps';
import {height, width} from '../../utils/constants';
import {colors} from '../../theme/colors';
import {useNavigation} from '@react-navigation/native';
import {PRODUCTSNAVIGATOR} from '../../utils/routes';
import FavoritesButton from '../favorites/FavoritesButton';
import Rating from './Rating';
import Button from '../ui/Button';
import {addToCart} from '../../store/slice/cartSlice';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '../../store';

const ProductItem = ({product}: ProductItemProps) => {
  const navigation = useNavigation<any>();
  const dispatch = useDispatch<AppDispatch>();
  return (
    <Pressable
      onPress={() =>
        navigation.navigate(PRODUCTSNAVIGATOR.PRODUCTSDETAIL, {
          productId: product.id,
        })
      }
      style={styles.container}>
      <FavoritesButton product={product} />
      <Image
        source={
          product.image
            ? {uri: product.image}
            : require('../../assets/images/jackets.png')
        }
        style={styles.image}
      />

      <Text numberOfLines={2} style={styles.title}>
        {product.title}
      </Text>
      <Text>{product.category}</Text>
      {product.rating && <Rating rating={product.rating} rateSize="small" />}
      <Text numberOfLines={2} style={styles.price}>
        {product.price} €
      </Text>
      <Button
        btnsize="small"
        title="Sepete Ekle"
        onPress={() => dispatch(addToCart(product))}
      />
    </Pressable>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    width: width * 0.45,

    borderWidth: 0.9,
    borderColor: colors.LIGHT_GRAY,
    margin: 5,
    borderRadius: 5,
  },
  image: {
    width: width * 0.4,
    height: height * 0.2,
    resizeMode: 'contain',
    marginVertical: 10,
    alignSelf: 'center',
  },
  title: {
    fontSize: 17,
    fontWeight: '500',
    color: colors.BLACK,
  },
  price: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.PRIMARY,
    marginTop: 5,
  },
});
