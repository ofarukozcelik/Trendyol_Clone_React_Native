import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import WidgetsHeader from '../components/widgets/WidgetsHeader';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../store';
import {getPopularProducts} from '../store/actions/productsActions';
import ProductItem from '../components/products/ProductItem';

type Props = {};

const PopularProducts = (props: Props) => {
  const {popularProducts} = useSelector(
    (state: RootState) => state.productsStr,
  );
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(getPopularProducts({}));
  }, []);
  return (
    <View style={styles.container}>
      <WidgetsHeader title="Popüler Ürünler" />
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={popularProducts}
        renderItem={({item}) => <ProductItem product={item} />}
      />
    </View>
  );
};

export default PopularProducts;

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
});
