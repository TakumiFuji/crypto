import { FC } from "react"
import { ICoin } from "../../models/ICoin"
import { useAppSelector } from "../../hooks/redux"
import "./tablecoins.scss"

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
  const { darkMode } = useAppSelector((state) => state.themeReducer)

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
    <div>
      {filteredCoins.length ? (
        <table className={darkMode ? "coinTable dark" : "coinTable"}>
          {filteredCoins.map((coin: ICoin) => {
            return (
              <tbody key={coin.CoinInfo.Id}>
                <tr className="coinTable-tr">
                  <td>
                    <img
                      src={`https://cryptocompare.com${coin.CoinInfo.ImageUrl}`}
                      alt={`${coin.CoinInfo.FullName}`}
                      className="coinTable_image"
                    />
                  </td>
                  <td>
                    <p>{coin.CoinInfo.FullName}</p>
                  </td>
                  <td>
                    <p>{coin.CoinInfo.Name}</p>
                  </td>
                  <td>
                    <p>{coin.RAW.USD.PRICE}$</p>
                  </td>
                  <td>
                    <p>{coin.RAW.USD.VOLUME24HOUR?.toFixed(2)}</p>
                  </td>
                </tr>
              </tbody>
            )
          })}
        </table>
      ) : (
        <h1 className={darkMode ? "lengthMessage" : ""}>
          По вашему запросу ничего не найдено!
        </h1>
      )}
    </div>
  )
}

export default TableCoins
