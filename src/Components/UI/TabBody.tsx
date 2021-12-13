import { Box } from "@chakra-ui/react"
import { FC } from "react"

type Prop = {
  title: string
}
const TabBody: FC<Prop> = ({ children }) => {
  return <Box>{children}</Box>
}

export default TabBody
