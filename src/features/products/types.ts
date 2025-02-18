import { IProduct } from "../../components/products/types/types";

export interface IProductState {
  products: IProduct[],
  isLoading: boolean,
  error: string,
}
