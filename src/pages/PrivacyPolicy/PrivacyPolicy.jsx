import {
    Database,
    LockKeyhole,
    Mail,
    Phone,
    ShieldCheck,
} from "lucide-react";

import "./privacy-policy.css";

const PrivacyPolicy = () => {
    return (
        <main className="legal-page">

            {/* HERO */}
            <section className="legal-hero">
                <div className="legal-hero__container">

                    <div className="legal-hero__eyebrow">
                        <ShieldCheck size={15} />
                        Privacy & Transparency
                    </div>

                    <h1>
                        Privacy <span>Policy</span>
                    </h1>

                    <p>
                        This Privacy Policy explains how GetSSDISupport
                        may collect, use, and protect information when
                        you use our website or contact us.
                    </p>

                    <div className="legal-hero__meta">
                        Last updated: September 2026
                    </div>

                </div>
            </section>


            {/* CONTENT */}
            <section className="legal-content">

                <div className="legal-content__container">

                    {/* SIDEBAR */}
                    <aside className="legal-sidebar">

                        <div className="legal-sidebar__box">

                            <span>ON THIS PAGE</span>

                            <a href="#overview">
                                Overview
                            </a>

                            <a href="#information">
                                Information We Collect
                            </a>

                            <a href="#use">
                                How We Use Information
                            </a>

                            <a href="#sharing">
                                Information Sharing
                            </a>

                            <a href="#cookies">
                                Cookies & Tracking
                            </a>

                            <a href="#security">
                                Data Security
                            </a>

                            <a href="#choices">
                                Your Choices
                            </a>

                            <a href="#third-party">
                                Third-Party Links
                            </a>

                            <a href="#contact">
                                Contact Us
                            </a>

                        </div>

                    </aside>


                    {/* ARTICLE */}
                    <article className="legal-article">

                        <section id="overview">
                            <div className="legal-section__icon">
                                <ShieldCheck size={21} />
                            </div>

                            <h2>1. Overview</h2>

                            <p>
                                GetSSDISupport ("GetSSDISupport," "we,"
                                "us," or "our") respects your privacy.
                                This Privacy Policy describes how
                                information may be collected and used
                                when you visit our website, submit
                                information through our forms, or
                                contact us by telephone.
                            </p>

                            <div className="legal-notice">
                                <ShieldCheck size={18} />

                                <p>
                                    GetSSDISupport is an independent
                                    information resource and is not
                                    affiliated with, endorsed by, or a
                                    part of the Social Security
                                    Administration or any other
                                    government agency.
                                </p>
                            </div>
                        </section>


                        <section id="information">
                            <h2>2. Information We Collect</h2>

                            <p>
                                Depending on how you interact with the
                                website, we may collect information that
                                you voluntarily provide, including:
                            </p>

                            <ul>
                                <li>Name and contact information</li>
                                <li>Email address and telephone number</li>
                                <li>ZIP code or state</li>
                                <li>
                                    Information you choose to provide
                                    about your disability benefits
                                    situation
                                </li>
                                <li>
                                    Responses submitted through
                                    eligibility or contact forms
                                </li>
                                <li>
                                    Communication preferences
                                </li>
                            </ul>

                            <p>
                                We may also automatically receive
                                technical information such as browser
                                type, device type, IP address, referring
                                page, pages visited, and general website
                                interaction data.
                            </p>
                        </section>


                        <section id="use">
                            <h2>3. How We Use Information</h2>

                            <p>
                                Information collected through the website
                                may be used to:
                            </p>

                            <ul>
                                <li>
                                    Respond to questions or requests
                                </li>

                                <li>
                                    Provide information related to
                                    disability benefit options
                                </li>

                                <li>
                                    Process eligibility or contact form
                                    submissions
                                </li>

                                <li>
                                    Facilitate requested communications
                                </li>

                                <li>
                                    Operate, maintain, and improve the
                                    website
                                </li>

                                <li>
                                    Understand website performance and
                                    visitor interactions
                                </li>

                                <li>
                                    Protect against misuse, fraud, or
                                    security threats
                                </li>

                                <li>
                                    Comply with applicable legal
                                    obligations
                                </li>
                            </ul>
                        </section>


                        <section id="sharing">
                            <h2>4. Information Sharing</h2>

                            <p>
                                We may disclose information to service
                                providers that help us operate the
                                website or provide requested services.
                                Depending on the services offered through
                                the website and the consent you provide,
                                information may also be shared with
                                relevant service providers or other
                                parties involved in responding to your
                                request.
                            </p>

                            <p>
                                We may also disclose information when
                                required by law, to protect legal rights,
                                investigate misuse, or protect the safety
                                and security of users or our services.
                            </p>
                        </section>


                        <section id="cookies">
                            <h2>5. Cookies & Tracking Technologies</h2>

                            <p>
                                The website may use cookies and similar
                                technologies to remember preferences,
                                understand website traffic, measure
                                performance, and improve the user
                                experience.
                            </p>

                            <p>
                                Some analytics or advertising
                                technologies may also collect information
                                about interactions with the website.
                                Browser settings may allow you to limit
                                or disable certain cookies.
                            </p>
                        </section>


                        <section id="security">
                            <div className="legal-section__icon">
                                <LockKeyhole size={21} />
                            </div>

                            <h2>6. Data Security</h2>

                            <p>
                                We use reasonable administrative,
                                technical, and organizational safeguards
                                designed to protect information from
                                unauthorized access, loss, misuse, or
                                disclosure.
                            </p>

                            <p>
                                No website, transmission method, or
                                electronic storage system can be
                                guaranteed to be completely secure.
                            </p>
                        </section>


                        <section id="choices">
                            <h2>7. Your Choices</h2>

                            <p>
                                Depending on applicable law and the
                                circumstances, you may have choices
                                concerning certain communications or
                                personal information.
                            </p>

                            <p>
                                If you no longer wish to receive a
                                particular type of communication, you
                                may use the available opt-out method or
                                contact us with your request.
                            </p>
                        </section>


                        <section id="third-party">
                            <h2>8. Third-Party Links</h2>

                            <p>
                                Our website may contain links to websites
                                or services operated by third parties.
                                Their privacy practices are governed by
                                their own policies, and we encourage you
                                to review those policies before providing
                                personal information.
                            </p>
                        </section>


                        <section>
                            <h2>9. Children's Privacy</h2>

                            <p>
                                This website is intended for adults
                                seeking information related to disability
                                benefits and is not intended to knowingly
                                collect personal information from
                                children.
                            </p>
                        </section>


                        <section>
                            <h2>10. Changes to This Policy</h2>

                            <p>
                                We may update this Privacy Policy from
                                time to time. When changes are made, the
                                updated version may be posted on this
                                page with a revised "Last updated" date.
                            </p>
                        </section>


                        <section id="contact">
                            <h2>11. Contact Us</h2>

                            <p>
                                If you have questions regarding this
                                Privacy Policy or the website's privacy
                                practices, you may contact us using the
                                contact options available on the website.
                            </p>

                            <div className="legal-contact">

                                <div>
                                    <Phone size={18} />

                                    <span>
                                        Call Support
                                        <strong>
                                            +1 (833) 991-7969
                                        </strong>
                                    </span>
                                </div>

                                <div>
                                    <Mail size={18} />

                                    <span>
                                        Website
                                        <strong>
                                            GetSSDISupport
                                        </strong>
                                    </span>
                                </div>

                            </div>
                        </section>


                        <div className="legal-final-note">
                            <Database size={18} />

                            <p>
                                Please do not submit information through
                                the website that is not necessary for
                                your request.
                            </p>
                        </div>

                    </article>

                </div>
            </section>

        </main>
    );
};

export default PrivacyPolicy;