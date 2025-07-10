import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { colors } from '../../theme/colors';
import { RatingProps } from '../../models/ui/rateProps';
import { StyleSheet, Text, View } from 'react-native';

const Rating = ({ rating, rateSize }: RatingProps) => {

  const rate = rating?.rate ?? 0;
  const count = rating?.count ?? 0;


  const fullstar = Math.max(0, Math.floor(rate));
  const halfstar = rate % 1 >= 0.5;
  const emptystar = Math.max(0, 5 - fullstar - (halfstar ? 1 : 0));


  return (
    <View style={styles.container}>
      <Text style={[styles.rate, { fontSize: rateSize == 'small' ? 15 : 20 }]}>
        {rate.toFixed(1)}
      </Text>
      <View style={styles.starts}>
        {Array.from({ length: fullstar }).map((_, index) => (
          <Ionicons
            key={`full-${index}`}
            name="star"
            size={rateSize == 'small' ? 15 : 20}
            color="gold"
          />
        ))}
        {halfstar && (
          <Ionicons
            name="star-half"
            size={rateSize == 'small' ? 15 : 20}
            color="gold"
          />
        )}
        {Array.from({ length: emptystar }).map((_, index) => (
          <Ionicons
            key={`empty-${index}`}
            name="star-outline"
            size={rateSize == 'small' ? 15 : 20}
            color="lightgray"
          />
        ))}
      </View>
      {rateSize == 'small' ? null : (
        <Text style={styles.count}>| {count} Reviews</Text>
      )}
    </View>
  );
};

export default Rating;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  rate: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.PRIMARY,
  },
  starts: {
    flexDirection: 'row',
  },
  count: {
    fontSize: 16,
    color: colors.GRAY,
    marginLeft: 5,
    fontWeight: '500',
  },
});
