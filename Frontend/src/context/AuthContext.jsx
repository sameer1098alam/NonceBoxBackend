import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(localStorage.getItem('token'));

    useEffect(() => {
        if (token) {
            axios.defaults.headers['Authorization'] = `Bearer ${token}`;
            // You can add code here to get user data if needed
        }
    }, [token]);

    const login = async (email, password) => {
        try {
            const { data } = await axios.post('/api/auth/login', { email, password });
            setUser(data.user);
            setToken(data.token);
            localStorage.setItem('token', data.token); // Store token in localStorage
        } catch (error) {
            console.error("Login failed:", error);
            throw error;
        }
    };

    const register = async (name, email, password) => {
        try {
            const { data } = await axios.post('/api/auth/register', { name, email, password });
            setUser(data.user);
            setToken(data.token);
            localStorage.setItem('token', data.token); // Store token in localStorage
        } catch (error) {
            console.error("Registration failed:", error);
            throw error;
        }
    };

    const logout = () => {
        setUser(null);
        setToken(null);
        localStorage.removeItem('token'); // Remove token on logout
    };

    return (
        <AuthContext.Provider value={{ user, token, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };
