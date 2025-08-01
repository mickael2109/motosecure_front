import type { MotoInterface } from "../../types/MotoInterface";




export interface MotoState {
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
    moto: MotoInterface[];
}

