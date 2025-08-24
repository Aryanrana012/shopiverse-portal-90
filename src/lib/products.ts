
import { Product } from './types';

export const products: Product[] = [
  {
    id: 1,
    name: 'Classic White T-Shirt',
    price: 19.99,
    description: 'A timeless white t-shirt made from 100% organic cotton. Perfect for any casual occasion.',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'clothing',
    featured: true,
  },
  {
    id: 2,
    name: 'Designer Denim Jeans',
    price: 59.99,
    description: 'Premium quality denim jeans with a modern straight cut. Durable and stylish for everyday wear.',
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'clothing',
    featured: true,
  },
  {
    id: 3,
    name: 'Leather Crossbody Bag',
    price: 79.99,
    description: 'Elegant crossbody bag made from genuine leather. Features multiple compartments for organization.',
    image: 'https://images.unsplash.com/photo-1594633313593-bab3825d0caf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'accessories',
    featured: true,
  },
  {
    id: 4,
    name: 'Wireless Headphones',
    price: 129.99,
    description: 'Premium wireless headphones with noise cancellation. Experience crystal clear sound without distractions.',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'electronics',
    featured: true,
  },
  {
    id: 5,
    name: 'Smart Watch',
    price: 199.99,
    description: 'Advanced smartwatch with health tracking features and customizable watch faces.',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'electronics',
  },
  {
    id: 6,
    name: 'Running Shoes',
    price: 89.99,
    description: 'Lightweight running shoes with superior cushioning and breathable mesh upper.',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'footwear',
  },
  {
    id: 7,
    name: 'Stainless Steel Water Bottle',
    price: 24.99,
    description: 'Double-wall insulated water bottle that keeps drinks cold for 24 hours or hot for 12 hours.',
    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'accessories',
  },
  {
    id: 8,
    name: 'Knitted Sweater',
    price: 49.99,
    description: 'Soft and cozy knitted sweater perfect for cooler weather. Available in multiple colors.',
    image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'clothing',
  },
  {
    id: 9,
    name: 'Leather Wallet',
    price: 34.99,
    description: 'Slim leather wallet with RFID protection. Holds multiple cards and cash.',
    image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'accessories',
  },
  {
    id: 10,
    name: 'Bluetooth Speaker',
    price: 59.99,
    description: 'Portable Bluetooth speaker with 20 hours of battery life and waterproof design.',
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'electronics',
  },
  {
    id: 11,
    name: 'Sunglasses',
    price: 29.99,
    description: 'Stylish sunglasses with UV protection. Lightweight and durable frame.',
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'accessories',
  },
  {
    id: 12,
    name: 'Backpack',
    price: 69.99,
    description: 'Spacious backpack with laptop compartment and multiple pockets for organization.',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'accessories',
  }
];

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};

export const getProductById = (id: number): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getCategories = (): string[] => {
  const categories = new Set(products.map(product => product.category));
  return Array.from(categories);
};
