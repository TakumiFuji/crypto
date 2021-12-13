import { Table, Tbody, Tr, Td, Image, Text } from "@chakra-ui/react"
import { FC } from "react"
import { ICoin } from "../../models/ICoin"
import { useAppSelector } from "../../hooks/redux"
// import Loader from "../UI/Loader"

export enum TableTitleProp {
  SortedByAll = "SortedByAll",
  SortedByAbc = "SortedByAbc",
  SortedByPrice = "SortedByPrice",
}

type TableCoinsProps = {
  title: TableTitleProp
  value: string
}

const TableCoins: FC<TableCoinsProps> = ({ value, title }) => {
  const { coins } = useAppSelector((state) => state.coinReducer)

  const filteredCoins = coins.filter((coin) => {
    return (
      coin.CoinInfo.Name.toLowerCase().includes(value.toLowerCase()) ||
      coin.CoinInfo.FullName.toLowerCase().includes(value.toLowerCase())
    )
  })

  if (title === "SortedByAbc") {
    filteredCoins.sort((a, b) =>
      a.CoinInfo.FullName.localeCompare(b.CoinInfo.FullName)
    )
  } else if (title === "SortedByPrice") {
    filteredCoins.sort((a, b) => b.RAW.USD.PRICE - a.RAW.USD.PRICE)
  }

  return (
    <Table size="lg" variant="simple" colorScheme="black">
      {filteredCoins.map((coin: ICoin) => {
        return (
          <Tbody key={coin.CoinInfo.Id}>
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
              <Td>
                <Text fontSize="16px" fontWeight="600">
                  V / 24H {coin.RAW.USD.VOLUME24HOUR?.toFixed(2)}
                </Text>
              </Td>
            </Tr>
          </Tbody>
        )
      })}
    </Table>
  )
}

export default TableCoins
