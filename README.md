# Brisbane Carpet Works - Professional Carpet Repair Website

A complete, production-ready carpet repair business website built with React, Vite, and Tailwind CSS. This website is specifically designed for carpet repair businesses that specialize in helping renters prepare their properties for final inspections.

## 🎯 Project Overview

This website is inspired by professional carpet repair service websites with a focus on:
- **Rental property repairs** - Helping renters get their bond back
- **Professional service presentation** - Trust-building and conversion optimization
- **Multiple service pages** - Comprehensive information about carpet repair services
- **Lead generation** - Quote forms with photo upload functionality
- **SEO optimization** - Location pages and service-specific content

## 🚀 Features

### Pages Implemented
- ✅ **Home** - Hero section, services overview, before/after gallery, process steps, statistics, FAQs
- ✅ **Services** - Complete services grid with individual service detail pages
- ✅ **About** - Company story, values, team, service areas
- ✅ **FAQs** - Searchable/filterable accordion FAQ system
- ✅ **Contact** - Contact form with business information
- ✅ **Quote** - Multi-step quote form with image upload capability
- ✅ **Service Areas** - Location grid with individual location landing pages
- ✅ **Service Guide** - Comprehensive guide covering repair processes
- ✅ **Resources** - Article/blog listing page

### Key Components
- Responsive Header with mobile menu
- Comprehensive Footer with sitemap
- Mobile Action Bar (sticky call/quote buttons)
- Reusable service cards
- FAQ accordion component
- Process steps visualization
- Statistics section
- CTA sections
- Before/after galleries

### Design System
- Custom CSS variables for easy branding changes
- Professional color palette (charcoal, amber, neutrals)
- Responsive typography
- Accessible focus states
- Smooth animations with reduced-motion support
- Card-based layouts
- Button variants (primary, secondary, outline)

## 🛠️ Tech Stack

- **React 19.2.8** - UI framework
- **Vite 8.2.0** - Build tool and dev server
- **React Router DOM 7+** - Client-side routing
- **Tailwind CSS 4.3.3** - Utility-first CSS framework
- **OxLint 1.75** - Fast JavaScript linter

## 📦 Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.jsx
│   ├── Footer.jsx
│   ├── Hero.jsx
│   ├── ServiceCard.jsx
│   ├── FAQAccordion.jsx
│   ├── CTASection.jsx
│   ├── TrustStrip.jsx
│   ├── ProcessSteps.jsx
│   ├── WhyChooseUs.jsx
│   ├── StatsSection.jsx
│   └── MobileActionBar.jsx
│
├── pages/              # Route pages
│   ├── Home.jsx
│   ├── Services.jsx
│   ├── ServiceDetail.jsx
│   ├── About.jsx
│   ├── FAQs.jsx
│   ├── Contact.jsx
│   ├── Quote.jsx
│   ├── ServiceAreas.jsx
│   ├── ServiceGuide.jsx
│   ├── Resources.jsx
│   └── LocationPage.jsx
│
├── data/               # Data files
│   ├── services.js     # Service definitions
│   ├── faqs.js         # FAQ data
│   └── config.js       # Business configuration
│
├── App.jsx             # Main app with routing
├── main.jsx            # React entry point
└── index.css           # Global styles & design system
```

## 🎨 Customization

### Business Information
Edit `src/data/config.js` to update:
- Business name, tagline, contact details
- Phone numbers, email, address
- Opening hours
- Service areas
- Statistics (repairs completed, years experience, etc.)
- Trust points and "Why Choose Us" content

### Services
Edit `src/data/services.js` to:
- Add/remove/modify services
- Update service descriptions and features
- Change service icons
- Modify repair processes

### FAQs
Edit `src/data/faqs.js` to:
- Add new frequently asked questions
- Update answers
- Organize by categories

### Branding/Colors
Edit `src/index.css` CSS variables:
```css
:root {
  --color-primary: #1a1a1a;        /* Main dark color */
  --color-secondary: #d4a574;      /* Secondary warm color */
  --color-accent: #c17a3e;         /* Accent/CTA color */
  /* ... more variables */
}
```

## 📱 Responsive Design

The website is fully responsive and tested at multiple breakpoints:
- Mobile: 320px - 767px
- Tablet: 768px - 1023px
- Desktop: 1024px+

Mobile-specific features:
- Hamburger menu
- Sticky mobile action bar (Call + Quote)
- Touch-friendly buttons
- Optimized layouts

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels where appropriate
- Keyboard navigation support
- Focus visible states
- Sufficient color contrast
- Alt text for images
- Reduced motion support

## 🔍 SEO Features

- Unique meta titles and descriptions
- Open Graph tags
- Semantic HTML
- Proper heading hierarchy (H1-H6)
- Internal linking
- Location-based landing pages
- Service-specific pages
- Clean URLs

## 📞 Contact Information

Current placeholder contact details (update in `src/data/config.js`):
- **Phone:** 0469 950 276
- **Alt Phone:** 0452 318 234
- **Email:** Brisbanecarpetworks@gmail.com
- **Service Area:** Greater Brisbane & Surrounding Areas

## 🚦 Next Steps

### Before Launch:
1. Replace placeholder contact information with actual business details
2. Add real before/after images
3. Update service area suburbs with actual coverage
4. Add real testimonials (if available)
5. Configure form submission backend
6. Add Google Analytics
7. Set up real image uploads for quote form
8. Add schema markup for LocalBusiness
9. Create actual blog articles for Resources section
10. Take professional photos of repairs

### Optional Enhancements:
- Add blog/CMS integration
- Implement actual before/after image sliders
- Add customer review system
- Integrate booking system
- Add live chat widget
- Set up email marketing integration
- Add Google Maps integration
- Implement image optimization

## 📄 License

This is a custom-built website for Brisbane Carpet Works.

## 🤝 Support

For questions or support, contact via the information provided in the Contact page.

---

**Built with ❤️ using React, Vite, and Tailwind CSS**
