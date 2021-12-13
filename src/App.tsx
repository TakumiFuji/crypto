import { ChangeEvent, FC, useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "./hooks/redux"
import { fetchCoins } from "./store/reducers/ActionCreators"
import { Box, Container, Input, Heading } from "@chakra-ui/react"
import Header from "./Components/Header/Header"
import TabMain from "./Components/UI/TabMain"
import TabBody from "./Components/UI/TabBody"
import TableCoins, { TableTitleProp } from "./Components/TableCoin/TableCoins"
import Loader from "./Components/UI/Loader"

const App: FC = () => {
  const [value, setValue] = useState("")
  const dispatch = useAppDispatch()
  const { error, isLoading } = useAppSelector((state) => state.coinReducer)

  useEffect(() => {
    dispatch(fetchCoins())
  }, [dispatch])

  const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const enteredName = e.target.value
    setValue(enteredName)
  }

  return (
    <Box>
      <Header />
      <Container maxW="container.xl">
        <Input
          onChange={inputHandler}
          placeholder="Type coin..."
          size="md"
          variant="filled"
          focusBorderColor="black"
        />
        {isLoading && <Loader />}
        {error && <Heading>{error}</Heading>}
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
      </Container>
    </Box>
  )
}

export default App
