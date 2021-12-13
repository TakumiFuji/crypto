import { Box, Button } from "@chakra-ui/react"
import { FC, useCallback } from "react"

type TitleProps = {
  title: string
  index: number
  setSelectedTab: (index: number) => void
}
const TabTitle: FC<TitleProps> = ({ title, index, setSelectedTab }) => {
  const onClick = useCallback(() => {
    setSelectedTab(index)
  }, [setSelectedTab, index])
  return (
    <Box m={2}>
      <Button
        as="button"
        onClick={onClick}
        size="sm"
        bgColor="transparent"
        borderRadius="none"
        _hover={{
          borderBottom: "2px solid black",
        }}
        _focus={{
          borderBottom: "2px solid black",
        }}
        _active={{
          borderBottom: "2px solid black",
        }}
      >
        {title}
      </Button>
    </Box>
  )
}

export default TabTitle
