import React from 'react';
import './PricingPage.css'; // Import the new stylesheet

// Checkmark Icon Component
const CheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 6 9 17l-5-5"></path>
    </svg>
);

// The Pricing Page Layout
const LegalMatePricing = () => {
    const plans = [
        { name: "Monthly", price: 100, period: "/ month", features: ["AI-powered Legal Research", "Standard Document Templates", "Secure Document Storage (10GB)", "Basic Case Management", "Standard Email Support"], featured: false },
        { name: "Half Yearly", price: 500, period: "/ 6 months", features: ["Everything in Monthly, plus:", "Advanced AI Contract Analysis", "Full-featured Case Management", "Secure Document Storage (50GB)", "Priority Email Support"], featured: true },
        { name: "Annually", price: 1000, period: "/ year", features: ["Everything in Half Yearly, plus:", "Real-time Legal Consultation Chatbot", "E-signature Integration", "Unlimited Document Storage", "24/7 Phone & Chat Support"], featured: false }
    ];

    return (
        <div className="pricing-body">
            <div className="pricing-page-container">
                <header className="pricing-header">
                    <h1>Find the Perfect Plan</h1>
                    <p>Start with our flexible plans and scale as you grow. All plans include our world-class support and robust security.</p>
                </header>
                <main className="pricing-grid">
                    {plans.map((plan, index) => (
                        <div key={index} className={`pricing-card ₹{plan.featured ? 'featured' : ''}`}>
                            {plan.featured && <div className="popular-badge">Most Popular</div>}
                            <div className="card-header">
                                <h3>{plan.name}</h3>
                                <div className="card-price">
                                    ₹{plan.price}
                                    <span className="period">{plan.period}</span>
                                </div>
                            </div>
                            <ul className="feature-list">
                                {plan.features.map((feature, fIndex) => (
                                    <li key={fIndex}>
                                        <CheckIcon />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <button className="cta-button">Choose Plan</button>
                        </div>
                    ))}
                </main>
            </div>
        </div>
    );
};

export default LegalMatePricing;