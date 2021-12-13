import {
  Box,
  Text,
  Switch,
  Flex,
  useColorMode,
  Container,
} from "@chakra-ui/react"
import { FC } from "react"
import { Link } from "react-router-dom"

const Header: FC = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const isDark = colorMode === "dark"
  return (
    <Flex bgGradient="linear(to-l, gray.300, yellow.400, pink.200)" as="header">
      <Container
        maxW="container.xl"
        d="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box>
          <Text fontSize="3xl" fontWeight="600" ml={5}>
            TakumiFujiCrypto
          </Text>
        </Box>
        <Flex>
          <Box mr={5}>
            <Link to="/about">About us</Link>
          </Box>
          <Box mr={5}>
            <Link to="/login">Login</Link>
          </Box>
          <Box mr={5}>
            <Link to="/registration">Sign In</Link>
          </Box>
          <Box>
            <Switch
              mr={5}
              size="md"
              colorScheme="red"
              isChecked={isDark}
              onChange={toggleColorMode}
            />
          </Box>
        </Flex>
      </Container>
    </Flex>
  )
}

export default Header
