import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {colors} from '../../theme/colors';

type Props = {};

const EmptyCart = (props: Props) => {
  return (
    <View style={styles.container}>
      <Ionicons name="cart-outline" color={colors.PRIMARY} size={50} />
    </View>
  );
};

export default EmptyCart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.LIGHT_GRAY,
    padding: 40,
    borderRadius: 100,
    marginBottom: 20,
    backgroundColor: colors.LIGHT_PINK,
    elevation: 5,
  },
});
