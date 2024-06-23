import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Home } from './pages/Home'
import { Profile } from './pages/Profile'
import { Contact } from './pages/Contact'
import { Navbar } from './Navbar';

function App() {
  const queryClient = new QueryClient();

  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<p>Not Found</p>} />
          </Routes>
        </Router>
      </QueryClientProvider>
    </div>
  );
}

export default App;
