import { Product, Category } from './types';

const products: Product[] = [
  {
    id: '1',
    name: 'Premium Wireless Headphones',
    description: 'High-fidelity audio with active noise cancellation and premium build quality.',
    price: 299.99,
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80',
      'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&q=80',
      'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&q=80',
      'https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?w=800&q=80',
    ],
    category: 'Electronics',
  },
  {
    id: '2',
    name: 'Smart Watch Series X',
    description: 'Track your fitness, receive notifications, and stay connected with this premium smartwatch.',
    price: 399.99,
    images: [
      'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=800&q=80',
      'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=800&q=80',
      'https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=800&q=80',
      'https://images.unsplash.com/photo-1557438159-51eec7a6c9e8?w=800&q=80',
    ],
    category: 'Electronics',
  },
  {
    id: '3',
    name: 'Professional Camera Kit',
    description: 'Capture stunning photos and videos with this professional-grade camera kit.',
    price: 1299.99,
    images: [
      'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&q=80',
      'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=800&q=80',
      'https://images.unsplash.com/photo-1581591524425-c7e0978865fc?w=800&q=80',
      'https://images.unsplash.com/photo-1495707902641-75cac588d2e9?w=800&q=80',
    ],
    category: 'Electronics',
  },
  {
    id: '4',
    name: 'Cotton Casual T-Shirt',
    description: 'Comfortable and stylish cotton t-shirt perfect for everyday wear.',
    price: 29.99,
    images: [
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80',
      'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?w=800&q=80',
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&q=80',
      'https://images.unsplash.com/photo-1554568218-0f1715e72254?w=800&q=80',
    ],
    category: 'Clothing',
  },
  {
    id: '5',
    name: 'Classic Denim Jeans',
    description: 'Timeless denim jeans with perfect fit and durability.',
    price: 79.99,
    images: [
      'https://images.unsplash.com/photo-1542272604-787c3835535d?w=800&q=80',
      'https://images.unsplash.com/photo-1475178626620-a4d074967452?w=800&q=80',
      'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800&q=80',
      'https://images.unsplash.com/photo-1582552938357-32b906df40cb?w=800&q=80',
    ],
    category: 'Clothing',
  },
  {
    id: '6',
    name: 'Modern Design Chair',
    description: 'Ergonomic chair with contemporary design for your home or office.',
    price: 199.99,
    images: [
      'https://images.unsplash.com/photo-1592078615290-033ee584e267?w=800&q=80',
      'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=800&q=80',
      'https://images.unsplash.com/photo-1506439773649-6e31c1229413?w=800&q=80',
      'https://images.unsplash.com/photo-1519947486511-46149fa0a254?w=800&q=80',
    ],
    category: 'Home & Garden',
  },
];

const categories: Category[] = [
  { id: '1', name: 'Electronics', count: 3 },
  { id: '2', name: 'Clothing', count: 2 },
  { id: '3', name: 'Home & Garden', count: 1 },
];

export async function getProducts(category?: string): Promise<Product[]> {
  if (category) {
    return products.filter(p => p.category === category);
  }
  return products;
}

export async function getProduct(id: string): Promise<Product | undefined> {
  return products.find(p => p.id === id);
}

export async function getCategories(): Promise<Category[]> {
  return categories;
}