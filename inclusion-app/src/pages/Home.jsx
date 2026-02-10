import Header from '../components/Header';
import { Eye, Ear, Hand, Brain, Activity, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ModeCard = ({ icon: Icon, title, description, onClick }) => (
    <div
        onClick={onClick}
        className="flex flex-1 gap-4 rounded-xl border border-slate-200 dark:border-border-dark bg-white dark:bg-card-dark p-5 flex-col shadow-sm active:bg-primary/10 transition-all cursor-pointer group active:scale-[0.98]"
    >
        <div className="flex size-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-active:bg-primary group-active:text-white transition-colors">
            <Icon className="h-7 w-7" />
        </div>
        <div className="flex flex-col gap-1">
            <h3 className="text-slate-900 dark:text-white text-lg font-bold leading-tight">{title}</h3>
            <p className="text-slate-500 dark:text-[#91a9ca] text-sm font-normal leading-snug">{description}</p>
        </div>
    </div>
);

const HighlightCard = ({ image, category, title, description }) => (
    <div className="flex-none w-[280px] snap-start bg-white dark:bg-card-dark rounded-xl overflow-hidden border border-slate-200 dark:border-border-dark shadow-sm">
        <div className="h-40 bg-center bg-no-repeat bg-cover" style={{ backgroundImage: `url(${image})` }}></div>
        <div className="p-4">
            <span className={`inline-block px-2 py-1 rounded text-[10px] font-bold uppercase mb-2 ${category === 'Community' ? 'bg-primary/10 text-primary' :
                category === 'Tech Tips' ? 'bg-green-500/10 text-green-500' : 'bg-orange-500/10 text-orange-500'
                }`}>
                {category}
            </span>
            <h4 className="text-slate-900 dark:text-white font-bold text-base leading-snug mb-1">{title}</h4>
            <p className="text-slate-500 dark:text-[#91a9ca] text-xs">{description}</p>
        </div>
    </div>
);

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="pb-8">
            <Header title="Alex Johnson" subtitle="Welcome back" />

            <section className="px-4 pt-6 pb-2">
                <h1 className="text-slate-900 dark:text-white tracking-tight text-3xl font-extrabold leading-tight">Choose your mode</h1>
                <p className="text-slate-500 dark:text-[#91a9ca] mt-1 text-base">Select the assistance profile that fits your needs best today.</p>
            </section>

            <section className="grid grid-cols-2 gap-4 p-4">
                <ModeCard
                    onClick={() => navigate('/community')}
                    icon={Eye} title="Visual" description="Screen reader & high contrast"
                />
                <ModeCard
                    onClick={() => navigate('/community')}
                    icon={Ear} title="Auditory" description="Live captions & haptic alerts"
                />
                <ModeCard
                    onClick={() => navigate('/community')}
                    icon={Hand} title="Motor" description="Voice control & big targets"
                />
                <ModeCard
                    onClick={() => navigate('/community')}
                    icon={Brain} title="Cognitive" description="Focus mode & simple terms"
                />
            </section>

            <section className="px-4 py-4">
                <div className="flex items-center justify-between bg-red-500/10 border border-red-500/20 p-5 rounded-xl">
                    <div className="flex items-center gap-4">
                        <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-red-500 text-white animate-pulse">
                            <Activity className="h-6 w-6" />
                        </div>
                        <div>
                            <h3 className="text-slate-900 dark:text-white font-bold text-lg">Emergency Help</h3>
                            <p className="text-slate-500 dark:text-[#91a9ca] text-sm">Instant support and SOS</p>
                        </div>
                    </div>
                    <button
                        onClick={() => alert('SOS Signal Sent!')}
                        className="bg-red-500 text-white px-6 py-3 rounded-lg font-bold text-sm shadow-lg shadow-red-500/30 active:scale-95 transition-transform"
                    >
                        SOS
                    </button>
                </div>
            </section>

            <section className="pt-4">
                <div className="flex items-center justify-between px-4 pb-3">
                    <h2 className="text-slate-900 dark:text-white text-xl font-bold leading-tight tracking-tight">Daily Highlights</h2>
                    <button
                        onClick={() => navigate('/map')}
                        className="text-primary text-sm font-semibold flex items-center gap-1"
                    >
                        See all <ArrowRight className="h-3 w-3" />
                    </button>
                </div>
                <div className="flex overflow-x-auto gap-4 px-4 pb-4 snap-x no-scrollbar">
                    <HighlightCard
                        image="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=400"
                        category="Community"
                        title="Local Accessibility Meetup"
                        description="Join us this Saturday for tech workshops."
                    />
                    <HighlightCard
                        image="https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=400"
                        category="Tech Tips"
                        title="Braille Tech Evolution"
                        description="Exploring the latest in digital tactile displays."
                    />
                </div>
            </section>
        </div>
    );
};

export default Home;
