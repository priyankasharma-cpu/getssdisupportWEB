import { useState } from "react";
import {
    ArrowRight,
    Check,
    ChevronRight,
    LockKeyhole,
    Phone,
    ShieldCheck,
} from "lucide-react";

import "./hero.css";

const stageData = [
    {
        id: "not-applied",
        number: "01",
        title: "I haven’t applied yet",
        subtitle: "I’m considering applying for SSDI or SSI",
        statusLabel: "CURRENT STAGE",
        statusValue: "Getting Started",
        nextLabel: "NEXT STEP",
        nextValue: "Review Eligibility",
        description:
            "If a medical condition is limiting your ability to work, understanding the basic SSDI and SSI eligibility requirements can help you decide what to do next.",
        cta: "Talk About Starting a Claim",
    },
    {
        id: "waiting",
        number: "02",
        title: "I applied and I’m waiting",
        subtitle: "My initial disability claim is pending",
        statusLabel: "CURRENT STAGE",
        statusValue: "Claim Pending",
        nextLabel: "NEXT STEP",
        nextValue: "Track Your Claim",
        description:
            "Initial disability decisions can take time. Continue responding to Social Security requests and keep your medical and contact information current while your claim is reviewed.",
        cta: "Call About My Pending Claim",
    },
    {
        id: "denied",
        number: "03",
        title: "My claim was denied",
        subtitle: "I may need to review appeal options",
        statusLabel: "CURRENT STAGE",
        statusValue: "Claim Denied",
        nextLabel: "POSSIBLE NEXT STEP",
        nextValue: "Review Appeal Options",
        description:
            "A denial does not always mean the process is over. Depending on your situation, you may have options to request reconsideration or continue through the disability appeals process.",
        cta: "Discuss My Denied Claim",
    },
    {
        id: "appeal",
        number: "04",
        title: "I’m in the appeal process",
        subtitle: "Reconsideration, hearing, or another appeal stage",
        statusLabel: "CURRENT STAGE",
        statusValue: "Appeal Process",
        nextLabel: "NEXT STEP",
        nextValue: "Prepare & Continue",
        description:
            "If your claim is already in an appeal stage, staying organized and responding to requests for information can be important as your case moves forward.",
        cta: "Talk About My Appeal",
    },
];

const Hero = () => {
    const [selectedStage, setSelectedStage] = useState(null);

    const selectedData = stageData.find(
        (stage) => stage.id === selectedStage
    );

    const handleEligibilityScroll = () => {
        document
            .getElementById("eligibility")
            ?.scrollIntoView({
                behavior: "smooth",
                block: "center",
            });
    };

    return (
        <section
            className={`hero ${selectedStage ? "hero--expanded" : ""
                }`}
            aria-labelledby="hero-title"
        >
            <div
                className="hero__glow hero__glow--top"
                aria-hidden="true"
            />

            <div
                className="hero__glow hero__glow--bottom"
                aria-hidden="true"
            />

            <div
                className="hero__grid"
                aria-hidden="true"
            />

            <div className="hero__container">

                {/* =================================================
                    LEFT CONTENT
                ================================================= */}

                <div className="hero__content">

                    <div className="hero__eyebrow">
                        <ShieldCheck size={15} />

                        <span>
                            SSDI • SSI • Nationwide Support
                        </span>
                    </div>

                    <h1
                        id="hero-title"
                        className="hero__title"
                    >
                        Explore Your SSDI & SSI Benefit Options.

                        <span className="hero__title-accent">
                            Understand Your Next Step.
                        </span>
                    </h1>

                    <p className="hero__description">
                        Get clear information about Social Security Disability Insurance (SSDI)
                        and Supplemental Security Income (SSI) options based on your situation.
                        Answer a few quick questions, then call to discuss your
                        situation and learn what options may be available to you.
                    </p>


                    {/* PRIMARY CONVERSION */}

                    <div className="hero__actions">

                        <button
                            type="button"
                            onClick={handleEligibilityScroll}
                            className="hero__btn hero__btn--primary"
                        >
                            <span className="hero__btn-icon hero__btn-icon--eligibility">
                                <ShieldCheck size={19} />
                            </span>

                            <span>Check My Eligibility</span>

                            <ArrowRight
                                size={18}
                                className="hero__btn-arrow"
                            />
                        </button>


                        <a
                            href="tel:+18339917969"
                            className="hero__btn hero__btn--call"
                        >
                            <span className="hero__call-icon">
                                <Phone size={18} />

                                <span className="hero__call-ring hero__call-ring--one" />
                                <span className="hero__call-ring hero__call-ring--two" />
                            </span>

                            <span className="hero__call-content">
                                <small>Free Consultation</small>
                                <strong>Call Now</strong>
                                <span className="hero__call-number">
                                    +1 (833) 991-7969
                                </span>
                            </span>
                        </a>

                    </div>


                    {/* SECONDARY LINK */}

                    <a
                        href="#how-it-works"
                        className="hero__learn-link"
                    >
                        Learn how SSDI &amp; SSI work

                        <ChevronRight size={16} />
                    </a>


                    {/* TRUST */}

                    <div
                        className="hero__assurances"
                        aria-label="Eligibility assurances"
                    >
                        <span>
                            <Check size={15} />
                            Private &amp; confidential
                        </span>

                        <span>
                            <Check size={15} />
                            Free eligibility review
                        </span>

                        <span>
                            <Check size={15} />
                            No obligation
                        </span>
                    </div>


                    <p className="hero__human-note">
                        <span className="hero__human-dot" />

                        Talk it through with a person —
                        no pressure.
                    </p>


                    <p className="hero__disclaimer">
                        <LockKeyhole size={14} />

                        GetSSDISupport is an independent
                        information resource and is not affiliated
                        with or endorsed by the Social Security
                        Administration or any government agency.
                    </p>

                </div>


                {/* =================================================
                    INTERACTIVE STAGE CARD
                ================================================= */}

                <div
                    className="hero__check"
                    id="hero-claim-stage"
                >

                    <div className="hero__card">

                        {/* HEADER */}

                        <div className="hero__stage-header">

                            <span className="hero__stage-kicker">
                                INTERACTIVE • CLAIM STAGE
                            </span>

                            <h2>
                                Where are you right now?
                            </h2>

                        </div>


                        {/* OPTIONS */}

                        <div
                            className="hero__stage-options"
                            role="radiogroup"
                            aria-label="Select your disability claim stage"
                        >

                            {stageData.map((stage) => {

                                const active =
                                    selectedStage === stage.id;

                                return (
                                    <button
                                        type="button"
                                        role="radio"
                                        aria-checked={active}
                                        key={stage.id}
                                        className={`hero__stage-option ${active
                                            ? "hero__stage-option--active"
                                            : ""
                                            }`}
                                        onClick={() =>
                                            setSelectedStage(stage.id)
                                        }
                                    >

                                        <span className="hero__stage-number">
                                            {stage.number}
                                        </span>


                                        <span className="hero__stage-copy">

                                            <strong>
                                                {stage.title}
                                            </strong>

                                            <small>
                                                {stage.subtitle}
                                            </small>

                                        </span>


                                        <span className="hero__stage-radio">

                                            {active && (
                                                <Check size={11} />
                                            )}

                                        </span>

                                    </button>
                                );
                            })}

                        </div>


                        {/* =================================================
                            EXPANDED RESULT
                        ================================================= */}

                        <div
                            className={`hero__stage-result ${selectedData
                                ? "hero__stage-result--visible"
                                : ""
                                }`}
                            aria-live="polite"
                            aria-hidden={!selectedData}
                        >

                            {selectedData && (
                                <div className="hero__stage-result-inner">

                                    <div className="hero__result-divider" />


                                    {/* MINI CARDS */}

                                    <div className="hero__result-grid">

                                        <div className="hero__result-card">

                                            <span>
                                                {selectedData.statusLabel}
                                            </span>

                                            <strong>
                                                {selectedData.statusValue}
                                            </strong>

                                            <div className="hero__result-bar">
                                                <span />
                                            </div>

                                        </div>


                                        <div className="hero__result-card">

                                            <span>
                                                {selectedData.nextLabel}
                                            </span>

                                            <strong>
                                                {selectedData.nextValue}
                                            </strong>

                                            <div className="hero__result-bar hero__result-bar--green">
                                                <span />
                                            </div>

                                        </div>

                                    </div>


                                    {/* DESCRIPTION */}

                                    <p className="hero__result-description">
                                        {selectedData.description}
                                    </p>


                                    {/* CALL CTA */}

                                    <a
                                        href="tel:+18339917969"
                                        className="hero__result-call"
                                    >

                                        <span className="hero__result-call-main">

                                            <Phone size={16} />

                                            {selectedData.cta}

                                        </span>


                                        <span className="hero__result-phone">
                                            +1(833) 991-7969
                                        </span>

                                    </a>


                                    <button
                                        type="button"
                                        onClick={() =>
                                            document
                                                .getElementById(
                                                    "lead-form"
                                                )
                                                ?.scrollIntoView({
                                                    behavior: "smooth",
                                                })
                                        }
                                        className="hero__result-eligibility"
                                    >
                                        Or continue with a free
                                        eligibility review

                                        <ArrowRight size={13} />
                                    </button>


                                    <p className="hero__result-disclaimer">
                                        Information provided is
                                        general and does not guarantee
                                        eligibility, approval, or
                                        disability benefits.
                                    </p>

                                </div>
                            )}

                        </div>

                    </div>

                </div>

            </div>


            {/* =================================================
                BOTTOM TRUST STRIP
            ================================================= */}

            <div className="hero__stats">

                <div className="hero__stats-inner">

                    <div className="hero__stat">

                        <strong>FREE</strong>

                        <span>
                            Eligibility Review
                        </span>

                        <small>
                            Start with a simple review of your
                            situation.
                        </small>

                    </div>


                    <div className="hero__stat">

                        <strong>50 STATES</strong>

                        <span>
                            Nationwide Support
                        </span>

                        <small>
                            Help designed for people across the
                            United States.
                        </small>

                    </div>


                    <div className="hero__stat">

                        <strong>SSDI + SSI</strong>

                        <span>
                            Claim Guidance
                        </span>

                        <small>
                            Understand possible next steps in the
                            disability process.
                        </small>

                    </div>


                    <div className="hero__stat">

                        <strong>NO OBLIGATION</strong>

                        <span>
                            To Check Options
                        </span>

                        <small>
                            Explore your situation without pressure.
                        </small>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default Hero;