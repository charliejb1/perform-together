import React from "react";
import { Link, Outlet } from 'react-router-dom';

function Nav() {
    return (
        <nav>
            <ul id="nav-bar">
                <li id="signup-button"><Link to="/signup">Sign Up</Link></li>
                <li id="artist-button"><Link to="/profile">Artist Profile</Link></li>
                <li id="connect-button"><Link to="/connect">Connect</Link></li>
                <li id="friends-button"><Link to="/friends">Friends</Link></li>
                <li id="messages-button"><Link to="/messages">Messages</Link></li>
            </ul>
            <Outlet />
        </nav>
    )
}

export default Nav;
