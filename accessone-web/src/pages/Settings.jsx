import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Settings = () => {
    const { user, updateProfile } = useAuth();
    const navigate = useNavigate();

    const [settings, setSettings] = useState(user?.settings || {
        theme: 'dark',
        fontSize: 'medium',
        buttonSize: 'medium',
        highContrast: true
    });

    const handleSettingChange = (key, value) => {
        const newSettings = { ...settings, [key]: value };
        setSettings(newSettings);
        updateProfile({ settings: newSettings });
    };

    return (
        <div className="min-h-screen bg-background-dark pt-32 pb-16 px-6">
            <div className="max-w-4xl mx-auto space-y-8">
                <div className="flex items-center gap-4 mb-8">
                    <button
                        onClick={() => navigate(-1)}
                        className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-white transition-all"
                    >
                        <span className="material-symbols-outlined">arrow_back</span>
                    </button>
                    <h1 className="text-4xl font-black text-white">Settings</h1>
                </div>

                {/* Appearance Settings */}
                <div className="glass-panel p-8 rounded-3xl">
                    <h2 className="text-xl font-bold mb-6 flex items-center gap-3">
                        <span className="material-symbols-outlined text-primary">palette</span>
                        Appearance & Theme
                    </h2>

                    <div className="space-y-6">
                        {/* Theme Toggle */}
                        <div className="flex items-center justify-between">
                            <div>
                                <h3 className="font-bold text-lg">App Theme</h3>
                                <p className="text-slate-400 text-sm">Choose your preferred visual style</p>
                            </div>
                            <div className="bg-white/5 p-1 rounded-xl flex gap-1">
                                {['light', 'dark', 'system'].map((theme) => (
                                    <button
                                        key={theme}
                                        onClick={() => handleSettingChange('theme', theme)}
                                        className={`px-4 py-2 rounded-lg font-bold text-sm transition-all capitalize ${settings.theme === theme
                                                ? 'bg-primary text-white shadow-lg'
                                                : 'text-slate-400 hover:text-white'
                                            }`}
                                    >
                                        {theme}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Accessibility Controls */}
                <div className="glass-panel p-8 rounded-3xl border border-primary/20">
                    <h2 className="text-xl font-bold mb-6 flex items-center gap-3">
                        <span className="material-symbols-outlined text-primary">accessibility_new</span>
                        Accessibility Controls
                    </h2>

                    <div className="space-y-8 text-white">
                        {/* Font Size */}
                        <div className="space-y-4">
                            <div className="flex justify-between">
                                <h3 className="font-bold text-lg">Text Size</h3>
                                <span className="text-primary font-bold capitalize">{settings.fontSize}</span>
                            </div>
                            <div className="bg-white/5 p-4 rounded-xl flex items-center gap-4">
                                <span className="text-xs">A</span>
                                <input
                                    type="range"
                                    min="0"
                                    max="3"
                                    step="1"
                                    value={['small', 'medium', 'large', 'xl'].indexOf(settings.fontSize)}
                                    onChange={(e) => handleSettingChange('fontSize', ['small', 'medium', 'large', 'xl'][e.target.value])}
                                    className="w-full accent-primary h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer"
                                />
                                <span className="text-2xl font-bold">A</span>
                            </div>
                        </div>

                        {/* Button Size */}
                        <div className="space-y-4">
                            <div className="flex justify-between">
                                <h3 className="font-bold text-lg">Interactive Elements Size</h3>
                                <span className="text-primary font-bold capitalize">{settings.buttonSize}</span>
                            </div>
                            <div className="grid grid-cols-3 gap-4">
                                {['small', 'medium', 'large'].map((size) => (
                                    <button
                                        key={size}
                                        onClick={() => handleSettingChange('buttonSize', size)}
                                        className={`py-3 rounded-xl border-2 transition-all font-bold capitalize ${settings.buttonSize === size
                                                ? 'border-primary bg-primary/10 text-white'
                                                : 'border-white/10 bg-white/5 text-slate-400 hover:border-white/30'
                                            }`}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* High Contrast */}
                        <div className="flex items-center justify-between pt-4 border-t border-white/10">
                            <div>
                                <h3 className="font-bold text-lg">High Contrast Mode</h3>
                                <p className="text-slate-400 text-sm">Increase contrast for better visibility</p>
                            </div>
                            <button
                                onClick={() => handleSettingChange('highContrast', !settings.highContrast)}
                                className={`w-14 h-8 rounded-full relative transition-colors ${settings.highContrast ? 'bg-primary' : 'bg-slate-700'}`}
                            >
                                <div className={`absolute top-1 size-6 bg-white rounded-full transition-all ${settings.highContrast ? 'right-1' : 'left-1'}`} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Account Actions */}
                <div className="glass-panel p-8 rounded-3xl">
                    <h2 className="text-xl font-bold mb-6 text-red-400 flex items-center gap-3">
                        <span className="material-symbols-outlined">gpp_maybe</span>
                        Danger Zone
                    </h2>
                    <div className="flex flex-col gap-4">
                        <button className="w-full py-4 bg-red-600/10 border border-red-600/20 rounded-xl text-red-400 font-bold hover:bg-red-600/20 transition-all text-left px-6">
                            Clear App Cache & Data
                        </button>
                        <button className="w-full py-4 bg-red-600/10 border border-red-600/20 rounded-xl text-red-400 font-bold hover:bg-red-600/20 transition-all text-left px-6">
                            Delete Account
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Settings;
