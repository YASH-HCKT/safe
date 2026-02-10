import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import MapSection from '../components/MapSection';

const Dashboard = () => {
    const { user } = useAuth();
    const navigate = useNavigate();

    if (!user) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-background-dark pt-24">
                <div className="text-center space-y-6">
                    <span className="material-symbols-outlined text-6xl text-primary">lock</span>
                    <h2 className="text-2xl font-bold text-white">Authentication Required</h2>
                    <p className="text-slate-400">Please log in to access the dashboard</p>
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

    return (
        <div className="relative flex h-screen w-full overflow-hidden bg-background-dark">
            {/* Interactive Map Background */}
            <MapSection showSidebar={true} showNavPanel={true} showSOS={true} />
        </div>
    );
};

export default Dashboard;
