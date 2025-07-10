import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import { useNotifications } from '../../hooks/useNotifications';
import NotificationCard from '../../components/notifications/NotificationCard';
import { Notification } from '../../models/data/notificationState';
import { updateNotificationReadStatus } from '../../firebase/notificationsService';

const NotificationScreen = () => {
    const { notifications: fetchedNotifications, loading } = useNotifications();
    const [notifications, setNotifications] = useState<Notification[]>([]);

    // İlk veri geldiğinde state'e ata
    useEffect(() => {
        setNotifications(fetchedNotifications);
    }, [fetchedNotifications]);

    const handlePress = async (id: string) => {
        // Eğer zaten read ise işlem yapma
        const index = notifications.findIndex(n => n.id === id);
        if (notifications[index]?.read) return;

        // Firestore'da güncelle
        await updateNotificationReadStatus(id);

        // UI state güncelle (local)
        const updated = [...notifications];
        updated[index] = { ...updated[index], read: true };
        setNotifications(updated);
    };

    if (loading) {
        return <Text style={styles.text}>Yükleniyor...</Text>;
    }

    return (
        <FlatList
            data={notifications}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <NotificationCard item={item} onPress={() => handlePress(item.id)} />
            )}
            ListEmptyComponent={<Text style={styles.text}>Hiç bildirimin yok.</Text>}
        />
    );
};

export default NotificationScreen;

const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        marginTop: 20,
    },
});
