import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const API = process.env.NEXT_PUBLIC_API || "http://localhost:3000";

interface AuthContextType {
  isAuthenticated: boolean | null;
  login: (login_id: string, password: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  const validate = async () => {
    const token = localStorage.getItem("access_token");
    if (!token) {
      setIsAuthenticated(false);
      return;
    }
    try {
      await axios.get(`${API}/auth/validate`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setIsAuthenticated(true);
    } catch {
      setIsAuthenticated(false);
    }
  };

  const login = async (login_id: string, password: string) => {
    try {
      const res = await axios.post(`${API}/auth/login`, {
        login_id,
        password,
      });
      const { access_token, refresh_token } = res.data.data;
      localStorage.setItem("access_token", access_token);
      localStorage.setItem("refresh_token", refresh_token);
      setIsAuthenticated(true);
    } catch {
      alert("로그인 실패");
      setIsAuthenticated(false);
    }
  };

  useEffect(() => {
    validate();
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};