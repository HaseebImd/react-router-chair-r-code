// Mock product data
export const products = [
  // Electronics
  {
    id: 1,
    name: "MacBook Pro 14-inch",
    price: 1999,
    originalPrice: 2199,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&h=500&fit=crop",
    category: "electronics",
    rating: 4.8,
    reviews: 124,
    description: "Powerful laptop with M2 chip, perfect for professionals and creatives.",
    sizes: ["256GB", "512GB", "1TB"],
    colors: ["Space Gray", "Silver"],
    inStock: true,
    isNew: true
  },
  {
    id: 2,
    name: "iPhone 15 Pro",
    price: 999,
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500&h=500&fit=crop",
    category: "electronics",
    rating: 4.7,
    reviews: 89,
    description: "Latest iPhone with titanium design and advanced camera system.",
    sizes: ["128GB", "256GB", "512GB"],
    colors: ["Natural Titanium", "Blue Titanium", "White Titanium", "Black Titanium"],
    inStock: true,
    isSale: false
  },
  {
    id: 3,
    name: "Sony WH-1000XM5 Headphones",
    price: 349,
    originalPrice: 399,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
    category: "electronics",
    rating: 4.6,
    reviews: 203,
    description: "Industry-leading noise canceling headphones with premium sound quality.",
    sizes: ["One Size"],
    colors: ["Black", "Silver"],
    inStock: true,
    isSale: true
  },
  {
    id: 4,
    name: "Apple Watch Series 9",
    price: 429,
    image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=500&h=500&fit=crop",
    category: "electronics",
    rating: 4.5,
    reviews: 156,
    description: "Advanced smartwatch with health monitoring and fitness tracking.",
    sizes: ["41mm", "45mm"],
    colors: ["Midnight", "Starlight", "Pink", "Red"],
    inStock: true,
    isNew: false
  },

  // Fashion
  {
    id: 5,
    name: "Premium Cotton T-Shirt",
    price: 29,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop",
    category: "fashion",
    rating: 4.4,
    reviews: 67,
    description: "Soft, comfortable cotton t-shirt perfect for everyday wear.",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["White", "Black", "Navy", "Gray", "Orange"],
    inStock: true,
    isNew: false
  },
  {
    id: 6,
    name: "Slim Fit Jeans",
    price: 79,
    originalPrice: 99,
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&h=500&fit=crop",
    category: "fashion",
    rating: 4.3,
    reviews: 91,
    description: "Classic slim fit jeans made from premium denim.",
    sizes: ["28", "30", "32", "34", "36", "38"],
    colors: ["Dark Blue", "Light Blue", "Black"],
    inStock: true,
    isSale: true
  },
  {
    id: 7,
    name: "Running Sneakers",
    price: 129,
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&h=500&fit=crop",
    category: "fashion",
    rating: 4.7,
    reviews: 134,
    description: "Lightweight running shoes with superior comfort and support.",
    sizes: ["7", "8", "9", "10", "11", "12"],
    colors: ["White", "Black", "Gray", "Blue"],
    inStock: true,
    isNew: true
  },
  {
    id: 8,
    name: "Leather Jacket",
    price: 199,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&h=500&fit=crop",
    category: "fashion",
    rating: 4.6,
    reviews: 45,
    description: "Genuine leather jacket with classic design and premium finish.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Brown"],
    inStock: false,
    isNew: false
  },

  // Home
  {
    id: 9,
    name: "Coffee Maker Pro",
    price: 149,
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500&h=500&fit=crop",
    category: "home",
    rating: 4.5,
    reviews: 78,
    description: "Professional-grade coffee maker for the perfect brew every time.",
    sizes: ["12-Cup"],
    colors: ["Black", "Stainless Steel"],
    inStock: true,
    isNew: false
  },
  {
    id: 10,
    name: "Modern Desk Lamp",
    price: 89,
    originalPrice: 119,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop",
    category: "home",
    rating: 4.4,
    reviews: 52,
    description: "Adjustable LED desk lamp with touch controls and USB charging.",
    sizes: ["One Size"],
    colors: ["White", "Black", "Silver"],
    inStock: true,
    isSale: true
  },
  {
    id: 11,
    name: "Indoor Plant - Monstera",
    price: 45,
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500&h=500&fit=crop",
    category: "home",
    rating: 4.8,
    reviews: 23,
    description: "Beautiful monstera plant to brighten up your living space.",
    sizes: ["Small", "Medium", "Large"],
    colors: ["Green"],
    inStock: true,
    isNew: true
  },
  {
    id: 12,
    name: "Throw Pillow Set",
    price: 39,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=500&fit=crop",
    category: "home",
    rating: 4.2,
    reviews: 67,
    description: "Set of 2 decorative throw pillows to enhance your home decor.",
    sizes: ["18x18", "20x20"],
    colors: ["Beige", "Gray", "Navy", "Orange"],
    inStock: true,
    isNew: false
  },

  // Sports
  {
    id: 13,
    name: "Yoga Mat Premium",
    price: 59,
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500&h=500&fit=crop",
    category: "sports",
    rating: 4.6,
    reviews: 89,
    description: "Non-slip yoga mat with superior grip and cushioning.",
    sizes: ["6mm", "8mm"],
    colors: ["Purple", "Blue", "Pink", "Black"],
    inStock: true,
    isNew: false
  },
  {
    id: 14,
    name: "Adjustable Dumbbells",
    price: 299,
    originalPrice: 349,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=500&fit=crop",
    category: "sports",
    rating: 4.7,
    reviews: 112,
    description: "Space-saving adjustable dumbbells for home workouts.",
    sizes: ["5-50 lbs"],
    colors: ["Black"],
    inStock: true,
    isSale: true
  },
  {
    id: 15,
    name: "Trail Running Shoes",
    price: 159,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop",
    category: "sports",
    rating: 4.5,
    reviews: 76,
    description: "Durable trail running shoes for outdoor adventures.",
    sizes: ["7", "8", "9", "10", "11", "12"],
    colors: ["Black", "Gray", "Orange"],
    inStock: true,
    isNew: true
  }
];

// Mock categories
export const categories = [
  { id: 'all', name: 'All Products', count: products.length },
  { id: 'electronics', name: 'Electronics', count: products.filter(p => p.category === 'electronics').length },
  { id: 'fashion', name: 'Fashion', count: products.filter(p => p.category === 'fashion').length },
  { id: 'home', name: 'Home', count: products.filter(p => p.category === 'home').length },
  { id: 'sports', name: 'Sports', count: products.filter(p => p.category === 'sports').length }
];

// Mock cart data
export const mockCartItems = [
  {
    id: 1,
    productId: 1,
    name: "MacBook Pro 14-inch",
    price: 1999,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&h=500&fit=crop",
    quantity: 1,
    size: "512GB",
    color: "Space Gray"
  },
  {
    id: 2,
    productId: 5,
    name: "Premium Cotton T-Shirt",
    price: 29,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop",
    quantity: 2,
    size: "L",
    color: "Orange"
  }
];

// Mock user data
export const mockUser = {
  id: 1,
  name: "John Doe",
  email: "john.doe@example.com",
  avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
  joinDate: "2023-01-15",
  orders: [
    {
      id: "ORD-001",
      date: "2024-01-20",
      status: "Delivered",
      total: 299,
      items: 3
    },
    {
      id: "ORD-002",
      date: "2024-01-15",
      status: "Processing",
      total: 159,
      items: 1
    },
    {
      id: "ORD-003",
      date: "2024-01-10",
      status: "Shipped",
      total: 89,
      items: 2
    }
  ]
};
