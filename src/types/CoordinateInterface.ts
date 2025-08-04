import type { MotoInterface } from "./MotoInterface";

export type CoordinateHistoryMap = Record<string, CoordinateHistoryInterface>;

export interface CoordinateHistoryInterface {
    data: CoordinateDataInterface; 
    coord: CoordinateInterface[];
}



export interface CoordinateDataInterface {
    date: string;
    km: string;
}


export interface CoordinateInterface {
    id: number; 
    motoId: number;
    long: number;
    lat: number;
    speed: number;
    date: string;
    Moto: MotoInterface
    createdAt: string;
    updatedAt: string;
}




