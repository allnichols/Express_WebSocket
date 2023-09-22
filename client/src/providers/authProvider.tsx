import { createContext, useContext, useState } from "react";

interface AuthProvider {
  isAuthenticated: boolean;
  logout(): void;
  login(token: string): void;
  checkIfAuthenticated(): boolean;
}

export const AuthContext = createContext<AuthProvider>({
  isAuthenticated: false,
  logout: () => {},
  login: () => {},
  checkIfAuthenticated: () => false,
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

  const checkIfAuthenticated = () => {
    if (localStorage.getItem("token")) {
      setIsAuthenticated(true);
      return true;
    } else {
      setIsAuthenticated(false);
      return false;
    }
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, logout, login, checkIfAuthenticated }}
    >
      {children}
    </AuthContext.Provider>
  );
};
