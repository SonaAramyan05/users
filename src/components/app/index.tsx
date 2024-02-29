import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../login";
import Home from "../home";
import { useSelector } from "react-redux";
import { isLoggedInSelector } from "../../store/login/loginSelector";
import Chat from "../Chat";

const App: React.FC = () => {
    const isLoggedIn = useSelector(isLoggedInSelector);
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/signin" element={<Login />} />
                {/* <Route
                    path="/home"
                    element={isLoggedIn ? <Home /> : <div>error</div>}
                /> */}
                <Route path="/home" element={<Home />} />
                <Route path="/chat" element={<Chat />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
