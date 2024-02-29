import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
    return (
        <div>
            <Link to="/movies">Movies </Link>
            <Link to="/admin">Admin</Link>
        </div>
    );
};

export default Header;
