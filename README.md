# Portfolio Website

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS. Features smooth animations, dark mode support, and a professional design.

## 🚀 Features

- **Responsive Design**: Works perfectly on all devices
- **Dark Mode**: Toggle between light and dark themes
- **Smooth Animations**: Powered by Framer Motion
- **Modern UI**: Clean and professional design with Tailwind CSS
- **Contact Form**: Functional contact form with validation
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Fast Performance**: Built with Vite for optimal performance

## 🛠️ Technologies Used

- **React 18** - Frontend framework
- **Vite** - Build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library
- **JavaScript** - Programming language


## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio-website
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

## 📝 Customization

### Personal Information

1. **Update personal details** in the components:
   - `src/components/Hero.jsx` - Name, title, and description
   - `src/components/About.jsx` - About text and personal info
   - `src/components/Contact.jsx` - Contact information

2. **Update social links** in:
   - `src/components/Hero.jsx`
   - `src/components/Contact.jsx`
   - `src/components/Footer.jsx`

### Projects

Edit `src/data/projects.js` to add your own projects:

```javascript
export const projects = [
  {
    id: 1,
    title: "Your Project Name",
    description: "Project description...",
    image: "/project-image.jpg",
    technologies: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/username/project",
    live: "https://project-demo.com",
    featured: true
  }
];
```

### Skills

Update `src/data/skills.js` with your skills and experience:

```javascript
export const skills = {
  frontend: [
    { name: "React", level: 90, icon: "⚛️" },
    // Add more skills...
  ],
  // Add more categories...
};
```

### Images

1. Add your profile picture as `public/profile.jpg`
2. Add project images to the `public/` folder
3. Add your resume as `public/resume.pdf`

### Styling

- Modify `tailwind.config.js` to customize colors and theme
- Update `src/index.css` for global styles
- Edit component classes for specific styling

## 🎨 Color Scheme

The portfolio uses a custom color palette defined in `tailwind.config.js`:

- **Primary**: Blue shades (`primary-50` to `primary-900`)
- **Dark**: Gray shades for dark mode (`dark-50` to `dark-900`)
- **Accent**: Purple for gradients and highlights

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🌙 Dark Mode

Dark mode is automatically detected based on user preference and can be toggled manually. The theme preference is saved in localStorage.

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify

1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify

### Other Platforms

The project can be deployed to any static hosting service that supports React applications.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

