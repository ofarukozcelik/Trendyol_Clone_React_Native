import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { colors } from '../../theme/colors';
import { width } from '../../utils/constants';

const BestSellerBadges = () => {
  return (
    <View style={styles.container}>
      <FontAwesome5
        name="medal"
        iconStyle="solid"
        size={18}
        color={colors.YELLOW}
      />
      <Text style={styles.text}>Çok Satanlar</Text>
    </View>
  );
};

export default BestSellerBadges;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: width * 0.14,
    backgroundColor: colors.BLUE,
    marginVertical: 10,
    marginRight: 10,
    elevation: 2,
    borderRadius: 5,
    paddingVertical: 5,
  },
  text: {
    fontSize: 13,
    fontWeight: 'bold',
    color: colors.DARK_BLUE,
    marginTop: 5,
    textAlign: 'center',
  },
});
