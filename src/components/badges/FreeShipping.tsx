import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {colors} from '../../theme/colors';
import {width} from '../../utils/constants';

const FreeShipping = () => {
  return (
    <View style={styles.container}>
      <Ionicons name="cube" size={18} color={colors.GREEN} />
      <Text style={styles.text}>Ücretsiz Kargo</Text>
    </View>
  );
};

export default FreeShipping;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: width * 0.14,
    backgroundColor: colors.LIGHT_GREEN,
    marginVertical: 10,
    marginRight: 10,
    elevation: 2,
    borderRadius: 5,
    paddingVertical: 5,
  },
  text: {
    fontSize: 13,
    fontWeight: 'bold',
    color: colors.GREEN,
    marginTop: 5,
    textAlign: 'center',
  },
});
