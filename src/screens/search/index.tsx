import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../../store';
import {fetchProducts} from '../../store/actions/searchActions';
import {filterAllProducts} from '../../store/slice/searchSlice';
import ProductItem from '../../components/products/ProductItem';
import {colors} from '../../theme/colors';

const SearchScreen = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch<AppDispatch>();
  const {filteredProducts, status} = useSelector(
    (state: RootState) => state.searchStr,
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const handleSearch = (text: string) => {
    setQuery(text);
    dispatch(filterAllProducts(text));
  };
  return (
    <View style={defaultScreenStyle.container}>
      <TextInput
        value={query}
        onChangeText={handleSearch}
        placeholder="Search..."
        style={styles.textinput}
      />

      {status === 'loading' && (
        <ActivityIndicator size="large" color={colors.PRIMARY} />
      )}
      {status === 'failed' && (
        <Text>An error occurred while loading products!</Text>
      )}

      {filteredProducts && (
        <FlatList
          data={filteredProducts}
          numColumns={2}
          renderItem={({item}) => <ProductItem product={item} />}
        />
      )}
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  textinput: {
    height: 50,
    borderColor: colors.LIGHT_GRAY,
    borderWidth: 1,
    paddingHorizontal: 10,
    marginVertical: 10,
    borderRadius: 10,
    fontSize: 20,
  },
});
