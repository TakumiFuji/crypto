import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import App from "./App"
import { setupStore } from "./store/store"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom"
import "./firebase"
import RegisterPage from "./Pages/RegisterPage"
import LoginPage from "./Pages/LoginPage"

const store = setupStore()

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/registration" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Provider>
  </Router>,
  document.getElementById("root")
)
