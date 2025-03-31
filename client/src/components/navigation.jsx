import "./navigation.css"
import React from "react";
import { Link, Outlet } from 'react-router-dom';

function Nav() {
    return (
        <nav>
            <ul id="nav-bar">
                <li id="signup-tab"><Link to="/signup">Sign Up</Link></li>
                <li id="artist-tab"><Link to="/profile">Artist Profile</Link></li>
                <li id="connect-tab"><Link to="/connect">Connect</Link></li>
                <li id="friends-tab"><Link to="/friends">Friends</Link></li>
                <li id="messages-tab"><Link to="/messages">Messages</Link></li>
            </ul>
            <Outlet />
        </nav>
    )
}

export default Nav;
