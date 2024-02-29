import React, { FC, useState } from "react";
import { loginUser } from "../../store/login/loginSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AppDispatch } from "../../store";
import { isLoggedInSelector } from "../../store/login/loginSelector";

const Login: FC = () => {
    const dispatch: AppDispatch = useDispatch();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ username: "", password: "" });
    const [error, setError] = useState<string | null>(null);
    const isLoggedIn = useSelector(isLoggedInSelector);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const { username, password } = formData;
        try {
            dispatch(loginUser({ username, password }));
            setError(null);
            isLoggedIn && navigate("/home");
        } catch (err) {
            setError("Invalid username or password");
        }
    };

    return (
        <div>
            <h2>Sign In</h2>

            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Sign In</button>
            </form>
        </div>
    );
};

export default Login;
