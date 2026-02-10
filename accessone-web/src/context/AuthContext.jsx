import { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Check for stored user data on mount
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        } else {
            // Default mock user for demonstration if not logged in
            setUser({
                name: 'Alex Johnson',
                email: 'alex.johnson@example.com',
                dob: '1995-05-15',
                profilePic: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200',
                joinedCommunities: [
                    { id: 1, name: 'Wheelchair Warriors', members: 120, image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=200' },
                    { id: 2, name: 'Tech Accessibility', members: 85, image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=200' }
                ],
                settings: {
                    theme: 'dark',
                    fontSize: 'medium', // small, medium, large, xl
                    buttonSize: 'medium', // small, medium, large
                    highContrast: true
                },
                accessibilityNeeds: {
                    screenReader: true,
                    voiceCommands: false,
                    highContrast: true,
                    motorAssistance: false
                },
                savedLocations: [
                    { name: 'Home', address: '123 Main St, San Francisco, CA', type: 'home' },
                    { name: 'Work', address: '456 Market St, San Francisco, CA', type: 'work' }
                ]
            });
        }
        setLoading(false);
    }, []);

    const login = (userData) => {
        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData));
    };

    const register = (userData) => {
        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData));
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('user');
    };

    const updateProfile = (updates) => {
        const updatedUser = { ...user, ...updates };
        setUser(updatedUser);
        localStorage.setItem('user', JSON.stringify(updatedUser));
    };

    const value = {
        user,
        loading,
        login,
        register,
        logout,
        updateProfile,
        isAuthenticated: !!user
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
