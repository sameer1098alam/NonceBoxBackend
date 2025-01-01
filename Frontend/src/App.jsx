import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { PostProvider } from './context/PostContext';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/Registerpage';
import PostsPage from './pages/PostsPage';

const App = () => {
    return (
        <AuthProvider>
            <PostProvider>
                <Router>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/register" element={<RegisterPage />} />
                        <Route path="/posts" element={<PostsPage />} />
                    </Routes>
                </Router>
            </PostProvider>
        </AuthProvider>
    );
};

export default App;
