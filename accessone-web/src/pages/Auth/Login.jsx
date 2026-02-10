import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showAadhaarModal, setShowAadhaarModal] = useState(false);
    const [aadhaarNumber, setAadhaarNumber] = useState('');
    const [otp, setOtp] = useState('');
    const [step, setStep] = useState(1); // 1: Number, 2: OTP
    const { login } = useAuth();
    const navigate = useNavigate();

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
                    accessibilityNeeds: {
                        screenReader: false,
                        voiceCommands: false,
                        highContrast: false,
                        motorAssistance: false
                    },
                    savedLocations: []
                };
                login(userData);
                navigate('/dashboard');
            } else {
                alert('Invalid OTP. Hint: Use 123456');
            }
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Mock login - in real app, this would call an API
        const userData = {
            id: '1',
            name: email.split('@')[0],
            email: email,
            accessibilityNeeds: {
                screenReader: false,
                voiceCommands: false,
                highContrast: false,
                motorAssistance: false
            },
            savedLocations: []
        };
        login(userData);
        navigate('/dashboard');
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-background-dark px-6 pt-24">
            <div className="w-full max-w-md">
                <div className="glass-panel p-8 rounded-2xl">
                    {/* Header */}
                    <div className="text-center mb-8">
                        <div className="inline-flex items-center gap-2 mb-4">
                            <div className="bg-primary p-2 rounded-lg">
                                <span className="material-symbols-outlined text-white text-2xl">security</span>
                            </div>
                        </div>
                        <h2 className="text-3xl font-black mb-2">Welcome Back</h2>
                        <p className="text-slate-400">Sign in to access your dashboard</p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-sm font-bold mb-2">Email Address</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-slate-500 focus:ring-2 focus:ring-primary outline-none transition-all"
                                placeholder="you@example.com"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-bold mb-2">Password</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-slate-500 focus:ring-2 focus:ring-primary outline-none transition-all"
                                placeholder="••••••••"
                                required
                            />
                        </div>

                        <div className="flex items-center justify-between">
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input type="checkbox" className="w-4 h-4 rounded border-white/10 bg-white/5 text-primary focus:ring-primary" />
                                <span className="text-sm text-slate-400">Remember me</span>
                            </label>
                            <a href="#" className="text-sm text-primary hover:text-primary/80 transition-colors">
                                Forgot password?
                            </a>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3 rounded-lg transition-all shadow-lg shadow-primary/20"
                        >
                            Sign In
                        </button>
                    </form>

                    {/* Divider */}
                    <div className="relative my-8">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-white/10" />
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-4 bg-card-dark text-slate-400">Or continue with</span>
                        </div>
                    </div>

                    {/* Social Login */}
                    <div className="grid grid-cols-2 gap-4">
                        <button className="flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg py-3 transition-all">
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                            </svg>
                            <span className="text-sm font-medium">Google</span>
                        </button>
                        <button
                            onClick={() => setShowAadhaarModal(true)}
                            className="flex items-center justify-center gap-2 bg-primary/10 hover:bg-primary/20 border border-primary/30 rounded-lg py-3 transition-all text-primary"
                        >
                            <span className="material-symbols-outlined text-xl">fingerprint</span>
                            <span className="text-sm font-bold">Aadhaar</span>
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
                                    <h3 className="text-xl font-bold">Aadhaar Verification</h3>
                                    <p className="text-slate-400 text-sm mt-1">Secure biometric authentication</p>
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
                                        {step === 1 ? 'Get OTP' : 'Verify & Login'}
                                    </button>
                                </form>
                            </div>
                        </div>
                    )}

                    {/* Sign Up Link */}
                    <p className="mt-8 text-center text-sm text-slate-400">
                        Don't have an account?{' '}
                        <Link to="/register" className="text-primary hover:text-primary/80 font-bold transition-colors">
                            Sign up
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
