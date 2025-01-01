import React, { useState } from "react";
import { registerUser } from "../../services/authService";

function Register() {
    const [userData, setUserData] = useState({ name: "", email: "", password: "" });

    const handleSubmit = async (e) => {
        e.preventDefault();
        await registerUser(userData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Name"
                value={userData.name}
                onChange={(e) => setUserData({ ...userData, name: e.target.value })}
            />
            <input
                type="email"
                placeholder="Email"
                value={userData.email}
                onChange={(e) => setUserData({ ...userData, email: e.target.value })}
            />
            <input
                type="password"
                placeholder="Password"
                value={userData.password}
                onChange={(e) => setUserData({ ...userData, password: e.target.value })}
            />
            <button type="submit">Register</button>
        </form>
    );
}

export default Register;
