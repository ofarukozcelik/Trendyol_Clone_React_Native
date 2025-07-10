import {Product} from './productsState';

interface SearchState {
  products: Product[];
  filteredProducts: Product[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

export type {SearchState};
