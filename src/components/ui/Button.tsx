import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { colors } from '../../theme/colors';
import { height, width } from '../../utils/constants';
import { AddBtnProps } from '../../models/ui/addBtnProps';

const Button = ({ btnsize, onPress, ...props }: AddBtnProps) => {
  const { title, disabled } = props;
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      {...props}
      style={{
        width: btnsize == 'small' ? width * 0.35 : '100%',
      }}>
      <Text style={[styles.button, { fontSize: btnsize == 'small' ? 15 : 19 }]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
export type { AddBtnProps };

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.PRIMARY,
    color: colors.WHITE,
    padding: 15,
    borderRadius: 5,
    fontWeight: 'bold',
    textAlign: 'center',
    minHeight: height * 0.05,
    flexWrap: 'nowrap',
    marginTop: 10,
  },
});
