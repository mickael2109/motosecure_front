import type { UserInterface } from "./UserInterface";

export interface MotoInterface {
    id: number; 
    num_serie: string;
    pseudo: string;
    userId: number;
    status: boolean;
    isVibration: boolean;
    lastLat: number;
    lastLong: number;
    lastSpeed: number;
    User: UserInterface
    createdAt: string;
    updatedAt: string;
}


export interface OnOffMotoInterface {
    id: number;
    status: boolean;
}
