import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {WidgetsHeaderProps} from '../../models/ui/widgetsProps';

const WidgetsHeader = ({title}: WidgetsHeaderProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default WidgetsHeader;

const styles = StyleSheet.create({
  container: {
    padding: 5,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
