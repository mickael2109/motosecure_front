import type { NotificationInterface } from "../../types/NotificationInterface";




export interface NotificationState {
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
    notification: NotificationInterface[];
}

