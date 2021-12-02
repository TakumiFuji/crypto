import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const fetchCoins = createAsyncThunk(
  "coin/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(
        "https://min-api.cryptocompare.com/data/top/totalvolfull?limit=15&tsym=USD"
      )
      const { Data } = response.data
      console.log(Data)
      return Data
    } catch (e) {
      return thunkAPI.rejectWithValue("Не удалось загрузить coins")
    }
  }
)
