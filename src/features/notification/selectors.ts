import type { RootState } from "../../app/store";


export const selectAllNotificationUser = (state: RootState) => state.notification.notification;