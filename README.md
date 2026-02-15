# 🌟 Modern Developer Portfolio

A stunning dark-theme developer portfolio website built with React and TailwindCSS, featuring a cyberpunk/neon minimal aesthetic.

![Portfolio Preview](https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=600&fit=crop)

## ✨ Features

- **Modern Dark Theme** - Cyberpunk-inspired design with neon purple accents
- **Fully Responsive** - Optimized for all device sizes
- **Smooth Animations** - Fade-in effects, hover animations, and floating elements
- **Component-Based** - Reusable React components for easy maintenance
- **SEO Optimized** - Comprehensive meta tags for better search visibility
- **Fast Performance** - Built with Vite for lightning-fast development and builds

## 🎨 Design Features

- Dark background (#0f1117 / #141821)
- Neon purple accent color (#a855f7)
- Dotted grid background patterns
- Geometric floating decorations
- Glowing hover effects
- Smooth scroll navigation
- Custom scrollbar styling

## 📦 Tech Stack

- **React** - UI library
- **TailwindCSS** - Utility-first CSS framework
- **Vite** - Build tool and dev server
- **Google Fonts** - Inter & JetBrains Mono

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio-2
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🏗️ Project Structure

```
portfolio-2/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       # Navigation bar with smooth scroll
│   │   ├── Hero.jsx         # Hero section with floating shapes
│   │   ├── Projects.jsx     # Projects grid section
│   │   ├── ProjectCard.jsx  # Reusable project card component
│   │   ├── About.jsx        # About me section with skills
│   │   ├── Contact.jsx      # Contact information section
│   │   └── Footer.jsx       # Footer with social links
│   ├── App.jsx              # Main app component
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles and Tailwind config
├── index.html               # HTML template with SEO tags
├── tailwind.config.js       # Tailwind configuration
├── postcss.config.js        # PostCSS configuration
└── package.json             # Project dependencies
```

## 🎯 Sections

### 1. Hero Section
- Large portfolio title
- Front-end developer subtitle
- Username tag label
- Portfolio preview mockup card
- Floating geometric shapes

### 2. Projects Section
- Responsive grid layout
- Project cards with:
  - Thumbnail images
  - Tech stack labels
  - Descriptions
  - Live demo & GitHub links
  - Hover animations with neon glow

### 3. About Me Section
- Two-column layout
- Personal description
- Developer image with decorative borders
- Fun facts section
- Skills grid organized by:
  - Languages
  - Frameworks
  - Tools
  - Databases

### 4. Contact Section
- Contact message
- Email card
- Phone card
- Discord card
- Social media icons (GitHub, Twitter, Discord)

### 5. Footer
- Name and role
- Copyright information
- Social media links

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to customize the color scheme:
```javascript
colors: {
  'dark-bg': '#0f1117',
  'dark-secondary': '#141821',
  'neon-purple': '#a855f7',
}
```

### Fonts
Update the Google Fonts import in `src/index.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&display=swap');
```

### Projects
Edit the `projects` array in `src/components/Projects.jsx` to add or modify projects.

### Personal Information
Update the following files with your information:
- `src/components/Hero.jsx` - Name and title
- `src/components/About.jsx` - Bio, skills, and fun facts
- `src/components/Contact.jsx` - Contact details
- `src/components/Footer.jsx` - Footer information
- `index.html` - SEO meta tags

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🌐 Deployment

### Build for Production

```bash
npm run build
```

The build output will be in the `dist/` directory.

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

### Deploy to Netlify

1. Build the project: `npm run build`
2. Drag and drop the `dist/` folder to Netlify

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 👨‍💻 Author

**Elias**
- Website: elias-dev.ml
- GitHub: [@elias](https://github.com)
- Discord: elias#3519

## 🙏 Acknowledgments

- Design inspiration from modern cyberpunk aesthetics
- Icons from Heroicons
- Images from Unsplash

---

Made with ❤️ and ☕ by Elias
