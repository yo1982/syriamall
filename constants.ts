import { Category, Product, Store } from './types';

export const CURRENCY = 'SYP';

export const FEATURED_STORES: Store[] = [
  {
    id: 's1',
    name: 'Damascus Delights',
    description: 'Authentic Syrian sweets and groceries.',
    logoUrl: 'https://picsum.photos/id/102/200/200',
    bannerUrl: 'https://picsum.photos/id/429/1200/400',
    rating: 4.8
  },
  {
    id: 's2',
    name: 'Aleppo Tech Hub',
    description: 'Latest electronics and gadgets.',
    logoUrl: 'https://picsum.photos/id/1/200/200',
    bannerUrl: 'https://picsum.photos/id/60/1200/400',
    rating: 4.5
  },
  {
    id: 's3',
    name: 'Lattakia Fashion',
    description: 'Modern clothing for men and women.',
    logoUrl: 'https://picsum.photos/id/177/200/200',
    bannerUrl: 'https://picsum.photos/id/325/1200/400',
    rating: 4.7
  }
];

export const INITIAL_PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Premium Pistachio Baklava',
    description: 'Handmade baklava with fresh pistachios and honey.',
    price: 45000,
    category: Category.Food,
    imageUrl: 'https://picsum.photos/id/493/400/400',
    storeId: 's1',
    storeName: 'Damascus Delights',
    rating: 5
  },
  {
    id: 'p2',
    name: 'Smartphone X Pro',
    description: 'High performance smartphone with 256GB storage.',
    price: 3500000,
    category: Category.Electronics,
    imageUrl: 'https://picsum.photos/id/160/400/400',
    storeId: 's2',
    storeName: 'Aleppo Tech Hub',
    rating: 4.2
  },
  {
    id: 'p3',
    name: 'Winter Wool Coat',
    description: 'Warm and stylish wool coat for winter season.',
    price: 250000,
    category: Category.Clothing,
    imageUrl: 'https://picsum.photos/id/835/400/400',
    storeId: 's3',
    storeName: 'Lattakia Fashion',
    rating: 4.6
  },
  {
    id: 'p4',
    name: 'Organic Olive Oil (1L)',
    description: 'Cold pressed extra virgin olive oil.',
    price: 85000,
    category: Category.Food,
    imageUrl: 'https://picsum.photos/id/292/400/400',
    storeId: 's1',
    storeName: 'Damascus Delights',
    rating: 4.9
  },
  {
    id: 'p5',
    name: 'Wireless Noise Cancelling Headphones',
    description: 'Immersive sound experience with 30h battery life.',
    price: 450000,
    category: Category.Electronics,
    imageUrl: 'https://picsum.photos/id/36/400/400',
    storeId: 's2',
    storeName: 'Aleppo Tech Hub',
    rating: 4.4
  },
  {
    id: 'p6',
    name: 'Ceramic Dinner Set',
    description: '16-piece ceramic dinner set, dishwasher safe.',
    price: 180000,
    category: Category.Home,
    imageUrl: 'https://picsum.photos/id/450/400/400',
    storeId: 's1',
    storeName: 'Damascus Delights',
    rating: 4.3
  }
];
