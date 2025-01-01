import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Welcome to the Application</h1>
            <p>Please log in or register to continue.</p>
            <div>
                <Link to="/login" style={{ margin: '10px', textDecoration: 'none' }}>
                    <button style={{ padding: '10px 20px', fontSize: '16px' }}>Login</button>
                </Link>
                <Link to="/register" style={{ margin: '10px', textDecoration: 'none' }}>
                    <button style={{ padding: '10px 20px', fontSize: '16px' }}>Register</button>
                </Link>
            </div>
        </div>
    );
};

export default Home;
