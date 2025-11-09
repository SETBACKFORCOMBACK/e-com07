# Supabase Setup Guide for VDS PRINKZZZ

## 🚀 Quick Setup Steps

### 1. Run Database Setup SQL

1. Go to your Supabase project: https://supabase.com/dashboard/project/fsgrfmzruhlinjashubh
2. Navigate to **SQL Editor** in the left sidebar
3. Click **New Query**
4. Copy and paste the contents of `database-setup.sql`
5. Click **Run** to execute the SQL

This will create:
- `orders` table for storing customer orders
- Row Level Security (RLS) policies
- Indexes for better performance
- Automatic timestamp updates

### 2. Verify Table Creation

1. Go to **Table Editor** in Supabase dashboard
2. You should see the `orders` table
3. Check that it has the following columns:
   - id (UUID)
   - user_id (UUID, references auth.users)
   - user_email (text)
   - order_items (JSONB)
   - shipping_address (JSONB)
   - contact_info (JSONB)
   - shipping_method (text)
   - subtotal (decimal)
   - discount (decimal)
   - shipping_cost (decimal)
   - total (decimal)
   - order_status (text)
   - created_at (timestamp)
   - updated_at (timestamp)

### 3. Enable Email Authentication

1. Go to **Authentication** > **Providers** in Supabase dashboard
2. Ensure **Email** provider is enabled
3. Configure email settings (optional):
   - Enable "Confirm email" if you want email verification
   - Set up email templates for welcome emails

### 4. Test the Integration

1. Open your website
2. Click **Login** in the navigation
3. Create a new account or login
4. Add items to cart
5. Proceed to checkout
6. Fill in shipping details
7. Click **Place Order**
8. Check Supabase dashboard > **Table Editor** > **orders** to see the order

## 📋 Database Schema

### Orders Table

```sql
orders
├── id (UUID, Primary Key)
├── user_id (UUID, Foreign Key to auth.users)
├── user_email (TEXT)
├── order_items (JSONB) - Array of cart items
├── shipping_address (JSONB) - Shipping details
├── contact_info (JSONB) - Contact information
├── shipping_method (TEXT)
├── subtotal (DECIMAL)
├── discount (DECIMAL)
├── shipping_cost (DECIMAL)
├── total (DECIMAL)
├── order_status (TEXT) - 'pending', 'processing', 'shipped', 'delivered'
├── created_at (TIMESTAMP)
└── updated_at (TIMESTAMP)
```

## 🔒 Security Features

- **Row Level Security (RLS)**: Users can only see and manage their own orders
- **Authentication Required**: Checkout requires user to be logged in
- **Automatic User Linking**: Orders are automatically linked to the authenticated user

## 🧪 Testing

### Test User Registration
1. Go to login page
2. Click "Sign up"
3. Enter email and password (min 6 characters)
4. Check email for verification (if enabled)

### Test Order Placement
1. Login to your account
2. Add products to cart
3. Go to checkout
4. Fill in shipping details
5. Place order
6. Verify order appears in Supabase dashboard

### Test Authentication
1. Login with correct credentials
2. Verify "Login" button changes to "Logout"
3. Click "Logout"
4. Verify you're logged out and redirected

## 🐛 Troubleshooting

### Orders not saving?
- Check browser console for errors
- Verify RLS policies are set up correctly
- Check that user is authenticated
- Verify table name is `orders` (lowercase)

### Authentication not working?
- Check Supabase project URL and API key in `supabase-config.js`
- Verify Email provider is enabled in Supabase dashboard
- Check browser console for errors
- Ensure Supabase JavaScript library is loaded

### Can't see orders in dashboard?
- Verify you're logged in as the same user who placed the order
- Check RLS policies allow users to see their own orders
- Verify orders table exists and has data

## 📝 Notes

- All orders are stored in Supabase database
- User authentication is handled by Supabase Auth
- Orders are automatically linked to the authenticated user
- Order status can be updated manually in Supabase dashboard
- Email verification is optional (can be disabled in Supabase settings)

## 🔗 Useful Links

- Supabase Dashboard: https://supabase.com/dashboard/project/fsgrfmzruhlinjashubh
- Supabase Docs: https://supabase.com/docs
- Authentication Docs: https://supabase.com/docs/guides/auth

