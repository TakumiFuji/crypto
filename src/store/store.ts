import { combineReducers, configureStore } from "@reduxjs/toolkit"
import coinReducer from "./reducers/CoinSlice"
import themeReducer from "./reducers/ThemeSlice"
import userReducer from "./reducers/UserSlice"

const rootReducer = combineReducers({
  coinReducer,
  themeReducer,
  userReducer,
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore["dispatch"]
