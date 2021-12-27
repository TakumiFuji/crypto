import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import Form from "./Form"
import { setUser } from "../../../store/reducers/UserSlice"
import { useAppDispatch } from "../../../hooks/redux"
import { useNavigate } from "react-router-dom"
const Login = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const handleLogin = (email: string, password: string) => {
    const auth = getAuth()
    signInWithEmailAndPassword(auth, email, password)
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
      .catch(() => alert("Invalid user!"))
  }
  return <Form title="Sigh In your acc" handleClick={handleLogin} />
}

export default Login
