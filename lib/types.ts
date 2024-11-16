export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  images: string[];
  category: string;
}

export interface Category {
  id: string;
  name: string;
  count: number;
}