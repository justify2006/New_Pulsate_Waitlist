# Pulsate Waitlist

A minimalist, academic-style 3-page website for Pulsate with Supabase integration for email collection.

## Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up Supabase:**
   - Create a Supabase project at [supabase.com](https://supabase.com)
   - Create a table named `waitlist` with columns:
     - `email` (TEXT)
     - `created_at` (TIMESTAMPTZ, default: `now()`)
   - Get your project URL and anon key from the API settings

3. **Environment variables:**
   Create a `.env.local` file in the root directory:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url_here
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

## Pages

- **Home** (`/`): Main landing page with waitlist form
- **Method** (`/method`): Information about Pulsate's approach
- **Careers** (`/careers`): Job opportunities and contact

## Features

- Static, minimalist design with no animations
- Supabase integration for email collection
- Responsive navigation
- Clean typography using Georgia serif font
- Academic document aesthetic

## Tech Stack

- Next.js 15
- React 19
- TypeScript
- Supabase (database)
- CSS (no frameworks)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
