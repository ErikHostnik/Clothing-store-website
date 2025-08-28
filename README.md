# StyleHub - Modern Clothing Store Website

A modern, responsive clothing store website built with React. Features a complete e-commerce experience with product browsing, shopping cart, and user-friendly interface.

## 🚀 Features

### Core Functionality
- **Product Catalog**: Browse products by category with filtering and search
- **Shopping Cart**: Add/remove items, quantity management, and persistent cart state
- **Product Details**: Detailed product pages with size/color selection
- **Responsive Design**: Mobile-first design that works on all devices
- **Modern UI**: Clean, professional design with smooth animations

### Pages & Components
- **Home Page**: Hero section, featured products, categories, testimonials
- **Shop Page**: Product grid with filters, sorting, and search
- **Product Detail Page**: Product information, size/color selection, add to cart
- **Cart Page**: Shopping cart management with order summary
- **About Page**: Company story, team, and values
- **Contact Page**: Contact form, company information, and FAQ

### Technical Features
- **React Router**: Client-side routing for smooth navigation
- **Context API**: Global state management for shopping cart
- **Local Storage**: Persistent cart data across browser sessions
- **Responsive Grid**: CSS Grid and Flexbox for modern layouts
- **Icon Integration**: Lucide React icons for consistent UI
- **Custom CSS**: Modern design system with CSS custom properties

## 🛠️ Technologies Used

- **React 18**: Modern React with hooks and functional components
- **React Router DOM**: Client-side routing
- **Lucide React**: Beautiful, customizable icons
- **CSS3**: Custom styling with modern features
- **HTML5**: Semantic markup

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd clothing_store_website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the application

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.js       # Navigation header
│   ├── Footer.js       # Site footer
│   └── ProductCard.js  # Product display component
├── context/            # React Context providers
│   └── CartContext.js  # Shopping cart state management
├── data/               # Static data and utilities
│   └── products.js     # Product database and helper functions
├── pages/              # Page components
│   ├── Home.js         # Landing page
│   ├── Shop.js         # Product catalog
│   ├── ProductDetail.js # Individual product page
│   ├── Cart.js         # Shopping cart
│   ├── About.js        # About page
│   └── Contact.js      # Contact page
├── App.js              # Main application component
├── index.js            # Application entry point
└── index.css           # Global styles and design system
```

## 🎨 Design System

The application uses a consistent design system with:

- **Color Palette**: Primary blue (#2563eb), secondary colors, and neutral grays
- **Typography**: Inter font family for modern, readable text
- **Spacing**: Consistent spacing scale using CSS custom properties
- **Components**: Reusable button, card, and form components
- **Animations**: Smooth transitions and hover effects

## 🛍️ Shopping Cart Features

- **Add to Cart**: Add products with size and color selection
- **Quantity Management**: Increase/decrease item quantities
- **Remove Items**: Remove individual items from cart
- **Persistent Storage**: Cart data saved to localStorage
- **Order Summary**: Calculate subtotal, shipping, and tax
- **Clear Cart**: Remove all items at once

## 📱 Responsive Design

The website is fully responsive and optimized for:
- **Mobile**: 320px and up
- **Tablet**: 768px and up
- **Desktop**: 1024px and up
- **Large Desktop**: 1200px and up

## 🔧 Customization

### Adding New Products
Edit `src/data/products.js` to add new products:
```javascript
{
  id: 13,
  name: "New Product",
  price: 49.99,
  category: "t-shirts",
  image: "product-image-url",
  description: "Product description",
  sizes: ["S", "M", "L", "XL"],
  colors: ["Red", "Blue", "Green"],
  rating: 4.5,
  reviews: 50,
  inStock: true,
  featured: false
}
```

### Styling Customization
Modify `src/index.css` to customize:
- Colors (CSS custom properties)
- Typography
- Spacing
- Component styles

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy Options
- **Netlify**: Drag and drop the `build` folder
- **Vercel**: Connect your repository for automatic deployment
- **GitHub Pages**: Use `gh-pages` package
- **AWS S3**: Upload build files to S3 bucket

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

For support or questions:
- Email: info@stylehub.com
- Phone: (555) 123-4567
- Visit our [Contact Page](/contact)

## 🎯 Future Enhancements

- User authentication and accounts
- Wishlist functionality
- Product reviews and ratings
- Payment integration (Stripe, PayPal)
- Order tracking
- Email notifications
- Admin dashboard
- Inventory management
- Multi-language support
- PWA features

---

**StyleHub** - Your destination for trendy and affordable fashion! 🛍️ 