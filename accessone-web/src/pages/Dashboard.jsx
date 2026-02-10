import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const { user } = useAuth();
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState('');
    const [filters, setFilters] = useState({
        ramps: true,
        elevators: true,
        quietZones: false,
        tactilePaving: false
    });

    const toggleFilter = (filter) => {
        setFilters(prev => ({ ...prev, [filter]: !prev[filter] }));
    };

    const handleSOS = () => {
        alert('🚨 SOS ACTIVATED! Emergency services have been notified with your location and accessibility profile.');
    };

    if (!user) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-background-dark pt-24">
                <div className="text-center space-y-6">
                    <span className="material-symbols-outlined text-6xl text-primary">lock</span>
                    <h2 className="text-2xl font-bold text-white">Authentication Required</h2>
                    <p className="text-slate-400">Please log in to access the dashboard</p>
                    <button
                        onClick={() => navigate('/login')}
                        className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-bold transition-all"
                    >
                        Go to Login
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="relative flex h-screen w-full overflow-hidden bg-background-dark">
            {/* Map Background */}
            <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,#191022_0%,#0a070d_100%)]">
                <div
                    className="absolute inset-0 opacity-40"
                    style={{
                        backgroundImage: "url('https://api.mapbox.com/styles/v1/mapbox/dark-v10/static/-122.4194,37.7749,12,0/1200x800?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw')",
                        backgroundSize: 'cover',
                        filter: 'grayscale(1) invert(1) brightness(0.5)'
                    }}
                />
                {/* Simulated Route Line */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                    <path
                        className="opacity-80"
                        d="M 400 300 Q 600 350 800 200 T 1100 450"
                        fill="none"
                        stroke="#8c25f4"
                        strokeDasharray="8 4"
                        strokeWidth="4"
                        style={{ filter: 'drop-shadow(0 0 4px #8c25f4)' }}
                    />
                </svg>
            </div>

            {/* Left Sidebar */}
            <aside className="relative z-20 w-80 h-full glass-panel flex flex-col border-r border-white/5">
                {/* Branding */}
                <div className="p-6 flex items-center gap-3">
                    <div className="bg-primary size-10 rounded-lg flex items-center justify-center neon-glow">
                        <span className="material-symbols-outlined text-white">explore</span>
                    </div>
                    <div>
                        <h1 className="text-xl font-bold tracking-tight">AccessOne</h1>
                        <p className="text-xs text-white/50">Smart Assistant Dashboard</p>
                    </div>
                </div>

                {/* Main Navigation */}
                <nav className="px-4 py-2 space-y-1">
                    <div className="flex items-center gap-3 px-4 py-3 rounded-lg bg-primary text-white shadow-lg">
                        <span className="material-symbols-outlined">map</span>
                        <span className="text-sm font-medium leading-normal">Live Navigation</span>
                    </div>
                    <div className="flex items-center gap-3 px-4 py-3 rounded-lg text-white/70 hover:bg-white/5 transition-colors cursor-pointer">
                        <span className="material-symbols-outlined">route</span>
                        <span className="text-sm font-medium leading-normal">Saved Routes</span>
                    </div>
                    <div className="flex items-center gap-3 px-4 py-3 rounded-lg text-white/70 hover:bg-white/5 transition-colors cursor-pointer">
                        <span className="material-symbols-outlined">history</span>
                        <span className="text-sm font-medium leading-normal">Trip History</span>
                    </div>
                </nav>

                {/* Accessibility Filters */}
                <div className="mt-8 px-6">
                    <h2 className="text-[10px] uppercase tracking-widest text-white/40 font-bold mb-4">
                        Accessibility Filters
                    </h2>
                    <div className="space-y-4">
                        {[
                            { key: 'ramps', icon: 'ramp_left', label: 'Ramps & Slopes' },
                            { key: 'elevators', icon: 'elevator', label: 'Elevators' },
                            { key: 'quietZones', icon: 'volume_off', label: 'Quiet Zones' },
                            { key: 'tactilePaving', icon: 'vibration', label: 'Tactile Paving' }
                        ].map((filter) => (
                            <div key={filter.key} className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <span className="material-symbols-outlined text-primary">{filter.icon}</span>
                                    <span className="text-sm">{filter.label}</span>
                                </div>
                                <div
                                    onClick={() => toggleFilter(filter.key)}
                                    className={`w-8 h-4 rounded-full relative cursor-pointer transition-colors ${filters[filter.key] ? 'bg-primary' : 'bg-white/20'
                                        }`}
                                >
                                    <div
                                        className={`absolute top-0.5 size-3 bg-white rounded-full transition-all ${filters[filter.key] ? 'right-0.5' : 'left-0.5'
                                            }`}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Report Button */}
                <div className="mt-auto p-4 border-t border-white/5">
                    <button className="w-full py-3 bg-white/5 border border-white/10 rounded-lg text-sm font-medium hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                        <span className="material-symbols-outlined text-sm">report</span>
                        Report Accessibility Issue
                    </button>
                </div>
            </aside>

            {/* Main Workspace */}
            <main className="relative flex-1">
                {/* Top Search Bar */}
                <div className="absolute top-6 left-1/2 -translate-x-1/2 z-20 w-full max-w-2xl px-6">
                    <div className="glass-panel rounded-xl flex items-center p-2 shadow-2xl border border-white/10">
                        <div className="flex items-center flex-1 px-4">
                            <span className="material-symbols-outlined text-white/40 mr-3">search</span>
                            <input
                                className="bg-transparent border-none focus:ring-0 text-sm text-white placeholder:text-white/30 w-full outline-none"
                                placeholder="Search for accessible destinations, stations, or shops..."
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                        <div className="flex items-center gap-2 pr-2">
                            <button className="p-2 text-white/40 hover:text-white transition-colors">
                                <span className="material-symbols-outlined">mic</span>
                            </button>
                            <div className="h-6 w-px bg-white/10 mx-1" />
                            <button className="bg-primary/20 text-primary hover:bg-primary hover:text-white transition-all p-2 rounded-lg flex items-center justify-center">
                                <span className="material-symbols-outlined text-lg">near_me</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Route Stats Card */}
                <div className="absolute top-24 right-6 z-20 w-72 glass-panel rounded-xl p-5 border border-white/10 shadow-2xl">
                    <div className="flex items-center justify-between mb-4">
                        <span className="text-xs text-white/50 font-medium">Active Route</span>
                        <span className="bg-green-500/20 text-green-400 text-[10px] px-2 py-0.5 rounded-full font-bold">
                            OPTIMIZED
                        </span>
                    </div>
                    <h3 className="font-bold text-lg mb-1">Station Central</h3>
                    <p className="text-xs text-white/50 mb-4 flex items-center gap-1">
                        <span className="material-symbols-outlined text-[12px]">schedule</span> 12 min (1.2 km)
                    </p>
                    <div className="space-y-3">
                        <div className="bg-white/5 p-3 rounded-lg border border-white/5 flex items-center gap-3">
                            <div className="bg-primary/20 p-2 rounded flex items-center justify-center">
                                <span className="material-symbols-outlined text-primary text-sm">stairs_2</span>
                            </div>
                            <div>
                                <p className="text-xs font-bold">Barrier Free</p>
                                <p className="text-[10px] text-white/40">No stairs detected on path</p>
                            </div>
                        </div>
                        <div className="bg-white/5 p-3 rounded-lg border border-white/5 flex items-center gap-3">
                            <div className="bg-blue-500/20 p-2 rounded flex items-center justify-center">
                                <span className="material-symbols-outlined text-blue-400 text-sm">wb_sunny</span>
                            </div>
                            <div>
                                <p className="text-xs font-bold">Good Visibility</p>
                                <p className="text-[10px] text-white/40">Path is well-lit for navigation</p>
                            </div>
                        </div>
                    </div>
                    <button className="w-full mt-4 py-3 bg-primary rounded-lg text-sm font-bold shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all">
                        Start Navigation
                    </button>
                </div>

                {/* Bottom Controls */}
                <div className="absolute bottom-6 right-6 z-20 flex flex-col gap-4 items-end">
                    {/* Map Controls */}
                    <div className="glass-panel p-1 rounded-xl flex flex-col gap-1 border border-white/10 shadow-xl">
                        <button className="p-3 text-white/40 hover:text-white hover:bg-white/5 rounded-lg transition-all">
                            <span className="material-symbols-outlined">layers</span>
                        </button>
                        <button className="p-3 text-white/40 hover:text-white hover:bg-white/5 rounded-lg transition-all">
                            <span className="material-symbols-outlined">add</span>
                        </button>
                        <button className="p-3 text-white/40 hover:text-white hover:bg-white/5 rounded-lg transition-all">
                            <span className="material-symbols-outlined">remove</span>
                        </button>
                    </div>

                    {/* SOS Button */}
                    <button
                        onClick={handleSOS}
                        className="flex items-center gap-3 bg-red-600 px-6 py-4 rounded-xl font-bold text-white shadow-[0_0_20px_rgba(220,38,38,0.5)] hover:bg-red-500 active:scale-95 transition-all animate-pulse"
                    >
                        <span className="material-symbols-outlined fill-1">emergency</span>
                        <span>ACTIVE SOS</span>
                    </button>
                </div>

                {/* Legend */}
                <div className="absolute bottom-6 left-6 z-20 glass-panel p-3 rounded-xl border border-white/10 flex gap-6 px-5">
                    <div className="flex items-center gap-2">
                        <div className="size-2 rounded-full bg-primary neon-glow" />
                        <span className="text-[10px] text-white/60 font-medium">SAFE ROUTE</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="size-2 rounded-full bg-green-500 shadow-[0_0_5px_#22c55e]" />
                        <span className="text-[10px] text-white/60 font-medium">RAMP/ELEVATOR</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="size-2 rounded-full bg-orange-500 shadow-[0_0_5px_#f97316]" />
                        <span className="text-[10px] text-white/60 font-medium">CONSTRUCTION</span>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;
