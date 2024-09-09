import { createSelector } from "@reduxjs/toolkit";
import { selfSelector } from "./selfSelector";

export const getAuthenticatedAdminSelector = createSelector(
    selfSelector,
    (state) => {
        return state.admin
    }
) 