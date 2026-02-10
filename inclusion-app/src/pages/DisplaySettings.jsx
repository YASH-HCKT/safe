import { ChevronLeft, Sliders, Box, Type, Contrast, Bold, Zap, RotateCcw } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Header from '../components/Header';

const DisplaySettings = () => {
    const navigate = useNavigate();
    const [textScale, setTextScale] = useState(120);
    const [buttonSize, setButtonSize] = useState(40);
    const [enhancements, setEnhancements] = useState([
        { label: 'High Contrast Mode', sub: 'Increases color separation', icon: Contrast, state: true },
        { label: 'Bold Text', sub: 'Make text easier to read', icon: Bold, state: false },
        { label: 'Reduce Motion', sub: 'Simplify UI animations', icon: Zap, state: false }
    ]);

    const toggleEnhancement = (index) => {
        const newEnhancements = [...enhancements];
        newEnhancements[index].state = !newEnhancements[index].state;
        setEnhancements(newEnhancements);
    };

    return (
        <div className="pb-8 min-h-screen bg-background-light dark:bg-background-dark">
            <header className="flex items-center p-4">
                <button
                    onClick={() => navigate(-1)}
                    className="p-2 rounded-xl bg-primary/10 text-primary"
                >
                    <ChevronLeft className="h-6 w-6" />
                </button>
                <h1 className="flex-1 text-center font-bold text-xl mr-10">Display & Size</h1>
            </header>

            {/* Live Preview */}
            <section className="px-4 mb-8">
                <h3 className="text-slate-500 uppercase text-[10px] font-bold mb-3 tracking-widest px-1">Live Preview</h3>
                <div className="bg-slate-100 dark:bg-card-dark rounded-3xl overflow-hidden border border-slate-200 dark:border-border-dark shadow-sm">
                    <div className="h-40 bg-gradient-to-br from-orange-400/50 via-teal-500/50 to-blue-600/50 blur-xl opacity-50"></div>
                    <div className="p-6 -mt-32 relative">
                        <h4 className="text-2xl font-bold mb-3" style={{ fontSize: `${textScale / 100 * 1.5}rem` }}>How your settings look</h4>
                        <p className="text-slate-500 dark:text-[#91a9ca] mb-6 leading-relaxed" style={{ fontSize: `${textScale / 100 * 1}rem` }}>
                            Adjust the sliders below to change text scale and button size. This preview updates instantly to help you find the best fit.
                        </p>
                        <button
                            className="bg-primary text-white py-4 rounded-xl font-bold text-lg shadow-lg shadow-primary/30 transition-all"
                            style={{ width: `${buttonSize + 60}%`, margin: '0 auto', display: 'block' }}
                        >
                            Sample Button
                        </button>
                    </div>
                </div>
            </section>

            {/* Scaling Controls */}
            <section className="px-4 mb-8">
                <h3 className="text-slate-500 uppercase text-[10px] font-bold mb-3 tracking-widest px-1">Scaling Controls</h3>
                <div className="bg-slate-100 dark:bg-card-dark p-6 rounded-3xl border border-slate-200 dark:border-border-dark space-y-8">
                    <div>
                        <div className="flex justify-between items-center mb-4">
                            <div className="flex items-center gap-2 text-primary">
                                <Type className="h-5 w-5" />
                                <span className="font-bold">Text Scaling</span>
                            </div>
                            <span className="bg-primary/10 text-primary px-2 py-0.5 rounded text-[10px] font-bold">{textScale}%</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="text-xs font-bold text-slate-400">Tt</span>
                            <div className="flex-1 h-2 bg-slate-200 dark:bg-slate-700 rounded-full relative cursor-pointer" onClick={(e) => {
                                const rect = e.currentTarget.getBoundingClientRect();
                                const x = e.clientX - rect.left;
                                setTextScale(Math.round((x / rect.width) * 100 + 80));
                            }}>
                                <div className="absolute h-full bg-primary rounded-full transition-all" style={{ width: `${(textScale - 80) / 100 * 100}%` }}></div>
                                <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 size-6 bg-white rounded-full shadow-lg border-2 border-primary transition-all" style={{ left: `${(textScale - 80) / 100 * 100}%` }}></div>
                            </div>
                            <span className="text-lg font-bold text-slate-400">Tt</span>
                        </div>
                    </div>

                    <div>
                        <div className="flex justify-between items-center mb-4">
                            <div className="flex items-center gap-2 text-primary">
                                <Box className="h-5 w-5" />
                                <span className="font-bold">Button Size</span>
                            </div>
                            <span className="bg-primary/10 text-primary px-2 py-0.5 rounded text-[10px] font-bold">
                                {buttonSize < 30 ? 'Small' : buttonSize < 60 ? 'Medium' : 'Large'}
                            </span>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="size-2 bg-slate-400 rounded-sm"></div>
                            <div className="flex-1 h-2 bg-slate-200 dark:bg-slate-700 rounded-full relative cursor-pointer" onClick={(e) => {
                                const rect = e.currentTarget.getBoundingClientRect();
                                const x = e.clientX - rect.left;
                                setButtonSize(Math.round((x / rect.width) * 100));
                            }}>
                                <div className="absolute h-full bg-primary rounded-full transition-all" style={{ width: `${buttonSize}%` }}></div>
                                <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 size-6 bg-white rounded-full shadow-lg border-2 border-primary transition-all" style={{ left: `${buttonSize}%` }}></div>
                            </div>
                            <div className="size-4 bg-slate-400 rounded-sm"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Visual Enhancements */}
            <section className="px-4 mb-8">
                <h3 className="text-slate-500 uppercase text-[10px] font-bold mb-3 tracking-widest px-1">Visual Enhancements</h3>
                <div className="bg-slate-100 dark:bg-card-dark rounded-3xl border border-slate-200 dark:border-border-dark overflow-hidden">
                    {enhancements.map((item, i) => (
                        <div key={i} className="p-4 flex items-center justify-between border-b border-slate-200 dark:border-border-dark last:border-0" onClick={() => toggleEnhancement(i)}>
                            <div className="flex items-center gap-4">
                                <div className="size-10 rounded-xl bg-slate-200 dark:bg-slate-800 flex items-center justify-center">
                                    <item.icon className="h-5 w-5 text-slate-500" />
                                </div>
                                <div>
                                    <h4 className="font-bold leading-tight">{item.label}</h4>
                                    <p className="text-slate-500 text-[10px]">{item.sub}</p>
                                </div>
                            </div>
                            <div className={`w-12 h-6 rounded-full relative transition-colors ${item.state ? 'bg-primary' : 'bg-slate-300 dark:bg-slate-700'}`}>
                                <div className={`absolute top-1 size-4 bg-white rounded-full transition-all ${item.state ? 'right-1' : 'left-1'}`}></div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <div className="px-4 pb-12">
                <button
                    onClick={() => {
                        setTextScale(120);
                        setButtonSize(40);
                    }}
                    className="w-full h-14 border-2 border-slate-200 dark:border-border-dark rounded-xl font-bold flex items-center justify-center gap-2 active:bg-slate-50 dark:active:bg-slate-800 transition-colors"
                >
                    <RotateCcw className="h-5 w-5" />
                    Reset to Default Settings
                </button>
                <p className="text-center text-[10px] text-slate-500 mt-4 leading-relaxed">
                    Changes are saved automatically and applied system-wide across all accessible apps.
                </p>
            </div>
        </div>
    );
};

export default DisplaySettings;
