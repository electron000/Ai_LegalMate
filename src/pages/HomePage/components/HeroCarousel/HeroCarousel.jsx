import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ChevronLeft,
  ChevronRight,
  Scale,
  FileText,
  PenSquare,
  Bot,
  Briefcase,
  ShieldCheck,
  Users
} from 'lucide-react';
import './HeroCarousel.css';

const heroCarouselItems = [
    {
        type: 'Tool',
        title: 'AI Legal Research',
        icon: <Scale size={40} />,
        highlights: ['Case Law', 'Statute Analysis'],
        path: '/research',
        status: 'Active'
    },
    {
        type: 'Tool',
        title: 'Contract Analysis',
        icon: <FileText size={40} />,
        highlights: ['Risk Detection', 'Clause Summarization'],
        path: '/analysis',
        status: 'Active'
    },
    {
        type: 'Service',
        title: 'Legal Document Drafting',
        icon: <PenSquare size={40} />,
        highlights: ['Notices', 'Affidavits', 'Agreements'],
        path: '/drafting',
        status: 'Active'
    },
    {
        type: 'Service',
        title: 'Lawyer Connect',
        icon: <Users size={40} />,
        highlights: ['Verified Professionals', 'Consultations'],
        path: '/lawyers',
        status: 'Active'
    },
    {
        type: 'Tool',
        title: 'Legal Chatbot Assistant',
        icon: <Bot size={40} />,
        highlights: ['24/7 Support', 'Legal Queries'],
        path: '/assistant',
        status: 'Active'
    },
    {
        type: 'Service',
        title: 'Case Management Platform',
        icon: <Briefcase size={40} />,
        highlights: ['Deadline Tracking', 'Client Organizer'],
        path: '#',
        status: 'Coming Soon'
    },
    {
        type: 'Service',
        title: 'E-Filing & Compliance',
        icon: <ShieldCheck size={40} />,
        highlights: ['Court Portals', 'Regulatory Adherence'],
        path: '#',
        status: 'Coming Soon'
    }
];

const HeroCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const navigate = useNavigate();
    const slideIntervalRef = useRef(null);
    const totalItems = heroCarouselItems.length;

    const resetInterval = useCallback(() => {
        if (slideIntervalRef.current) clearInterval(slideIntervalRef.current);
        slideIntervalRef.current = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % totalItems);
        }, 6000);
    }, [totalItems]);

    const nextSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % totalItems);
        resetInterval();
    }, [totalItems, resetInterval]);

    const prevSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems);
        resetInterval();
    }, [totalItems, resetInterval]);

    useEffect(() => {
        resetInterval();
        return () => clearInterval(slideIntervalRef.current);
    }, [resetInterval]);

    const getCardStyle = (index) => {
        const offset = (index - currentIndex + totalItems) % totalItems;
        const isCenter = offset === 0;
        const isLeft = offset === totalItems - 1;
        const isRight = offset === 1;

        let transform = 'translate(-50%, -50%) ';
        let opacity = 0;
        let zIndex = 0;
        let filter = 'blur(3px)';

        if (isCenter) {
            transform += 'translateX(0) translateZ(80px) scale(1)';
            opacity = 1;
            zIndex = totalItems;
            filter = 'blur(0px)';
        } else if (isLeft) {
            transform += 'translateX(-380px) translateZ(-150px) rotateY(15deg) scale(0.8)';
            opacity = 0.4;
            zIndex = totalItems - 1;
        } else if (isRight) {
            transform += 'translateX(380px) translateZ(-150px) rotateY(-15deg) scale(0.8)';
            opacity = 0.4;
            zIndex = totalItems - 1;
        } else {
            transform += `translateX(${offset < totalItems / 2 ? -500 : 500}px) translateZ(-400px) scale(0.5)`;
            opacity = 0;
        }
        return { transform, opacity, zIndex, filter };
    };

    return (
        <div className="hero-carousel-wrapper">
            <h2 className="hero-carousel-main-heading">Our Tools & Services</h2>
            <div className="hero-carousel-container">
                <button className="hero-carousel-nav-button left" onClick={prevSlide}>
                    <ChevronLeft size={24} />
                </button>
                <div className="hero-carousel-track">
                    {heroCarouselItems.map((item, index) => {
                        const isCenter = index === currentIndex;
                        const isDisabled = item.status === 'Coming Soon';
                        const buttonText = item.type === 'Tool' ? 'Use Tool' : 'Explore Service';

                        return (
                            <div
                                key={item.title}
                                className="hero-carousel-card"
                                style={getCardStyle(index)}
                                onClick={() => {
                                    if (!isCenter) {
                                        setCurrentIndex(index);
                                        resetInterval();
                                    }
                                }}
                            >
                                <div className="hero-carousel-card-top-content">
                                    <div className="hero-carousel-card-icon">{item.icon}</div>
                                    <div className="hero-carousel-card-details">
                                        <h3 className="hero-carousel-card-title">{item.title}</h3>
                                        <div className="hero-carousel-card-highlights">
                                            {item.highlights.map(highlight => (
                                                <span key={highlight} className="hero-carousel-card-highlight-item">{highlight}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <button
                                    disabled={isDisabled}
                                    className="hero-carousel-card-button"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        if (isDisabled) return;

                                        if (isCenter) {
                                            if (item.path !== '#') navigate(item.path);
                                        } else {
                                            setCurrentIndex(index);
                                            resetInterval();
                                        }
                                    }}
                                >
                                    {isDisabled ? 'Coming Soon' : buttonText}
                                </button>
                            </div>
                        );
                    })}
                </div>
                <button className="hero-carousel-nav-button right" onClick={nextSlide}>
                    <ChevronRight size={24} />
                </button>
            </div>
        </div>
    );
};

export default HeroCarousel;