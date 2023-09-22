import { createContext, useContext, useState } from "react";

interface AuthProvider {
  isAuthenticated: boolean;
  logout(): void;
  login(token: string): void;
}

export const AuthContext = createContext<AuthProvider>({
  isAuthenticated: false,
  logout: () => {},
  login: () => {},
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const logout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
  };

  const login = (token: string) => {
    localStorage.setItem("token", token);
    setIsAuthenticated(true);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, logout, login }}>
      {children}
    </AuthContext.Provider>
  );
};
