import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Notification } from '../../models/data/notificationState';
import { colors } from '../../theme/colors';

interface Props {
  item: Notification;
  onPress: () => void;
}

const NotificationCard: React.FC<Props> = ({ item, onPress }) => {
  return (
    <Pressable
      style={[styles.container, item.read && styles.read]}
      onPress={onPress}
    >
      <Ionicons
        name={item.read ? 'notifications' : 'notifications-outline'}
        size={24}
        color={item.read ? colors.GRAY : colors.PRIMARY}
      />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.desc}>{item.desc}</Text>
      </View>
      <Text style={styles.time}>{item.time}</Text>
    </Pressable>
  );
};

export default NotificationCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 12,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    alignItems: 'center',
  },
  read: {
    backgroundColor: '#f2f2f2',
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  desc: {
    fontSize: 14,
    color: '#555',
  },
  time: {
    fontSize: 12,
    color: '#999',
  },
});
