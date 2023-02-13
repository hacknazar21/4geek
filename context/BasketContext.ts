import { IBasket, Line } from "../interfaces/Basket";
import { createContext } from "react";
const basketInit: IBasket = null;

export const BasketContext = createContext({
  basket: basketInit,
  addProductToBasket: async (product) => {},
  removeOneProductFromLine: async (line: Line) => {},
  removeLineFromBasket: async (line: Line) => {},
  removeBasket: async () => {},
  addOneProductToLine: async (line: Line) => {},
  updateBasket: async () => {},
  loadingBasket: false,
});
