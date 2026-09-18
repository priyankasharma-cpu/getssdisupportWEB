import { useState } from "react";
import { Link } from "react-router-dom";
import {
    ArrowRight,
    BadgeCheck,
    BriefcaseBusiness,
    CalendarClock,
    Check,
    ChevronDown,
    CircleDollarSign,
    ClipboardCheck,
    FileHeart,
    HeartPulse,
    LockKeyhole,
    Phone,
    ShieldCheck,
    Sparkles,
    WalletCards,
} from "lucide-react";

import "./eligibility.css";
import EligibilityFactor from "../../components/Eligibility/Eligibility";

const faqItems = [
    {
        question: "What is the basic eligibility requirement for SSDI?",
        answer:
            "SSDI generally requires a qualifying disability or blindness and enough work history under Social Security. The amount of work needed can vary based on the age when your disability began.",
    },
    {
        question: "Can I qualify for SSI if I have not worked enough for SSDI?",
        answer:
            "Possibly. SSI is different from SSDI and does not use the same work-credit requirement. SSI generally considers disability, blindness or age, along with income, resources and other eligibility rules.",
    },
    {
        question: "How long must a disability last?",
        answer:
            "For adults applying based on disability, Social Security generally requires a condition that affects the ability to work for at least 12 months, is expected to last at least 12 months, or is expected to result in death.",
    },
    {
        question: "Can I work and still apply for disability benefits?",
        answer:
            "Work activity and earnings can affect a disability determination. Social Security uses rules including substantial gainful activity when evaluating many disability claims. The rules can differ depending on the program and circumstances.",
    },
    {
        question: "Does having a medical condition automatically qualify me?",
        answer:
            "No. A diagnosis alone does not automatically establish eligibility. Social Security evaluates the severity of the condition, how it affects functioning and work, medical evidence, and other applicable requirements.",
    },
    {
        question: "How do I know whether SSDI or SSI may apply to me?",
        answer:
            "SSDI is generally connected to your work history, while SSI is a needs-based program that considers income and resources. Some people may potentially meet requirements for both programs.",
    },
];


const Eligibility = () => {
    const [openFaq, setOpenFaq] = useState(0);

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };


    return (
        <main className="eligibility-page">

            {/* =====================================================
                HERO
            ===================================================== */}

            <section className="eligibility-hero">

                <div
                    className="eligibility-hero__glow eligibility-hero__glow--one"
                    aria-hidden="true"
                />

                <div
                    className="eligibility-hero__glow eligibility-hero__glow--two"
                    aria-hidden="true"
                />

                <div className="eligibility-container eligibility-hero__grid">

                    {/* LEFT */}

                    <div className="eligibility-hero__content">

                        <div className="eligibility-eyebrow">
                            <ShieldCheck size={17} />

                            <span>
                                SSDI & SSI Eligibility Guide
                            </span>
                        </div>


                        <h1 className="eligibility-hero__title">

                            Could You Be Eligible for

                            <span>
                                {" "}SSDI or SSI Benefits?
                            </span>

                        </h1>


                        <p className="eligibility-hero__description">
                            Learn about common Social Security disability
                            eligibility factors and take a simple first step
                            toward understanding which program may apply to
                            your situation.
                        </p>


                        <div className="eligibility-hero__trust">

                            <div>
                                <Check size={15} />
                                Free initial review
                            </div>

                            <div>
                                <Check size={15} />
                                No obligation
                            </div>

                            <div>
                                <Check size={15} />
                                Private & confidential
                            </div>

                        </div>


                        <div className="eligibility-hero__actions">

                            <Link
                                to="/#lead-form"
                                className="eligibility-btn eligibility-btn--primary"
                            >
                                See If You May Qualify
                                <ArrowRight size={18} />
                            </Link>


                            <a
                                href="tel:+18339917969"
                                className="eligibility-call-btn"
                            >

                                <span className="eligibility-call-btn__icon">
                                    <Phone size={19} />
                                </span>

                                <span className="eligibility-call-btn__text">
                                    <small>
                                        Prefer to talk?
                                    </small>

                                    <strong>
                                        +1 (833) 991-7969
                                    </strong>
                                </span>

                            </a>

                        </div>


                        <div className="eligibility-hero__privacy">
                            <LockKeyhole size={14} />

                            Your information is handled with care.
                        </div>

                    </div>


                    {/* RIGHT ELIGIBILITY CARD */}

                    <div className="eligibility-hero__panel">

                        <div className="eligibility-panel">

                            <div className="eligibility-panel__top">

                                <div className="eligibility-panel__icon">
                                    <ClipboardCheck size={25} />
                                </div>

                                <div>
                                    <span>
                                        QUICK ELIGIBILITY CHECK
                                    </span>

                                    <h2>
                                        Does this sound like you?
                                    </h2>
                                </div>

                            </div>


                            <p className="eligibility-panel__intro">
                                These are some common factors that may be
                                relevant when exploring disability benefits.
                            </p>


                            <div className="eligibility-panel__list">

                                <div className="eligibility-panel__item">

                                    <span>
                                        <Check />
                                    </span>

                                    <div>
                                        <strong>
                                            Your condition affects your ability to work
                                        </strong>

                                        <small>
                                            Physical or mental limitations make working difficult.
                                        </small>
                                    </div>

                                </div>


                                <div className="eligibility-panel__item">

                                    <span>
                                        <Check />
                                    </span>

                                    <div>
                                        <strong>
                                            Your condition is long-term
                                        </strong>

                                        <small>
                                            It has lasted or may be expected to last 12 months or more.
                                        </small>
                                    </div>

                                </div>


                                <div className="eligibility-panel__item">

                                    <span>
                                        <Check />
                                    </span>

                                    <div>
                                        <strong>
                                            You have medical treatment or records
                                        </strong>

                                        <small>
                                            Medical evidence can help document your limitations.
                                        </small>
                                    </div>

                                </div>


                                <div className="eligibility-panel__item">

                                    <span>
                                        <Check />
                                    </span>

                                    <div>
                                        <strong>
                                            You have work history or limited resources
                                        </strong>

                                        <small>
                                            Different financial rules apply to SSDI and SSI.
                                        </small>
                                    </div>

                                </div>

                            </div>


                            <Link
                                to="/#lead-form"
                                className="eligibility-panel__button"
                            >
                                Start My Eligibility Review

                                <ArrowRight size={18} />
                            </Link>


                            <div className="eligibility-panel__footer">

                                <ShieldCheck size={15} />

                                <span>
                                    Checking eligibility does not guarantee approval.
                                </span>

                            </div>

                        </div>


                        <div className="eligibility-panel-badge">

                            <Sparkles size={18} />

                            <span>
                                Simple first step
                            </span>

                        </div>

                    </div>

                </div>

            </section>


            {/* =====================================================
                TRUST BAR
            ===================================================== */}

            <section className="eligibility-trust-bar">

                <div className="eligibility-container eligibility-trust-bar__grid">

                    <div className="eligibility-trust-bar__item">

                        <ShieldCheck />

                        <div>
                            <strong>
                                Privacy Focused
                            </strong>

                            <span>
                                Information handled with care
                            </span>
                        </div>

                    </div>


                    <div className="eligibility-trust-bar__item">

                        <ClipboardCheck />

                        <div>
                            <strong>
                                Simple Review
                            </strong>

                            <span>
                                Easy starting questions
                            </span>
                        </div>

                    </div>


                    <div className="eligibility-trust-bar__item">

                        <BadgeCheck />

                        <div>
                            <strong>
                                Clear Guidance
                            </strong>

                            <span>
                                Understand your options
                            </span>
                        </div>

                    </div>


                    <div className="eligibility-trust-bar__item">

                        <Phone />

                        <div>
                            <strong>
                                Phone Support
                            </strong>

                            <span>
                                Call when you're ready
                            </span>
                        </div>

                    </div>

                </div>

            </section>


            {/* =====================================================
                SSDI VS SSI
            ===================================================== */}

            <section className="eligibility-programs">

                <div className="eligibility-container">

                    <div className="eligibility-heading">

                        <span className="eligibility-label">
                            UNDERSTANDING YOUR OPTIONS
                        </span>

                        <h2>
                            SSDI and SSI Have
                            <span> Different Eligibility Rules</span>
                        </h2>

                        <p>
                            Both programs can provide financial assistance,
                            but they use different non-medical eligibility
                            requirements.
                        </p>

                    </div>


                    <div className="eligibility-programs__grid">

                        {/* SSDI */}

                        <article className="eligibility-program-card eligibility-program-card--ssdi">

                            <div className="eligibility-program-card__header">

                                <div className="eligibility-program-card__icon">
                                    <BriefcaseBusiness />
                                </div>

                                <div>
                                    <span>
                                        PROGRAM 01
                                    </span>

                                    <h3>
                                        SSDI
                                    </h3>

                                    <small>
                                        Social Security Disability Insurance
                                    </small>
                                </div>

                            </div>


                            <p className="eligibility-program-card__description">
                                SSDI is generally designed for people with a
                                qualifying disability who have accumulated
                                sufficient work history under Social Security.
                            </p>


                            <div className="eligibility-program-card__requirements">

                                <div>
                                    <Check />

                                    <span>
                                        A qualifying disability or blindness
                                    </span>
                                </div>


                                <div>
                                    <Check />

                                    <span>
                                        Sufficient work history
                                    </span>
                                </div>


                                <div>
                                    <Check />

                                    <span>
                                        Enough applicable Social Security work credits
                                    </span>
                                </div>


                                <div>
                                    <Check />

                                    <span>
                                        Work activity considered under SSA rules
                                    </span>
                                </div>

                            </div>


                            <div className="eligibility-program-card__bottom">

                                <span>
                                    <BriefcaseBusiness size={17} />
                                    Work-history based
                                </span>

                                <Link to="/ssdi">
                                    Learn About SSDI
                                    <ArrowRight size={15} />
                                </Link>

                            </div>

                        </article>


                        {/* SSI */}

                        <article className="eligibility-program-card eligibility-program-card--ssi">

                            <div className="eligibility-program-card__header">

                                <div className="eligibility-program-card__icon">
                                    <CircleDollarSign />
                                </div>

                                <div>
                                    <span>
                                        PROGRAM 02
                                    </span>

                                    <h3>
                                        SSI
                                    </h3>

                                    <small>
                                        Supplemental Security Income
                                    </small>
                                </div>

                            </div>


                            <p className="eligibility-program-card__description">
                                SSI is generally a needs-based program for
                                people with limited income and resources who
                                also meet applicable age, blindness, or
                                disability requirements.
                            </p>


                            <div className="eligibility-program-card__requirements">

                                <div>
                                    <Check />

                                    <span>
                                        Limited income
                                    </span>
                                </div>


                                <div>
                                    <Check />

                                    <span>
                                        Limited countable resources
                                    </span>
                                </div>


                                <div>
                                    <Check />

                                    <span>
                                        Disability, blindness, or age 65+
                                    </span>
                                </div>


                                <div>
                                    <Check />

                                    <span>
                                        Other residency and eligibility requirements
                                    </span>
                                </div>

                            </div>


                            <div className="eligibility-program-card__bottom">

                                <span>
                                    <WalletCards size={17} />
                                    Needs-based
                                </span>

                                <Link to="/ssi">
                                    Learn About SSI
                                    <ArrowRight size={15} />
                                </Link>

                            </div>

                        </article>

                    </div>

                </div>

            </section>


            {/* =====================================================
                ELIGIBILITY FACTORS
            ===================================================== */}


            <EligibilityFactor />

            {/* =====================================================
                MEDICAL SECTION
            ===================================================== */}

            <section className="eligibility-medical">

                <div className="eligibility-container eligibility-medical__grid">

                    <div className="eligibility-medical__visual">

                        <div className="eligibility-medical__circle">

                            <div className="eligibility-medical__main-icon">
                                <HeartPulse />
                            </div>


                            <div className="eligibility-medical__orbit eligibility-medical__orbit--one">
                                <FileHeart />
                            </div>


                            <div className="eligibility-medical__orbit eligibility-medical__orbit--two">
                                <CalendarClock />
                            </div>


                            <div className="eligibility-medical__orbit eligibility-medical__orbit--three">
                                <BriefcaseBusiness />
                            </div>

                        </div>


                        <div className="eligibility-medical__floating">

                            <BadgeCheck />

                            <div>
                                <strong>
                                    Medical Evidence Matters
                                </strong>

                                <span>
                                    Records can help document how your condition affects you.
                                </span>
                            </div>

                        </div>

                    </div>


                    <div className="eligibility-medical__content">

                        <span className="eligibility-label">
                            MEDICAL ELIGIBILITY
                        </span>


                        <h2>
                            It's Not Just the Diagnosis —
                            <span> How Your Condition Affects You Matters</span>
                        </h2>


                        <p>
                            Having a diagnosed condition does not automatically
                            mean someone will qualify for disability benefits.
                            Social Security evaluates medical evidence and how
                            an impairment affects a person's ability to
                            function and work.
                        </p>


                        <div className="eligibility-medical__list">

                            <div>

                                <span>
                                    <HeartPulse />
                                </span>

                                <div>
                                    <strong>
                                        Severity of Your Condition
                                    </strong>

                                    <p>
                                        Your impairment must meet Social
                                        Security's applicable disability rules.
                                    </p>
                                </div>

                            </div>


                            <div>

                                <span>
                                    <CalendarClock />
                                </span>

                                <div>
                                    <strong>
                                        Expected Duration
                                    </strong>

                                    <p>
                                        Disability generally must last or be
                                        expected to last at least 12 months, or
                                        be expected to result in death.
                                    </p>
                                </div>

                            </div>


                            <div>

                                <span>
                                    <FileHeart />
                                </span>

                                <div>
                                    <strong>
                                        Supporting Medical Evidence
                                    </strong>

                                    <p>
                                        Treatment records, tests, medications
                                        and provider information may be used
                                        during the evaluation.
                                    </p>
                                </div>

                            </div>

                        </div>


                        <Link
                            to="/conditions"
                            className="eligibility-text-link"
                        >
                            Explore Disability Conditions

                            <ArrowRight size={17} />
                        </Link>

                    </div>

                </div>

            </section>


            {/* =====================================================
                CALL CTA
            ===================================================== */}

            <section className="eligibility-callout">

                <div className="eligibility-container eligibility-callout__inner">

                    <div className="eligibility-callout__icon">

                        <Phone />

                        <span className="eligibility-callout__ring" />

                    </div>


                    <div className="eligibility-callout__content">

                        <span>
                            NOT SURE WHERE TO START?
                        </span>

                        <h2>
                            Have Questions About Your Eligibility?
                        </h2>

                        <p>
                            Call to learn more about SSDI and SSI eligibility
                            and explore possible next steps.
                        </p>

                    </div>


                    <a
                        href="tel:+18339917969"
                        className="eligibility-callout__button"
                    >

                        <Phone size={19} />

                        <span>
                            <small>
                                Call Now
                            </small>

                            +1 (833) 991-7969
                        </span>

                    </a>

                </div>

            </section>


            {/* =====================================================
                FAQ
            ===================================================== */}

            <section className="eligibility-faq">

                <div className="eligibility-container eligibility-faq__grid">

                    <div className="eligibility-faq__intro">

                        <span className="eligibility-label">
                            ELIGIBILITY FAQ
                        </span>


                        <h2>
                            Common Questions About
                            <span> SSDI & SSI Eligibility</span>
                        </h2>


                        <p>
                            Get quick answers to common questions about Social
                            Security disability eligibility requirements.
                        </p>


                        <div className="eligibility-faq__help">

                            <div>
                                <Phone />
                            </div>

                            <span>
                                <small>
                                    Still have questions?
                                </small>

                                <a href="tel:+18339917969">
                                    Call +1 (833) 991-7969
                                </a>
                            </span>

                        </div>

                    </div>


                    <div className="eligibility-faq__items">

                        {faqItems.map((item, index) => (

                            <div
                                className={`eligibility-faq__item ${openFaq === index
                                    ? "eligibility-faq__item--open"
                                    : ""
                                    }`}
                                key={item.question}
                            >

                                <button
                                    type="button"
                                    onClick={() => toggleFaq(index)}
                                    aria-expanded={openFaq === index}
                                >

                                    <span>
                                        {item.question}
                                    </span>

                                    <ChevronDown />

                                </button>


                                <div className="eligibility-faq__answer">

                                    <div>
                                        <p>
                                            {item.answer}
                                        </p>
                                    </div>

                                </div>

                            </div>

                        ))}

                    </div>

                </div>

            </section>


            {/* =====================================================
                FINAL CTA
            ===================================================== */}

            <section className="eligibility-final">

                <div
                    className="eligibility-final__glow"
                    aria-hidden="true"
                />

                <div className="eligibility-container eligibility-final__content">

                    <div className="eligibility-final__badge">
                        <Sparkles size={16} />
                        Your Next Step Starts Here
                    </div>


                    <h2>
                        Wondering If You May Be
                        <span> Eligible for Disability Benefits?</span>
                    </h2>


                    <p>
                        Take a simple first step toward understanding your
                        SSDI or SSI options.
                    </p>


                    <div className="eligibility-final__actions">

                        <Link
                            to="/#lead-form"
                            className="eligibility-btn eligibility-btn--primary"
                        >
                            Check My Eligibility
                            <ArrowRight size={18} />
                        </Link>


                        <a
                            href="tel:+18339917969"
                            className="eligibility-final__call"
                        >
                            <Phone size={19} />

                            Call +1 (833) 991-7969
                        </a>

                    </div>


                    <div className="eligibility-final__note">

                        <ShieldCheck size={15} />

                        Free initial review • No obligation • Private & confidential

                    </div>

                </div>

            </section>

        </main>
    );
};

export default Eligibility;