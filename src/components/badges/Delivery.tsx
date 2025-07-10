import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {colors} from '../../theme/colors';
import {width} from '../../utils/constants';

const Delivery = () => {
  return (
    <View style={styles.container}>
      <FontAwesome5
        name="truck"
        size={18}
        color={colors.DARK_GRAY}
      />
      <Text style={styles.text}>Hızlı Teslimat</Text>
    </View>
  );
};

export default Delivery;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: width * 0.14,
    backgroundColor: colors.LIGHT_GRAY,
    marginVertical: 10,
    marginRight: 10,
    elevation: 2,
    borderRadius: 5,
    paddingVertical: 5,
  },
  text: {
    fontSize: 13,
    fontWeight: 'bold',
    color: colors.DARK_GRAY,
    marginTop: 5,
    textAlign: 'center',
  },
});
