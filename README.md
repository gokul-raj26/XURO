# XURO - Futuristic Creative Agency Portfolio

<div align="center">
  <h1>🚀 XURO</h1>
  <p><strong>Code. Create. Captivate.</strong></p>
  <p>A cutting-edge, futuristic portfolio website for a creative freelancing agency</p>
</div>

## ✨ Features

### 🎨 Design & Visual Effects
- **Dark Neon Aesthetic**: Electric blue, purple, and pink gradients with glassmorphism effects
- **3D Interactive Elements**: Three.js powered 3D sphere animations and interactive components
- **Custom Animations**: Smooth scroll reveals, parallax effects, and kinetic text animations
- **Floating Particles**: Ambient visual effects with floating orbs and gradient elements
- **Custom Cursor**: Magnetic cursor with glowing hover effects
- **Responsive Design**: Optimized for all devices from mobile to desktop

### 🏗️ Architecture & Performance
- **Modern React**: Built with React 18 and TypeScript for type safety
- **Framer Motion**: Smooth page transitions and component animations
- **Three.js Integration**: 3D graphics and interactive elements
- **Optimized Performance**: Code splitting and lazy loading for fast load times
- **SEO Ready**: Proper meta tags and semantic HTML structure

### 📱 Pages & Functionality
- **Home**: 3D hero section with animated sphere and service highlights
- **About**: Interactive timeline and team showcase with hover animations
- **Services**: 6 core services with 3D interactive cards and hover effects
- **Showcase**: Filterable portfolio gallery with project previews
- **Testimonials**: Animated carousel with client feedback and ratings
- **Contact**: Interactive contact form with floating social icons

## 🛠️ Technology Stack

| Category | Technology |
|----------|------------|
| **Framework** | React 18 + TypeScript |
| **Styling** | Tailwind CSS + Custom CSS |
| **Animations** | Framer Motion |
| **3D Graphics** | Three.js + React Three Fiber |
| **Routing** | React Router DOM |
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
│   ├── Navigation.tsx   # Main navigation with animations
│   ├── CustomCursor.tsx # Custom animated cursor
│   ├── FloatingOrbs.tsx # Ambient floating particles
│   └── Hero3D.tsx       # 3D hero section component
├── pages/               # Page components
│   ├── Home.tsx         # Landing page with hero
│   ├── About.tsx        # Company story and timeline
│   ├── Services.tsx     # Service offerings
│   ├── Showcase.tsx     # Portfolio gallery
│   ├── Testimonials.tsx # Client testimonials
│   └── Contact.tsx      # Contact form and info
├── App.tsx              # Main app component with routing
├── App.css              # Global styles and animations
├── main.tsx             # Application entry point
└── index.css            # Tailwind CSS imports
```

## 🎯 Services Offered

XURO specializes in six core areas:

1. **Logo Design** - Unique brand identities and visual systems
2. **Web Design** - User-centric interfaces with modern aesthetics
3. **Web Development** - High-performance applications with cutting-edge tech
4. **Product Shoots** - Professional photography and visual content
5. **App Development** - Native and cross-platform mobile applications
6. **Training Programs** - Technical workshops and skill development

## 🎨 Design System

### Color Palette
- **Primary**: Electric Blue (#667eea) to Purple (#764ba2)
- **Secondary**: Pink (#ec4899) to Rose (#f43f5e)
- **Accent**: Cyan (#06b6d4) to Blue (#3b82f6)
- **Background**: Pure Black (#000000) to Dark Gray (#111827)

### Typography
- **Primary Font**: Orbitron (futuristic, tech-inspired)
- **Secondary Font**: Inter (clean, readable)
- **Font Weights**: 300, 400, 500, 600, 700, 900

### Effects
- **Glassmorphism**: `backdrop-filter: blur(20px)` with transparent backgrounds
- **Neon Glow**: Custom box-shadow with gradient colors
- **Smooth Animations**: 0.3s ease transitions with Framer Motion
- **Parallax Scrolling**: Scroll-triggered animations and reveals

## 🔧 Customization

### Adding New Services
1. Edit `src/pages/Services.tsx`
2. Add new service object to the `services` array
3. Include icon, title, description, features, and color gradient

### Modifying Animations
- **Page Transitions**: Edit motion variants in page components
- **Scroll Animations**: Adjust `whileInView` properties
- **3D Elements**: Modify Three.js components in `Hero3D.tsx`

### Updating Content
- **Company Info**: Edit text content in respective page components
- **Images**: Replace placeholder URLs with actual project images
- **Contact Details**: Update contact information in `Contact.tsx`

## 📱 Responsive Breakpoints

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

## 🔍 SEO Optimization

- **Meta Tags**: Proper title, description, and Open Graph tags
- **Semantic HTML**: Proper heading hierarchy and ARIA labels
- **Performance**: Optimized images and code splitting
- **Accessibility**: Keyboard navigation and screen reader support

## 🐛 Troubleshooting

### Common Issues

**Three.js not loading**
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Animation performance issues**
- Reduce particle count in `FloatingOrbs.tsx`
- Disable animations on mobile devices
- Use `will-change` CSS property sparingly

**Build errors**
- Check TypeScript errors: `npm run lint`
- Ensure all imports are correct
- Verify Three.js peer dependencies

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
- **Email**: hello@xuro.agency
- **Website**: [xuro.agency](https://xuro.agency)
- **GitHub Issues**: [Create an issue](https://github.com/your-username/xuro-portfolio/issues)

---

<div align="center">
  <p>Built with ❤️ by the XURO team</p>
  <p><strong>Code. Create. Captivate.</strong></p>
</div>