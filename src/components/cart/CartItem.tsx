import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { CartItemProps } from '../../models/ui/cartItemProps';
import { height, width } from '../../utils/constants';
import { colors } from '../../theme/colors';
import { useNavigation } from '@react-navigation/native';
import { PRODUCTSNAVIGATOR } from '../../utils/routes';
import Counter from './Counter';
import Entypo from 'react-native-vector-icons/Entypo';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store';
import { removeFromCart } from '../../store/slice/cartSlice';

const CartItem = ({ cartProduct }: CartItemProps) => {
  const navigation = useNavigation<any>();
  const dispatch = useDispatch<AppDispatch>();

  const singleProductTotal = () => {
    return cartProduct.quantity * cartProduct.price;
  };
  return (
    <Pressable
      style={styles.container}
      onPress={() =>
        navigation.navigate(PRODUCTSNAVIGATOR.PRODUCTSDETAIL, {
          productId: cartProduct.id,
        })
      }>
      <View>
        <Image
          source={
            cartProduct.image
              ? { uri: cartProduct.image }
              : require('../../assets/images/jackets.png')
          }
          style={styles.image}
        />
      </View>
      <View style={{ flex: 1, paddingHorizontal: 10 }}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{cartProduct?.title}</Text>
          <TouchableOpacity
            onPress={() => dispatch(removeFromCart(cartProduct))}>
            <Entypo name="trash" size={25} color={colors.RED} />
          </TouchableOpacity>
        </View>
        <View style={styles.quantityandpricecont}>
          <View>
            <Counter quantity={cartProduct?.quantity} product={cartProduct} />
          </View>
          <View>
            <Text style={styles.price}>{singleProductTotal()} €</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 5,
    marginTop: 10,
    borderBottomWidth: 0.5,
    borderColor: colors.GRAY,
    paddingVertical: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  image: {
    width: width * 0.2,
    height: height * 0.1,
    resizeMode: 'contain',
    marginVertical: 10,
    alignSelf: 'center',
  },
  titleContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  title: {
    color: colors.BLACK,
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 5,
    paddingHorizontal: 5,
    width: width * 0.6,
  },
  quantityandpricecont: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  quantity: {
    color: colors.GRAY,
    fontSize: 16,
    alignSelf: 'flex-start',
  },
  price: {
    fontWeight: 'bold',
    color: colors.PRIMARY,
    fontSize: 20,
  },
});
