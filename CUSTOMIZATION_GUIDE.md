# 🎨 Quick Customization Guide

This guide will help you personalize your portfolio in minutes!

## 🔧 Essential Customizations

### 1. Update Your Name & Title

**File**: `src/components/Hero.jsx`

```jsx
// Line 15-17: Change the title
<h1 className="...">
  Your Name  {/* Change "Portfolio" to your name */}
</h1>

// Line 20-22: Change subtitle
<p className="...">
  Your Role  {/* Change "Front-end developer" */}
</p>

// Line 26: Change username
<span className="font-mono text-gray-300">your-domain.com</span>
```

**File**: `src/components/Navbar.jsx`

```jsx
// Line 29: Change logo
<span className="text-neon-purple">⌘</span> YourName
```

---

### 2. Update About Me Section

**File**: `src/components/About.jsx`

```jsx
// Line 36-38: Change your name
<h3 className="...">
  Hello, I'm <span className="text-neon-purple">YourName</span>
</h3>

// Line 40-49: Update your bio
<p className="text-gray-400 leading-relaxed">
  Write your own introduction here...
</p>

// Line 58-75: Update fun facts
<span className="...">
  Your fun fact here
</span>

// Line 95: Change your image
<img 
  src="YOUR_IMAGE_URL_HERE"
  alt="Developer"
  className="..."
/>
```

**Update Skills** (Line 7-12):
```jsx
const skills = {
  languages: ["Your", "Languages", "Here"],
  frameworks: ["Your", "Frameworks", "Here"],
  tools: ["Your", "Tools", "Here"],
  databases: ["Your", "Databases", "Here"]
};
```

---

### 3. Add Your Projects

**File**: `src/components/Projects.jsx`

Replace the `projects` array (Line 6-134) with your own:

```jsx
const projects = [
  {
    title: "Your Project Name",
    description: "Brief description of your project",
    techStack: ["React", "Node.js", "MongoDB"],
    image: "https://your-image-url.com/image.jpg",
    liveUrl: "https://your-live-demo.com",
    githubUrl: "https://github.com/yourusername/repo"
  },
  // Add more projects...
];
```

**Tips for Project Images:**
- Use Unsplash: `https://images.unsplash.com/photo-ID?w=800&h=600&fit=crop`
- Or upload your own screenshots to a hosting service
- Recommended size: 800x600px

---

### 4. Update Contact Information

**File**: `src/components/Contact.jsx`

```jsx
// Line 60: Update email
<a href="mailto:your-email@example.com" className="...">
  your-email@example.com
</a>

// Line 76: Update phone
<a href="tel:+1234567890" className="...">
  +1 (234) 567-890
</a>

// Line 92: Update Discord
<span className="text-gray-400">@yourusername#1234</span>
```

**Update Social Links** (Line 24-26, 32-34, 40-42):
```jsx
<a href="https://github.com/YOURUSERNAME" ...>
<a href="https://twitter.com/YOURUSERNAME" ...>
<a href="https://discord.com/users/YOURID" ...>
```

---

### 5. Update Footer

**File**: `src/components/Footer.jsx`

```jsx
// Line 11-13: Change name
<h3 className="...">
  <span className="text-neon-purple">YourName</span>
</h3>

// Line 14-16: Update role
<p className="...">
  Your role description
</p>

// Line 21-23: Update copyright
<p className="...">
  © Copyright 2024. Made by <span className="text-neon-purple">YourName</span>
</p>
```

---

### 6. Update SEO Meta Tags

**File**: `index.html`

```html
<!-- Line 10: Update title -->
<title>Your Name - Your Role | Portfolio</title>

<!-- Line 11: Update description -->
<meta name="description" content="Your custom description here" />

<!-- Line 12: Update keywords -->
<meta name="keywords" content="your, keywords, here" />

<!-- Line 13: Update author -->
<meta name="author" content="Your Name" />

<!-- Line 16-19: Update Open Graph tags -->
<meta property="og:title" content="Your Name - Portfolio" />
<meta property="og:description" content="Your description" />
<meta property="og:url" content="https://your-domain.com" />

<!-- Line 22-24: Update Twitter Card -->
<meta name="twitter:title" content="Your Name - Portfolio" />
<meta name="twitter:description" content="Your description" />
```

---

## 🎨 Color Customization

### Change Color Scheme

**File**: `tailwind.config.js`

```javascript
theme: {
  extend: {
    colors: {
      'dark-bg': '#0f1117',        // Main background
      'dark-secondary': '#141821',  // Card background
      'neon-purple': '#a855f7',     // Accent color (change this!)
    },
  },
}
```

**Popular Alternative Color Schemes:**

**Neon Blue:**
```javascript
'neon-purple': '#3b82f6',  // Blue
```

**Neon Green:**
```javascript
'neon-purple': '#10b981',  // Green
```

**Neon Pink:**
```javascript
'neon-purple': '#ec4899',  // Pink
```

**Neon Cyan:**
```javascript
'neon-purple': '#06b6d4',  // Cyan
```

---

## 📸 Image Recommendations

### Where to Get Images

1. **Unsplash** (Free, high-quality)
   - https://unsplash.com
   - Use format: `https://images.unsplash.com/photo-ID?w=800&h=600&fit=crop`

2. **Your Own Screenshots**
   - Take screenshots of your projects
   - Use tools like:
     - **Screely** - https://screely.com (adds browser mockup)
     - **Shots** - https://shots.so (beautiful mockups)

3. **Profile Picture**
   - Use a professional headshot
   - Or create an avatar at:
     - https://avatar.vercel.sh/yourusername
     - https://ui-avatars.com/api/?name=Your+Name&size=500

---

## 🚀 Quick Start Checklist

- [ ] Update name in Hero section
- [ ] Update name in Navbar
- [ ] Update About Me bio
- [ ] Update skills list
- [ ] Add your fun facts
- [ ] Replace projects with your own
- [ ] Update contact information (email, phone, Discord)
- [ ] Update social media links (GitHub, Twitter, Discord)
- [ ] Update footer information
- [ ] Update SEO meta tags
- [ ] Replace placeholder images
- [ ] (Optional) Change color scheme

---

## 💡 Pro Tips

### 1. **Project Images**
- Use consistent image sizes (800x600px recommended)
- Use high-quality screenshots
- Consider adding browser mockups for web projects

### 2. **Tech Stack Badges**
- Keep them short (1-3 words max)
- Use official names (React.js, not React JS)
- Limit to 3-4 per project for clean look

### 3. **Descriptions**
- Keep project descriptions under 100 characters
- Focus on what the project does, not how
- Use action words (Built, Created, Designed)

### 4. **Skills Section**
- List skills you're actually proficient in
- Order by proficiency or relevance
- Keep each category to 4-6 items

### 5. **Fun Facts**
- Make them personal and unique
- Keep them professional but friendly
- 4-6 facts is ideal

---

## 🔄 After Making Changes

1. Save all files
2. The dev server will auto-reload
3. Check your browser at http://localhost:5173/
4. Verify all changes look correct

---

## 📱 Test Responsiveness

After customizing, test on different screen sizes:

1. **Desktop**: Full width (1920px+)
2. **Laptop**: Medium width (1024px-1920px)
3. **Tablet**: Small width (768px-1024px)
4. **Mobile**: Extra small (< 768px)

Use browser DevTools (F12) → Toggle device toolbar

---

## 🐛 Common Issues

**Issue**: Colors not showing
- **Fix**: Make sure color names in `tailwind.config.js` match usage in components

**Issue**: Images not loading
- **Fix**: Check image URLs are valid and accessible

**Issue**: Changes not appearing
- **Fix**: Hard refresh browser (Ctrl+Shift+R) or restart dev server

---

**Need help?** Check the README.md for more detailed information!
