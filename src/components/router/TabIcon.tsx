import {StyleSheet} from 'react-native';
import React from 'react';
import {TabIconProps} from '../../models/ui/tabIconProps';
import {TABNAVIGATOR} from '../../utils/routes';
import Ionicons from 'react-native-vector-icons/Ionicons';


const TabIcon: React.FC<TabIconProps> = ({route, size, color, focused}) => {
  switch (route?.name) {
    case TABNAVIGATOR.HOME:
      return (
        <Ionicons
          name={focused ? 'home' : 'home-outline'}
          color={color}
          size={size}
        />
      );

    case TABNAVIGATOR.SEARCH:
      return <Ionicons name="search" color={color} size={size} />;

    case TABNAVIGATOR.FAVORITES:
      return (
        <Ionicons
          name={focused ? 'heart' : 'heart-outline'}
          color={color}
          size={size}
        />
      );

    case TABNAVIGATOR.CART:
      return (
        <Ionicons
          name={focused ? 'cart' : 'cart-outline'}
          color={color}
          size={size}
        />
      );

    case TABNAVIGATOR.PROFILE:
      return (
        <Ionicons
          name={focused ? 'person' : 'person-outline'}
          color={color}
          size={size}
        />
      );
  }
};

export default TabIcon;

const styles = StyleSheet.create({});
