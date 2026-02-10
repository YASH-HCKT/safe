import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [accessibilityNeeds, setAccessibilityNeeds] = useState({
        screenReader: false,
        voiceCommands: false,
        highContrast: false,
        motorAssistance: false
    });
    const [showAadhaarModal, setShowAadhaarModal] = useState(false);
    const [aadhaarNumber, setAadhaarNumber] = useState('');
    const [otp, setOtp] = useState('');
    const [step, setStep] = useState(1);
    const { register } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            alert('Passwords do not match!');
            return;
        }
        // Mock registration - in real app, this would call an API
        const userData = {
            id: Date.now().toString(),
            name: formData.name,
            email: formData.email,
            accessibilityNeeds,
            savedLocations: []
        };
        register(userData);
        navigate('/dashboard');
    };

    const toggleNeed = (key) => {
        setAccessibilityNeeds(prev => ({ ...prev, [key]: !prev[key] }));
    };

    const handleAadhaarSubmit = (e) => {
        e.preventDefault();
        if (step === 1) {
            if (aadhaarNumber.length === 12) {
                setStep(2);
            } else {
                alert('Please enter a valid 12-digit Aadhaar number');
            }
        } else {
            if (otp === '123456') { // Mock OTP
                const userData = {
                    id: 'aadhar-' + aadhaarNumber.slice(-4),
                    name: 'Aadhaar User',
                    email: 'verified@aadhaar.gov.in',
                    accessibilityNeeds,
                    savedLocations: []
                };
                register(userData);
                navigate('/dashboard');
            } else {
                alert('Invalid OTP. Hint: Use 123456');
            }
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-background-dark px-6 py-24">
            <div className="w-full max-w-2xl">
                <div className="glass-panel p-8 rounded-2xl">
                    {/* Header */}
                    <div className="text-center mb-8">
                        <div className="inline-flex items-center gap-2 mb-4">
                            <div className="bg-primary p-2 rounded-lg">
                                <span className="material-symbols-outlined text-white text-2xl">security</span>
                            </div>
                        </div>
                        <h2 className="text-3xl font-black mb-2">Create Your Account</h2>
                        <p className="text-slate-400">Join AccessOne and navigate the world safely</p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-bold mb-2">Full Name</label>
                                <input
                                    type="text"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-slate-500 focus:ring-2 focus:ring-primary outline-none transition-all"
                                    placeholder="John Doe"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-bold mb-2">Email Address</label>
                                <input
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-slate-500 focus:ring-2 focus:ring-primary outline-none transition-all"
                                    placeholder="you@example.com"
                                    required
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-bold mb-2">Password</label>
                                <input
                                    type="password"
                                    value={formData.password}
                                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-slate-500 focus:ring-2 focus:ring-primary outline-none transition-all"
                                    placeholder="••••••••"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-bold mb-2">Confirm Password</label>
                                <input
                                    type="password"
                                    value={formData.confirmPassword}
                                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-slate-500 focus:ring-2 focus:ring-primary outline-none transition-all"
                                    placeholder="••••••••"
                                    required
                                />
                            </div>
                        </div>

                        {/* Accessibility Needs */}
                        <div>
                            <label className="block text-sm font-bold mb-4">Select Your Accessibility Needs</label>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {[
                                    { key: 'screenReader', icon: 'volume_up', label: 'Screen Reader' },
                                    { key: 'voiceCommands', icon: 'mic', label: 'Voice Commands' },
                                    { key: 'highContrast', icon: 'contrast', label: 'High Contrast' },
                                    { key: 'motorAssistance', icon: 'accessible', label: 'Motor Assistance' }
                                ].map((item) => (
                                    <div
                                        key={item.key}
                                        onClick={() => toggleNeed(item.key)}
                                        className={`flex items-center gap-3 p-4 rounded-lg border cursor-pointer transition-all ${accessibilityNeeds[item.key]
                                            ? 'bg-primary/10 border-primary/30'
                                            : 'bg-white/5 border-white/10 hover:border-white/20'
                                            }`}
                                    >
                                        <div className={`size-10 rounded-lg flex items-center justify-center ${accessibilityNeeds[item.key] ? 'bg-primary/20' : 'bg-slate-800'
                                            }`}>
                                            <span className={`material-symbols-outlined ${accessibilityNeeds[item.key] ? 'text-primary' : 'text-slate-400'
                                                }`}>
                                                {item.icon}
                                            </span>
                                        </div>
                                        <span className="font-bold text-sm">{item.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex items-start gap-2">
                            <input
                                type="checkbox"
                                id="terms"
                                className="w-4 h-4 mt-1 rounded border-white/10 bg-white/5 text-primary focus:ring-primary"
                                required
                            />
                            <label htmlFor="terms" className="text-sm text-slate-400">
                                I agree to the{' '}
                                <a href="#" className="text-primary hover:text-primary/80 transition-colors">
                                    Terms of Service
                                </a>{' '}
                                and{' '}
                                <a href="#" className="text-primary hover:text-primary/80 transition-colors">
                                    Privacy Policy
                                </a>
                            </label>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3 rounded-lg transition-all shadow-lg shadow-primary/20"
                        >
                            Create Account
                        </button>
                    </form>

                    {/* Divider */}
                    <div className="relative my-8">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-white/10" />
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-4 bg-card-dark text-slate-400">Or sign up with</span>
                        </div>
                    </div>

                    {/* Social Signup */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <button
                            onClick={() => {
                                // Mock Google signup
                                const userData = {
                                    id: Date.now().toString(),
                                    name: 'Google User',
                                    email: 'user@gmail.com',
                                    accessibilityNeeds: accessibilityNeeds,
                                    savedLocations: []
                                };
                                register(userData);
                                navigate('/dashboard');
                            }}
                            className="flex items-center justify-center gap-3 bg-white hover:bg-gray-100 text-gray-900 font-bold py-3 rounded-lg transition-all border border-white/10 text-sm"
                        >
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                            </svg>
                            <span>Google</span>
                        </button>
                        <button
                            onClick={() => setShowAadhaarModal(true)}
                            className="flex items-center justify-center gap-3 bg-primary/10 hover:bg-primary/20 text-primary font-bold py-3 rounded-lg transition-all border border-primary/30 text-sm"
                        >
                            <span className="material-symbols-outlined text-xl">fingerprint</span>
                            <span>Aadhaar</span>
                        </button>
                    </div>

                    {/* Aadhaar Modal */}
                    {showAadhaarModal && (
                        <div className="fixed inset-0 z-50 flex items-center justify-center px-6">
                            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setShowAadhaarModal(false)} />
                            <div className="relative glass-panel w-full max-w-sm p-8 rounded-2xl animate-in fade-in zoom-in duration-300">
                                <button
                                    onClick={() => setShowAadhaarModal(false)}
                                    className="absolute top-4 right-4 text-slate-400 hover:text-white"
                                >
                                    <span className="material-symbols-outlined">close</span>
                                </button>

                                <div className="text-center mb-6">
                                    <div className="size-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <span className="material-symbols-outlined text-primary text-3xl">fingerprint</span>
                                    </div>
                                    <h3 className="text-xl font-bold">Aadhaar Registration</h3>
                                    <p className="text-slate-400 text-sm mt-1">Verify identity with Aadhaar</p>
                                </div>

                                <form onSubmit={handleAadhaarSubmit} className="space-y-4">
                                    {step === 1 ? (
                                        <div>
                                            <label className="block text-sm font-bold mb-2">Aadhaar Number</label>
                                            <input
                                                type="text"
                                                maxLength="12"
                                                value={aadhaarNumber}
                                                onChange={(e) => setAadhaarNumber(e.target.value.replace(/\D/g, ''))}
                                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-slate-500 focus:ring-2 focus:ring-primary outline-none transition-all text-center tracking-[0.2em] font-mono"
                                                placeholder="0000 0000 0000"
                                                required
                                            />
                                        </div>
                                    ) : (
                                        <div>
                                            <label className="block text-sm font-bold mb-2">Enter 6-digit OTP</label>
                                            <input
                                                type="text"
                                                maxLength="6"
                                                value={otp}
                                                onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
                                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-slate-500 focus:ring-2 focus:ring-primary outline-none transition-all text-center tracking-[0.5em] font-mono"
                                                placeholder="000000"
                                                required
                                            />
                                            <p className="text-xs text-slate-500 mt-2 text-center">OTP sent to your Aadhaar linked mobile number</p>
                                        </div>
                                    )}

                                    <button
                                        type="submit"
                                        className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3 rounded-lg transition-all"
                                    >
                                        {step === 1 ? 'Get OTP' : 'Verify & Register'}
                                    </button>
                                </form>
                            </div>
                        </div>
                    )}

                    {/* Sign In Link */}
                    <p className="mt-8 text-center text-sm text-slate-400">
                        Already have an account?{' '}
                        <Link to="/login" className="text-primary hover:text-primary/80 font-bold transition-colors">
                            Sign in
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;
