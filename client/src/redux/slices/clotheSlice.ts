import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CATEGORIES, CLOTHES, ClothesAndPages, ClothesReducer } from "../../types";
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
    categories: [],
    page: 1,
    allPages: 0,
    cat: ""
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
            state.cat = action.payload.cat
        },
        getCategorieClothes: (state, action: PayloadAction<CATEGORIES>) => {
            state.categories = action.payload.categories
        },
    },
})

export const { getClothe, getAllClothe, getCategorieClothes } = clotheReducer.actions

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

export const fetchClothes = (page: number, cat: string): AppThunk => {
    return async (dispatch) => {
        try {
            const response = await fetch(`${URL}/paginate?cat=${cat}&page=${page}`, {
                method: 'GET',
            })
            const data: ClothesAndPages = await response.json()
            return dispatch(getAllClothe({ clothes: data.clothes, allPages: data.allPages, page: data.page, cat: data.cat }))
        } catch (err) {
            console.log('FetchClothes ERROR', err)
        }
    }
}

export const deleteDetail = (): AppThunk => {
    return (dispatch) => {
        try {
            return dispatch(getClothe(initialState.clotheId))
        }
        catch (err) {
            console.log('DeleteDetail ERROR', err)
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

export const fetchCategorieClothes = (): AppThunk => {
    return async (dispatch) => {
        try {
            const response = await fetch(`${URL}/categories`, { method: 'GET' })
            const data: CATEGORIES = await response.json()
            return dispatch(getCategorieClothes({ categories: data.categories }))
        }
        catch (err) {
            console.log('fetchCategorieClothes ERROR', err)
        }
    }
}


export default clotheReducer.reducer