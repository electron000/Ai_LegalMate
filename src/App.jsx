import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/HomePage/HomePage';
import LegalMatePricing from './pages/PricingPage/LegalMatePricing'; // 1. Import the pricing page component
import './styles/index.css';

function App() {
  return (
    <Router>
      <div
        className="app"
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          margin: 0,
          padding: 0
        }}
      >
        <Navbar />
        <main
          className="main-content"
          style={{
            flex: '1 0 auto',
            margin: 0,
            padding: 0
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            {/* 2. Add the new route for the pricing page */}
            <Route path="/pricing" element={<LegalMatePricing />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
