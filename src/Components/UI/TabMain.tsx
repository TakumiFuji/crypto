import { Box } from "@chakra-ui/react"
import { FC, ReactElement, useState } from "react"
import TabTitle from "./TabTitle"

type TabsProps = {
  children: ReactElement[]
}

const TabMain: FC<TabsProps> = ({ children }) => {
  const [selectedTab, setSelectedTab] = useState(0)
  return (
    <Box>
      <Box d="flex">
        {children.map((item, index) => {
          return (
            <TabTitle
              key={index}
              title={item.props.title}
              index={index}
              setSelectedTab={setSelectedTab}
            />
          )
        })}
      </Box>

      <Box>{children[selectedTab]}</Box>
    </Box>
  )
}

export default TabMain
