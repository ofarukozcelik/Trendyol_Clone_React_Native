import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../../store';
import {getAllProducts} from '../../store/actions/productsActions';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';
import ProductItem from '../../components/products/ProductItem';

import CategoriesWidgets from '../../widgets/CategoriesWidgets';
import {colors} from '../../theme/colors';

type Props = {};

const ProductList = (props: Props) => {
  const {products, pending} = useSelector(
    (state: RootState) => state.productsStr,
  );
  const {selectedCategory} = useSelector(
    (state: RootState) => state.categoriesStr,
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    console.log('calisti');

    dispatch(getAllProducts({category: selectedCategory}));
  }, [selectedCategory]);
  return (
    <SafeAreaView style={defaultScreenStyle.container}>
      <CategoriesWidgets />
      {pending ? (
        <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
          <ActivityIndicator size={'large'} color={colors.PRIMARY} />
        </View>
      ) : (
        <FlatList
          keyExtractor={item => item.id.toString()}
          contentContainerStyle={{alignItems: 'center'}}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          style={{marginTop: 5}}
          data={products}
          renderItem={({item}) => <ProductItem product={item} />}
        />
      )}
    </SafeAreaView>
  );
};

export default ProductList;

const styles = StyleSheet.create({});
