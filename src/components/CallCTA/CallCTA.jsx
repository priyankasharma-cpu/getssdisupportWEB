import {
    ArrowRight,
    Check,
    Headphones,
    LockKeyhole,
    Phone,
    ShieldCheck,
} from "lucide-react";

import "./call-cta.css";

const CallCTA = () => {
    const scrollToEligibility = () => {
        document
            .getElementById("eligibility")
            ?.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
    };

    return (
        <section
            className="call-cta"
            aria-labelledby="call-cta-title"
        >
            <div className="call-cta__glow call-cta__glow--left" />
            <div className="call-cta__glow call-cta__glow--right" />

            <div className="call-cta__container">

                {/* LEFT */}

                <div className="call-cta__content">

                    <div className="call-cta__eyebrow">
                        <Headphones size={15} />
                        Prefer to Talk?
                    </div>

                    <h2 id="call-cta-title">
                        Have Questions About
                        <span> SSDI or SSI?</span>
                    </h2>

                    <p className="call-cta__description">
                        Speak with someone about your situation and get
                        clearer information about disability benefit
                        options and possible next steps.
                    </p>

                    <div className="call-cta__trust">
                        <span>
                            <Check size={15} />
                            Discuss your situation
                        </span>

                        <span>
                            <Check size={15} />
                            Ask questions about next steps
                        </span>

                        <span>
                            <Check size={15} />
                            No obligation to call
                        </span>
                    </div>

                </div>


                {/* RIGHT CALL PANEL */}

                <div className="call-cta__panel">

                    <div className="call-cta__panel-top">

                        <div className="call-cta__phone-icon">
                            <Phone size={25} />

                            <span className="call-cta__ring call-cta__ring--one" />
                            <span className="call-cta__ring call-cta__ring--two" />
                        </div>

                        <div>
                            <span className="call-cta__panel-label">
                                GET DISABILITY SUPPORT
                            </span>

                            <strong>
                                Speak With Someone Today
                            </strong>
                        </div>

                    </div>


                    <a
                        href="tel:+18339917969"
                        className="call-cta__call-button"
                    >
                        <span className="call-cta__call-button-icon">
                            <Phone size={20} />
                        </span>

                        <span className="call-cta__call-copy">
                            <small>Call Now</small>
                            <strong>+1 (833) 991-7969</strong>
                        </span>

                        <ArrowRight
                            size={20}
                            className="call-cta__arrow"
                        />
                    </a>


                    <button
                        type="button"
                        className="call-cta__eligibility"
                        onClick={scrollToEligibility}
                    >
                        Or Check My Eligibility Online

                        <ArrowRight size={15} />
                    </button>


                    <div className="call-cta__privacy">
                        <LockKeyhole size={13} />

                        <span>
                            Private conversation • No obligation
                        </span>
                    </div>

                </div>

            </div>


            {/* BOTTOM DISCLAIMER */}

            <div className="call-cta__disclaimer">
                <ShieldCheck size={13} />

                <span>
                    GetSSDISupport is an independent information resource
                    and is not affiliated with or endorsed by the Social
                    Security Administration or any government agency.
                </span>
            </div>

        </section>
    );
};

export default CallCTA;