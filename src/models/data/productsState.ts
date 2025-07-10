interface Rating {
  count: number;
  rate: number;
}

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
  isFavorite?: boolean;
  quantity: number;
}

interface ProductState {
  products: Product[];
  bestSellerProducts: Product[];
  popularProducts: Product[];
  jewelry: Product[];
  electronics: Product[];
  singleProduct: Product;
  pending: boolean;
  error: any;
}

interface Params {
  id: number;
  category?: string;
}

export type {ProductState, Product, Params, Rating};
