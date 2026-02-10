import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Features from './pages/Features';
import Map from './pages/Map';
import Community from './pages/Community';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';

const AppContent = () => {
    const { user } = useAuth();

    useEffect(() => {
        if (user?.settings) {
            // Apply Theme
            const root = window.document.documentElement;
            root.classList.remove('light', 'dark');
            root.classList.add(user.settings.theme === 'system'
                ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
                : user.settings.theme
            );

            // Apply Font Size
            const sizeMap = { small: '14px', medium: '16px', large: '18px', xl: '20px' };
            root.style.setProperty('--base-font-size', sizeMap[user.settings.fontSize] || '16px');

            // Apply Button Sizing
            const btnPaddingMap = { small: '0.5rem 1rem', medium: '0.75rem 1.5rem', large: '1rem 2rem' };
            root.style.setProperty('--btn-padding', btnPaddingMap[user.settings.buttonSize] || '0.75rem 1.5rem');
        }
    }, [user?.settings]);

    return (
        <Router>
            <div className="min-h-screen bg-background-light dark:bg-background-dark text-slate-900 dark:text-white transition-colors duration-300">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/features" element={<Features />} />
                    <Route path="/map" element={<Map />} />
                    <Route path="/community" element={<Community />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/settings" element={<Settings />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
};

function App() {
    return (
        <AuthProvider>
            <AppContent />
        </AuthProvider>
    );
}

export default App;
