import { NavLink } from 'react-router-dom';
import { Home, Compass, Users, User, Map, Shield } from 'lucide-react';

const BottomNav = () => {
    const navItems = [
        { path: '/', icon: Home, label: 'Home' },
        { path: '/map', icon: Map, label: 'Explore' },
        { path: '/community', icon: Users, label: 'Community' },
        { path: '/account', icon: User, label: 'Profile' },
    ];

    return (
        <nav className="fixed bottom-0 w-full bg-white dark:bg-background-dark border-t border-slate-200 dark:border-border-dark px-6 py-3 flex items-center justify-between z-50">
            {navItems.map((item) => (
                <NavLink
                    key={item.path}
                    to={item.path}
                    className={({ isActive }) =>
                        `flex flex-col items-center gap-1 transition-all ${isActive ? 'text-primary scale-110' : 'text-slate-400 dark:text-[#91a9ca]'
                        }`
                    }
                >
                    <item.icon className="h-6 w-6" strokeWidth={2} />
                    <span className="text-[10px] font-bold uppercase tracking-tighter">{item.label}</span>
                </NavLink>
            ))}
        </nav>
    );
};

export default BottomNav;
