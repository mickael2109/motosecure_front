export interface UserInterface {
    id: number; 
    name: string;
    pseudo: string;
    email: string;
    password: string;
    phone: string;
    adresse: string;
    url: string;
    status: boolean;
    createdAt: string;
    updatedAt: string;
}



export interface loginInterface {
    email: string;
    password: string;
}

export interface createInterface {
  email: string;
  password: string;
  confirm_mdp: string;
}