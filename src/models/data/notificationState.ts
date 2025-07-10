interface Notification {
    title: string;
    desc: string;
    time: string;
    id: string;
    read: boolean;
}
interface NotificationState {
    notifications: Notification[];
    pending: boolean;
    error: any;
}

export type { NotificationState, Notification }