# Brisbane Carpet Works Website

Professional carpet repair and restoration services website for Brisbane Carpet Works.

## 🌐 Live Website Features

- **14 Complete Pages:** Home, Services (6 detail pages), About, Projects, Pricing, Reviews, FAQs, Booking, Gallery, Blog, Contact
- **Fully Responsive:** Mobile, tablet, and desktop optimized
- **Professional Design:** Based on Hygienex cleaning services template
- **Working Contact Forms:** Email integration with EmailJS
- **SEO Optimized:** Proper meta tags and semantic HTML

## 🚀 Quick Start

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📧 Email Setup (IMPORTANT)

This website uses EmailJS to send form submissions to **Brisbanecarpetworks@gmail.com**

### Setup Steps:

1. Create free account at [EmailJS.com](https://www.emailjs.com/)
2. Connect Gmail account: **Brisbanecarpetworks@gmail.com**
3. Create email template
4. Copy Service ID, Template ID, and Public Key
5. Update `.env` file with your credentials

**See detailed instructions in:** `EMAILJS_SETUP.md`

### Environment Variables

Create a `.env` file:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

## 📱 Contact Information

- **Email:** Brisbanecarpetworks@gmail.com
- **Phone 1:** 0469 950 276
- **Phone 2:** 0452 318 234
- **Location:** Brisbane, Queensland

## 🎨 Tech Stack

- **React 19** - UI framework
- **Vite 8** - Build tool
- **Tailwind CSS 4** - Styling
- **React Router 7** - Routing
- **Lucide React** - Icons
- **EmailJS** - Email service

## 📂 Project Structure

```
carpet/
├── src/
│   ├── components/     # Reusable components
│   ├── pages/          # Page components
│   ├── services/       # Email service
│   ├── assets/         # Images
│   ├── App.jsx         # Main app
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles
├── public/             # Static files
├── .env                # Environment variables (not in git)
├── .env.example        # Example env file
└── package.json        # Dependencies
```

## 🎯 Key Features

### Forms
- Hero Quote Form (Homepage)
- Booking Form (/booking)
- Contact Form (/contact)

All forms send emails to: **Brisbanecarpetworks@gmail.com**

### Services
- Carpet Patching
- Carpet Damage Repair
- Pet Damage Repair
- Stain Removal
- Carpet Stretching
- Rental/Bond Carpet Repairs

### Pages
- `/` - Home
- `/services` - Services overview
- `/services/:slug` - Service details
- `/about` - About page
- `/projects` - Portfolio
- `/pricing` - Pricing
- `/reviews` - Customer reviews
- `/faqs` - FAQ page
- `/booking` - Booking form
- `/gallery` - Image gallery
- `/blog` - Blog listing
- `/blog/:slug` - Blog posts
- `/contact` - Contact page

## 🚢 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy

### Netlify

1. Connect GitHub repository
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Add environment variables
5. Deploy

### Environment Variables for Deployment

Add these in your hosting platform:
- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`
- `VITE_EMAILJS_PUBLIC_KEY`

## 📝 License

© Brisbane Carpet Works. All Rights Reserved.

## 🤝 Support

For technical support or questions about the website, refer to the setup documentation or contact the developer.
