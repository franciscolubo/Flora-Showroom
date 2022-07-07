import { applyMiddleware, createStore } from "redux"
import { configureStore, createSlice } from "@reduxjs/toolkit"
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from "redux-thunk"
import clotheSlice from "./features/clotheSlice"

//! DEPRECATED METHOD - createStore(clotheReducer, composeWithDevTools(applyMiddleware(thunk)))

const store = configureStore({
    reducer: {
        clothes: clotheSlice
    }
})

export default store