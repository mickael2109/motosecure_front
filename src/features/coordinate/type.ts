import type { CoordinateInterface } from "../../types/CoordinateInterface";

export interface CoordinateState {
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
    coordinate: CoordinateInterface[];
}

