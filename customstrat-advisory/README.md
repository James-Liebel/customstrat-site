# CustomStrat Advisory Website

A modern, responsive website for CustomStrat Advisory, LLC built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone or extract this project
2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production
```bash
npm run build
npm start
```

## 📁 Project Structure
```
src/
├── app/              # Next.js pages (App Router)
├── components/       # Reusable React components
├── content/          # Editable site content
└── styles/           # Global styles
```

## ✏️ Making Edits

### 1. Update Content

**All text content is centralized in one file:**
- `src/content/siteContent.ts`

This file contains:
- Company information (name, contact details)
- Page content (hero sections, services, testimonials)
- Navigation items
- Footer content

Simply edit the values in this file to update content across the entire site.

### 2. Change Brand Colors

**Edit `tailwind.config.ts`:**
```typescript
colors: {
  primary: {
    DEFAULT: '#4A7BA7',  // Main brand color
    dark: '#3A5F82',     // Darker shade
    light: '#6B9BC4',    // Lighter shade
  },
  // ...
}
```

### 3. Change Fonts

**Edit `tailwind.config.ts`:**
```typescript
fontFamily: {
  sans: ['Your Font', 'system-ui', 'sans-serif'],
}
```

Then add the font import to `src/app/layout.tsx`.

### 4. Replace Images

Place your images in `public/images/` with these names:
- `hero-home.jpg` - Homepage hero background
- `hero-about.jpg` - About page hero
- `hero-case-studies.jpg` - Services/case studies hero
- `hero-contact.jpg` - Contact page hero
- `katie-liebel.jpg` - Leadership photo
- `team-meeting.jpg` - Team collaboration image
- `logo.svg` - Company logo (optional)

Images should be:
- High resolution (1920px wide minimum for heroes)
- Optimized for web (use tools like TinyPNG)
- JPG for photos, PNG for graphics with transparency

### 5. Add New Pages

1. Create a new folder in `src/app/` (e.g., `src/app/services/`)
2. Add a `page.tsx` file
3. Add the route to navigation in `src/content/siteContent.ts`

### 6. Modify Components

Components are in `src/components/`:
- `Header.tsx` - Top navigation
- `Footer.tsx` - Site footer
- `Hero.tsx` - Page hero sections
- `ContactForm.tsx` - Contact form with validation
- Other specialized components

## 🎨 Design System

### Colors
- **Primary Blue**: Strategic, professional
- **Gray Scale**: Clean, modern hierarchy
- **White/Light backgrounds**: Clarity and space

### Typography
- System font stack for performance
- Clear hierarchy with h1-h6
- Readable line heights and spacing

### Components
- Responsive grid layouts
- Hover states on interactive elements
- Smooth transitions and animations
- Accessible focus states

## 📱 Responsive Design

The site automatically adapts to:
- **Mobile**: < 768px (stacked layouts, mobile menu)
- **Tablet**: 768px - 1024px (2-column grids)
- **Desktop**: > 1024px (full layouts, 3-column grids)

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels where needed
- Keyboard navigation support
- Focus indicators
- Alt text for images (add descriptions when replacing placeholder images)

## 🔧 Technical Details

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **No backend required** - Contact form shows success state only (integrate with your email service)

## 📝 To-Do After Setup

1. ✅ Replace placeholder images in `public/images/`
2. ✅ Update content in `src/content/siteContent.ts`
3. ✅ Customize brand colors in `tailwind.config.ts`
4. ✅ Add real LinkedIn URL for Katie Liebel
5. ✅ Set up form backend (optional - use Formspree, SendGrid, etc.)
6. ✅ Add Google Analytics or tracking (if needed)
7. ✅ Configure domain and hosting
8. ✅ Test on multiple devices and browsers

## 🚢 Deployment

### Deploy to Vercel (Recommended)
1. Push code to GitHub
2. Connect to Vercel
3. Deploy automatically

### Deploy to Netlify
1. Connect GitHub repository
2. Build command: `npm run build`
3. Publish directory: `.next`

### Other Hosting
Build the production bundle:
```bash
npm run build
```

Then deploy the `.next` folder to your hosting provider.

## 💡 Tips

- Keep content in `siteContent.ts` for easy updates
- Use semantic HTML for better SEO
- Optimize images before adding them
- Test forms thoroughly before going live
- Keep dependencies updated for security

## 📞 Support

For questions about the codebase, refer to:
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

---

**Built with ❤️ for CustomStrat Advisory**