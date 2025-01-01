import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

function Login() {
    const { login } = useContext(AuthContext);
    const [credentials, setCredentials] = useState({ email: "", password: "" });

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(credentials);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="email"
                placeholder="Email"
                value={credentials.email}
                onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
            />
            <input
                type="password"
                placeholder="Password"
                value={credentials.password}
                onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
            />
            <button type="submit">Login</button>
        </form>
    );
}

export default Login;
