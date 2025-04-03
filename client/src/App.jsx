import './App.css';
import { Routes, Route } from 'react-router-dom';
import Signup from "./components/signup.jsx"
import Nav from "./components/navigation.jsx"
import Profile from "./components/profile.jsx"
import Connect from "./components/connect.jsx"
import Friends from "./components/friends.jsx"
import Messages from "./components/messages.jsx"





const App = () => {
  return (
    <>
    <Nav/>
  <div>
    <Routes>
        <Route path = "/profile" element={<Profile/>} />
        <Route path = "/connect" element={<Connect/>} />
        <Route path = "/friends" element={<Friends/>} />
        <Route path = "/messages" element={<Messages/>} />
        <Route path = "/signup" element={<Signup/>} />
    </Routes>
  </div>
  
  </>
  )
}

export default App;
