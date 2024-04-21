import { createSlice } from "@reduxjs/toolkit";
import { ProductState } from "../types/product-state";

/* Set the initial state of the redux state */
const initialState: ProductState = {
    name: "Dummy",
    image: "https://static.vecteezy.com/system/resources/previews/005/337/799/non_2x/icon-image-not-found-free-vector.jpg",
    description: "Dummy text",
    tags: ["Dummy", "Summy1", "Summu2"],
    sales: []
}

/*
 * Slice creates the react redux component.
 */
const productSlice = createSlice({
    name: 'product',
    initialState: initialState,
    reducers: {
        replaceData(state, action) {
            state.name = action.payload.title;
            state.description = action.payload.subtitle;
            state.image = action.payload.image;
            state.tags = action.payload.tags;
            state.sales = action.payload.sales
        }
    }
});

export const productActions = productSlice.actions;

export default productSlice;