import {
    AlertCircle,
    FileText,
    Phone,
    Scale,
    ShieldCheck,
} from "lucide-react";

import "../PrivacyPolicy/privacy-policy.css";

const Terms = () => {
    return (
        <main className="legal-page">

            {/* HERO */}
            <section className="legal-hero">
                <div className="legal-hero__container">

                    <div className="legal-hero__eyebrow">
                        <FileText size={15} />
                        Website Terms
                    </div>

                    <h1>
                        Terms & <span>Conditions</span>
                    </h1>

                    <p>
                        Please review these Terms & Conditions before
                        using GetSSDISupport or submitting information
                        through this website.
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

                            <a href="#acceptance">
                                Acceptance
                            </a>

                            <a href="#purpose">
                                Website Purpose
                            </a>

                            <a href="#government">
                                Government Disclaimer
                            </a>

                            <a href="#eligibility">
                                Eligibility Information
                            </a>

                            <a href="#communications">
                                Communications
                            </a>

                            <a href="#accuracy">
                                Information Accuracy
                            </a>

                            <a href="#third-parties">
                                Third Parties
                            </a>

                            <a href="#liability">
                                Limitation of Liability
                            </a>

                            <a href="#contact">
                                Contact
                            </a>

                        </div>

                    </aside>


                    {/* ARTICLE */}
                    <article className="legal-article">

                        <section id="acceptance">

                            <div className="legal-section__icon">
                                <Scale size={21} />
                            </div>

                            <h2>
                                1. Acceptance of Terms
                            </h2>

                            <p>
                                By accessing or using GetSSDISupport,
                                you agree to these Terms & Conditions
                                and our Privacy Policy.
                            </p>

                            <p>
                                If you do not agree with these terms,
                                please discontinue use of the website.
                            </p>

                        </section>


                        <section id="purpose">

                            <h2>
                                2. Website Purpose
                            </h2>

                            <p>
                                GetSSDISupport provides general
                                information and resources concerning
                                Social Security Disability Insurance
                                (SSDI), Supplemental Security Income
                                (SSI), disability benefit processes,
                                and related topics.
                            </p>

                            <p>
                                Information presented on this website is
                                provided for general informational
                                purposes and should not be interpreted
                                as a guarantee that any person qualifies
                                for or will receive disability benefits.
                            </p>

                        </section>


                        <section id="government">

                            <h2>
                                3. Independent Website & Government Disclaimer
                            </h2>

                            <div className="legal-notice">
                                <ShieldCheck size={18} />

                                <p>
                                    GetSSDISupport is an independent
                                    website and is not affiliated with,
                                    endorsed by, or operated by the
                                    Social Security Administration,
                                    the United States government, or
                                    any government agency.
                                </p>
                            </div>

                            <p>
                                Official Social Security program
                                information, eligibility decisions, and
                                benefit determinations are made by the
                                appropriate government agencies.
                            </p>

                        </section>


                        <section id="eligibility">

                            <h2>
                                4. Eligibility Information
                            </h2>

                            <p>
                                Any questionnaire, eligibility review,
                                educational content, or other information
                                provided through this website is intended
                                to help users better understand possible
                                options.
                            </p>

                            <p>
                                Completing a questionnaire, submitting a
                                form, or speaking with someone through a
                                telephone number displayed on the website
                                does not guarantee eligibility, approval,
                                payment, representation, or benefits.
                            </p>

                        </section>


                        <section>

                            <h2>
                                5. No Guarantee of Results
                            </h2>

                            <p>
                                Disability benefit decisions depend on
                                individual circumstances and applicable
                                program requirements. GetSSDISupport does
                                not guarantee that an application or
                                appeal will be approved or that a
                                particular benefit amount will be
                                received.
                            </p>

                        </section>


                        <section id="communications">

                            <h2>
                                6. Communications
                            </h2>

                            <p>
                                If you voluntarily submit contact
                                information, you may be contacted in
                                connection with the request you submitted,
                                subject to the disclosures and consent
                                presented at the point where your
                                information is collected.
                            </p>

                            <p>
                                Telephone, text-message, or other
                                communication terms displayed with a
                                particular form should be reviewed before
                                submitting that form.
                            </p>

                        </section>


                        <section id="accuracy">

                            <h2>
                                7. Accuracy of Information
                            </h2>

                            <p>
                                We aim to provide useful and understandable
                                information, but laws, regulations,
                                government procedures, eligibility
                                requirements, and program details may
                                change.
                            </p>

                            <p>
                                Users should verify important information
                                with appropriate official sources or
                                qualified professionals when necessary.
                            </p>

                        </section>


                        <section id="third-parties">

                            <h2>
                                8. Third-Party Services & Links
                            </h2>

                            <p>
                                The website may provide access to
                                third-party websites, resources, service
                                providers, or other external services.
                                We do not control the content, policies,
                                availability, or practices of independent
                                third parties.
                            </p>

                        </section>


                        <section>

                            <h2>
                                9. Acceptable Use
                            </h2>

                            <p>
                                You agree not to misuse the website,
                                interfere with its operation, attempt
                                unauthorized access, submit fraudulent
                                information, or use the website for
                                unlawful purposes.
                            </p>

                        </section>


                        <section>

                            <h2>
                                10. Intellectual Property
                            </h2>

                            <p>
                                Unless otherwise stated, website design,
                                branding, original text, graphics, and
                                other original website materials are
                                protected by applicable intellectual
                                property laws.
                            </p>

                            <p>
                                You may not reproduce, distribute, or
                                commercially exploit protected website
                                content without appropriate permission.
                            </p>

                        </section>


                        <section id="liability">

                            <div className="legal-section__icon">
                                <AlertCircle size={21} />
                            </div>

                            <h2>
                                11. Limitation of Liability
                            </h2>

                            <p>
                                To the extent permitted by applicable
                                law, GetSSDISupport is not responsible
                                for losses arising solely from reliance
                                on general website information or from
                                the availability or operation of
                                third-party services.
                            </p>

                            <p>
                                Nothing in these Terms excludes or limits
                                rights or liabilities that cannot lawfully
                                be excluded or limited.
                            </p>

                        </section>


                        <section>

                            <h2>
                                12. Changes to These Terms
                            </h2>

                            <p>
                                These Terms may be updated from time to
                                time. Updated terms may be posted on this
                                page together with a revised effective
                                date.
                            </p>

                            <p>
                                Continued use of the website after an
                                update constitutes acceptance of the
                                revised Terms to the extent permitted by
                                applicable law.
                            </p>

                        </section>


                        <section id="contact">

                            <h2>
                                13. Questions About These Terms
                            </h2>

                            <p>
                                If you have questions about these Terms
                                or about using GetSSDISupport, please use
                                the contact options available on the
                                website.
                            </p>

                            <a
                                href="tel:+18339917969"
                                className="legal-call-button"
                            >
                                <Phone size={18} />

                                <span>
                                    Call GetSSDISupport
                                    <strong>
                                        +1 (833) 991-7969
                                    </strong>
                                </span>
                            </a>

                        </section>

                    </article>

                </div>
            </section>

        </main>
    );
};

export default Terms;