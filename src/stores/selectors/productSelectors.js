import { createSelector } from "@reduxjs/toolkit";
import { selfSelector } from "./selfSelector";

export const getAllProductsSelector = createSelector(
    selfSelector,
    (state) => {
        return state.products
    }
)