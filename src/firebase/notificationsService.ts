import { doc, updateDoc } from 'firebase/firestore';
import { db } from './firebaseConfig';

export const updateNotificationReadStatus = async (id: string) => {
    try {
        const notificationRef = doc(db, 'notifications', id);
        await updateDoc(notificationRef, {
            read: true,
        });
    } catch (error) {
        console.error('Bildirim okunmuş olarak işaretlenemedi:', error);
    }
};
