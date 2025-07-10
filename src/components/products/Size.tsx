import { Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import { width } from '../../utils/constants';
import { colors } from '../../theme/colors';

const Size = () => {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  const handleSizePress = (size: string) => {
    setSelectedSize(size);
  };
  return (
    <View style={styles.container}>
      <View style={styles.titlecontainer1}>
        <View style={styles.titlecontainer}>
          <Text style={styles.title}>Size </Text>
          <View style={styles.sizeIcons}>
            <Text style={{ fontSize: 16, fontWeight: '500' }}>EU</Text>
            <Entypo name="chevron-small-down" size={24} color="black" />
          </View>
        </View>
        <View style={styles.sizeguide}>
          <Text style={styles.sizetitle}>Size Guide </Text>
          <Entypo name="chevron-small-right" size={24} color={colors.GRAY} />
        </View>
      </View>

      <View style={styles.sizecontainer}>
        {['36(S)', '38(M)', '40(L)', '42-44(XL)'].map(size => (
          <Pressable
            key={size}
            onPress={() => handleSizePress(size)}
            style={[
              styles.size,
              selectedSize == size && styles.selectedSizeBg,
            ]}>
            <Text
              style={[
                styles.text,
                selectedSize == size && styles.selectedText,
              ]}>
              {size}
            </Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
};

export default Size;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    width: width,
  },
  titlecontainer1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 5,
    padding: 10,
    marginRight: 30,
  },
  titlecontainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  sizeIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
    backgroundColor: '#F2F2F2',
    padding: 7,
    borderRadius: 50,
  },
  sizeguide: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
    backgroundColor: '#F2F2F2',
    padding: 7,
    borderRadius: 50,
    marginTop: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'black',
  },
  sizetitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
    color: colors.GRAY,
  },
  sizecontainer: {
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    marginLeft: 15,
  },
  size: {
    color: colors.DARK_GRAY,
    borderWidth: 1,
    borderColor: colors.GRAY,
    textAlign: 'center',
    padding: 10,
    borderRadius: 50,
    marginBottom: 10,
    marginRight: 25,
    flexWrap: 'nowrap',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  selectedSizeBg: {
    backgroundColor: colors.PRIMARY,
    borderColor: colors.PRIMARY,
  },
  selectedText: {
    color: colors.WHITE,
    fontWeight: 'bold',
    fontSize: 16,
  },
});
