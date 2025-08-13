import type { CoordinateHistoryInterface, CoordinateHistoryMapNow, CoordinateInterface } from "../../types/CoordinateInterface";

export interface CoordinateState {
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
    coordinate: CoordinateInterface[];
    coordinateHisto: CoordinateHistoryMapNow | null;
    coordinateToday: CoordinateHistoryInterface | null;
}

