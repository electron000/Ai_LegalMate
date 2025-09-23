import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Scale, ScanLine, PenSquare, Briefcase, Bot, Users } from 'lucide-react';
// Remember to rename './CombinedSections.css' to './FeatureSection.css'
import './FeatureSection.css';

const FeatureListItem = ({ title, description, icon, buttonText, onClick }) => (
    <div 
        className="feature-list-item" 
        onClick={onClick}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onClick();
            }
        }}
    >
        <div className="feature-icon-wrapper">
            {React.createElement(icon, { 
                size: window.innerWidth < 768 ? 18 : 22,
                'aria-hidden': true 
            })}
        </div>
        <div className="feature-text-content">
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
        {buttonText && (
            <button 
                className="feature-action-button"
                aria-label={`${buttonText} for ${title}`}
            >
                {buttonText}
            </button>
        )}
    </div>
);

const FeatureSection = () => {
    const navigate = useNavigate();

    const allFeatures = [
    {
        title: "AI-Powered Legal Research",
        description: "Instantly find relevant case laws and legal precedents.",
        icon: Scale,
        buttonText: "Start Researching",
        onClick: () => navigate('/research'),
    },
    {
        title: "Intelligent Document Analysis",
        description: "Get AI insights, summaries, and risk assessments.",
        icon: ScanLine,
        buttonText: "Analyze Document",
        onClick: () => navigate('/analysis'),
    },
    {
        title: "Automated Document Drafting",
        description: "Generate drafts for notices, affidavits, and agreements.",
        icon: PenSquare,
        buttonText: "Start Drafting",
        onClick: () => navigate('/drafting'),
    },
    {
        title: "Case Management Suite",
        description: "Organize case files, track deadlines, and manage clients.",
        icon: Briefcase,
        buttonText: "Manage Cases",
        onClick: () => navigate('/case-management'),
    },
    {
        title: "24/7 AI Legal Assistant",
        description: "Get instant guidance on legal rights and procedures.",
        icon: Bot,
        buttonText: "Ask AI",
        onClick: () => navigate('/assistant'),
    },
    {
        title: "Verified Lawyer Network",
        description: "Connect with experienced legal professionals locally.",
        icon: Users,
        buttonText: "Find a Lawyer",
        onClick: () => navigate('/lawyers'),
    },
];

    return (
        <div className="feature-section-wrapper">
            <h2 className="feature-section-main-title">
                Platform Features
            </h2>
            
            <div className="feature-section-container">
                <div className="feature-list">
                    {allFeatures.map((feature, index) => (
                        <FeatureListItem
                            key={`feature-${index}`}
                            {...feature}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FeatureSection;