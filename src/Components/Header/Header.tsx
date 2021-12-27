import { ChangeEvent, FC, useEffect, useState } from "react"
import "./header.scss"
import MyModal from "./MyModal/MyModal"
import { useAppDispatch } from "../../hooks/redux"
import { setDarkMode } from "../../store/reducers/ThemeSlice"
import { Link } from "react-router-dom"

const Header: FC = () => {
  const [activeModal, setActiveModal] = useState<boolean>(false)
  const [dark, setDark] = useState<boolean>(false)

  const dispatch = useAppDispatch()

  const handleChangeDarkMode = (e: ChangeEvent<HTMLInputElement>) => {
    return setDark(e.target.checked)
  }
  useEffect(() => {
    dispatch(setDarkMode(dark))
  }, [dark, dispatch])

  return (
    <header className="headerMain">
      <div className="headerMain_wrapper">
        <div className="headerMain_wrapper_text">
          <p>TakumiFujiCrypto</p>
        </div>
        <nav className="navbar">
          <div>
            <Link to="/">About us</Link>
          </div>
          <div>
            <Link to="/registration">Register</Link>
          </div>
          <div>
            <Link to="/login">Login</Link>
          </div>
          <div className="darkmode">
            <input type="checkbox" onChange={handleChangeDarkMode} />
          </div>
        </nav>
        <div
          className={activeModal ? "burgerMenu active" : "burgerMenu"}
          onClick={() => setActiveModal(true)}
        >
          <span></span>
        </div>
      </div>
      <MyModal active={activeModal} setActive={setActiveModal} />
    </header>
  )
}

export default Header
