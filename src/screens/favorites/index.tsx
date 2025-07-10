import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../../store';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';
import ProductItem from '../../components/products/ProductItem';

type Props = {};

const Favorites = (props: Props) => {
  const {favorites} = useSelector((state: RootState) => state.favoritesStr);
  return (
    <View style={defaultScreenStyle.container}>
      <FlatList
        data={favorites}
        numColumns={2}
        renderItem={({item}) => <ProductItem product={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Favorites;

const styles = StyleSheet.create({});
