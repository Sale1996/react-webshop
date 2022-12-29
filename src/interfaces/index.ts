export interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export interface IProductFetch {
  product: IProduct;
  loading?: boolean;
  error?: string;
}

export interface IProductPage extends IProductFetch {
  inCart: boolean;
}

export interface ICartItem {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
}

export interface IWishlistItem {
  id: number;
  title: string;
  price: number;
  image: string;
}

export interface IUser {
  address: {
    geolocation: {
      lat: string,
      long: string
    },
    city: string,
    street: string,
    number: number,
    zipcode: string
  },
  id: number,
  email: string,
  username: string,
  password: string,
  name: {
    firstname: string,
    lastname: string
  },
  phone: string,
  __v: number
}
