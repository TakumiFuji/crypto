import { FC, ReactElement, useState } from "react"
import TabTitle from "./TabTitle"
import "./TabMain.scss"

type TabsProps = {
  children: ReactElement[]
}

const TabMain: FC<TabsProps> = ({ children }) => {
  const [selectedTab, setSelectedTab] = useState(0)
  return (
    <div className="mainTab">
      <div className="mainTab_tabs">
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
      </div>

      <div>{children[selectedTab]}</div>
    </div>
  )
}

export default TabMain
