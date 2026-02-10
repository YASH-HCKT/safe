import { motion } from 'framer-motion';

const Features = () => {
    const features = [
        {
            icon: 'emergency',
            title: 'Instant SOS',
            description: 'Emergency alerts that broadcast your precise location and specific medical requirements to nearby responders and loved ones instantly.',
            color: 'text-red-400'
        },
        {
            icon: 'map',
            title: 'Smart Maps',
            description: 'Proprietary routing engine that prioritizes elevators, ramps, and safe crossings over the shortest path.',
            color: 'text-blue-400'
        },
        {
            icon: 'groups',
            title: 'Community Connection',
            description: 'Join a vibrant network of users who share real-time updates on elevator outages or crowd density in transit hubs.',
            color: 'text-green-400'
        },
        {
            icon: 'accessible_forward',
            title: 'Accessibility First',
            description: 'Real-time data on ramps, elevators, tactile paving, and quiet zones to ensure barrier-free navigation.',
            color: 'text-purple-400'
        },
        {
            icon: 'radar',
            title: 'AI Intelligence',
            description: 'Advanced AI algorithms analyze your environment in real-time to provide personalized safety recommendations.',
            color: 'text-yellow-400'
        },
        {
            icon: 'shield_person',
            title: 'Privacy Protected',
            description: 'Your data is encrypted end-to-end. We never share your personal information without explicit consent.',
            color: 'text-pink-400'
        }
    ];

    const problems = [
        {
            icon: 'stairs',
            title: 'Physical Barriers',
            description: 'Stairs, narrow doorways, and broken pavement aren\'t just inconveniences—they are hard boundaries that limit mobility and independence.',
            image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&auto=format&fit=crop'
        },
        {
            icon: 'leak_remove',
            title: 'Social Isolation',
            description: 'Lack of real-time accessibility data leads to anxiety and withdrawal, leaving individuals disconnected from their own communities.',
            image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop'
        },
        {
            icon: 'timer_off',
            title: 'Delayed Response',
            description: 'Emergency services often lack the specific accessibility profile data needed to provide rapid, specialized assistance in critical moments.',
            image: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=400&auto=format&fit=crop'
        }
    ];

    const stats = [
        { value: '98%', label: 'Route Accuracy' },
        { value: '2s', label: 'Emergency Signal' },
        { value: '50k+', label: 'Community Helpers' },
        { value: '12', label: 'Safety Certifications' }
    ];

    return (
        <div className="min-h-screen bg-background-dark pt-24 pb-16">
            {/* Problem Section */}
            <section className="relative py-24 px-6 lg:px-10 overflow-hidden">
                <div className="absolute top-0 right-0 -z-10 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full" />
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] uppercase tracking-widest text-slate-400 mb-4">
                            Current Reality
                        </span>
                        <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-6 leading-[1.1]">
                            The world is <span className="text-slate-500">not designed</span> <br />
                            for everyone.
                        </h2>
                        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                            For millions, the modern cityscape is a maze of obstacles. From inaccessible infrastructure to social isolation, the barriers are real and pervasive.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {problems.map((problem, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="group bg-card-dark/40 border border-white/5 p-8 rounded-xl hover:border-white/10 transition-all"
                            >
                                <div className="size-12 rounded-lg bg-slate-800 flex items-center justify-center mb-6 group-hover:bg-slate-700 transition-colors">
                                    <span className="material-symbols-outlined text-slate-400">{problem.icon}</span>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{problem.title}</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">{problem.description}</p>
                                <div className="mt-8 rounded-lg overflow-hidden grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-60 transition-all">
                                    <img className="w-full h-32 object-cover" src={problem.image} alt={problem.title} />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Solution Section */}
            <section className="relative py-24 px-6 lg:px-10 bg-[#0d0b1a]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(50,17,212,0.1),transparent_70%)]" />
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <span className="inline-block px-3 py-1 bg-primary/20 border border-primary/30 rounded-full text-[10px] uppercase tracking-widest text-primary font-bold mb-4">
                            The Solution
                        </span>
                        <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-8 leading-[1.1]">
                            One platform. <br />
                            <span className="text-primary neon-text">Total safety</span> & accessibility.
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-card-dark/40 border border-white/5 p-8 rounded-xl hover:border-primary/30 transition-all group"
                            >
                                <div className="size-14 rounded-xl bg-primary/20 flex items-center justify-center border border-primary/30 mb-6 group-hover:bg-primary/30 transition-colors">
                                    <span className={`material-symbols-outlined text-3xl ${feature.color}`}>
                                        {feature.icon}
                                    </span>
                                </div>
                                <h4 className="text-xl font-bold text-white mb-3">{feature.title}</h4>
                                <p className="text-slate-400 leading-relaxed">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 bg-background-dark border-t border-white/5">
                <div className="max-w-7xl mx-auto px-10">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="text-center"
                            >
                                <p className="text-4xl font-black text-white mb-2">{stat.value}</p>
                                <p className="text-slate-500 text-sm uppercase tracking-widest font-bold">
                                    {stat.label}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Features;
