import React from "react"
import ReactDOM from "react-dom"
import { ChakraProvider } from "@chakra-ui/react"
import { Provider } from "react-redux"
import App from "./App"

import { setupStore } from "./store/store"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./Pages/Login/Login"
import About from "./Pages/About us/About"
import SignIn from "./Pages/Sign in/SignIn"

const store = setupStore()

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/about" element={<About />} />
      <Route path="/registration" element={<SignIn />} />
    </Routes>

    <ChakraProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </ChakraProvider>
  </BrowserRouter>,
  document.getElementById("root")
)
