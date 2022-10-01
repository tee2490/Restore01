import { Basket } from "./Basket";

export interface User {
    email: string;
    token: string;
    basket?: Basket;
} 
