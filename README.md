# Salt AI Landing Page

A modern, interactive landing page featuring smooth scroll-based parallax animations. Built with Next.js and Framer Motion for a polished, engaging user experience.

## Features

- **Smooth Parallax Animations**: Scroll-triggered animations that create depth and visual interest throughout the page
- **Responsive Design**: Fully optimized for all screen sizes, from mobile to desktop
- **Performance Optimized**: Efficient animation handling with Framer Motion for smooth 60fps scrolling
- **Accessible**: Built with accessibility best practices including proper ARIA labels and semantic HTML
- **Modern Stack**: Leveraging the latest Next.js 16 features with App Router and TypeScript

## Tech Stack

- **Next.js 16** - React framework with App Router
- **Framer Motion 12** - Animation library for scroll-based effects
- **TypeScript** - Type-safe development
- **Tailwind CSS 4** - Utility-first styling
- **Custom Fonts** - Inter and Clash Grotesk for typography

## Getting Started

First, install the dependencies:

```bash
pnpm install
```

Then, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Building for Production

To create an optimized production build:

```bash
pnpm build
pnpm start
```

## Project Structure

The project follows Next.js App Router conventions:

- `app/page.tsx` - Main page component with scroll animations orchestration
- `app/components/` - Reusable components (hero, stats, leaderboard, etc.)
- `app/globals.css` - Global styles and Tailwind configuration
- `public/images/` - Image assets used throughout the site

## Key Components

- **Hero Section** - Animated gradient text with scroll-triggered transitions
- **Stats Container** - Dynamic statistics cards with reveal animations
- **Logos Slider** - Animated logo showcase with slide effects
- **Leaderboard Table** - Responsive data table with progressive column display
- **Community & Footer** - Final sections with parallax background effects

## Notes

The animations are carefully tuned to provide smooth performance while maintaining visual appeal. All scroll milestones are calculated based on viewport height for consistent behavior across different screen sizes.
