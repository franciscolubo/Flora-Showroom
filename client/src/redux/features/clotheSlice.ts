import { Action, createSlice } from "@reduxjs/toolkit";
import { ClothesReducer } from "../../types";

const initialState: ClothesReducer = {
    clothes: [],
    clotheId: {
        title: "",
        description: "",
        price: 0,
        stock: 0,
        image: "",
        categorie: ""
    },
    page: 0,
    allPages: 0
}

const URL: string = "http://localhost:3001/api/clothes"

const clotheReducer = createSlice({
    name: 'clothes',
    initialState,
    reducers: {
        getClotheId: (state: any, action: any) => {
            fetch(`${URL}`, { method: 'GET' })
        }
    }
})

export default clotheReducer.reducer