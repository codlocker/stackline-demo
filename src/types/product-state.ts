import { SalesEntity } from "./sales-entity";

export interface ProductState {
    name: string;
    description: string;
    image: string;
    tags: string[];
    sales: SalesEntity[];
}