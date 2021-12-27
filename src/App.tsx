import { ChangeEvent, FC, useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "./hooks/redux"
import { fetchCoins } from "./store/reducers/ActionCreators"
import Header from "./Components/Header/Header"
import TabMain from "./Components/UI/Tabs/TabMain"
import TabBody from "./Components/UI/Tabs/TabBody"
import TableCoins, { TableTitleProp } from "./Components/TableCoin/TableCoins"
import Loader from "./Components/UI/Loader/Loader"
import "./App.scss"
import { useAuth } from "./hooks/auth"
import { Navigate } from "react-router-dom"
const App: FC = () => {
  const [value, setValue] = useState<string>("")
  const { isAuth } = useAuth()

  const dispatch = useAppDispatch()
  const { error, isLoading } = useAppSelector((state) => state.coinReducer)
  const { darkMode } = useAppSelector((state) => state.themeReducer)

  useEffect(() => {
    dispatch(fetchCoins())
  }, [dispatch])

  const inputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const enteredName = event.target.value
    setValue(enteredName)
  }

  return isAuth ? (
    <div className={darkMode ? "darkBody" : ""}>
      <Header />
      <main>
        <div className="container">
          <div>
            <input
              type="text"
              onChange={inputHandler}
              placeholder="Type coin..."
              className={darkMode ? "search-input dark" : "search-input"}
            />
          </div>
          {isLoading && <Loader darkModeValue={darkMode} />}
          {error && <h1 className={darkMode ? "darkError" : ""}>{error}</h1>}

          <TabMain>
            <TabBody title="All">
              <TableCoins title={TableTitleProp.SortedByAll} value={value} />
            </TabBody>
            <TabBody title="Sort by ABC">
              <TableCoins title={TableTitleProp.SortedByAbc} value={value} />
            </TabBody>
            <TabBody title="Sort by Price $">
              <TableCoins title={TableTitleProp.SortedByPrice} value={value} />
            </TabBody>
          </TabMain>
        </div>
      </main>
    </div>
  ) : (
    <Navigate to="/login" />
  )
}

export default App
