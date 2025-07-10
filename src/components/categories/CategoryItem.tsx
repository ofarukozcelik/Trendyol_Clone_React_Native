import {Pressable, StyleSheet, Text} from 'react-native';
import React from 'react';
import {CategoryItemProps} from '../../models/ui/categoryItemProps';
import {colors} from '../../theme/colors';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../../store';
import {setCategory} from '../../store/slice/categoriesSlice';

const CategoryItem = ({category}: CategoryItemProps) => {
  const {selectedCategory} = useSelector(
    (state: RootState) => state.categoriesStr,
  );

  const dispatch = useDispatch<AppDispatch>();

  return (
    <Pressable
      style={[
        styles.container,
        selectedCategory == category
          ? styles.selectedContainer
          : styles.unselectedContainer,
      ]}
      onPress={() => dispatch(setCategory(category))}>
      <Text
        style={
          selectedCategory == category
            ? styles.selectedTitle
            : styles.unselectedtitle
        }>
        {category}
      </Text>
    </Pressable>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    marginLeft: 7,
    borderRadius: 100,
    borderWidth: 0.9,
    borderColor: colors.LIGHT_GRAY,
    paddingHorizontal: 15,
    elevation: 5,
  },
  selectedTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 10,
    color: colors.WHITE,
  },
  unselectedtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 10,
    color: colors.BLACK,
  },
  selectedContainer: {
    backgroundColor: colors.PRIMARY,
    color: colors.WHITE,
    elevation: 5,
  },
  unselectedContainer: {
    backgroundColor: colors.WHITE,
    color: colors.BLACK,
    elevation: 5,
  },
});
