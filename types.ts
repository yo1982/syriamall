export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: Category;
  imageUrl: string;
  storeId: string;
  storeName: string;
  rating: number;
}

export interface Store {
  id: string;
  name: string;
  description: string;
  logoUrl: string;
  bannerUrl: string;
  rating: number;
}

export enum Category {
  Food = 'Food & Groceries',
  Clothing = 'Clothing & Fashion',
  Electronics = 'Electronics',
  Home = 'Home & Appliances',
  Health = 'Health & Medicine',
  Services = 'Services'
}

export interface CartItem extends Product {
  quantity: number;
}

export interface User {
  id: string;
  name: string;
  role: 'customer' | 'vendor';
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}