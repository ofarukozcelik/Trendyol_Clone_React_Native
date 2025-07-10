import { Pressable, StyleSheet, View } from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { colors } from '../../theme/colors';
import { useNavigation } from '@react-navigation/native';



const HeaderRight: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate('Bildirimler')} 
      >
        <Ionicons name="notifications-outline" color={colors.BLACK} size={30} />
      </Pressable>

      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate('Mesajlar')}
      >
        <Ionicons name="mail-outline" color={colors.BLACK} size={30} />
      </Pressable>
    </View>
  );
};


export default HeaderRight;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  button: {
    marginRight: 10,
  },
});
