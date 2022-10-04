import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CLOTHES, ClothesAndPages, ClothesReducer } from "../../types";
import { AppThunk } from "../store";

const initialState: ClothesReducer = {
    clothes: [],
    clotheId: {
        _id: "",
        title: "",
        description: "",
        price: 0,
        stock: 0,
        image: "",
        categorie: "",
        size: []
    },
    page: 1,
    allPages: 0
}


const clotheReducer = createSlice({
    name: 'clothes',
    initialState,
    reducers: {
        getClothe: (state, action: PayloadAction<CLOTHES>) => {
            state.clotheId = action.payload
        },
        getAllClothe: (state, action: PayloadAction<ClothesAndPages>) => {
            state.clothes = action.payload.clothes
            state.allPages = action.payload.allPages
            state.page = action.payload.page
        }

    },
})

export const { getClothe, getAllClothe } = clotheReducer.actions

const URL: string = "http://localhost:3001/api/clothes"

export const fetchIdClothes = (id: string): AppThunk => {
    return async (dispatch) => {
        try {
            const response = await fetch(`${URL}/${id}`, { method: 'GET' })
            const data: CLOTHES = await response.json()
            return dispatch(getClothe(data))
        } catch (err) {
            console.log('FetchIdClothes ERROR', err)
        }
    }
}

export const fetchClothes = (page: number): AppThunk => {
    return async (dispatch) => {
        try {
            const response = await fetch(`${URL}/pagination`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "page": page
                })
            })
            const data: ClothesAndPages = await response.json()
            return dispatch(getAllClothe({ clothes: data.clothes, allPages: data.allPages, page: data.page }))
        } catch (err) {
            console.log('FetchClothes ERROR', err)
        }
    }
}

export const postClothes = (clothe: CLOTHES): AppThunk => {
    return async () => {
        try {
            await fetch(URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(clothe)
            })
        }
        catch (err) {
            console.log('postClothes ERROR', err)
        }
    }
}

export default clotheReducer.reducer