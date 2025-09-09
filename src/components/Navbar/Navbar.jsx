import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../../assets/logo.png'; // Import the logo
import './Navbar.css';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navLinks = [
    { label: 'Home', url: '/' },
    { label: 'Tools', url: '/tools' },
    { label: 'Services', url: '/services' },
    { label: 'Blogs', url: '/blogs' },
    { label: 'Pricing', url: '/pricing' },
    { label: 'Contact', url: '/contact' }
  ];

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };

    if (mobileMenuOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.classList.add('mobile-menu-open');
    } else {
      document.body.classList.remove('mobile-menu-open');
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.classList.remove('mobile-menu-open');
    };
  }, [mobileMenuOpen]);

  const handleMobileNavClick = (url) => {
    setMobileMenuOpen(false);
    navigate(url);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
        <img src={logo} alt="AI LegalMate Logo" className="brand-logo" />
        <span className="brand-text">AI LegalMate</span>
      </Link>

      {/* Desktop Navigation */}
      <div className="desktop-nav">
        {navLinks.map((link, index) => (
          <Link key={index} to={link.url} className="nav-link">
            {link.label}
          </Link>
        ))}
      </div>

      {/* Right Actions */}
      <div className="navbar-actions">
        {/* Desktop Auth */}
        <div className="desktop-auth">
          <button onClick={() => navigate('/auth')} className="login-btn">
            Login
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="mobile-menu-btn"
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div 
          className={`mobile-overlay ${mobileMenuOpen ? 'active' : ''}`}
          onClick={closeMobileMenu}
        />
      )}

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'active' : ''}`}>
        <div className="mobile-nav-links">
          {navLinks.map((link, index) => (
            <button
              key={index}
              onClick={() => handleMobileNavClick(link.url)}
              className="mobile-nav-link"
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="mobile-auth">
          <div className="mobile-auth-buttons">
            <button
              onClick={() => handleMobileNavClick('/auth')}
              className="mobile-login-btn"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;