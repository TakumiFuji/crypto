import { FC } from "react"
import "./loader.scss"

type DarkMode = {
  darkModeValue: boolean
}

const Loader: FC<DarkMode> = ({ darkModeValue }) => {
  return (
    <div className={darkModeValue ? "loader dark" : "loader"}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}

export default Loader
