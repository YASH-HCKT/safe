import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { user, logout } = useAuth();
    const location = useLocation();

    const isActive = (path) => location.pathname === path;

    return (
        <header className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-center">
            <nav className="glassmorphism max-w-[1200px] w-full flex items-center justify-between px-8 py-3 rounded-xl">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-3">
                    <div className="bg-primary p-1.5 rounded-lg flex items-center justify-center">
                        <span className="material-symbols-outlined text-white text-[20px]">security</span>
                    </div>
                    <span className="text-xl font-black tracking-tighter uppercase italic">AccessOne</span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-10">
                    <Link
                        to="/features"
                        className={`text-sm font-medium transition-colors ${isActive('/features') ? 'text-white' : 'text-white/70 hover:text-white'
                            }`}
                    >
                        Features
                    </Link>
                    <Link
                        to="/map"
                        className={`text-sm font-medium transition-colors ${isActive('/map') ? 'text-white' : 'text-white/70 hover:text-white'
                            }`}
                    >
                        Map
                    </Link>
                    <Link
                        to="/community"
                        className={`text-sm font-medium transition-colors ${isActive('/community') ? 'text-white' : 'text-white/70 hover:text-white'
                            }`}
                    >
                        Community
                    </Link>
                    <Link
                        to="/dashboard"
                        className={`text-sm font-medium transition-colors ${isActive('/dashboard') ? 'text-white' : 'text-white/70 hover:text-white'
                            }`}
                    >
                        Dashboard
                    </Link>
                    {user && (
                        <Link
                            to="/profile"
                            className={`text-sm font-medium transition-colors ${isActive('/profile') ? 'text-white' : 'text-white/70 hover:text-white'
                                }`}
                        >
                            Profile
                        </Link>
                    )}
                </div>

                {/* Auth Buttons */}
                <div className="flex items-center gap-4">
                    {user ? (
                        <>
                            <span className="hidden sm:block text-sm font-semibold text-white/90">
                                {user.name}
                            </span>
                            <button
                                onClick={logout}
                                className="bg-white/10 hover:bg-white/20 transition-all text-white text-sm font-bold px-6 py-2.5 rounded-lg"
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <Link
                                to="/login"
                                className="hidden sm:block text-sm font-semibold px-4 py-2 text-white/90 hover:text-white"
                            >
                                Sign In
                            </Link>
                            <Link
                                to="/register"
                                className="bg-primary hover:bg-primary/80 transition-all text-white text-sm font-bold px-6 py-2.5 rounded-lg shadow-lg shadow-primary/20"
                            >
                                Get Started
                            </Link>
                        </>
                    )}

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden p-2 text-white"
                    >
                        <span className="material-symbols-outlined">
                            {isMenuOpen ? 'close' : 'menu'}
                        </span>
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-20 left-6 right-6 glassmorphism rounded-xl p-6 space-y-4">
                    <Link
                        to="/features"
                        onClick={() => setIsMenuOpen(false)}
                        className="block text-sm font-medium text-white/70 hover:text-white transition-colors"
                    >
                        Features
                    </Link>
                    <Link
                        to="/map"
                        onClick={() => setIsMenuOpen(false)}
                        className="block text-sm font-medium text-white/70 hover:text-white transition-colors"
                    >
                        Map
                    </Link>
                    <Link
                        to="/community"
                        onClick={() => setIsMenuOpen(false)}
                        className="block text-sm font-medium text-white/70 hover:text-white transition-colors"
                    >
                        Community
                    </Link>
                    <Link
                        to="/dashboard"
                        onClick={() => setIsMenuOpen(false)}
                        className="block text-sm font-medium text-white/70 hover:text-white transition-colors"
                    >
                        Dashboard
                    </Link>
                    {user && (
                        <Link
                            to="/profile"
                            onClick={() => setIsMenuOpen(false)}
                            className="block text-sm font-medium text-white/70 hover:text-white transition-colors"
                        >
                            Profile
                        </Link>
                    )}
                </div>
            )}
        </header>
    );
};

export default Navbar;
