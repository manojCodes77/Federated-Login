# Clerk Configuration Guide

## Remove Phone Number Requirement

### Step-by-Step Instructions

1. **Access Clerk Dashboard**
   - Go to [https://dashboard.clerk.com](https://dashboard.clerk.com)
   - Select your application

2. **Configure Authentication Fields**
   - Navigate to **User & Authentication** → **Email, Phone, Username**
   - Find the **Phone number** section
   - Change it to **Off** or **Optional**
   - Ensure **Email address** is set to **Required**
   - Click **Save**

3. **Verify Changes**
   - Restart your development server (`npm run dev`)
   - Go to `/sign-up` page
   - Phone number field should now be gone (if set to Off) or optional (if set to Optional)

## Common Configuration Options

### Email-Only Registration (Recommended for Most Apps)
- ✅ Email address: **Required**
- ❌ Phone number: **Off**
- ⚪ Username: **Optional** (your choice)

### Social Login Only
- Navigate to **User & Authentication** → **Social Connections**
- Enable desired providers (Google, GitHub, etc.)
- Go to **Email, Phone, Username**
- Set Email to **Optional** (will be populated from social provider)
- Set Phone to **Off**

### Customize User Profile Fields
- Navigate to **User & Authentication** → **Personal Information**
- Configure:
  - First name: Optional/Required/Off
  - Last name: Optional/Required/Off
  - Birthday: Optional/Off
  - Profile picture: Optional/Off

## Additional Customization

### Appearance Customization
You can customize the Clerk components in your code:

```tsx
<SignUp 
  appearance={{
    elements: {
      rootBox: "mx-auto",
      card: "shadow-xl",
      formButtonPrimary: "bg-blue-600 hover:bg-blue-700",
    }
  }}
/>
```

### Redirect URLs
Already configured in your `.env.local`:
```env
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard
```

## Troubleshooting

### Phone number still showing?
- Clear your browser cache
- Restart the development server
- Check that you saved changes in Clerk Dashboard
- Wait 1-2 minutes for changes to propagate

### Can't find the setting?
- Look under **User & Authentication** in the left sidebar
- Click on **Email, Phone, Username**
- The toggle should be clearly visible

## Resources

- [Clerk User Management Docs](https://clerk.com/docs/users/overview)
- [Clerk Authentication Options](https://clerk.com/docs/authentication/configuration/sign-up-sign-in-options)
- [Clerk Customization](https://clerk.com/docs/customization/overview)

