import { Action, createSlice } from "@reduxjs/toolkit";
import { ClothesReducer } from "../../types";

const initialState: ClothesReducer = {
    clothes: [],
    page: 0,
    allPages: 0
}

const clotheReducer = createSlice({
    name: 'clothes',
    initialState,
    reducers: {
        getClothes: (state: ClothesReducer, action: Action): void => {

        }
    }
})

export default clotheReducer.reducer