import type { MotoInterface } from "./MotoInterface";

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

