import './App.css';
import { Route, Routes } from "react-router-dom";
import Nav from './components/nav/Nav';
import Home from './pages/home/Home';
import SideMenu from './components/SideMenu/SideMenu';

function App() {
  const URL = "http://localhost:3002/";
  return (
    <div>
            <Nav />
            <Home />
      {/* <Context.Provider value={{ userCredentials, setUserCredentials }}> */}

      <Routes>
        <Route exact path="/home" element={<Home URL={URL} />} />
      </Routes>
    </div>
  );
}

export default App;
