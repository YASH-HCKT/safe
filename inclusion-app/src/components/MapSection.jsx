import { useEffect, useRef, useState } from 'react';

const MapSection = ({ showSidebar = true, showNavPanel = true, showSOS = true, isMobile = false }) => {
    const mapRef = useRef(null);
    const [filters, setFilters] = useState({
        ramps: true,
        elevators: true,
        quietZones: false,
        tactilePaving: false
    });

    const toggleFilter = (filter) => {
        setFilters(prev => ({ ...prev, [filter]: !prev[filter] }));
    };

    useEffect(() => {
        // Load Google Maps API
        const loadGoogleMaps = () => {
            if (window.google && window.google.maps) {
                initMap();
                return;
            }

            const script = document.createElement('script');
            script.src = `https://maps.googleapis.com/maps/api/js?key=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY}&libraries=marker&v=weekly`;
            script.async = true;
            script.defer = true;
            script.onload = initMap;
            document.head.appendChild(script);
        };

        const initMap = async () => {
            if (!mapRef.current) return;

            const { Map } = await google.maps.importLibrary("maps");
            const { AdvancedMarkerElement, PinElement } = await google.maps.importLibrary("marker");

            // Dark Mode Styles
            const darkMapStyles = [
                { "elementType": "geometry", "stylers": [{ "color": "#1e293b" }] },
                { "elementType": "labels.text.fill", "stylers": [{ "color": "#94a3b8" }] },
                { "elementType": "labels.text.stroke", "stylers": [{ "color": "#1e293b" }] },
                { "featureType": "administrative", "elementType": "geometry", "stylers": [{ "color": "#334155" }] },
                { "featureType": "poi", "elementType": "labels.text.fill", "stylers": [{ "color": "#8c25f4" }] },
                { "featureType": "poi.park", "elementType": "geometry", "stylers": [{ "color": "#0f172a" }] },
                { "featureType": "road", "elementType": "geometry", "stylers": [{ "color": "#334155" }] },
                { "featureType": "road", "elementType": "geometry.stroke", "stylers": [{ "color": "#1e293b" }] },
                { "featureType": "road.highway", "elementType": "geometry", "stylers": [{ "color": "#475569" }] },
                { "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#020617" }] }
            ];

            const map = new Map(mapRef.current, {
                center: { lat: 40.7128, lng: -74.0060 },
                zoom: 14,
                styles: darkMapStyles,
                disableDefaultUI: true,
                mapId: "DEMO_MAP_ID",
            });

            // Add Markers
            const locations = [
                { lat: 40.7150, lng: -74.0020, type: 'barrier-free' },
                { lat: 40.7100, lng: -74.0100, type: 'construction' },
                { lat: 40.7180, lng: -74.0080, type: 'barrier-free' }
            ];

            locations.forEach(loc => {
                const pinColor = loc.type === 'barrier-free' ? '#22c55e' : '#f97316';
                const pin = new PinElement({
                    background: pinColor,
                    borderColor: "#ffffff",
                    glyphColor: "white",
                });

                new AdvancedMarkerElement({
                    map,
                    position: loc,
                    content: pin.element,
                    title: loc.type === 'barrier-free' ? "Accessible Zone" : "Work in Progress",
                });
            });
        };

        loadGoogleMaps();
    }, []);

    const handleSOS = () => {
        alert('🚨 SOS ACTIVATED! Emergency services have been notified with your location and accessibility profile.');
    };

    return (
        <main className="relative h-full w-full">
            {/* Map Container */}
            <div ref={mapRef} className="absolute inset-0 z-0 bg-slate-900">
                <div className="flex items-center justify-center h-full text-slate-500">
                    Loading Interactive Accessibility Map...
                </div>
            </div>

            {/* Header & Search */}
            {!isMobile && (
                <header className="absolute top-6 left-1/2 -translate-x-1/2 z-20 w-full max-w-2xl px-4">
                    <div className="glass-panel rounded-xl p-2 flex items-center gap-4 shadow-2xl border border-white/10">
                        <div className="flex items-center px-4 border-r border-slate-700">
                            <span className="text-primary font-bold tracking-tighter text-xl">AccessOne</span>
                        </div>
                        <div className="flex-1 relative">
                            <input
                                className="w-full bg-transparent border-none focus:ring-0 text-slate-200 placeholder-slate-400 py-2 outline-none"
                                placeholder="Search for accessible destinations..."
                                type="text"
                            />
                        </div>
                        <button className="bg-primary hover:bg-primary/90 transition-colors p-2 rounded-lg">
                            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                            </svg>
                        </button>
                    </div>
                </header>
            )}

            {/* Sidebar Filters */}
            {showSidebar && !isMobile && (
                <aside className="absolute left-6 top-24 bottom-24 w-72 z-20">
                    <div className="glass-panel h-full rounded-xl p-6 flex flex-col gap-6 shadow-xl border border-white/10">
                        <h2 className="text-lg font-semibold border-b border-slate-700 pb-2">Accessibility Filters</h2>
                        <div className="space-y-4">
                            {[
                                { key: 'ramps', color: 'bg-green-400', label: 'Ramps & Slopes' },
                                { key: 'elevators', color: 'bg-blue-400', label: 'Elevators' },
                                { key: 'quietZones', color: 'bg-purple-400', label: 'Quiet Zones' },
                                { key: 'tactilePaving', color: 'bg-yellow-400', label: 'Tactile Paving' }
                            ].map((filter) => (
                                <div key={filter.key} className="flex items-center justify-between group cursor-pointer" onClick={() => toggleFilter(filter.key)}>
                                    <div className="flex items-center gap-3">
                                        <div className={`w-2 h-2 rounded-full ${filter.color}`}></div>
                                        <span className="text-slate-300 group-hover:text-white transition-colors">{filter.label}</span>
                                    </div>
                                    <div
                                        className={`w-8 h-4 rounded-full relative transition-colors ${filters[filter.key] ? 'bg-primary' : 'bg-white/20'}`}
                                    >
                                        <div
                                            className={`absolute top-0.5 size-3 bg-white rounded-full transition-all ${filters[filter.key] ? 'right-0.5' : 'left-0.5'}`}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-auto">
                            <div className="p-4 bg-slate-800/50 rounded-xl border border-slate-700">
                                <p className="text-xs text-slate-400 uppercase tracking-widest mb-1">Current Status</p>
                                <p className="text-sm font-medium text-green-400">Optimal Route Available</p>
                            </div>
                        </div>
                    </div>
                </aside>
            )}

            {/* Live Navigation Panel */}
            {showNavPanel && !isMobile && (
                <div className="absolute right-6 top-24 w-80 z-20">
                    <div className="glass-panel rounded-xl p-6 shadow-xl border border-primary/30">
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-xs font-bold text-primary uppercase tracking-wider">Live Navigation</span>
                            <span className="px-2 py-1 bg-green-500/20 text-green-400 text-[10px] rounded-full font-bold">SAFE ROUTE</span>
                        </div>
                        <div className="flex items-end gap-2 mb-6">
                            <span className="text-4xl font-bold">12</span>
                            <span className="text-slate-400 pb-1">min</span>
                            <span className="text-slate-600 mx-2">|</span>
                            <span className="text-xl font-medium">1.2 <span className="text-sm text-slate-400">km</span></span>
                        </div>
                        <div className="space-y-4">
                            <div className="flex gap-4">
                                <div className="flex flex-col items-center">
                                    <div className="w-3 h-3 rounded-full bg-primary"></div>
                                    <div className="w-0.5 h-10 bg-slate-700 my-1"></div>
                                    <div className="w-3 h-3 rounded-full border-2 border-slate-500"></div>
                                </div>
                                <div className="flex flex-col justify-between text-sm py-0.5">
                                    <span className="text-white font-medium">Central Station</span>
                                    <span className="text-slate-400">St. Mary's Library</span>
                                </div>
                            </div>
                        </div>
                        <button className="w-full mt-6 bg-slate-100 text-slate-900 font-bold py-3 rounded-lg hover:bg-white transition-all">
                            Start Journey
                        </button>
                    </div>
                </div>
            )}

            {/* SOS Button */}
            {showSOS && (
                <div className={`absolute ${isMobile ? 'bottom-24 right-4' : 'bottom-10 right-10'} z-30`}>
                    <button
                        onClick={handleSOS}
                        className="group flex items-center gap-3 bg-red-600 hover:bg-red-500 text-white font-bold py-4 px-8 rounded-full shadow-2xl transition-all hover:scale-105 active:scale-95"
                    >
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                        </span>
                        ACTIVE SOS
                    </button>
                </div>
            )}
        </main>
    );
};

export default MapSection;
