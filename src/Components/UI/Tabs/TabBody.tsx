import { FC } from "react"

type Prop = {
  title: string
}
const TabBody: FC<Prop> = ({ children }) => {
  return <div>{children}</div>
}

export default TabBody
