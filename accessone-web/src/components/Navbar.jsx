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
            <nav className="glassmorphism w-full flex items-center justify-between px-8 py-4 rounded-2xl mx-4">
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

                {/* Auth Buttons & Actions */}
                <div className="flex items-center gap-6">
                    {user && (
                        <>
                            {/* Notifications */}
                            <button className="relative p-2 text-white/70 hover:text-white transition-colors">
                                <span className="material-symbols-outlined text-[24px]">notifications</span>
                                <span className="absolute top-1 right-1 size-2.5 bg-red-500 rounded-full border-2 border-[#1a1a1a]"></span>
                            </button>

                            {/* Settings */}
                            <Link to="/settings" className="p-2 text-white/70 hover:text-white transition-colors">
                                <span className="material-symbols-outlined text-[24px]">settings</span>
                            </Link>

                            <div className="h-6 w-px bg-white/10 mx-2 hidden sm:block"></div>

                            <Link to="/profile" className="flex items-center gap-3 group">
                                <div className="size-9 rounded-full border-2 border-primary/50 overflow-hidden group-hover:border-primary transition-all">
                                    <img
                                        src={user.profilePic || "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200"}
                                        alt={user.name}
                                        className="size-full object-cover"
                                    />
                                </div>
                                <span className="hidden sm:block text-sm font-semibold text-white/90 group-hover:text-white">
                                    {user.name}
                                </span>
                            </Link>
                        </>
                    )}

                    {!user && (
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
