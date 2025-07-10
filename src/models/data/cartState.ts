import {Product} from './productsState';

interface CartState {
  cart: Product[];
  totalPrice: number;
  pending: boolean;
  error: any;
}

export type {CartState};
