import { Search, Mic, SlidersHorizontal, Shield, Info, Heart, Navigation, Activity, Phone, ChevronUp, MapPin, Accessibility, Volume2, ArrowUpCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const NavigatorMap = () => {
    const navigate = useNavigate();
    return (
        <div className="relative h-screen w-full flex flex-col overflow-hidden bg-[#0f172a]">
            {/* Search Header */}
            <div className="absolute top-0 left-0 right-0 z-20 p-4 space-y-3 bg-gradient-to-b from-background-dark/90 via-background-dark/50 to-transparent">
                <div className="flex items-center gap-2">
                    <div className="flex-1 flex items-center bg-white dark:bg-[#1e293b] rounded-xl shadow-lg h-14 px-4 border-2 border-primary/20">
                        <Search className="text-primary mr-2 h-5 w-5" />
                        <input
                            className="flex-1 bg-transparent border-none focus:ring-0 text-lg placeholder:text-slate-400 dark:text-white"
                            placeholder="Search safety zones..."
                            type="text"
                        />
                        <div className="h-6 w-[1px] bg-slate-300 dark:bg-slate-700 mx-2"></div>
                        <button className="p-2 text-primary hover:bg-primary/10 rounded-lg">
                            <Mic className="h-5 w-5" />
                        </button>
                    </div>
                    <button className="bg-primary text-white size-14 rounded-xl flex items-center justify-center shadow-lg active:scale-95 transition-transform">
                        <SlidersHorizontal className="h-6 w-6" />
                    </button>
                </div>

                <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2">
                    <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-safety text-white px-4 shadow-md">
                        <Shield className="h-4 w-4" />
                        <span className="text-sm font-medium">Safety & Rest</span>
                    </button>
                    <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white dark:bg-[#1e293b] text-slate-700 dark:text-white px-4 shadow-md border border-slate-200 dark:border-slate-700">
                        <ArrowUpCircle className="h-4 w-4" />
                        <span className="text-sm font-medium">Elevators</span>
                    </button>
                    <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white dark:bg-[#1e293b] text-slate-700 dark:text-white px-4 shadow-md border border-slate-200 dark:border-slate-700">
                        <Accessibility className="h-4 w-4" />
                        <span className="text-sm font-medium">Ramps</span>
                    </button>
                </div>
            </div>

            {/* Map Content (Simulated) */}
            <div className="flex-1 w-full relative">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: "url('https://api.mapbox.com/styles/v1/mapbox/dark-v11/static/-122.4194,37.7749,12,0/800x800?access_token=pk.eyJ1IjoiZXhhbXBsZSIsImEiOiJjbGV4YW1wbGUifQ')" }}
                >
                    {/* User Location */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                        <div className="size-6 bg-primary rounded-full border-4 border-white shadow-xl animate-pulse"></div>
                    </div>

                    {/* Map Markers */}
                    <div className="absolute top-[30%] left-[40%] flex flex-col items-center">
                        <div className="bg-primary text-white p-3 rounded-2xl shadow-2xl flex flex-col items-center gap-0.5 border-2 border-white scale-110 relative">
                            <ArrowUpCircle className="h-6 w-6" />
                            <div className="absolute -top-2 -right-2 bg-green-500 text-[8px] font-bold px-1.5 py-0.5 rounded-full border border-white whitespace-nowrap">
                                IN SERVICE
                            </div>
                        </div>
                        <div className="w-1.5 h-4 bg-white shadow-md"></div>
                    </div>
                </div>

                {/* Map Controls */}
                <div className="absolute right-4 bottom-80 flex flex-col gap-3">
                    <button className="size-14 bg-white dark:bg-[#1e293b] rounded-xl shadow-xl flex items-center justify-center text-slate-700 dark:text-white border border-slate-200 dark:border-slate-700 active:scale-95">
                        <Info className="h-6 w-6" />
                    </button>
                    <button className="size-14 bg-white dark:bg-[#1e293b] rounded-xl shadow-xl flex items-center justify-center text-slate-700 dark:text-white border border-slate-200 dark:border-slate-700 active:scale-95">
                        <Navigation className="h-6 w-6" />
                    </button>
                </div>
            </div>

            {/* Bottom Sheet */}
            <div className="absolute bottom-20 left-0 right-0 bg-white dark:bg-[#1e293b] rounded-t-[2rem] shadow-[0_-10px_40px_rgba(0,0,0,0.4)] z-30 transform border-t border-slate-200 dark:border-slate-800">
                <div className="flex justify-center py-3">
                    <div className="w-12 h-1.5 bg-slate-300 dark:bg-slate-600 rounded-full"></div>
                </div>

                <div className="px-6 pb-6 space-y-6">
                    <div className="flex justify-between items-start">
                        <div className="space-y-1">
                            <div className="flex items-center gap-2">
                                <h2 className="text-2xl font-bold dark:text-white">Central Hub Station</h2>
                                <span className="flex items-center gap-1 px-2 py-0.5 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-bold rounded-full border border-green-200 dark:border-green-800 uppercase tracking-wider">
                                    <Shield className="h-3 w-3 fill-current" /> Safe Zone
                                </span>
                            </div>
                            <div className="flex items-center gap-1 text-slate-500 dark:text-slate-400">
                                <MapPin className="h-4 w-4" />
                                <p>123 Accessible Plaza, Downtown</p>
                            </div>
                        </div>
                        <button className="size-10 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center text-slate-500 dark:text-slate-400 active:scale-90 transition-transform">
                            <Heart className="h-5 w-5" />
                        </button>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                        <div className="flex items-center gap-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-100 dark:border-blue-800/50">
                            <div className="size-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
                                <ArrowUpCircle className="h-5 w-5" />
                            </div>
                            <div>
                                <p className="text-xs text-slate-500 dark:text-slate-400">Main Elevator</p>
                                <div className="flex items-center gap-1.5">
                                    <div className="size-2 bg-green-500 rounded-full animate-pulse"></div>
                                    <p className="text-sm font-bold text-green-600 dark:text-green-400">In Service</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-purple-50 dark:bg-purple-900/20 rounded-xl border border-purple-100 dark:border-purple-800/50">
                            <div className="size-10 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-600">
                                <Volume2 className="h-5 w-5" />
                            </div>
                            <div className="flex-1">
                                <p className="text-xs text-slate-500 dark:text-slate-400">Quiet Level</p>
                                <div className="flex items-center gap-1 mt-1">
                                    <div className="h-1.5 flex-1 bg-purple-600 rounded-full"></div>
                                    <div className="h-1.5 flex-1 bg-purple-600 rounded-full"></div>
                                    <div className="h-1.5 flex-1 bg-slate-200 dark:bg-slate-700 rounded-full"></div>
                                    <div className="h-1.5 flex-1 bg-slate-200 dark:bg-slate-700 rounded-full"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-3">
                        <button className="flex-[2] h-14 bg-primary text-white rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-primary/30 active:scale-95 transition-transform">
                            <Navigation className="h-5 w-5" />
                            Get Directions
                        </button>
                        <button
                            onClick={() => alert('Emergency SOS Signal Sent!')}
                            className="flex-1 h-14 bg-safety text-white rounded-xl font-bold flex flex-col items-center justify-center gap-0 shadow-lg shadow-safety/30 active:scale-95 transition-transform"
                        >
                            <Activity className="h-4 w-4" />
                            <span className="text-[10px] uppercase tracking-tighter">SOS</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavigatorMap;
