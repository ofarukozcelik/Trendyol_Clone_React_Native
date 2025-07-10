import { StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import { height } from '../../utils/constants';
import { colors } from '../../theme/colors';
import { CustomInputProps } from '../../models/ui/customInputProps';

const CustomInput = ({
  title,
  onBlur,
  onChangeText,
  secureTextEntry,
  value,
  status,
  caption,
  ...props
}: CustomInputProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TextInput
        {...props}
        value={value}
        onChangeText={onChangeText}
        onBlur={onBlur}
        secureTextEntry={secureTextEntry}
        style={[styles.textinput, status === 'danger' && styles.errorBorder]}
      />
      {caption && <Text style={styles.caption}>{caption}</Text>}
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  textinput: {
    height: height * 0.06,
    borderColor: colors.GRAY,
    backgroundColor: colors.WHITE,
    borderWidth: 1,
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
    elevation: 5,
    fontSize: 19,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: colors.GRAY,
    marginLeft: 10,
  },
  errorBorder: {
    borderColor: colors.RED,
  },

  caption: {
    fontSize: 12,
    marginTop: 2,
    marginLeft: 10,
    color: colors.RED,
  },
});
