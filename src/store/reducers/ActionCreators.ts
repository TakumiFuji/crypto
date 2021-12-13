import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const fetchCoins = createAsyncThunk(
  "coin/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(
        "https://min-api.cryptocompare.com/data/top/totaltoptiervolfull?limit=20&tsym=USD"
      )
      const { Data } = response.data
      return Data
    } catch (e) {
      return thunkAPI.rejectWithValue("Не удалось загрузить coins")
    }
  }
)
