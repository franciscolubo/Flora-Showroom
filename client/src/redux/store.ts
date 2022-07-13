import { configureStore, Action, ThunkAction } from "@reduxjs/toolkit"
import clotheSlice from "./slices/clotheSlice"

//! DEPRECATED METHOD - createStore(clotheReducer, composeWithDevTools(applyMiddleware(thunk)))

const store = configureStore({
    reducer: {
        clothes: clotheSlice
    }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>

export default store