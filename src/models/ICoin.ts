interface USD {
  PRICE: number
}
interface Raw {
  USD: USD
}

interface CoinInfo {
  FullName: string
  ImageUrl: string
  Name: string
  Id?: string
}

export interface ICoin {
  CoinInfo: CoinInfo
  RAW: Raw
}
