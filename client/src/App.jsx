import './App.css';
import Nav from "./components/navigation.jsx"
import Profile from "./components/profile.jsx"
import Messages from "./components/messages.jsx"
import { Routes, Route } from 'react-router-dom';


const App = () => {
  return (
    <>
    <Nav/>
  <div>
    <Routes>
        <Route path = "/profile" exact component={Profile} />
        <Route path = "/profile" exact component={Messages} />
    </Routes>
  </div>
  
  </>
  )
}

export default App;
