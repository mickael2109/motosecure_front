import type { RootState } from "../../app/store";


export const getToken = (state: RootState) => state.user.token;
export const getUser = (state: RootState) => state.user.user;