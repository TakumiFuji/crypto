import { FC, useEffect } from "react"
import { useAppDispatch, useAppSelector } from "./hooks/redux"
import { fetchCoins } from "./store/reducers/ActionCreators"
import {
  Box,
  Heading,
  Text,
  Image,
  Table,
  Container,
  Tr,
  Tbody,
  Td,
} from "@chakra-ui/react"
import { ICoin } from "./models/ICoin"
import Header from "./Components/Header/Header"
import Loader from "./Components/UI/Loader"

const App: FC = () => {
  const dispatch = useAppDispatch()
  const { coins, isLoading, error } = useAppSelector(
    (state) => state.coinReducer
  )
  useEffect(() => {
    dispatch(fetchCoins())
  }, [])

  return (
    <Box>
      <Header />
      <Container maxW="container.xl">
        {isLoading && <Loader />}
        {error && <Heading>{error}</Heading>}
        <Box maxW="590px">
          <Table size="lg" variant="simple" colorScheme="black">
            {coins.map((coin: ICoin) => (
              <Tbody>
                <Tr>
                  <Td>
                    <Image
                      src={`https://cryptocompare.com${coin.CoinInfo.ImageUrl}`}
                      w={10}
                      h={10}
                    />
                  </Td>
                  <Td>
                    <Text fontSize="18px" fontWeight="600">
                      {coin.CoinInfo.FullName}
                    </Text>
                  </Td>
                  <Td>
                    <Text fontSize="14px" fontWeight="800">
                      {coin.CoinInfo.Name}
                    </Text>
                  </Td>
                  <Td>
                    <Text fontSize="20px" fontWeight="500">
                      {coin.RAW.USD.PRICE}$
                    </Text>
                  </Td>
                </Tr>
              </Tbody>
            ))}
          </Table>
        </Box>
      </Container>
    </Box>
  )
}

export default App
