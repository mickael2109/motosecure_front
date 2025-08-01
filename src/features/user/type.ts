import type { UserInterface } from "../../types/UserInterface";



export interface UserState {
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
    token: string | null;
    user: UserInterface | null;
}

