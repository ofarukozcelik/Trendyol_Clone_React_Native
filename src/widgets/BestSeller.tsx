import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import WidgetsHeader from '../components/widgets/WidgetsHeader';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store';
import { getBestSellerProducts } from '../store/actions/productsActions';
import ProductItem from '../components/products/ProductItem';

const BestSeller = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { bestSellerProducts } = useSelector(
    (state: RootState) => state.productsStr,
  );
  useEffect(() => {
    dispatch(getBestSellerProducts({}));
  }, []);
  return (
    <View style={styles.container}>
      <WidgetsHeader title="Çok Satanlar" />
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={bestSellerProducts}
        renderItem={({ item }) => <ProductItem product={item} />}
      />
    </View>
  );
};

export default BestSeller;

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    marginBottom: 30,
  },
});
