import React from "react";
import { Link, Outlet } from 'react-router-dom';

function Nav() {
    return (
        <nav>
            <ul>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/messages">Messages</Link></li>
            </ul>
            <Outlet />
        </nav>
    )
}

export default Nav;
