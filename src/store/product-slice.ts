import { createSlice } from "@reduxjs/toolkit";
import { ProductState } from "../types/product-state";

const initialState: ProductState = {
    product: {
        name: "Dummy",
        image: "https://static.vecteezy.com/system/resources/previews/005/337/799/non_2x/icon-image-not-found-free-vector.jpg",
        tags: ["Dummy", "Summy1", "Summu2"],
        sales: []
    }
}
const productSlice = createSlice({
    name: 'product',
    initialState: initialState,
    reducers: {
        replaceData(state, action) {
            
        }
    }
});

export const productActions = productSlice.actions;

export default productSlice;