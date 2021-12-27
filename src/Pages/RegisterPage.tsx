import { FC } from "react"
import { Link } from "react-router-dom"
import Header from "../Components/Header/Header"
import Register from "../Components/UI/AuthUI/Register"
import "./RegisterPage.scss"
import { useAppSelector } from "../hooks/redux"

const RegisterPage: FC = () => {
  const { darkMode } = useAppSelector((state) => state.themeReducer)
  return (
    <div className={darkMode ? "bodyDark" : ""}>
      <Header />
      <div>
        <Register />
        <div className={darkMode ? "login__text dark" : "login__text"}>
          Are you have account? You can <Link to="/login">Login</Link>
        </div>
      </div>
    </div>
  )
}

export default RegisterPage
