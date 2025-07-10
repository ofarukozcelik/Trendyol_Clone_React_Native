import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import WidgetsHeader from '../components/widgets/WidgetsHeader';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../store';
import {getElectronicProducts} from '../store/actions/productsActions';
import ProductItem from '../components/products/ProductItem';

type Props = {};

const ElectronicsWidgets = (props: Props) => {
  const {electronics} = useSelector((state: RootState) => state.productsStr);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getElectronicProducts({}));
  }, []);

  return (
    <View style={styles.container}>
      <WidgetsHeader title="Elektronik" />
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={electronics}
        renderItem={({item}) => <ProductItem product={item} />}
      />
    </View>
  );
};

export default ElectronicsWidgets;

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
});
