import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

// Page Imports
import Home from './pages/HomePage/HomePage';

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
        <ScrollToTop />
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
            {/* We are only rendering the Home page for now */}
            <Route path="/" element={<Home />} />
            {/* You can add your other routes back here as you rebuild them */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
