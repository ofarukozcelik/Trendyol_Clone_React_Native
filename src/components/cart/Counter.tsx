import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {CounterProps} from '../../models/ui/counterProps';
import {colors} from '../../theme/colors';
import Entypo from 'react-native-vector-icons/Entypo';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '../../store';
import {decreaseQuantity, IncreaseQuantity} from '../../store/slice/cartSlice';

const Counter = ({quantity, product}: CounterProps) => {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => dispatch(decreaseQuantity(product))}>
        <Entypo name="minus" color={colors.BLACK} size={20} />
      </TouchableOpacity>
      <View style={styles.quantityContainer}>
        <Text style={styles.quantity}>{quantity}</Text>
      </View>
      <TouchableOpacity onPress={() => dispatch(IncreaseQuantity(product))}>
        <Entypo name="plus" color={colors.BLACK} size={20} />
      </TouchableOpacity>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: colors.LIGHT_GRAY,
    borderRadius: 100,
    paddingHorizontal: 5,
    elevation: 5,
    backgroundColor: colors.WHITE,
  },
  quantityContainer: {
    backgroundColor: colors.LIGHT_PINK,
    padding: 8,
    paddingHorizontal: 15,
    borderRadius: 50,
  },
  quantity: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.DARK_GRAY,
  },
});
