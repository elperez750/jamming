"use client"

import React, { createContext, useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

type User = {
  name: string;
  accessToken: string;
};

type AuthContextType = {
  user: User | null;
  accessToken: string | null;
  loginWithSpotify: (accessToken: string) => Promise<void>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

type AuthProviderProps = {
  children: React.ReactNode;
};

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const loginWithSpotify = async (accessToken: string) => {
    try {
      const response = await fetch('https://api.spotify.com/v1/me', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      const data = await response.json();
      const userData = { name: data.display_name, accessToken };
      setUser(userData);
      localStorage.setItem('user', JSON.stringify(userData));
      router.push('/');
    } catch (error) {
      console.error('Failed to fetch user data:', error);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    router.push('/login');
  };

  const accessToken = user?.accessToken || null;

  return (
    <AuthContext.Provider value={{ user, accessToken, loginWithSpotify, logout }}>
      {children}
    </AuthContext.Provider>
  );
};