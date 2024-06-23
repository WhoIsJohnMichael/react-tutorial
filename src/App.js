import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Navbar } from './Navbar';
import { Profile } from './pages/Profile';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/about' element={ <About /> } />
          <Route path='/profile/:username' element={ <Profile /> } />
          <Route path='*' element={ <h1>PAGE NOT FOUND</h1> } />
        </Routes>
        <div>
          Footer
        </div>
      </Router>
    </div>
  );
}

export default App;
