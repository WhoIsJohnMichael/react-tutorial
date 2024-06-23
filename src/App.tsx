import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Login } from './pages/Login';
import { Navbar } from './Navbar';
import { Provider } from 'react-redux';
import { store } from './store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>  
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
