# Federated Login with Clerk & Next.js 15

A modern, secure Next.js application featuring federated authentication using Clerk. This application demonstrates how to implement OAuth 2.0 and OpenID Connect authentication with multiple identity providers (Google, GitHub, Microsoft, etc.).

## ✨ Features

- 🔐 **Federated Authentication** - Sign in with Google, GitHub, Microsoft, and more
- 🎨 **Beautiful Modern UI** - Responsive design with Tailwind CSS
- 🛡️ **Protected Routes** - Middleware-based route protection
- ⚡ **Next.js 15** - Latest features including App Router and Server Components
- 🎯 **TypeScript** - Full type safety
- 🚀 **Production Ready** - Optimized and ready to deploy

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- A Clerk account (free tier available at [clerk.com](https://clerk.com))

### 1. Clone and Install

```bash
# Install dependencies
npm install
```

### 2. Set Up Clerk

1. Go to [Clerk Dashboard](https://dashboard.clerk.com)
2. Create a new application
3. In the dashboard, navigate to **API Keys**
4. Copy your Publishable Key and Secret Key

### 3. Configure Environment Variables

Create a `.env.local` file in the root directory:

```bash
# Copy from .env.example
cp .env.example .env.local
```

Then update `.env.local` with your actual Clerk keys:

```env
# Get these keys from your Clerk Dashboard
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_your_actual_key_here
CLERK_SECRET_KEY=sk_test_your_actual_key_here

# Clerk URLs (these are already configured)
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard
```

### 4. Configure Authentication Settings

**Remove Phone Number Requirement (Optional but Recommended):**
1. In Clerk Dashboard, go to **User & Authentication** → **Email, Phone, Username**
2. Set **Phone number** to **Off** (removes it entirely) or **Optional**
3. Ensure **Email address** is set to **Required**
4. Click **Save**

**Enable Social Connections (Federated Login):**
1. In your Clerk Dashboard, go to **User & Authentication** → **Social Connections**
2. Enable the providers you want (e.g., Google, GitHub, Microsoft)
3. Follow the setup instructions for each provider
4. Save your changes

### 5. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your application.

## 📁 Project Structure

```
federated-login/
├── src/
│   ├── app/
│   │   ├── dashboard/      # Protected dashboard page
│   │   │   └── page.tsx
│   │   ├── sign-in/        # Sign-in page
│   │   │   └── page.tsx
│   │   ├── sign-up/        # Sign-up page
│   │   │   └── page.tsx
│   │   ├── layout.tsx      # Root layout with ClerkProvider
│   │   ├── page.tsx        # Landing page
│   │   └── globals.css     # Global styles
│   └── middleware.ts       # Route protection middleware
├── .env.local             # Environment variables (create this)
└── .env.example           # Environment variables template
```

## 🔒 Authentication Flow

1. **Public Routes**: `/`, `/sign-in`, `/sign-up` - Accessible without authentication
2. **Protected Routes**: `/dashboard` - Requires authentication
3. **Middleware**: Automatically protects routes and redirects unauthenticated users

## 🎨 Customization

### Adding More Identity Providers

1. Go to Clerk Dashboard → **Social Connections**
2. Enable additional providers
3. Configure OAuth credentials for each provider
4. Users will automatically see new sign-in options

### Styling

The application uses Tailwind CSS. Modify styles in:
- `src/app/globals.css` - Global styles
- Component files - Inline Tailwind classes

### Changing Routes

Update the URLs in `.env.local`:

```env
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/your-custom-signin
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/your-dashboard
```

## 📚 Learn More

- [Clerk Documentation](https://clerk.com/docs) - Comprehensive Clerk guides
- [Next.js Documentation](https://nextjs.org/docs) - Next.js features and API
- [Tailwind CSS](https://tailwindcss.com/docs) - Styling documentation

## 🚀 Deploy on Vercel

The easiest way to deploy:

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

## 📝 Environment Variables Reference

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` | Your Clerk publishable key | Yes |
| `CLERK_SECRET_KEY` | Your Clerk secret key | Yes |
| `NEXT_PUBLIC_CLERK_SIGN_IN_URL` | Sign-in page URL | Yes |
| `NEXT_PUBLIC_CLERK_SIGN_UP_URL` | Sign-up page URL | Yes |
| `NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL` | Redirect after sign-in | Yes |
| `NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL` | Redirect after sign-up | Yes |

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

## 📄 License

This project is open source and available under the MIT License.

---

Built with ❤️ using [Next.js 15](https://nextjs.org) and [Clerk](https://clerk.com)
