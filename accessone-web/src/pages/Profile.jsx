import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const { user, updateProfile, logout } = useAuth();
    const navigate = useNavigate();

    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
        name: user?.name || '',
        email: user?.email || ''
    });

    const [accessibilityNeeds, setAccessibilityNeeds] = useState(user?.accessibilityNeeds || {
        screenReader: true,
        voiceCommands: false,
        highContrast: true,
        motorAssistance: false
    });

    const [savedLocations, setSavedLocations] = useState(user?.savedLocations || [
        { name: 'Home', address: '123 Main St, San Francisco, CA', type: 'home' },
        { name: 'Work', address: '456 Market St, San Francisco, CA', type: 'work' }
    ]);

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
        updateProfile({ ...formData, accessibilityNeeds, savedLocations });
        setIsEditing(false);
        alert('Profile updated successfully!');
    };

    const toggleNeed = (key) => {
        setAccessibilityNeeds(prev => ({ ...prev, [key]: !prev[key] }));
    };

    return (
        <div className="min-h-screen bg-background-dark pt-24 pb-16 px-6">
            <div className="max-w-4xl mx-auto space-y-8">
                {/* Profile Header */}
                <div className="glass-panel p-8 rounded-2xl">
                    <div className="flex flex-col md:flex-row items-center gap-6">
                        <div className="size-24 rounded-full border-4 border-primary p-1 bg-white dark:bg-background-dark overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200"
                                alt={user.name}
                                className="size-full rounded-full object-cover"
                            />
                        </div>
                        <div className="flex-1 text-center md:text-left">
                            {isEditing ? (
                                <input
                                    type="text"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="text-2xl font-bold mb-1 bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white w-full"
                                />
                            ) : (
                                <h2 className="text-2xl font-bold mb-1">{user.name}</h2>
                            )}
                            {isEditing ? (
                                <input
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="text-slate-400 bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm w-full mt-2"
                                />
                            ) : (
                                <p className="text-slate-400">{user.email}</p>
                            )}
                            <p className="text-primary font-bold text-sm mt-2 uppercase tracking-wider">
                                Verified Member
                            </p>
                        </div>
                        <div className="flex gap-3">
                            {isEditing ? (
                                <>
                                    <button
                                        onClick={handleSave}
                                        className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-lg font-bold transition-all"
                                    >
                                        Save
                                    </button>
                                    <button
                                        onClick={() => setIsEditing(false)}
                                        className="bg-white/5 hover:bg-white/10 text-white px-6 py-2 rounded-lg font-bold transition-all"
                                    >
                                        Cancel
                                    </button>
                                </>
                            ) : (
                                <button
                                    onClick={() => setIsEditing(true)}
                                    className="bg-primary/20 hover:bg-primary/30 text-primary px-6 py-2 rounded-lg font-bold transition-all flex items-center gap-2"
                                >
                                    <span className="material-symbols-outlined text-sm">edit</span>
                                    Edit Profile
                                </button>
                            )}
                        </div>
                    </div>
                </div>

                {/* Current Mode */}
                <div className="glass-panel p-6 rounded-2xl">
                    <h3 className="text-slate-400 uppercase text-[10px] font-bold mb-4 tracking-widest">
                        Current Mode
                    </h3>
                    <div className="bg-primary/10 border border-primary/20 rounded-2xl p-4 flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <div className="size-12 rounded-full bg-primary flex items-center justify-center text-white">
                                <span className="material-symbols-outlined">accessible_forward</span>
                            </div>
                            <div>
                                <h4 className="font-bold text-lg leading-tight">Motor & Mobility</h4>
                                <p className="text-slate-400 text-xs">High-sensitivity touch enabled</p>
                            </div>
                        </div>
                        <button className="p-2 rounded-full bg-primary/20 text-primary">
                            <span className="material-symbols-outlined">edit</span>
                        </button>
                    </div>
                </div>

                {/* Accessibility Needs */}
                <div className="glass-panel p-6 rounded-2xl">
                    <h3 className="text-slate-400 uppercase text-[10px] font-bold mb-4 tracking-widest">
                        My Assistive Needs
                    </h3>
                    <div className="space-y-4">
                        {[
                            { key: 'screenReader', icon: 'volume_up', label: 'Screen Reader' },
                            { key: 'voiceCommands', icon: 'mic', label: 'Voice Commands' },
                            { key: 'highContrast', icon: 'contrast', label: 'High Contrast' },
                            { key: 'motorAssistance', icon: 'accessible', label: 'Motor Assistance' }
                        ].map((item) => (
                            <div
                                key={item.key}
                                className="flex items-center justify-between cursor-pointer"
                                onClick={() => toggleNeed(item.key)}
                            >
                                <div className="flex items-center gap-3">
                                    <div className="size-10 rounded-xl bg-slate-800 flex items-center justify-center">
                                        <span className="material-symbols-outlined text-slate-400">{item.icon}</span>
                                    </div>
                                    <span className="font-bold">{item.label}</span>
                                </div>
                                <div
                                    className={`w-12 h-6 rounded-full relative transition-colors ${accessibilityNeeds[item.key] ? 'bg-primary' : 'bg-slate-700'
                                        }`}
                                >
                                    <div
                                        className={`absolute top-1 size-4 bg-white rounded-full transition-all ${accessibilityNeeds[item.key] ? 'right-1' : 'left-1'
                                            }`}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Saved Locations */}
                <div className="glass-panel p-6 rounded-2xl">
                    <h3 className="text-slate-400 uppercase text-[10px] font-bold mb-4 tracking-widest">
                        Saved Locations
                    </h3>
                    <div className="space-y-3">
                        {savedLocations.map((location, index) => (
                            <div
                                key={index}
                                className="bg-white/5 p-4 rounded-xl border border-white/5 flex items-center gap-4"
                            >
                                <div className="size-10 rounded-lg bg-primary/20 flex items-center justify-center">
                                    <span className="material-symbols-outlined text-primary">
                                        {location.type === 'home' ? 'home' : location.type === 'work' ? 'work' : 'location_on'}
                                    </span>
                                </div>
                                <div className="flex-1">
                                    <h4 className="font-bold">{location.name}</h4>
                                    <p className="text-xs text-slate-400">{location.address}</p>
                                </div>
                                <button className="p-2 text-slate-400 hover:text-white transition-colors">
                                    <span className="material-symbols-outlined">more_vert</span>
                                </button>
                            </div>
                        ))}
                        <button className="w-full py-3 border-2 border-dashed border-white/10 rounded-xl text-sm font-bold text-slate-400 hover:text-white hover:border-white/20 transition-all flex items-center justify-center gap-2">
                            <span className="material-symbols-outlined">add</span>
                            Add New Location
                        </button>
                    </div>
                </div>

                {/* Logout Button */}
                <button
                    onClick={() => {
                        logout();
                        navigate('/');
                    }}
                    className="w-full py-4 bg-red-600/10 border border-red-600/20 rounded-xl text-red-400 font-bold hover:bg-red-600/20 transition-all flex items-center justify-center gap-2"
                >
                    <span className="material-symbols-outlined">logout</span>
                    Logout
                </button>
            </div>
        </div>
    );
};

export default Profile;
