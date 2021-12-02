import { Box, Spinner } from "@chakra-ui/react"
import { FC } from "react"

const Loader: FC = () => {
  return (
    <Box>
      <Spinner size="xl" speed="0.7s" thickness="10px" />
    </Box>
  )
}

export default Loader
