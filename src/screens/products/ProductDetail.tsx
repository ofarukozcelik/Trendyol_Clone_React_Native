import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import { getProductsDetail } from '../../store/actions/productsActions';
import { defaultScreenStyle } from '../../styles/defaultScreenStyle';
import { height, width } from '../../utils/constants';
import { colors } from '../../theme/colors';
import Button from '../../components/ui/Button';
import Rating from '../../components/products/Rating';
import Size from '../../components/products/Size';
import FavoritesButton from '../../components/favorites/FavoritesButton';
import FreeShipping from '../../components/badges/FreeShipping';
import Discount from '../../components/badges/Discount';
import Delivery from '../../components/badges/Delivery';
import BestSellerBadges from '../../components/badges/BestSellerBadges';
import { addToCart } from '../../store/slice/cartSlice';

const ProductDetail = ({ route }: any) => {
  const { productId, product } = route.params;
  console.log('productDetail id', route.params.productId);

  const singleProduct = useSelector(
    (state: RootState) => state.productsStr.singleProduct,
    shallowEqual,
  );
  console.log('singleProduct id: ' + singleProduct.id);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getProductsDetail({ id: productId }));
  }, []);
  return (
    <View style={defaultScreenStyle.container}>
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <FavoritesButton product={singleProduct} />
          <Image
            source={
              singleProduct?.image
                ? { uri: singleProduct?.image }
                : require('../../assets/images/jackets.png')
            }
            style={styles.image}
          />
          <Text style={styles.category}>{singleProduct?.category}</Text>
          <Text style={styles.title}>{singleProduct?.title}</Text>
          {singleProduct.rating && (
            <Rating rating={singleProduct.rating} rateSize="large" />
          )}
          <Size />

          <View style={styles.badges}>
            <FreeShipping />
            <Discount />
            <Delivery />
            <BestSellerBadges />
          </View>

          <Text style={styles.description}>{singleProduct?.description}</Text>
        </ScrollView>
      </View>

      <View style={styles.priceContainer}>
        <View style={styles.left}>
          <Text style={styles.price}>{singleProduct?.price} € </Text>

          <Text style={styles.info}>Ücretsiz Kargo</Text>
        </View>
        <View style={styles.right}>
          <Button
            btnsize="large"
            title={'SEPETE EKLE'}
            onPress={() => dispatch(addToCart(singleProduct))}
          />
        </View>
      </View>
    </View>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    flex: 1,
    paddingTop: 15,
    width: width,
  },
  image: {
    width: width,
    height: height * 0.3,
    resizeMode: 'contain',
    marginTop: 25,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
    color: colors.BLACK,
  },
  description: {
    fontSize: 16,
    marginVertical: 10,
    flexWrap: 'wrap',
  },
  category: {
    fontSize: 16,
    color: colors.PRIMARY,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  priceContainer: {
    height: height * 0.09,
    borderTopWidth: 0.5,
    borderColor: colors.DARK_GRAY,
    flexDirection: 'row',
  },
  right: {
    flex: 2,
    justifyContent: 'center',
  },
  left: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  info: {
    fontSize: 16,
    color: colors.GREEN,
    fontWeight: 'bold',
  },
  price: {
    color: colors.PRIMARY,
    fontSize: 23,
    fontWeight: 'bold',
  },
  badges: {
    flexDirection: 'row',
    marginLeft: 10,
  },
});
