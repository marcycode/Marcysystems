# Marcy Systems – Digital Solutions Website

A high-converting, professional business website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Modern Design**: Clean, professional UI with smooth animations
- **Responsive**: Mobile-first design that works on all devices
- **Fast Performance**: Optimized for speed and SEO
- **Conversion-Focused**: Clear CTAs and lead capture forms
- **Accessible**: Semantic HTML and keyboard navigation support

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── about/          # About page
│   ├── contact/        # Contact page
│   ├── pricing/        # Pricing page
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── components/
│   ├── Footer.tsx      # Footer component
│   └── Navbar.tsx      # Navigation component
└── public/             # Static assets
```

## Pages

- **Home** (`/`) - Hero, services overview, trust signals, how it works, deliverables
- **About** (`/about`) - Company story, values, FAQ
- **Pricing** (`/pricing`) - Three pricing tiers, add-ons, pricing FAQ
- **Contact** (`/contact`) - Contact form with budget and timeline fields

## Customization

### Colors

Edit `tailwind.config.ts` to customize the color scheme. The primary color is set to blue (primary-600).

### Content

Update the content in each page file:
- `app/page.tsx` - Home page content
- `app/about/page.tsx` - About page content
- `app/pricing/page.tsx` - Pricing tiers and add-ons
- `app/contact/page.tsx` - Contact form fields

### Contact Form

The contact form currently shows a success message after submission. To integrate with a backend:

1. Create an API route in `app/api/contact/route.ts`
2. Update the form submission handler in `app/contact/page.tsx`
3. Add environment variables for email service (e.g., SendGrid, Resend)

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in Vercel
3. Deploy automatically

### Other Platforms

The site can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- Self-hosted with Node.js

## Performance

- Optimize images before adding to `public/`
- Use Next.js Image component for images
- Run `npm run build` to check Lighthouse scores

## Future Enhancements

- Backend integration for contact form
- Blog/CMS functionality
- Case studies page
- Booking calendar integration
- Lead tracking & CRM integration
- AI chatbot assistant

## License

© 2024 Marcy Systems. All rights reserved.

