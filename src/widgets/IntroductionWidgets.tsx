import {FlatList, Image, Pressable, StyleSheet, View} from 'react-native';
import React from 'react';
import {width} from '../utils/constants';
import {useNavigation} from '@react-navigation/native';
import {PRODUCTSNAVIGATOR} from '../utils/routes';

const images = [
  {id: '1', src: require('../assets/images/page1.png')},
  {id: '2', src: require('../assets/images/page2.png')},
  {id: '3', src: require('../assets/images/page3.png')},
  {id: '4', src: require('../assets/images/page4.png')},
];

const IntroductionWidgets = () => {
  const naigation = useNavigation<any>();
  return (
    <View>
      <FlatList
        data={images}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <Pressable
            style={styles.container}
            onPress={() => naigation.navigate(PRODUCTSNAVIGATOR.PRODUCTSLIST)}>
            <Image
              source={item.src}
              resizeMode="stretch"
              style={styles.image}
            />
          </Pressable>
        )}
      />
    </View>
  );
};

export default IntroductionWidgets;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 5,
    paddingVertical: 5,
  },
  image: {
    width: width * 0.97,
    height: width * 0.5,
    borderRadius: 10,
  },
});
