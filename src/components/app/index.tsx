import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Admin from "../admin";
import Movies from "../movies";
import Header from "../Header";

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Movies />} />
                <Route path="/movies" element={<Movies />} />
                <Route path="/admin" element={<Admin />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
