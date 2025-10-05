# Quick Setup Guide

Follow these steps to get your federated login application running:

## Step 1: Create Clerk Account

1. Visit [https://dashboard.clerk.com/sign-up](https://dashboard.clerk.com/sign-up)
2. Sign up for a free account
3. Create a new application (choose "Next.js" as the framework)

## Step 2: Get Your API Keys

1. In your Clerk Dashboard, click on your application
2. Go to **API Keys** in the sidebar
3. You'll see two keys:
   - **Publishable Key** (starts with `pk_test_` or `pk_live_`)
   - **Secret Key** (starts with `sk_test_` or `sk_live_`)

## Step 3: Create Environment File

Create a file named `.env.local` in the root of your project:

```bash
# Windows PowerShell
New-Item .env.local

# macOS/Linux
touch .env.local
```

Add the following content (replace with your actual keys):

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
CLERK_SECRET_KEY=sk_test_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard
```

## Step 4: Configure Authentication Settings

### Disable Phone Number (Optional but Recommended)
1. In Clerk Dashboard, go to **User & Authentication** → **Email, Phone, Username**
2. Find **Phone number** and set it to **Off** (or **Optional**)
3. Ensure **Email address** is set to **Required**
4. Click **Save**

### Enable Federated Login Providers
1. In Clerk Dashboard, go to **User & Authentication** → **Social Connections**
2. Enable the providers you want:
   - ✅ **Google** (Most popular)
   - ✅ **GitHub** (For developers)
   - ✅ **Microsoft** (For enterprise)
   - ✅ **Facebook**, **Apple**, **LinkedIn**, etc.

3. For each provider:
   - Click **Enable**
   - Follow the OAuth setup instructions
   - Add credentials if required (some providers work without additional setup)

## Step 5: Run the Application

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

## Troubleshooting

### "Clerk: Missing publishable key"
- Make sure `.env.local` exists in the root directory
- Check that the keys are copied correctly
- Restart the dev server after creating `.env.local`

### Social login not working
- Verify the provider is enabled in Clerk Dashboard
- Check if OAuth credentials are configured correctly
- Some providers require production URLs (use Clerk's built-in test credentials for development)

### Redirect issues
- Verify the redirect URLs in `.env.local` match your route structure
- Check middleware.ts to ensure routes are properly configured

## What You Should See

1. **Home Page** (`/`)
   - Beautiful landing page
   - "Sign In" and "Get Started" buttons

2. **Sign-In Page** (`/sign-in`)
   - Email/password form
   - Social login buttons (Google, GitHub, etc.)

3. **Sign-Up Page** (`/sign-up`)
   - Registration form
   - Social sign-up options

4. **Dashboard** (`/dashboard`)
   - Protected page (requires authentication)
   - User profile button
   - Welcome message

## Next Steps

- Customize the UI in `src/app/page.tsx`
- Add more protected routes
- Configure user profile fields in Clerk Dashboard
- Add webhooks for user events
- Deploy to Vercel

## Resources

- [Clerk Documentation](https://clerk.com/docs)
- [Next.js 15 Docs](https://nextjs.org/docs)
- [Clerk + Next.js Guide](https://clerk.com/docs/quickstarts/nextjs)

Need help? Check the [Clerk Discord](https://clerk.com/discord) or [GitHub Discussions](https://github.com/clerkinc/javascript/discussions)
