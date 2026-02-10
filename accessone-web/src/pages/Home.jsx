import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
    return (
        <div className="relative min-h-screen flex flex-col overflow-hidden">
            {/* Background Layer */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-20 grayscale brightness-50"
                    style={{
                        backgroundImage: "url('https://images.unsplash.com/photo-1449156003053-c306a0482905?q=80&w=2070&auto=format&fit=crop')"
                    }}
                />
                <div className="absolute inset-0 hero-gradient" />
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-background-dark to-transparent" />
            </div>

            {/* Main Hero Content */}
            <main className="relative z-10 flex-grow flex flex-col items-center justify-center px-6 pt-24 text-center">
                <div className="max-w-5xl mx-auto space-y-8">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-md"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                        </span>
                        <span className="text-[10px] font-bold tracking-widest uppercase text-primary/90">
                            Next-Gen AI Protocols Active
                        </span>
                    </motion.div>

                    {/* Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-black tracking-[-0.05em] leading-[0.9] text-glow"
                    >
                        ACCESSONE AI <br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40">
                            ACCESSIBILITY & EMERGENCY
                        </span>{' '}
                        <br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-indigo-400 to-primary">
                            INTELLIGENCE SYSTEM
                        </span>
                    </motion.h1>

                    {/* Subheadline */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="max-w-2xl mx-auto text-lg md:text-xl text-white/60 font-medium leading-relaxed"
                    >
                        Redefining safety through real-time AI spatial awareness and instant emergency response protocols for the next generation of smart environments.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6"
                    >
                        <Link
                            to="/register"
                            className="group relative flex items-center gap-2 min-w-[200px] bg-white text-black font-black text-sm uppercase tracking-wider px-8 py-4 rounded-lg hover:scale-[1.02] active:scale-95 transition-all"
                        >
                            <span>Download App</span>
                            <span className="material-symbols-outlined text-[18px]">download</span>
                        </Link>
                        <Link
                            to="/dashboard"
                            className="glassmorphism group flex items-center gap-2 min-w-[200px] text-white font-black text-sm uppercase tracking-wider px-8 py-4 rounded-lg hover:bg-white/10 active:scale-95 transition-all"
                        >
                            <span>Explore Platform</span>
                            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                        </Link>
                    </motion.div>
                </div>
            </main>

            {/* Trust Section */}
            <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-12 border-t border-glass-border">
                <p className="text-[10px] font-bold tracking-[0.2em] text-center text-white/30 uppercase mb-8">
                    Empowering Security For
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-40 grayscale hover:grayscale-0 transition-all">
                    {[...Array(6)].map((_, i) => (
                        <div key={i} className="flex justify-center">
                            <div className="h-6 w-24 bg-white/20 rounded" />
                        </div>
                    ))}
                </div>
            </div>

            {/* Floating UI Element: AI Stats */}
            <div className="absolute bottom-10 right-10 hidden xl:block z-20">
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="glassmorphism p-5 rounded-2xl w-64 space-y-4"
                >
                    <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">
                            System Status
                        </span>
                        <span className="text-[10px] font-bold text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded">
                            Optimal
                        </span>
                    </div>
                    <div className="space-y-1">
                        <div className="flex justify-between text-xs">
                            <span className="text-white/60">Response Latency</span>
                            <span className="font-mono text-primary">0.02ms</span>
                        </div>
                        <div className="w-full bg-white/5 h-1 rounded-full overflow-hidden">
                            <div className="bg-primary w-3/4 h-full rounded-full" />
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="size-8 rounded-lg bg-primary/20 flex items-center justify-center">
                            <span className="material-symbols-outlined text-primary text-[18px]">radar</span>
                        </div>
                        <div>
                            <p className="text-[10px] font-bold text-white uppercase leading-none">
                                Scanning Radius
                            </p>
                            <p className="text-[9px] text-white/40">1.2km Comprehensive</p>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Bottom Scroll Indicator */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
                <span className="text-[9px] uppercase tracking-widest font-bold">Scroll to discover</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent" />
            </div>
        </div>
    );
};

export default Home;
