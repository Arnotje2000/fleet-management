import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    // Check local storage for authentication status
    const storedAuth = localStorage.getItem('isAuthenticated');
    return storedAuth === 'true'; // Convert string to boolean
  });

  const login = (username, password) => {
    // Hardcoded credentials for demonstration
    if (username === 'admin' && password === 'password') {
      setIsAuthenticated(true);
      localStorage.setItem('isAuthenticated', 'true'); // Store in local storage
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('isAuthenticated'); // Remove from local storage
  };

  useEffect(() => {
    // Optional: Sync state with local storage on change
    localStorage.setItem('isAuthenticated', isAuthenticated);
  }, [isAuthenticated]);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};