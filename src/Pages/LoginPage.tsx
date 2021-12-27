import { FC } from "react"
import { Link } from "react-router-dom"
import Header from "../Components/Header/Header"
import Login from "../Components/UI/AuthUI/Login"
import "./LoginPage.scss"
import { useAppSelector } from "../hooks/redux"

const LoginPage: FC = () => {
  const { darkMode } = useAppSelector((state) => state.themeReducer)
  return (
    <div className={darkMode ? "bodyDark" : ""}>
      <Header />
      <div>
        <Login />
        <div className={darkMode ? "login__text dark" : "login__text"}>
          Are you not have account? You can{" "}
          <Link to="/registration">Register</Link>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
