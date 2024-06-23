import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home';
import { Menu } from './pages/Menu';
import { Contact } from './pages/Contact';
import { Profile } from './pages/Profile';
import { Navbar } from './Navbar';
import { useState, createContext } from 'react';

export const AppContext = createContext();

function App() {

  const [username, setUsername] = useState("KribbitCode");
  const [name, setName] = useState("Kribbit Code");

  return (
    <div className="App">
      <AppContext.Provider value={{username, setUsername, name, setName}}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/menu" element={<Menu />}/>
          <Route path="/profile" element={<Profile   />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="*" element={<h1>404 Not Found</h1>}/>
        </Routes>
      </Router>
      </AppContext.Provider>
    </div>
  );
}

export default App;
