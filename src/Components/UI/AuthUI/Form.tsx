import { FC, useState } from "react"
import "./Form.scss"
import { useAppSelector } from "./../../../hooks/redux"

interface FormProps {
  title: string
  handleClick: (email: string, pass: string) => void
}

const Form: FC<FormProps> = ({ title, handleClick }) => {
  const { darkMode } = useAppSelector((state) => state.themeReducer)
  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")
  return (
    <div className={darkMode ? "auth-form dark" : "auth-form"}>
      <input
        type="email"
        value={email}
        placeholder="Type email..."
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        value={pass}
        placeholder="Type password..."
        onChange={(e) => setPass(e.target.value)}
      />
      <button onClick={() => handleClick(email, pass)}>{title}</button>
    </div>
  )
}

export default Form
