import { FC, useCallback } from "react"
import { useAppSelector } from "../../../hooks/redux"
import "./TabTitle.scss"

type TitleProps = {
  title: string
  index: number
  setSelectedTab: (index: number) => void
}
const TabTitle: FC<TitleProps> = ({ title, index, setSelectedTab }) => {
  const { darkMode } = useAppSelector((state) => state.themeReducer)
  const onClick = useCallback(() => {
    setSelectedTab(index)
  }, [setSelectedTab, index])
  return (
    <div className={darkMode ? "btn dark" : "btn"}>
      <button onClick={onClick}>{title}</button>
    </div>
  )
}

export default TabTitle
