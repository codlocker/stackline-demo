import { SalesEntity } from "./sales-entity";

/* Interface for setting Product State throughout the code */
export interface ProductState {
    name: string;
    description: string;
    image: string;
    tags: string[];
    sales: SalesEntity[];
}