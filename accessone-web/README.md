# AccessOne Web Application

A full-stack AI-powered accessibility and emergency intelligence platform built with React, Tailwind CSS, and modern web technologies.

## Features

- **Hero Landing Page** - Stunning hero section with animations
- **Features Showcase** - Problem/solution presentation with stats
- **Interactive Dashboard** - Smart accessibility map with filters
- **User Profile** - Manage accessibility settings and saved locations
- **Authentication** - Login and registration with accessibility needs selection
- **Responsive Design** - Works on all devices

## Tech Stack

### Frontend
- React 18
- Vite
- Tailwind CSS
- Framer Motion
- React Router
- Material Symbols Icons

### Styling
- Glassmorphism effects
- Dark mode
- Custom animations
- Neon glows

## Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd accessone-web
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:3000`

## Project Structure

```
accessone-web/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── context/
│   │   └── AuthContext.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Features.jsx
│   │   ├── Dashboard.jsx
│   │   ├── Profile.jsx
│   │   └── Auth/
│   │       ├── Login.jsx
│   │       └── Register.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
└── tailwind.config.js
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Features Implemented

✅ Responsive navigation with mobile menu  
✅ Hero section with animations  
✅ Features page with problem/solution sections  
✅ Interactive dashboard with map interface  
✅ User profile with accessibility settings  
✅ Login and registration pages  
✅ Authentication context with localStorage  
✅ Glassmorphism UI effects  
✅ Dark mode support  

## Next Steps

To add backend functionality:

1. Set up Express.js server
2. Connect to MongoDB database
3. Implement JWT authentication
4. Create REST API endpoints
5. Integrate real map service (Mapbox/Leaflet)

## License

MIT License - feel free to use this project for learning or commercial purposes.
