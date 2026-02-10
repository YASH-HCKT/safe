import { ChevronRight, Settings, Shield, User, Heart, MapPin, Activity, Award, CheckCircle, Bell, MessageSquare, LogOut, Edit3, Accessibility, Volume2, Mic, Sun, Star, Home, Map, Briefcase, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const SafetyHub = () => {
    const navigate = useNavigate();
    const [assistiveNeeds, setAssistiveNeeds] = useState([
        { label: 'Screen Reader', icon: Volume2, state: true },
        { label: 'Voice Commands', icon: Mic, state: false },
        { label: 'High Contrast', icon: Sun, state: true }
    ]);

    const toggleNeed = (index) => {
        const newNeeds = [...assistiveNeeds];
        newNeeds[index].state = !newNeeds[index].state;
        setAssistiveNeeds(newNeeds);
    };

    return (
        <div className="pb-24">
            {/* Profile Section */}
            <section className="p-6 flex flex-col items-center">
                <div className="flex justify-between w-full mb-4">
                    <button
                        onClick={() => navigate(-1)}
                        className="p-2 rounded-full bg-slate-100 dark:bg-slate-800"
                    >
                        <ChevronRight className="h-6 w-6 rotate-180" />
                    </button>
                    <h1 className="text-xl font-bold">Account & Safety</h1>
                    <button
                        onClick={() => navigate('/community')}
                        className="p-2 rounded-full bg-slate-100 dark:bg-slate-800"
                    >
                        <Settings className="h-6 w-6" />
                    </button>
                </div>

                <div className="relative mb-4">
                    <div className="size-28 rounded-full border-4 border-primary p-1 bg-white dark:bg-background-dark overflow-hidden">
                        <img
                            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200"
                            alt="Alex Johnson"
                            className="size-full rounded-full object-cover"
                        />
                    </div>
                    <div className="absolute bottom-1 right-1 bg-primary text-white p-1 rounded-full border-2 border-white dark:border-background-dark">
                        <CheckCircle className="h-4 w-4 fill-current" />
                    </div>
                </div>

                <h2 className="text-2xl font-bold mb-1">Alex Johnson</h2>
                <p className="text-primary font-bold text-sm mb-1 uppercase tracking-wider">Verified Member</p>
                <p className="text-slate-500 text-xs">Member since July 2022</p>
            </section>

            {/* Current Mode */}
            <section className="px-6 mb-8">
                <h3 className="text-slate-500 uppercase text-[10px] font-bold mb-3 tracking-widest">Current Mode</h3>
                <div className="bg-primary/10 border border-primary/20 rounded-full p-4 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="size-12 rounded-full bg-primary flex items-center justify-center text-white">
                            <Accessibility className="h-6 w-6" />
                        </div>
                        <div>
                            <h4 className="font-bold text-lg leading-tight">Motor & Mobility</h4>
                            <p className="text-slate-500 dark:text-[#91a9ca] text-xs">High-sensitivity touch enabled</p>
                        </div>
                    </div>
                    <button className="p-2 rounded-full bg-primary/20 text-primary">
                        <Edit3 className="h-5 w-5" />
                    </button>
                </div>
            </section>

            {/* Emergency & Safety Grid */}
            <section className="px-6 mb-8">
                <h3 className="text-slate-500 uppercase text-[10px] font-bold mb-3 tracking-widest">Emergency & Safety</h3>
                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-slate-100 dark:bg-card-dark p-4 rounded-3xl border border-slate-200 dark:border-border-dark">
                        <div className="size-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-3">
                            <Activity className="h-6 w-6" />
                        </div>
                        <h4 className="font-bold">Medical ID</h4>
                        <p className="text-slate-500 text-xs mt-1">Allergies & Meds</p>
                    </div>
                    <div className="bg-slate-100 dark:bg-card-dark p-4 rounded-3xl border border-slate-200 dark:border-border-dark">
                        <div className="size-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-3">
                            <Users className="h-6 w-6" />
                        </div>
                        <h4 className="font-bold">Emergency</h4>
                        <p className="text-slate-500 text-xs mt-1">2 Contacts Active</p>
                    </div>
                </div>
            </section>

            {/* Assistive Needs Toggles */}
            <section className="px-6 mb-8">
                <h3 className="text-slate-500 uppercase text-[10px] font-bold mb-3 tracking-widest">My Assistive Needs</h3>
                <div className="space-y-4">
                    {assistiveNeeds.map((item, i) => (
                        <div key={i} className="flex items-center justify-between" onClick={() => toggleNeed(i)}>
                            <div className="flex items-center gap-3">
                                <div className="size-10 rounded-xl bg-slate-100 dark:bg-card-dark flex items-center justify-center">
                                    <item.icon className="h-5 w-5 text-slate-500" />
                                </div>
                                <span className="font-bold">{item.label}</span>
                            </div>
                            <div className={`w-12 h-6 rounded-full relative transition-colors ${item.state ? 'bg-primary' : 'bg-slate-300 dark:bg-slate-700'}`}>
                                <div className={`absolute top-1 size-4 bg-white rounded-full transition-all ${item.state ? 'right-1' : 'left-1'}`}></div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Community Impact */}
            <section className="px-6 mb-8">
                <h3 className="text-slate-500 uppercase text-[10px] font-bold mb-3 tracking-widest">Community Impact</h3>
                <div className="flex justify-between items-center bg-slate-100 dark:bg-card-dark/50 p-4 rounded-3xl">
                    {[
                        { label: 'Pioneer', icon: Star, color: 'text-yellow-500', locked: false },
                        { label: 'Helper', icon: Heart, color: 'text-cyan-500', locked: false },
                        { label: 'Explorer', icon: Map, color: 'text-purple-500', locked: false },
                        { label: 'Locked', icon: Shield, color: 'text-slate-400', locked: true }
                    ].map((badge, i) => (
                        <div key={i} className="flex flex-col items-center gap-1">
                            <div className={`size-12 rounded-full border-2 border-dashed flex items-center justify-center ${badge.locked ? 'border-slate-500' : 'border-primary'}`}>
                                <badge.icon className={`h-6 w-6 ${badge.color}`} />
                            </div>
                            <span className="text-[10px] font-bold uppercase">{badge.label}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* Saved Places */}
            <section className="px-6">
                <h3 className="text-slate-500 uppercase text-[10px] font-bold mb-3 tracking-widest">Saved Places</h3>
                <div className="bg-slate-100 dark:bg-card-dark rounded-3xl overflow-hidden divide-y divide-slate-200 dark:divide-border-dark">
                    {[
                        { label: 'Home', sub: '123 Accessibility Ave, San Francisco', icon: Home },
                        { label: 'Work', sub: 'Tech Hub Plaza, Ste 400', icon: Briefcase }
                    ].map((place, i) => (
                        <div key={i} className="p-4 flex items-center justify-between active:bg-primary/5 transition-colors cursor-pointer group">
                            <div className="flex items-center gap-4">
                                <div className="size-10 rounded-xl bg-primary/20 text-primary flex items-center justify-center group-active:bg-primary group-active:text-white transition-colors">
                                    <place.icon className="h-5 w-5" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-base leading-tight">{place.label}</h4>
                                    <p className="text-slate-500 text-xs">{place.sub}</p>
                                </div>
                            </div>
                            <ChevronRight className="h-5 w-5 text-slate-400" />
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default SafetyHub;
