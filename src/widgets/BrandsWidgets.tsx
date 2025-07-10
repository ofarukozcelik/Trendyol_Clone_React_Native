import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import WidgetsHeader from '../components/widgets/WidgetsHeader';
import {width} from '../utils/constants';

const brandsImages = [
  {id: '1', src: require('../assets/brandsImages/lacoste.png')},
  {id: '2', src: require('../assets/brandsImages/Calvin-Klein-Logo.png')},
  {id: '3', src: require('../assets/brandsImages/u.s.polo.jpg')},
  {id: '4', src: require('../assets/brandsImages/tommy-logo.png')},
  {id: '5', src: require('../assets/brandsImages/adidas.png')},
  {id: '6', src: require('../assets/brandsImages/guess-logo.png')},
  {id: '7', src: require('../assets/brandsImages/Skechers.png')},
];

const BrandsWidgets = () => {
  return (
    <View>
      <WidgetsHeader title="Popüler Markalar" />
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={brandsImages}
        renderItem={({item}) => (
          <View style={styles.brandContainer}>
            <Image source={item.src} style={styles.brandImage} />
          </View>
        )}
      />
    </View>
  );
};

export default BrandsWidgets;

const styles = StyleSheet.create({
  brandContainer: {
    marginHorizontal: 5,
    borderRadius: 10,
    backgroundColor: '#ffff',
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    marginBottom: 30,
    elevation: 3,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  brandImage: {
    width: width * 0.25,
    height: width * 0.25,
    resizeMode: 'contain',
  },
});
