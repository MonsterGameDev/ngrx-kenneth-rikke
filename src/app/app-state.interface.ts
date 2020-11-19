import { Product } from './products/+state/product.interface';
import { User } from './user/+state/user.interface';

export interface AppState {
  products: Product[];
  user: User;
}
