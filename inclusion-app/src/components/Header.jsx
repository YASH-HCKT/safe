import { Bell, Settings } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Header = ({ title, subtitle, showAvatar = true }) => {
    const navigate = useNavigate();
    return (
        <header className="flex items-center bg-background-light dark:bg-background-dark p-4 pb-2 justify-between sticky top-0 z-50 border-b border-slate-200 dark:border-border-dark/30">
            {showAvatar && (
                <div className="flex size-12 shrink-0 items-center">
                    <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border-2 border-primary"
                        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=100")' }}>
                    </div>
                </div>
            )}
            <div className={`flex-1 ${showAvatar ? 'px-3' : ''}`}>
                {subtitle && <p className="text-slate-500 dark:text-[#91a9ca] text-xs font-medium uppercase tracking-wider">{subtitle}</p>}
                {title && <h2 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-tight">{title}</h2>}
            </div>
            <div className="flex items-center gap-2">
                <button className="flex size-12 items-center justify-center rounded-xl bg-slate-100 dark:bg-card-dark text-slate-700 dark:text-white transition-colors active:scale-95">
                    <Bell className="h-6 w-6" />
                </button>
                <button
                    onClick={() => navigate('/account')}
                    className="flex size-12 items-center justify-center rounded-xl bg-slate-100 dark:bg-card-dark text-slate-700 dark:text-white transition-colors active:scale-95"
                >
                    <Settings className="h-6 w-6" />
                </button>
            </div>
        </header>
    );
};

export default Header;
