# VDS PRINKZZZ - Modern Luxury E-Commerce Website

A beautiful, modern luxury fashion e-commerce website featuring clean design, smooth animations, and full shopping cart functionality.

## 🎨 Features

### Pages
- **Home Page** - Hero section with featured categories and newsletter signup
- **Men's Collection** - Grid layout with filters (Tops, Bottoms, Footwear, Accessories)
- **Women's Collection** - Similar grid layout with filters (Dresses, Tops, Bottoms, Footwear, Accessories)
- **Shopping Cart** - Full cart functionality with promo codes
- **About/Contact** - Brand story, vision, and contact form

### Design Features
- ✅ Clean, modern, and luxurious aesthetic
- ✅ Neutral palette (black, white, beige with gold/pastel highlights)
- ✅ Smooth scroll and fade-in animations
- ✅ Elegant serif typography for headings
- ✅ Fully responsive design (mobile-friendly)
- ✅ Sticky navigation with cart icon

### Functional Features
- ✅ Add to cart functionality
- ✅ Remove from cart
- ✅ Update quantity
- ✅ Shopping cart persistence (localStorage)
- ✅ Promo code system (LUXE10 for 10% off, LUXE20 for 20% off)
- ✅ Product filtering
- ✅ Mobile-responsive navigation

### Bonus Features
- ✅ Cart counter badge
- ✅ Smooth hover effects on products
- ✅ Newsletter signup
- ✅ Social media links
- ✅ Modern UI with Tailwind CSS

## 🚀 Getting Started

### Option 1: Open Directly
Simply open `index.html` in your web browser.

### Option 2: Use a Local Server
For best experience, use a local server:

**Python:**
```bash
python -m http.server 8000
```

**Node.js (http-server):**
```bash
npx http-server
```

**VS Code Live Server:**
Install the Live Server extension and click "Go Live"

Then visit `http://localhost:8000` in your browser.

## 📦 Tech Stack

- **HTML5** - Structure
- **Tailwind CSS** - Styling via CDN
- **JavaScript** - Interactivity and cart functionality
- **localStorage** - Cart persistence
- **Google Fonts** - Playfair Display & Inter

## 🛍️ Shopping Features

### Adding Products
Click "Add to Cart" on any product to add it to your cart.

### Cart Management
- View cart by clicking the cart icon in the navigation
- Update quantities using the number input
- Remove items using the trash icon
- Apply promo codes: `LUXE10` or `LUXE20`

### Navigation
- Use the top navigation to switch between pages
- Mobile users can tap the hamburger menu
- Cart count badge shows number of items

## 🎨 Customization

### Colors
Modify the Tailwind color classes in the HTML files. Main colors used:
- Primary: `bg-gray-900` (black)
- Secondary: `bg-gray-50` (light beige)
- Accent: Gold/pastel highlights in hero section

### Products
Add or modify products in `men.html` and `women.html` by editing the `products` array in the JavaScript section.

### Promo Codes
Add new promo codes in `cart.html` in the `applyPromoCode()` function.

**Current Promo Codes:**
- `VDS10` - 10% discount
- `VDS20` - 20% discount

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🌟 Future Enhancements

Potential features to add:
- Backend integration (Firebase/Supabase)
- User authentication (login/signup)
- Product search with autocomplete
- Wishlist/favorites functionality
- Dark mode toggle
- Payment integration
- Order history

## 🔐 Authentication & Orders

This website now includes:
- **User Authentication**: Login/signup via Supabase
- **Order Management**: Orders are saved to Supabase database
- **Secure Checkout**: Login required to place orders
- **Order History**: View orders in Supabase dashboard

### Setup Instructions

1. **Run Database Setup**:
   - Go to your Supabase project dashboard
   - Navigate to SQL Editor
   - Run the SQL from `database-setup.sql`

2. **Configure Supabase**:
   - Supabase credentials are already configured in `supabase-config.js`
   - No additional configuration needed!

3. **Test Authentication**:
   - Click "Login" in navigation
   - Create an account or login
   - Add items to cart and checkout

See `SUPABASE_SETUP.md` for detailed setup instructions.

## 📄 License

Free to use for personal and commercial projects.

---

**Built with ❤️ for modern luxury fashion**

