import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../store';
import {getAllCategories} from '../store/actions/categoriesActions';
import CategoryItem from '../components/categories/CategoryItem';

const CategoriesWidgets: React.FC = () => {
  const {categories} = useSelector((state: RootState) => state.categoriesStr);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getAllCategories({}));
  }, []);
  return (
    <View style={styles.container}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={categories}
        renderItem={({item}) => <CategoryItem category={item} />}
      />
    </View>
  );
};

export default CategoriesWidgets;

const styles = StyleSheet.create({
  container: {
    marginBottom: 5,
  },
});
