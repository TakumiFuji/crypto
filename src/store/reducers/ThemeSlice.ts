import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type DarkMode = {
  darkMode: boolean
}
const initialState: DarkMode = {
  darkMode: false,
}

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setDarkMode(state, action: PayloadAction<boolean>) {
      state.darkMode = action.payload
    },
  },
})

export const { setDarkMode } = themeSlice.actions
export default themeSlice.reducer
