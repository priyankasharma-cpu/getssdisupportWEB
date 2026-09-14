import { useState } from "react";
import { Menu, X, Phone, ArrowRight } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);

    const location = useLocation();
    const navigate = useNavigate();

    const navLinks = [
        {
            label: "Home",
            type: "route",
            path: "/",
        },
        {
            label: "Eligibility",
            type: "section",
            id: "eligibility",
        },
        {
            label: "How It Works",
            type: "section",
            id: "how-it-works",
        },
        {
            label: "FAQ",
            type: "route",
            path: "/faq",
        },
    ];

    const closeMobileMenu = () => {
        setMobileOpen(false);
    };

    const scrollToSection = (sectionId) => {
        closeMobileMenu();

        /*
         * If user is already on Home page,
         * directly scroll to the section.
         */
        if (location.pathname === "/") {
            const section =
                document.getElementById(sectionId);

            if (section) {
                section.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            }

            return;
        }

        /*
         * If user is on FAQ or another page,
         * first navigate Home, then scroll.
         */
        navigate("/");

        setTimeout(() => {
            const section =
                document.getElementById(sectionId);

            if (section) {
                section.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            }
        }, 150);
    };

    return (
        <header className="site-navbar">
            <div className="navbar-container">

                {/* ================= LOGO ================= */}

                <Link
                    to="/"
                    className="navbar-logo"
                    onClick={closeMobileMenu}
                >
                    <span className="navbar-logo__main">
                        GetSSDI
                    </span>

                    <span className="navbar-logo__support">
                        Support
                    </span>
                </Link>


                {/* ================= DESKTOP NAV ================= */}

                <nav
                    className="navbar-nav"
                    aria-label="Main navigation"
                >
                    {navLinks.map((link) => {

                        /*
                         * Normal route pages
                         */
                        if (link.type === "route") {
                            return (
                                <Link
                                    key={link.label}
                                    to={link.path}
                                    className={`navbar-link ${location.pathname ===
                                        link.path
                                        ? "navbar-link--active"
                                        : ""
                                        }`}
                                >
                                    {link.label}
                                </Link>
                            );
                        }

                        /*
                         * Home page sections
                         */
                        return (
                            <button
                                key={link.label}
                                type="button"
                                className="navbar-link navbar-link--button"
                                onClick={() =>
                                    scrollToSection(link.id)
                                }
                            >
                                {link.label}
                            </button>
                        );
                    })}
                </nav>


                {/* ================= ACTIONS ================= */}

                <div className="navbar-actions">

                    <a
                        href="tel:+18005555555"
                        className="navbar-call"
                    >
                        <span className="navbar-call__icon">
                            <Phone size={18} />

                            <span className="navbar-call__ring navbar-call__ring--one" />

                            <span className="navbar-call__ring navbar-call__ring--two" />
                        </span>

                        <span className="navbar-call__content">
                            <span className="navbar-call__label">
                                Call Now
                            </span>

                            <span className="navbar-call__number">
                                +1 (800) 555-5555
                            </span>
                        </span>
                    </a>


                    {/* Eligibility is now a Home section */}
                    <button
                        type="button"
                        className="navbar-cta"
                        onClick={() =>
                            scrollToSection("eligibility")
                        }
                    >
                        <span>
                            Get a Free Evaluation
                        </span>

                        <ArrowRight size={16} />
                    </button>

                </div>


                {/* ================= MOBILE TOGGLE ================= */}

                <button
                    type="button"
                    className="navbar-mobile-toggle"
                    onClick={() =>
                        setMobileOpen(!mobileOpen)
                    }
                    aria-label={
                        mobileOpen
                            ? "Close menu"
                            : "Open menu"
                    }
                    aria-expanded={mobileOpen}
                >
                    {mobileOpen ? (
                        <X size={24} />
                    ) : (
                        <Menu size={24} />
                    )}
                </button>

            </div>


            {/* ================= MOBILE MENU ================= */}

            <div
                className={`navbar-mobile ${mobileOpen
                    ? "navbar-mobile--open"
                    : ""
                    }`}
            >
                <nav
                    className="navbar-mobile__nav"
                    aria-label="Mobile navigation"
                >
                    {navLinks.map((link) => {

                        if (link.type === "route") {
                            return (
                                <Link
                                    key={link.label}
                                    to={link.path}
                                    onClick={closeMobileMenu}
                                    className={`navbar-mobile__link ${location.pathname ===
                                        link.path
                                        ? "navbar-mobile__link--active"
                                        : ""
                                        }`}
                                >
                                    {link.label}
                                </Link>
                            );
                        }

                        return (
                            <button
                                key={link.label}
                                type="button"
                                className="navbar-mobile__link navbar-mobile__link--button"
                                onClick={() =>
                                    scrollToSection(link.id)
                                }
                            >
                                {link.label}
                            </button>
                        );
                    })}
                </nav>


                {/* ================= MOBILE ACTIONS ================= */}

                <div className="navbar-mobile__actions">

                    <a
                        href="tel:+18005555555"
                        className="navbar-mobile__call"
                        onClick={closeMobileMenu}
                    >
                        <Phone
                            size={17}
                            style={{
                                marginRight: "6px",
                            }}
                        />

                        Call Now
                    </a>

                    <button
                        type="button"
                        className="navbar-mobile__cta"
                        onClick={() =>
                            scrollToSection("eligibility")
                        }
                    >
                        Get a Free Evaluation

                        <ArrowRight
                            size={17}
                            style={{
                                marginLeft: "6px",
                            }}
                        />
                    </button>

                </div>
            </div>
        </header>
    );
};

export default Navbar;