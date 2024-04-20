import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./product-slice";

const store = configureStore({
    reducer: {
        product: productSlice.reducer
    }
});

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch