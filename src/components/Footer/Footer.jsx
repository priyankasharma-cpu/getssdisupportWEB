import {
    Phone,
    Mail,
    MapPin,
    ArrowUpRight,
} from "lucide-react";
import "./footer.css";
import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { label: "Home", path: "/" },
        { label: "SSDI", path: "/ssdi" },
        { label: "SSI", path: "/ssi" },
        { label: "Eligibility", path: "/eligibility" },
        { label: "How It Works", path: "/how-it-works" },
        { label: "FAQ", path: "/faq" },
    ];

    const resourceLinks = [
        { label: "Disability Conditions", path: "/conditions" },
        { label: "About Us", path: "/about" },
        { label: "Contact Us", path: "/contact" },
    ];

    const legalLinks = [
        { label: "Privacy Policy", path: "/privacy-policy" },
        { label: "Terms & Conditions", path: "/terms" },
    ];

    return (
        <footer className="site-footer">

            {/* Top Accent */}
            <div className="footer-accent" />

            <div className="container">

                {/* Main Footer */}
                <div className="footer-main">

                    {/* Brand Column */}
                    <div className="footer-brand">

                        <Link to="/" className="footer-logo">
                            <span className="footer-logo__main">
                                GetSSDI
                            </span>
                            <span className="footer-logo__support">
                                Support
                            </span>
                        </Link>

                        <p className="footer-description">
                            GetSSDI Support provides clear, easy-to-understand
                            information to help you learn more about SSDI,
                            SSI, and disability benefit options.
                        </p>

                        {/* Call Card */}
                        <a
                            href="tel:+18005555555"
                            className="footer-call-card"
                        >
                            <span className="footer-call-icon">
                                <Phone size={18} />
                            </span>

                            <span className="footer-call-content">
                                <small>Have questions?</small>
                                <strong>Call Now</strong>
                            </span>

                            <ArrowUpRight size={18} />
                        </a>

                    </div>

                    {/* Quick Links */}
                    <div className="footer-column">
                        <h3>Quick Links</h3>

                        <ul>
                            {quickLinks.map((link) => (
                                <li key={link.path}>
                                    <Link to={link.path}>
                                        <span>{link.label}</span>
                                        <ArrowUpRight size={14} />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources */}
                    <div className="footer-column">
                        <h3>Resources</h3>

                        <ul>
                            {resourceLinks.map((link) => (
                                <li key={link.path}>
                                    <Link to={link.path}>
                                        <span>{link.label}</span>
                                        <ArrowUpRight size={14} />
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        <h3 className="footer-legal-heading">
                            Legal
                        </h3>

                        <ul>
                            {legalLinks.map((link) => (
                                <li key={link.path}>
                                    <Link to={link.path}>
                                        <span>{link.label}</span>
                                        <ArrowUpRight size={14} />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="footer-column footer-contact">

                        <h3>Contact</h3>

                        <div className="footer-contact-item">
                            <span className="footer-contact-icon">
                                <Phone size={16} />
                            </span>

                            <div>
                                <small>Phone</small>
                                <a href="tel:+18005555555">
                                    +1 (800) 555-5555
                                </a>
                            </div>
                        </div>

                        <div className="footer-contact-item">
                            <span className="footer-contact-icon">
                                <Mail size={16} />
                            </span>

                            <div>
                                <small>Email</small>
                                <a href="mailto:info@getssdisupport.com">
                                    info@getssdisupport.com
                                </a>
                            </div>
                        </div>

                        <div className="footer-contact-item">
                            <span className="footer-contact-icon">
                                <MapPin size={16} />
                            </span>

                            <div>
                                <small>Service Area</small>
                                <span>
                                    United States
                                </span>
                            </div>
                        </div>

                        <div className="footer-social">

                            {/* Facebook */}
                            <a href="#" aria-label="Facebook">
                                <svg
                                    viewBox="0 0 24 24"
                                    width="17"
                                    height="17"
                                    fill="currentColor"
                                    aria-hidden="true"
                                >
                                    <path d="M14 8h3V4h-3c-3.3 0-5 1.7-5 5v3H6v4h3v6h4v-6h3l1-4h-4V9c0-.7.3-1 1-1z" />
                                </svg>
                            </a>

                            {/* Instagram */}
                            <a href="#" aria-label="Instagram">
                                <svg
                                    viewBox="0 0 24 24"
                                    width="17"
                                    height="17"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    aria-hidden="true"
                                >
                                    <rect x="3" y="3" width="18" height="18" rx="5" />
                                    <circle cx="12" cy="12" r="4" />
                                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                                </svg>
                            </a>

                            {/* LinkedIn */}
                            <a href="#" aria-label="LinkedIn">
                                <svg
                                    viewBox="0 0 24 24"
                                    width="17"
                                    height="17"
                                    fill="currentColor"
                                    aria-hidden="true"
                                >
                                    <path d="M5 3.5A2.5 2.5 0 1 1 5 8.5a2.5 2.5 0 0 1 0-5zM3 10h4v11H3V10zm6 0h4v1.5c.8-1.1 2.1-2 4-2 4 0 5 2.6 5 6v5.5h-4V16c0-1.7 0-3.5-2.1-3.5S13 14.1 13 16v5h-4V10z" />
                                </svg>
                            </a>

                        </div>

                    </div>
                </div>

                {/* Disclaimer */}
                <div className="footer-disclaimer">
                    <strong>Important:</strong>

                    <p>
                        GetSSDISupport.com is an independent website and
                        is not affiliated with, endorsed by, or operated by
                        the Social Security Administration or any U.S.
                        government agency. Information provided on this
                        website is for general informational purposes only
                        and does not constitute legal or professional advice.
                    </p>
                </div>

                {/* Bottom Footer */}
                <div className="footer-bottom">

                    <p>
                        © {currentYear} GetSSDI Support. All rights reserved.
                    </p>

                    <div className="footer-bottom-links">
                        <Link to="/privacy-policy">
                            Privacy
                        </Link>

                        <span>•</span>

                        <Link to="/terms">
                            Terms
                        </Link>
                    </div>

                </div>

            </div>
        </footer>
    );
};

export default Footer;