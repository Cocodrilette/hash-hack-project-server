enum OrderType {
  BUY = "BUY",
  SELL = "SELL",
}

enum AccountType {
  RETIREMENT = "RETIREMENT",
  INSTITUTIONAL = "INSTITUTIONAL",
}

enum Direction {
  LONG = "LONG",
  SHORT = "SHORT",
}

export interface Reveal {
  tickerSymbol: string;
  orderType: OrderType;
  accountType: AccountType;
  quantity: number;
  price: number;
  timeInForce: number;
  direction: Direction;
}
