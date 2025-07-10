import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import CategoriesWidgets from '../../widgets/CategoriesWidgets';
import { defaultScreenStyle } from '../../styles/defaultScreenStyle';
import IntroductionWidgets from '../../widgets/IntroductionWidgets';
import BestSeller from '../../widgets/BestSeller';
import JewelryWidgets from '../../widgets/JewelryWidgets';
import ElectronicsWidgets from '../../widgets/ElectronicsWidgets';
import BrandsWidgets from '../../widgets/BrandsWidgets';

const Home: React.FC = () => {


  return (
    <SafeAreaView style={defaultScreenStyle.container} edges={['left', 'right', 'bottom']}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <CategoriesWidgets />
        <IntroductionWidgets />
        <BestSeller />
        <BrandsWidgets />
        <JewelryWidgets />
        <ElectronicsWidgets />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
