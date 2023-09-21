import { createContext, useContext, useEffect, useState } from 'react';

interface AuthProvider {
    isAuthenticated: boolean;
    logout(): void;
    login(): void;
}


export const AuthContext = createContext<AuthProvider>({
    isAuthenticated: false,
    logout: () => {},
    login: () => {},
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        
    }, []);

    const logout = () => {
        setIsAuthenticated(false);
    };

    const login = () => {
        setIsAuthenticated(true);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, logout, login }}>
            {children}
        </AuthContext.Provider>
    );
}





