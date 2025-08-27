# Interactive CV Website - Gavin Slater

A modern, interactive CV website built with Next.js, TypeScript, and Tailwind CSS. Features expandable experience sections and detailed project showcases, including a special deep-dive into the 8-bit computer build project.

## 🌟 Features

### Interactive CV Experience
- **Expandable Sections**: Click to expand professional experiences for detailed achievements, technologies, and projects
- **Responsive Design**: Mobile-first design that works perfectly on all device sizes
- **Smooth Animations**: Subtle fade-in animations for enhanced user experience
- **Modern Styling**: Clean, professional design using Tailwind CSS

### Project Showcase
- **Featured Projects**: Highlighted personal projects with technology stacks and status
- **Detail Pages**: Deep-dive pages for major projects with comprehensive documentation
- **8-bit Computer Project**: Special showcase of breadboard computer build following Ben Eater's tutorials

### Professional Content
- **Comprehensive Experience**: 25+ years in financial services with detailed role information
- **Skills Matrix**: Organized by categories (Leadership, Technical, Domain, Emerging)
- **Career Progression**: Clear narrative from Chartered Accountant to AI enthusiast
- **Education & Qualifications**: University background and professional certifications

## 🚀 Technology Stack

- **Framework**: Next.js 15.5.2 with App Router
- **Language**: TypeScript for type safety
- **Styling**: Tailwind CSS v4 for modern utility-first styling
- **Icons**: Heroicons for consistent iconography
- **Deployment**: Optimized for Vercel deployment
- **Performance**: Turbopack for fast development builds

## 📁 Project Structure

```
interactive-cv-website/
├── src/
│   ├── app/
│   │   ├── globals.css          # Global styles and animations
│   │   ├── layout.tsx           # Root layout
│   │   ├── page.tsx             # Main CV page
│   │   └── projects/
│   │       └── 8bit-computer/   # 8-bit computer project page
│   └── data/
│       ├── cv-data.json         # CV content and structure
│       └── 8bit-computer-project.json # Detailed project data
├── public/                      # Static assets
├── package.json                 # Dependencies and scripts
└── README.md                    # This file
```

## 🛠️ Development Setup

### Prerequisites
- Node.js 18+ 
- npm package manager

### Getting Started

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start development server**
   ```bash
   npm run dev
   ```

3. **Open in browser**
   - Local: http://localhost:3000
   - Network: http://192.168.195.80:3000

### Development Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build production application
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code quality

## 🎨 Customization

### Content Updates

**CV Data** (`src/data/cv-data.json`):
- Personal information and contact details
- Professional experience with expandable details  
- Skills organized by categories
- Featured projects and interests
- Education and achievements

**Project Data** (`src/data/8bit-computer-project.json`):
- Comprehensive project documentation
- Technical specifications and components
- Programming examples and challenges
- Personal reflections and career connections

### Styling Customization

**Tailwind CSS** (`src/app/globals.css`):
- Custom animations (fadeIn)
- Color scheme variables
- Typography settings
- Dark mode support

## 🚢 Deployment

### Vercel (Recommended)

1. **Prepare for deployment**
   ```bash
   npm run build
   ```

2. **Deploy to Vercel**
   ```bash
   # Install Vercel CLI if needed
   npm i -g vercel
   
   # Deploy
   vercel
   ```

3. **Environment Setup**
   - No environment variables required
   - Static JSON data files included
   - Optimized for serverless deployment

### Alternative Platforms

**Netlify**:
```bash
# Build command: npm run build
# Publish directory: .next/
```

## 🏗️ Key Features

### Main CV Page (`src/app/page.tsx`)
- Dynamic experience expansion with state management
- Responsive grid layouts for skills and projects
- Interactive interest sections with navigation
- Professional contact information display

### 8-bit Computer Project (`src/app/projects/8bit-computer/page.tsx`)  
- Comprehensive project documentation
- Technical specifications and component details
- Assembly programming examples with syntax highlighting
- Personal reflections and career connection insights
- Expandable sections for organized information presentation

## 🎯 Professional Impact

This website serves as both a professional showcase and a demonstration of modern web development skills, supporting Gavin's transition from Risk Management to AI/Technology roles. The interactive design and technical implementation showcase capabilities in:

- Modern web development (React, TypeScript, Next.js)
- User experience design and responsive development
- Content architecture and data management
- Performance optimization and deployment
- Technical documentation and project presentation

The 8-bit computer project specifically demonstrates hands-on technical skills, systematic problem-solving, and passion for understanding technology at fundamental levels - key qualities for AI and technology roles.

---

**Built with ❤️ and lots of coffee by Gavin Slater**  
*Demonstrating the perfect blend of business leadership and technical passion*
