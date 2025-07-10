import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { colors } from '../../theme/colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { width } from '../../utils/constants';

const Discount = () => {
  return (
    <View style={styles.container}>
      <MaterialIcons name="discount" color={colors.PRIMARY} size={25} />
      <Text style={styles.text}>6% İndirim</Text>
    </View>
  );
};

export default Discount;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: width * 0.14,
    backgroundColor: colors.LIGHT_PINK,
    marginVertical: 10,
    marginRight: 10,
    elevation: 2,
    borderRadius: 5,
    paddingVertical: 5,
  },
  text: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.PRIMARY,
    marginTop: 5,
    textAlign: 'center',
  },
});
