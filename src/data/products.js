export const products = [
  {
    id: 1,
    name: "Classic White T-Shirt",
    price: 29.99,
    category: "t-shirts",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=500&fit=crop",
    description: "Premium cotton classic white t-shirt with a comfortable fit. Perfect for everyday wear.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["White", "Black", "Gray"],
    rating: 4.5,
    reviews: 128,
    inStock: true,
    featured: true
  },
  {
    id: 2,
    name: "Slim Fit Jeans",
    price: 89.99,
    category: "jeans",
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=500&fit=crop",
    description: "Modern slim fit jeans with stretch denim for maximum comfort and style.",
    sizes: ["30", "32", "34", "36", "38"],
    colors: ["Blue", "Black", "Gray"],
    rating: 4.3,
    reviews: 95,
    inStock: true,
    featured: true
  },
  {
    id: 3,
    name: "Casual Hoodie",
    price: 59.99,
    category: "hoodies",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=500&fit=crop",
    description: "Cozy casual hoodie perfect for cool weather. Made with soft cotton blend.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Gray", "Black", "Navy"],
    rating: 4.7,
    reviews: 203,
    inStock: true,
    featured: true
  },
  {
    id: 4,
    name: "Formal Dress Shirt",
    price: 79.99,
    category: "shirts",
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=500&fit=crop",
    description: "Professional formal dress shirt with wrinkle-resistant fabric. Perfect for office wear.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["White", "Light Blue", "Pink"],
    rating: 4.4,
    reviews: 87,
    inStock: true,
    featured: false
  },
  {
    id: 5,
    name: "Summer Dress",
    price: 69.99,
    category: "dresses",
    image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=500&fit=crop",
    description: "Elegant summer dress with floral pattern. Light and breathable fabric.",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Blue Floral", "Pink Floral", "White"],
    rating: 4.6,
    reviews: 156,
    inStock: true,
    featured: true
  },
  {
    id: 6,
    name: "Leather Jacket",
    price: 199.99,
    category: "jackets",
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=500&fit=crop",
    description: "Classic leather jacket with modern styling. Durable and stylish for any occasion.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Brown"],
    rating: 4.8,
    reviews: 89,
    inStock: true,
    featured: false
  },
  {
    id: 7,
    name: "Athletic Shorts",
    price: 34.99,
    category: "shorts",
    image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=500&fit=crop",
    description: "Comfortable athletic shorts with moisture-wicking technology. Perfect for workouts.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Gray", "Navy"],
    rating: 4.2,
    reviews: 67,
    inStock: true,
    featured: false
  },
  {
    id: 8,
    name: "Knit Sweater",
    price: 89.99,
    category: "sweaters",
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=500&fit=crop",
    description: "Warm knit sweater with modern design. Perfect for cold weather.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Cream", "Gray", "Navy"],
    rating: 4.5,
    reviews: 112,
    inStock: true,
    featured: false
  },
  {
    id: 9,
    name: "Polo Shirt",
    price: 44.99,
    category: "shirts",
    image: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=400&h=500&fit=crop",
    description: "Classic polo shirt with breathable fabric. Suitable for casual and semi-formal occasions.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["White", "Blue", "Red", "Green"],
    rating: 4.3,
    reviews: 78,
    inStock: true,
    featured: false
  },
  {
    id: 10,
    name: "Denim Jacket",
    price: 119.99,
    category: "jackets",
    image: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=400&h=500&fit=crop",
    description: "Timeless denim jacket with modern fit. Versatile for any casual outfit.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Light Blue", "Dark Blue"],
    rating: 4.6,
    reviews: 134,
    inStock: true,
    featured: false
  },
  {
    id: 11,
    name: "Cargo Pants",
    price: 74.99,
    category: "pants",
    image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400&h=500&fit=crop",
    description: "Functional cargo pants with multiple pockets. Comfortable and practical.",
    sizes: ["30", "32", "34", "36", "38"],
    colors: ["Khaki", "Olive", "Black"],
    rating: 4.1,
    reviews: 56,
    inStock: true,
    featured: false
  },
  {
    id: 12,
    name: "Blazer",
    price: 149.99,
    category: "jackets",
    image: "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=400&h=500&fit=crop",
    description: "Professional blazer with modern cut. Perfect for business and formal events.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Navy", "Black", "Gray"],
    rating: 4.7,
    reviews: 92,
    inStock: true,
    featured: false
  }
];

export const categories = [
  { id: "all", name: "All Products" },
  { id: "t-shirts", name: "T-Shirts" },
  { id: "shirts", name: "Shirts" },
  { id: "jeans", name: "Jeans" },
  { id: "pants", name: "Pants" },
  { id: "shorts", name: "Shorts" },
  { id: "dresses", name: "Dresses" },
  { id: "jackets", name: "Jackets" },
  { id: "hoodies", name: "Hoodies" },
  { id: "sweaters", name: "Sweaters" }
];

export const getProductById = (id) => {
  return products.find(product => product.id === parseInt(id));
};

export const getProductsByCategory = (category) => {
  if (category === "all") return products;
  return products.filter(product => product.category === category);
};

export const getFeaturedProducts = () => {
  return products.filter(product => product.featured);
}; 