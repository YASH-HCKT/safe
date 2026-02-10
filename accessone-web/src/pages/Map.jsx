import { useState } from 'react';
import { motion } from 'framer-motion';

const Map = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedFilter, setSelectedFilter] = useState('all');

    const filters = [
        { id: 'all', label: 'All Locations', icon: 'location_on' },
        { id: 'accessible', label: 'Accessible', icon: 'accessible' },
        { id: 'emergency', label: 'Emergency', icon: 'emergency' },
        { id: 'transit', label: 'Transit', icon: 'directions_bus' }
    ];

    const locations = [
        { name: 'Central Station', type: 'transit', accessible: true, distance: '0.5 km' },
        { name: 'City Hospital', type: 'emergency', accessible: true, distance: '1.2 km' },
        { name: 'Public Library', type: 'accessible', accessible: true, distance: '0.8 km' },
        { name: 'Shopping Mall', type: 'accessible', accessible: true, distance: '2.1 km' }
    ];

    return (
        <div className="min-h-screen bg-background-dark pt-24 pb-16">
            {/* Header */}
            <div className="max-w-7xl mx-auto px-6 mb-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-4xl md:text-5xl font-black mb-4">Accessible Map</h1>
                    <p className="text-slate-400 text-lg">Discover accessible locations and plan your routes with confidence</p>
                </motion.div>
            </div>

            {/* Search & Filters */}
            <div className="max-w-7xl mx-auto px-6 mb-8">
                <div className="glass-panel p-6 rounded-2xl space-y-6">
                    {/* Search Bar */}
                    <div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-xl p-4">
                        <span className="material-symbols-outlined text-white/40">search</span>
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search for accessible places, stations, or landmarks..."
                            className="flex-1 bg-transparent border-none outline-none text-white placeholder:text-white/30"
                        />
                        <button className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-lg font-bold transition-all">
                            Search
                        </button>
                    </div>

                    {/* Filters */}
                    <div className="flex flex-wrap gap-3">
                        {filters.map((filter) => (
                            <button
                                key={filter.id}
                                onClick={() => setSelectedFilter(filter.id)}
                                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${selectedFilter === filter.id
                                        ? 'bg-primary text-white'
                                        : 'bg-white/5 text-white/70 hover:bg-white/10'
                                    }`}
                            >
                                <span className="material-symbols-outlined text-sm">{filter.icon}</span>
                                {filter.label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Map Container */}
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Map Display */}
                    <div className="lg:col-span-2">
                        <div className="glass-panel rounded-2xl overflow-hidden h-[600px] relative">
                            {/* Simulated Map */}
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#191022_0%,#0a070d_100%)]">
                                <div
                                    className="absolute inset-0 opacity-50"
                                    style={{
                                        backgroundImage: "url('https://api.mapbox.com/styles/v1/mapbox/dark-v10/static/-122.4194,37.7749,12,0/1200x800?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw')",
                                        backgroundSize: 'cover',
                                        filter: 'grayscale(1) invert(1) brightness(0.5)'
                                    }}
                                />
                                {/* Map Markers */}
                                <div className="absolute top-1/4 left-1/3 size-8 bg-primary rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(50,17,212,0.6)] animate-pulse">
                                    <span className="material-symbols-outlined text-white text-sm">location_on</span>
                                </div>
                                <div className="absolute top-1/2 right-1/3 size-8 bg-green-500 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(34,197,94,0.6)]">
                                    <span className="material-symbols-outlined text-white text-sm">accessible</span>
                                </div>
                                <div className="absolute bottom-1/3 left-1/2 size-8 bg-red-500 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(239,68,68,0.6)]">
                                    <span className="material-symbols-outlined text-white text-sm">emergency</span>
                                </div>
                            </div>

                            {/* Map Controls */}
                            <div className="absolute bottom-6 right-6 glass-panel p-1 rounded-xl flex flex-col gap-1">
                                <button className="p-3 text-white/40 hover:text-white hover:bg-white/5 rounded-lg transition-all">
                                    <span className="material-symbols-outlined">add</span>
                                </button>
                                <button className="p-3 text-white/40 hover:text-white hover:bg-white/5 rounded-lg transition-all">
                                    <span className="material-symbols-outlined">remove</span>
                                </button>
                                <button className="p-3 text-white/40 hover:text-white hover:bg-white/5 rounded-lg transition-all">
                                    <span className="material-symbols-outlined">my_location</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Locations List */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold mb-4">Nearby Locations</h3>
                        {locations.map((location, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                className="glass-panel p-4 rounded-xl hover:border-primary/30 transition-all cursor-pointer"
                            >
                                <div className="flex items-start gap-3">
                                    <div className="size-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                                        <span className="material-symbols-outlined text-primary">
                                            {location.type === 'transit' ? 'directions_bus' :
                                                location.type === 'emergency' ? 'emergency' : 'accessible'}
                                        </span>
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-bold mb-1">{location.name}</h4>
                                        <div className="flex items-center gap-2 text-xs text-slate-400">
                                            <span className="flex items-center gap-1">
                                                <span className="material-symbols-outlined text-[12px]">near_me</span>
                                                {location.distance}
                                            </span>
                                            {location.accessible && (
                                                <span className="flex items-center gap-1 text-green-400">
                                                    <span className="material-symbols-outlined text-[12px]">check_circle</span>
                                                    Accessible
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                    <button className="p-2 text-slate-400 hover:text-white transition-colors">
                                        <span className="material-symbols-outlined">arrow_forward</span>
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Map;
