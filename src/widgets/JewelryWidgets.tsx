import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import WidgetsHeader from '../components/widgets/WidgetsHeader';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../store';
import {getJewelryProducts} from '../store/actions/productsActions';
import ProductItem from '../components/products/ProductItem';

const JewelryWidgets = () => {
  const {jewelry} = useSelector((state: RootState) => state.productsStr);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(getJewelryProducts({}));
  }, []);
  return (
    <View style={styles.container}>
      <WidgetsHeader title="Mücevher ve Aksesuar" />
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={jewelry}
        renderItem={({item}) => <ProductItem product={item} />}
      />
    </View>
  );
};

export default JewelryWidgets;

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
});
