import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';
import { Notification } from '../models/data/notificationState';

export const useNotifications = () => {
    const [notifications, setNotifications] = useState<Notification[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchNotifications = async () => {
            try {
                const snapshot = await getDocs(collection(db, 'notifications'));
                const data = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...(doc.data() as Omit<Notification, 'id'>),
                }));
                setNotifications(data);
            } catch (error) {
                console.error('Bildirimler alınamadı:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchNotifications();
    }, []);

    return { notifications, loading };
};
