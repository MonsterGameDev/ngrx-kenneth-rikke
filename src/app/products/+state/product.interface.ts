export interface Product {
  id?: number;
  name: string;
  description: string;
  price: number;
}

export interface ProductState {
  products: Product[];
  behaviors?: {
    loading?: boolean;
    error?: any;
  };
}
