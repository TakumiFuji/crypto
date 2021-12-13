import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ICoin } from "../../models/ICoin"
import { fetchCoins } from "./ActionCreators"

interface CoinState {
  coins: ICoin[]
  isLoading?: boolean
  error?: string
}

const initialState: CoinState = {
  coins: [],
  isLoading: false,
  error: "",
}

export const coinSlice = createSlice({
  name: "coin",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchCoins.fulfilled.type]: (state, action: PayloadAction<ICoin[]>) => {
      state.isLoading = false
      state.error = ""
      state.coins = action.payload
    },
    [fetchCoins.pending.type]: (state) => {
      state.isLoading = true
    },
    [fetchCoins.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false
      state.error = action.payload
    },
  },
})

export default coinSlice.reducer
