import { useAppSelector } from "./redux"

export function useAuth() {
  const { email, id } = useAppSelector((state) => state.userReducer)
  return {
    isAuth: !!email,
    email,
    id,
  }
}
