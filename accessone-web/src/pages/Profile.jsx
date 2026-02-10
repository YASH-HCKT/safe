import { useState, useRef } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const { user, updateProfile, logout } = useAuth();
    const navigate = useNavigate();
    const fileInputRef = useRef(null);

    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
        name: user?.name || '',
        email: user?.email || '',
        dob: user?.dob || '',
        profilePic: user?.profilePic || ''
    });

    const [accessibilityNeeds, setAccessibilityNeeds] = useState(user?.accessibilityNeeds || {
        screenReader: true,
        voiceCommands: false,
        highContrast: true,
        motorAssistance: false
    });

    if (!user) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-background-dark pt-24">
                <div className="text-center space-y-6">
                    <span className="material-symbols-outlined text-6xl text-primary">lock</span>
                    <h2 className="text-2xl font-bold text-white">Authentication Required</h2>
                    <p className="text-slate-400">Please log in to access your profile</p>
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

    const handleSave = () => {
        updateProfile({ ...formData, accessibilityNeeds });
        setIsEditing(false);
        alert('Profile updated successfully!');
    };

    const handleImageClick = () => {
        if (isEditing) {
            fileInputRef.current.click();
        }
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setFormData(prev => ({ ...prev, profilePic: reader.result }));
            };
            reader.readAsDataURL(file);
        }
    };

    const toggleNeed = (key) => {
        if (!isEditing) return;
        setAccessibilityNeeds(prev => ({ ...prev, [key]: !prev[key] }));
    };

    return (
        <div className="min-h-screen bg-background-dark pt-32 pb-16 px-6">
            <div className="max-w-5xl mx-auto space-y-8">
                {/* Profile Header */}
                <div className="glass-panel p-8 rounded-3xl relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-r from-primary/20 to-purple-600/20"></div>

                    <div className="relative flex flex-col md:flex-row items-end gap-8 pt-10">
                        <div
                            className={`size-32 rounded-full border-4 border-background-dark p-1 bg-white dark:bg-slate-800 overflow-hidden shadow-2xl ${isEditing ? 'cursor-pointer hover:opacity-80' : ''}`}
                            onClick={handleImageClick}
                        >
                            <img
                                src={formData.profilePic || "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200"}
                                alt={user.name}
                                className="size-full rounded-full object-cover"
                            />
                            {isEditing && (
                                <div className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-full">
                                    <span className="material-symbols-outlined text-white">camera_alt</span>
                                </div>
                            )}
                            <input
                                type="file"
                                ref={fileInputRef}
                                className="hidden"
                                accept="image/*"
                                onChange={handleImageChange}
                            />
                        </div>

                        <div className="flex-1 text-center md:text-left mb-2">
                            {isEditing ? (
                                <div className="space-y-4 max-w-md">
                                    <div>
                                        <label className="text-xs text-slate-400 uppercase font-bold ml-1">Full Name</label>
                                        <input
                                            type="text"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-white font-bold text-xl focus:border-primary focus:outline-none"
                                        />
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="text-xs text-slate-400 uppercase font-bold ml-1">Email</label>
                                            <input
                                                type="email"
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm text-slate-300 focus:border-primary focus:outline-none"
                                            />
                                        </div>
                                        <div>
                                            <label className="text-xs text-slate-400 uppercase font-bold ml-1">Date of Birth</label>
                                            <input
                                                type="date"
                                                value={formData.dob}
                                                onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm text-slate-300 focus:border-primary focus:outline-none"
                                                style={{ colorScheme: 'dark' }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div>
                                    <h2 className="text-3xl font-black text-white mb-2">{user.name}</h2>
                                    <div className="flex items-center gap-4 text-slate-400 text-sm">
                                        <span className="flex items-center gap-1">
                                            <span className="material-symbols-outlined text-[16px]">mail</span>
                                            {user.email}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <span className="material-symbols-outlined text-[16px]">cake</span>
                                            {user.dob ? new Date(user.dob).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' }) : 'Add DOB'}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2 mt-4">
                                        <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold uppercase tracking-wider">
                                            Verified Member
                                        </span>
                                        <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-bold uppercase tracking-wider">
                                            Level 5 Contributor
                                        </span>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="flex gap-3 self-start md:self-end mb-4">
                            {isEditing ? (
                                <>
                                    <button
                                        onClick={handleSave}
                                        className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-xl font-bold transition-all shadow-lg shadow-primary/25"
                                    >
                                        Save Changes
                                    </button>
                                    <button
                                        onClick={() => setIsEditing(false)}
                                        className="bg-white/5 hover:bg-white/10 text-white px-6 py-2.5 rounded-xl font-bold transition-all"
                                    >
                                        Cancel
                                    </button>
                                </>
                            ) : (
                                <button
                                    onClick={() => setIsEditing(true)}
                                    className="bg-white/10 hover:bg-white/20 text-white px-6 py-2.5 rounded-xl font-bold transition-all flex items-center gap-2"
                                >
                                    <span className="material-symbols-outlined">edit</span>
                                    Edit Profile
                                </button>
                            )}
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column */}
                    <div className="space-y-8 lg:col-span-2">
                        {/* Joined Communities */}
                        <div className="glass-panel p-8 rounded-3xl">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-xl font-bold flex items-center gap-2">
                                    <span className="material-symbols-outlined text-primary">groups</span>
                                    Joined Communities
                                </h3>
                                <button className="text-primary text-sm font-bold hover:underline">Browse All</button>
                            </div>

                            {user.joinedCommunities && user.joinedCommunities.length > 0 ? (
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {user.joinedCommunities.map(community => (
                                        <div key={community.id} className="bg-white/5 p-4 rounded-2xl flex items-center gap-4 hover:bg-white/10 transition-all cursor-pointer group">
                                            <img src={community.image} alt={community.name} className="size-16 rounded-xl object-cover" />
                                            <div>
                                                <h4 className="font-bold text-lg group-hover:text-primary transition-colors">{community.name}</h4>
                                                <p className="text-slate-400 text-sm">{community.members} Members</p>
                                            </div>
                                        </div>
                                    ))}
                                    <button className="bg-white/5 p-4 rounded-2xl flex flex-col items-center justify-center gap-2 border-2 border-dashed border-white/10 hover:border-primary/50 text-slate-400 hover:text-white transition-all h-full min-h-[80px]">
                                        <span className="material-symbols-outlined text-3xl">add_circle</span>
                                        <span className="font-bold text-sm">Join New</span>
                                    </button>
                                </div>
                            ) : (
                                <div className="text-center py-8 text-slate-400">
                                    <p>You haven't joined any communities yet.</p>
                                    <button className="mt-4 text-primary font-bold">Find Communities</button>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-8">
                        {/* Accessibility Needs */}
                        <div className="glass-panel p-6 rounded-3xl">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-slate-400 uppercase text-xs font-bold tracking-widest">
                                    Assistive Tech
                                </h3>
                                {isEditing && <span className="text-primary text-xs font-bold">Tap to toggle</span>}
                            </div>

                            <div className="space-y-3">
                                {[
                                    { key: 'screenReader', icon: 'volume_up', label: 'Screen Reader' },
                                    { key: 'voiceCommands', icon: 'mic', label: 'Voice Commands' },
                                    { key: 'highContrast', icon: 'contrast', label: 'High Contrast' },
                                    { key: 'motorAssistance', icon: 'accessible', label: 'Motor Assistance' }
                                ].map((item) => (
                                    <div
                                        key={item.key}
                                        className={`flex items-center justify-between p-3 rounded-xl transition-all ${isEditing ? 'cursor-pointer hover:bg-white/5' : ''}`}
                                        onClick={() => toggleNeed(item.key)}
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className={`size-10 rounded-xl flex items-center justify-center ${accessibilityNeeds[item.key] ? 'bg-primary text-white' : 'bg-slate-800 text-slate-400'}`}>
                                                <span className="material-symbols-outlined">{item.icon}</span>
                                            </div>
                                            <span className={`font-bold ${accessibilityNeeds[item.key] ? 'text-white' : 'text-slate-400'}`}>{item.label}</span>
                                        </div>
                                        {accessibilityNeeds[item.key] && (
                                            <span className="material-symbols-outlined text-green-400">check_circle</span>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Logout */}
                        <button
                            onClick={() => {
                                logout();
                                navigate('/');
                            }}
                            className="w-full py-4 bg-red-600/10 border border-red-600/20 rounded-2xl text-red-400 font-bold hover:bg-red-600/20 transition-all flex items-center justify-center gap-2"
                        >
                            <span className="material-symbols-outlined">logout</span>
                            Sign Out
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
