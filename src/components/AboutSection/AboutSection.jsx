import {
    ArrowRight,
    CheckCircle2,
    Phone,
} from "lucide-react";

import "./aboutSection.css";

const painPoints = [
    "Waiting without knowing what comes next",
    "Receiving a denial with little clarity",
    "Medical records that may feel incomplete",
    "Forms that ask similar questions repeatedly",
    "Family members who may not fully understand",
    "Uncertainty about which program may apply",
];

const AboutSection = () => {
    return (
        <section
            className="about-support"
            aria-labelledby="about-support-title"
        >
            <div className="about-support__container">

                {/* ================= LEFT IMAGE ================= */}
                <div className="about-support__media">
                    <div className="about-support__image-wrap">

                        <img
                            src="/image/new.png"
                            alt="Person reviewing Social Security disability benefit information at home"
                            className="about-support__image"
                        />

                        <div className="about-support__image-overlay" />

                        {/* ================= TOP SSDI BADGE ================= */}
                        <div className="about-support__ssdi-badge">
                            <div className="about-support__ssdi-icon">
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M12 3L19 6V11C19 15.6 16.2 19.7 12 21C7.8 19.7 5 15.6 5 11V6L12 3Z"
                                        stroke="currentColor"
                                        strokeWidth="1.8"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />

                                    <path
                                        d="M9 12L11 14L15.5 9.5"
                                        stroke="currentColor"
                                        strokeWidth="1.8"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>

                            <div>
                                <span>SSDI Support</span>
                                <strong>Trusted Guidance</strong>
                            </div>
                        </div>
                        {/* ================= BOTTOM GLASS CARD ================= */}
                        <div className="about-support__bottom-card">
                            <div className="about-support__bottom-card-icon">
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M4 20V10L12 4L20 10V20"
                                        stroke="currentColor"
                                        strokeWidth="1.8"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />

                                    <path
                                        d="M9 20V14H15V20"
                                        stroke="currentColor"
                                        strokeWidth="1.8"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>

                            <div className="about-support__bottom-card-content">
                                <span>Helping you understand</span>
                                <strong>SSDI & SSI Benefit Options</strong>
                            </div>

                            <div className="about-support__verified">
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M12 3L19 6V11C19 15.6 16.2 19.7 12 21C7.8 19.7 5 15.6 5 11V6L12 3Z"
                                        stroke="currentColor"
                                        strokeWidth="1.8"
                                    />

                                    <path
                                        d="M9 12L11 14L15 10"
                                        stroke="currentColor"
                                        strokeWidth="1.8"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                        </div>

                    </div>

                    {/* Decorative background shape */}
                    <div className="about-support__media-decoration" />
                </div>


                {/* ================= RIGHT CONTENT ================= */}
                <div className="about-support__content">

                    <div className="about-support__eyebrow">
                        <span className="about-support__eyebrow-line" />

                        Why People Come to Us
                    </div>

                    <h2
                        id="about-support-title"
                        className="about-support__title"
                    >
                        Understanding disability benefits
                        <span> shouldn’t feel overwhelming.</span>
                    </h2>

                    <p className="about-support__description">
                        When your health affects your ability to work,
                        figuring out SSDI or SSI can add even more stress.
                        GetSSDISupport helps make the information easier to
                        understand so you can explore the next step that may
                        fit your situation.
                    </p>


                    {/* ================= PAIN POINTS ================= */}
                    <div className="about-support__points">

                        {painPoints.map((point) => (
                            <div
                                className="about-support__point"
                                key={point}
                            >
                                <span className="about-support__point-dot" />

                                <span>{point}</span>
                            </div>
                        ))}

                    </div>


                    {/* ================= CTA ================= */}
                    <div className="about-support__actions">

                        <a
                            href="tel:+18339917969"
                            className="about-support__btn about-support__btn--primary"
                        >
                            Talk to an Advocate — Free

                            <ArrowRight size={18} />
                        </a>

                        <a
                            href="tel:+18339917969"
                            className="about-support__btn about-support__btn--secondary"
                        >
                            <Phone size={18} />

                            Call Now
                        </a>

                    </div>


                    {/* ================= MICRO TRUST ================= */}
                    <div className="about-support__trust">
                        <CheckCircle2 size={15} />

                        <span>
                            Clear information • Simple process • No obligation
                        </span>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default AboutSection;