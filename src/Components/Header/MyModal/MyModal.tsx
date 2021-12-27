import { Dispatch, FC, SetStateAction } from "react"
import "./myModal.scss"

type ModalProps = {
  active: boolean
  setActive: Dispatch<SetStateAction<boolean>>
}

const MyModal: FC<ModalProps> = ({ active, setActive }) => {
  return (
    <div className={active ? "modal active" : "modal"}>
      <div onClick={() => setActive(false)} className="closebtn">
        <span className="onespan"></span>
        <span className="twospan"></span>
      </div>
      <div>
        <a href="/">About us</a>
      </div>
      <div>
        <a href="/">Chat</a>
      </div>
      <div>
        <a href="/">Login</a>
      </div>
    </div>
  )
}

export default MyModal
