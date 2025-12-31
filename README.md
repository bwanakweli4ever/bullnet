# BullNet React TypeScript Website

A modern React TypeScript website for BullNet, converted from HTML/CSS to a component-based React application.

## Features

- ⚛️ React 18 with TypeScript
- 🎨 Preserved original design and styling
- 🧩 Reusable components (Header, Footer, Button, IconBox, PageTitle)
- 🛣️ React Router for navigation
- 📱 Responsive design
- 🎯 Type-safe with TypeScript

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── Header/
│   ├── Footer/
│   ├── Button/
│   ├── IconBox/
│   └── PageTitle/
├── pages/              # Page components
│   ├── Home/
│   ├── About/
│   ├── Services/
│   ├── ServiceDetails/
│   ├── Contact/
│   ├── Shop/
│   └── ShopProductDetails/
├── App.tsx            # Main app component with routing
├── main.tsx           # Entry point
└── index.css          # Global styles

public/
├── images/            # Image assets
├── css/              # CSS files (imported in index.css)
└── js/               # JavaScript files (if needed)
```

## Components

### Header
- Responsive navigation menu
- Sticky header on scroll
- Mobile menu support

### Footer
- Newsletter subscription
- Contact information
- Social media links

### Button
- Reusable button component
- Supports Link, anchor, and button elements
- Primary and secondary variants

### IconBox
- Icon display with title and description
- Circular gradient background

### PageTitle
- Page title with breadcrumbs
- Consistent styling across pages

## Pages

- **Home** (`/`) - Landing page
- **About** (`/about`) - About us page
- **Services** (`/services`) - Services listing
- **Service Details** (`/services/:id`) - Individual service details
- **Shop** (`/shop`) - Product shop
- **Product Details** (`/shop/:id`) - Individual product details
- **Contact** (`/contact`) - Contact form

## Styling

The original CSS files are preserved and imported in `src/index.css`. All custom styling overrides are maintained to preserve the original design.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Copyright © 2024 BullNet. All rights reserved.

# bullnet
