import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import Form from "./Form"
import { setUser } from "../../../store/reducers/UserSlice"
import { useAppDispatch } from "../../../hooks/redux"
import { useNavigate } from "react-router-dom"

const Register = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const handleRegister = (email: string, password: string) => {
    const auth = getAuth()
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.refreshToken,
          })
        )
        navigate("/")
      })
      .catch(console.error)
  }
  return <Form title="Registration" handleClick={handleRegister} />
}

export default Register
