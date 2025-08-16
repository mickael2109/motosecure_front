import type { MotoInterface } from "./MotoInterface";
import type { UserInterface } from "./UserInterface";

export interface NotificationInterface {
    id: number; 
    motoId: number;
    userId: number;
    title: string;
    description: string;
    User: UserInterface;
    Moto: MotoInterface;
    createdAt: string;
    updatedAt: string;
}


export interface OnOffMotoInterface {
    id: number;
    status: boolean;
}
