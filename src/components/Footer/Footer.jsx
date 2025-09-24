import React from 'react';
import { Link } from 'react-router-dom';
import {
    Facebook,
    Twitter,
    Linkedin,
    Instagram,
    Mail,
    Phone,
    MapPin,
    Heart
} from 'lucide-react';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const footerLinks = [
        { name: 'AI Research', path: '/research' },
        { name: 'Document Analysis', path: '/analysis' },
        { name: 'Case Management', path: '/case-management' },
        { name: 'About Us', path: '/about' },
        { name: 'Pricing', path: '/pricing' },
        { name: 'Contact', path: '/contact' },
        { name: 'Privacy Policy', path: '/privacy' },
        { name: 'Terms of Service', path: '/terms' }
    ];

    const socialLinks = [
        { icon: Facebook, href: 'https://facebook.com', name: 'Facebook' },
        { icon: Twitter, href: 'https://twitter.com', name: 'Twitter' },
        { icon: Linkedin, href: 'https://linkedin.com', name: 'LinkedIn' },
        { icon: Instagram, href: 'https://instagram.com', name: 'Instagram' }
    ];

    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="company-info">  
                  <div className="footer-logo">
                        <div className="footer-brand-text">
                            AI LegalMate
                        </div>
                    </div>                  
                  <p className="company-description">
                        Empowering Indian citizens and legal professionals with advanced AI tools, 
                        making legal processes simpler, faster, and more accessible.
                    </p>

                    <div className="social-links">
                        {socialLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.href}
                                className="social-link"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={link.name}
                            >
                                <link.icon size={20} />
                            </a>
                        ))}
                    </div>
                </div>
                <div className="footer-section">
                    <h4>Quick Links</h4>
                    <ul className="footer-links">
                        {footerLinks.map((link, index) => (
                            <li key={index}>
                                <Link to={link.path}>{link.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="contact-info">
                    <h4>Contact Us</h4>
                    <div className="contact-items">
                        <div className="contact-item">
                            <MapPin size={18} />
                            <span>
                                New Delhi, India
                            </span>
                        </div>
                        <div className="contact-item">
                            <Phone size={18} />
                            <span>+91 98765 43210</span>
                        </div>
                        <div className="contact-item">
                            <Mail size={18} />
                            <span>contact@ailegalmate.in</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="footer-bottom-content">
                    <div className="copyright">
                        <p>
                            © {currentYear} AI LegalMate. All rights reserved.
                        </p>
                    </div>
                    <div className="made-with-love">
                        <span>Made for the Indian Legal Community</span>
                        <Heart size={16} />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;