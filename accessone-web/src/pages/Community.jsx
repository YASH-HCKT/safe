import { useState } from 'react';
import { motion } from 'framer-motion';

const Community = () => {
    const [activeTab, setActiveTab] = useState('feed');

    const posts = [
        {
            author: 'Sarah Chen',
            avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop',
            time: '2 hours ago',
            content: 'Just discovered a new accessible route to Central Park! The new ramps make it so much easier. Thanks to the community for the updates! 🎉',
            likes: 24,
            comments: 5,
            type: 'update'
        },
        {
            author: 'Marcus Johnson',
            avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop',
            time: '5 hours ago',
            content: '⚠️ Heads up! Elevator at Station Square is out of service. Alternative route via West entrance has working lift.',
            likes: 42,
            comments: 12,
            type: 'alert'
        },
        {
            author: 'Emily Rodriguez',
            avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&auto=format&fit=crop',
            time: '1 day ago',
            content: 'Organizing a community meetup next Saturday at the Accessible Cafe downtown. Would love to see you all there! ☕',
            likes: 67,
            comments: 18,
            type: 'event'
        }
    ];

    const helpers = [
        { name: 'Alex Turner', role: 'Community Helper', reports: 156, avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&auto=format&fit=crop' },
        { name: 'Nina Patel', role: 'Verified Guide', reports: 203, avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop' },
        { name: 'David Kim', role: 'Safety Expert', reports: 178, avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop' }
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
                    <h1 className="text-4xl md:text-5xl font-black mb-4">Community</h1>
                    <p className="text-slate-400 text-lg">Connect with others, share updates, and help build a more accessible world</p>
                </motion.div>
            </div>

            {/* Stats Bar */}
            <div className="max-w-7xl mx-auto px-6 mb-8">
                <div className="glass-panel p-6 rounded-2xl">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        <div className="text-center">
                            <p className="text-3xl font-black text-primary mb-1">50k+</p>
                            <p className="text-sm text-slate-400 uppercase tracking-wider">Active Members</p>
                        </div>
                        <div className="text-center">
                            <p className="text-3xl font-black text-green-400 mb-1">12k</p>
                            <p className="text-sm text-slate-400 uppercase tracking-wider">Reports This Month</p>
                        </div>
                        <div className="text-center">
                            <p className="text-3xl font-black text-blue-400 mb-1">98%</p>
                            <p className="text-sm text-slate-400 uppercase tracking-wider">Verified Accuracy</p>
                        </div>
                        <div className="text-center">
                            <p className="text-3xl font-black text-yellow-400 mb-1">24/7</p>
                            <p className="text-sm text-slate-400 uppercase tracking-wider">Community Support</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Feed Section */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Tabs */}
                        <div className="flex gap-2 glass-panel p-2 rounded-xl">
                            <button
                                onClick={() => setActiveTab('feed')}
                                className={`flex-1 py-2 px-4 rounded-lg font-bold text-sm transition-all ${activeTab === 'feed' ? 'bg-primary text-white' : 'text-white/70 hover:text-white'
                                    }`}
                            >
                                Community Feed
                            </button>
                            <button
                                onClick={() => setActiveTab('alerts')}
                                className={`flex-1 py-2 px-4 rounded-lg font-bold text-sm transition-all ${activeTab === 'alerts' ? 'bg-primary text-white' : 'text-white/70 hover:text-white'
                                    }`}
                            >
                                Live Alerts
                            </button>
                            <button
                                onClick={() => setActiveTab('events')}
                                className={`flex-1 py-2 px-4 rounded-lg font-bold text-sm transition-all ${activeTab === 'events' ? 'bg-primary text-white' : 'text-white/70 hover:text-white'
                                    }`}
                            >
                                Events
                            </button>
                        </div>

                        {/* Create Post */}
                        <div className="glass-panel p-6 rounded-2xl">
                            <div className="flex gap-4">
                                <div className="size-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                                    <span className="material-symbols-outlined text-primary">person</span>
                                </div>
                                <div className="flex-1">
                                    <textarea
                                        placeholder="Share an update, report an issue, or help the community..."
                                        className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-white placeholder:text-white/30 resize-none outline-none focus:ring-2 focus:ring-primary"
                                        rows="3"
                                    />
                                    <div className="flex items-center justify-between mt-4">
                                        <div className="flex gap-2">
                                            <button className="p-2 text-white/40 hover:text-white transition-colors">
                                                <span className="material-symbols-outlined">image</span>
                                            </button>
                                            <button className="p-2 text-white/40 hover:text-white transition-colors">
                                                <span className="material-symbols-outlined">location_on</span>
                                            </button>
                                            <button className="p-2 text-white/40 hover:text-white transition-colors">
                                                <span className="material-symbols-outlined">warning</span>
                                            </button>
                                        </div>
                                        <button className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-lg font-bold transition-all">
                                            Post
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Posts */}
                        {posts.map((post, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                className="glass-panel p-6 rounded-2xl"
                            >
                                <div className="flex gap-4">
                                    <img
                                        src={post.avatar}
                                        alt={post.author}
                                        className="size-12 rounded-full object-cover flex-shrink-0"
                                    />
                                    <div className="flex-1">
                                        <div className="flex items-center justify-between mb-2">
                                            <div>
                                                <h4 className="font-bold">{post.author}</h4>
                                                <p className="text-xs text-slate-400">{post.time}</p>
                                            </div>
                                            {post.type === 'alert' && (
                                                <span className="bg-orange-500/20 text-orange-400 text-xs px-3 py-1 rounded-full font-bold">
                                                    ALERT
                                                </span>
                                            )}
                                            {post.type === 'event' && (
                                                <span className="bg-blue-500/20 text-blue-400 text-xs px-3 py-1 rounded-full font-bold">
                                                    EVENT
                                                </span>
                                            )}
                                        </div>
                                        <p className="text-slate-300 mb-4 leading-relaxed">{post.content}</p>
                                        <div className="flex items-center gap-6">
                                            <button className="flex items-center gap-2 text-slate-400 hover:text-primary transition-colors">
                                                <span className="material-symbols-outlined text-sm">favorite</span>
                                                <span className="text-sm font-medium">{post.likes}</span>
                                            </button>
                                            <button className="flex items-center gap-2 text-slate-400 hover:text-primary transition-colors">
                                                <span className="material-symbols-outlined text-sm">comment</span>
                                                <span className="text-sm font-medium">{post.comments}</span>
                                            </button>
                                            <button className="flex items-center gap-2 text-slate-400 hover:text-primary transition-colors">
                                                <span className="material-symbols-outlined text-sm">share</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        {/* Top Helpers */}
                        <div className="glass-panel p-6 rounded-2xl">
                            <h3 className="text-lg font-bold mb-4">Top Community Helpers</h3>
                            <div className="space-y-4">
                                {helpers.map((helper, index) => (
                                    <div key={index} className="flex items-center gap-3">
                                        <img
                                            src={helper.avatar}
                                            alt={helper.name}
                                            className="size-12 rounded-full object-cover"
                                        />
                                        <div className="flex-1">
                                            <h4 className="font-bold text-sm">{helper.name}</h4>
                                            <p className="text-xs text-slate-400">{helper.role}</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-sm font-bold text-primary">{helper.reports}</p>
                                            <p className="text-[10px] text-slate-400">Reports</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Quick Actions */}
                        <div className="glass-panel p-6 rounded-2xl">
                            <h3 className="text-lg font-bold mb-4">Quick Actions</h3>
                            <div className="space-y-3">
                                <button className="w-full flex items-center gap-3 p-3 bg-white/5 hover:bg-white/10 rounded-lg transition-all">
                                    <span className="material-symbols-outlined text-primary">report</span>
                                    <span className="font-medium text-sm">Report Issue</span>
                                </button>
                                <button className="w-full flex items-center gap-3 p-3 bg-white/5 hover:bg-white/10 rounded-lg transition-all">
                                    <span className="material-symbols-outlined text-green-400">event</span>
                                    <span className="font-medium text-sm">Create Event</span>
                                </button>
                                <button className="w-full flex items-center gap-3 p-3 bg-white/5 hover:bg-white/10 rounded-lg transition-all">
                                    <span className="material-symbols-outlined text-blue-400">groups</span>
                                    <span className="font-medium text-sm">Find Groups</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Community;
