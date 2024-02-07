import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../login";
import Home from "../home";

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>} />
                <Route path="/signin" element={<Login/>} />
                <Route path="/home" element={<Home/>} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
