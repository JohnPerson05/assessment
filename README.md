# ATS Platform - Applicant Tracking System

A modern, feature-rich Applicant Tracking System (ATS) website built with Next.js, React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Opening Animation** - Engaging loading animation with smooth transitions
- **Modern Navbar** - Responsive navigation with smooth scrolling
- **Hero Section** - Eye-catching hero with animated elements
- **About Section** - Company information with beautiful visuals
- **What We Do** - Feature showcase with cards
- **Why ATS** - Benefits section with numbered highlights
- **Industries** - Interactive industry cards
- **Video Section** - Product demo showcase
- **Tech in Action** - Feature grid with animations
- **Journey Timeline** - Visual journey representation
- **Mission & Vision** - Company values and goals
- **Leadership Team** - Team member profiles
- **Testimonials** - Slider with customer reviews
- **FAQ Section** - Accordion-style frequently asked questions
- **Contact Form** - Fully functional contact form with validation
- **Footer** - Comprehensive footer with links and social media

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Slider**: Swiper

## 📦 Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🏗️ Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Main page
│   └── globals.css         # Global styles
├── components/
│   ├── LoadingAnimation.tsx
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── WhatWeDo.tsx
│   ├── WhyATS.tsx
│   ├── Industries.tsx
│   ├── VideoSection.tsx
│   ├── TechInAction.tsx
│   ├── Journey.tsx
│   ├── Mission.tsx
│   ├── Leadership.tsx
│   ├── Testimonials.tsx
│   ├── FAQ.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── public/                 # Static assets
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── next.config.js
```

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to customize the color scheme:
```javascript
colors: {
  primary: { /* your colors */ },
  dark: { /* your colors */ },
}
```

### Content
Update the content in each component file under `/components` directory.

### Images
Replace placeholder content with actual images in the respective component files.

## 📝 Key Sections Reference

Based on the requirements:
- **Opening Animation**: `LoadingAnimation.tsx` - Inspired by hisab-kitab-amber.vercel.app
- **Navbar**: `Navbar.tsx` - Style from superconscious-app.webflow.io
- **Hero**: `Hero.tsx` - Based on botpipestech.com/about
- **About**: `About.tsx` - Alternative designs available
- **Video**: `VideoSection.tsx` - Style from zecchinon.com/it
- **Tech in Action**: `TechInAction.tsx` - From superconscious-app.webflow.io
- **Mission**: `Mission.tsx` - From superconscious-app.webflow.io/mission
- **Leadership**: `Leadership.tsx` - From superconscious-app.webflow.io/mission
- **Testimonials**: `Testimonials.tsx` - With slider functionality
- **FAQ**: `FAQ.tsx` - Accordion style from botpipestech.com/faq
- **Contact**: `Contact.tsx` - Form from superconscious-app.webflow.io
- **Footer**: `Footer.tsx` - From superconscious-app.webflow.io

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm run build
# Deploy to Vercel
```

### Other Platforms
The app can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- DigitalOcean
- etc.

## 📱 Responsive Design

All components are fully responsive and optimized for:
- Mobile devices (320px+)
- Tablets (768px+)
- Desktops (1024px+)
- Large screens (1280px+)

## ⚡ Performance

- Optimized with Next.js App Router
- Code splitting and lazy loading
- Image optimization
- Smooth animations with Framer Motion

## 📄 License

This project is created for demonstration purposes.

## 🤝 Support

For support, email hello@atsplatform.com or contact us through the website.

---

Built with ❤️ using Next.js and React

