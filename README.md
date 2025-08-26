# XURO - Futuristic Creative Agency Portfolio

<div align="center">
  <h1>🚀 XURO</h1>
  <p><strong>Code. Create. Captivate.</strong></p>
  <p>A cutting-edge, futuristic portfolio website for a creative freelancing agency</p>
</div>

## ✨ Features

### 🎨 Design & Visual Effects
- **Dark Neon Aesthetic**: Electric blue, purple, and pink gradients with glassmorphism effects
- **Interactive Service Cards**: Professional service images with smooth hover animations
- **Custom Animations**: Smooth scroll reveals, parallax effects, and kinetic text animations
- **Floating Particles**: Ambient visual effects with floating orbs and gradient elements
- **Multi-Cursor System**: Advanced cursor with trailing effects and mobile touch support
- **Responsive Design**: Optimized for all devices from mobile to desktop with touch interactions

### 🏗️ Architecture & Performance
- **Modern React**: Built with React 18 and TypeScript for type safety
- **Framer Motion**: Smooth page transitions and component animations
- **Fluid Animations**: Interactive splash effects on cursor movement and touch
- **Optimized Performance**: Code splitting and lazy loading for fast load times
- **SEO Ready**: Proper meta tags and semantic HTML structure
- **Mobile-First**: Touch-optimized interactions and responsive breakpoints

### 📱 Pages & Functionality
- **Home**: Hero section with animated elements and service highlights
- **About**: Interactive timeline and team showcase with flip cards
- **Services**: 6 core services with professional images and interactive cards
- **Showcase**: Filterable portfolio gallery with project previews
- **Testimonials**: Animated testimonial cards with client feedback and ratings
- **Contact**: Interactive contact form with floating social icons

### 🎯 Services Offered
1. **Logo Design** - Unique brand identities and visual systems
2. **Web Design** - User-centric interfaces with modern aesthetics  
3. **Web Development** - High-performance applications with cutting-edge tech
4. **Product Photography** - Professional photography and visual content
5. **App Development** - Native and cross-platform mobile applications
6. **Training Programs** - Technical workshops and skill development

## 🛠️ Technology Stack

| Category | Technology |
|----------|------------|
| **Framework** | React 18 + TypeScript |
| **Styling** | Tailwind CSS + Custom CSS Variables |
| **Animations** | Framer Motion |
| **Interactions** | Custom Cursor + Touch Support |
| **Routing** | Single Page Application |
| **Icons** | Lucide React |
| **Build Tool** | Vite |
| **Deployment** | Vercel/Netlify Ready |

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/xuro-portfolio.git
   cd xuro-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

### Build for Production

```bash
# Build the project
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── Navigation.tsx   # Main navigation with company logo
│   ├── CustomCursor.tsx # Multi-cursor system with mobile support
│   ├── SplashCursor.tsx # Fluid splash effects
│   ├── ServiceCard.tsx  # Service cards with images
│   ├── TeamCard.tsx     # Flip cards with mobile touch support
│   └── Background.tsx   # Animated background elements
├── pages/               # Page components
│   ├── Home.tsx         # Landing page with service previews
│   ├── About.tsx        # Company story and team
│   ├── Services.tsx     # Service offerings with images
│   ├── Showcase.tsx     # Portfolio gallery
│   ├── Testimonials.tsx # Client testimonials
│   └── Contact.tsx      # Contact form and info
├── hooks/               # Custom React hooks
│   ├── useCursor.ts     # Cursor state management
│   └── useScrollAnimation.ts # Scroll-triggered animations
├── utils/               # Utility functions
│   └── fluid.ts         # Fluid animation system
├── data/                # Static data
│   ├── team.ts          # Team member information
│   ├── timeline.ts      # Company timeline events
│   └── testimonials.ts  # Client testimonials
├── App.tsx              # Main app component with routing
├── App.css              # Global styles and animations
├── main.tsx             # Application entry point
└── index.css            # Tailwind CSS + Custom color palette
```

## 🎨 Design System

### Color Palette
Our comprehensive color system includes:

#### Primary Colors
- **Electric Blue**: `#3b82f6` (Blue-500) to `#60a5fa` (Blue-400)
- **Purple**: `#8b5cf6` (Purple-500) to `#a78bfa` (Purple-400)

#### Secondary Colors  
- **Pink**: `#ec4899` (Pink-500) to `#f472b6` (Pink-400)
- **Rose**: `#f43f5e` (Rose-500) to `#fb7185` (Rose-400)

#### Accent Colors
- **Cyan**: `#06b6d4`, **Teal**: `#14b8a6`, **Green**: `#10b981`
- **Orange**: `#f97316`, **Indigo**: `#6366f1`

#### Background System
- **Primary**: Pure Black (`#000000`) to Dark Gray (`#111827`)
- **Glass Effects**: `rgba(255, 255, 255, 0.05)` and `rgba(255, 255, 255, 0.1)`

### Typography
- **Primary Font**: System fonts optimized for readability
- **Font Weights**: 300, 400, 500, 600, 700, 900
- **Responsive Scaling**: Fluid typography across all breakpoints

### Effects & Animations
- **Glassmorphism**: `backdrop-filter: blur(20px)` with transparent backgrounds
- **Neon Glow**: Custom box-shadow with gradient colors
- **Smooth Animations**: 0.3s ease transitions with Framer Motion
- **Touch Interactions**: Optimized for mobile devices

## 🔧 Customization

### Adding New Services
1. Edit `src/pages/Services.tsx`
2. Add new service object to the `services` array
3. Include image URL, title, description, and gradient colors

### Modifying Animations
- **Page Transitions**: Edit motion variants in page components
- **Scroll Animations**: Adjust `whileInView` properties in `useScrollAnimation`
- **Cursor Effects**: Modify settings in `CustomCursor.tsx` and `SplashCursor.tsx`

### Updating Content
- **Company Info**: Edit text content in respective page components
- **Service Images**: Replace image URLs with your own professional images
- **Contact Details**: Update contact information in `Contact.tsx`
- **Team Members**: Modify team data in `src/data/team.ts`

### Color System Customization
All colors are centralized in `src/index.css` using CSS custom properties:

```css
:root {
  --color-primary-blue: #3b82f6;
  --color-primary-purple: #8b5cf6;
  --gradient-primary: linear-gradient(135deg, var(--color-primary-blue), var(--color-primary-purple));
}
```

## 📱 Mobile Optimization

### Touch Support
- **Service Cards**: Touch-optimized hover effects
- **Navigation**: Mobile-friendly menu with touch interactions
- **Cursors**: Automatic mobile detection with touch event handling
- **Team Cards**: Tap-to-flip functionality on mobile devices

### Responsive Breakpoints
```css
/* Mobile First Approach */
sm: 640px   /* Small devices */
md: 768px   /* Medium devices */  
lg: 1024px  /* Large devices */
xl: 1280px  /* Extra large devices */
2xl: 1536px /* 2X Extra large devices */
```

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub repository
2. Connect repository to Vercel
3. Deploy automatically on push to main branch

### Netlify
1. Build the project: `npm run build`
2. Upload `dist` folder to Netlify
3. Configure redirects for SPA routing

### Manual Deployment
```bash
# Build for production
npm run build

# The dist/ folder contains all static files
# Upload contents to your web server
```

## 🔍 SEO & Performance

### Optimization Features
- **Meta Tags**: Proper title, description, and Open Graph tags
- **Semantic HTML**: Proper heading hierarchy and ARIA labels
- **Performance**: Optimized images and code splitting
- **Accessibility**: Keyboard navigation and screen reader support
- **Core Web Vitals**: Optimized for Google's performance metrics

### Image Optimization
- All service images are optimized with Pexels URLs
- Responsive image loading with proper aspect ratios
- Lazy loading for improved performance

## 🐛 Troubleshooting

### Common Issues

**Animation performance on mobile**
- Reduce particle count in background components
- Use `will-change` CSS property sparingly
- Test on actual devices for performance

**Touch interactions not working**
- Ensure mobile detection is working: `window.navigator.userAgent`
- Check touch event listeners are properly attached
- Test on various mobile browsers

**Build errors**
- Check TypeScript errors: `npm run lint`
- Ensure all imports are correct
- Verify image URLs are accessible

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📞 Support

For support and questions:
- **Email**: xuroglobal@gmail.com
- **Phone**: +91 8122016648
- **Location**: Chennai, India
- **GitHub Issues**: [Create an issue](https://github.com/your-username/xuro-portfolio/issues)

---

<div align="center">
  <p>Built with ❤️ by the XURO team</p>
  <p><strong>Code. Create. Captivate.</strong></p>
  <p>🎨 Professional service images • 📱 Mobile-optimized • ✨ Futuristic design</p>
</div>