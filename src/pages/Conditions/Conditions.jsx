import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
    Activity,
    ArrowRight,
    BadgeCheck,
    Bone,
    Brain,
    Check,
    ChevronDown,
    CircleAlert,
    Ear,
    Eye,
    FileHeart,
    HeartPulse,
    LockKeyhole,
    Phone,
    ShieldCheck,
    Sparkles,
    Stethoscope,
    UserCheck,
    Waves,
} from "lucide-react";

import "./conditions.css";


const conditions = [
    {
        icon: Bone,
        title: "Musculoskeletal Conditions",
        description:
            "Conditions involving the back, joints, bones, muscles, or mobility may affect standing, walking, lifting, sitting, and other work activities.",
        examples: [
            "Back & spine disorders",
            "Arthritis",
            "Joint disorders",
            "Mobility limitations",
        ],
    },
    {
        icon: HeartPulse,
        title: "Cardiovascular Conditions",
        description:
            "Heart and circulatory conditions may affect stamina, physical activity, concentration, and the ability to perform certain types of work.",
        examples: [
            "Heart disease",
            "Heart failure",
            "Coronary conditions",
            "Circulatory disorders",
        ],
    },
    {
        icon: Brain,
        title: "Mental Health Conditions",
        description:
            "Certain mental health conditions may significantly affect concentration, social interaction, adaptation, attendance, or completing work tasks.",
        examples: [
            "Depressive disorders",
            "Anxiety-related disorders",
            "Bipolar disorder",
            "Trauma-related disorders",
        ],
    },
    {
        icon: Activity,
        title: "Neurological Conditions",
        description:
            "Neurological disorders can affect movement, memory, communication, coordination, strength, and other abilities important for work.",
        examples: [
            "Epilepsy",
            "Multiple sclerosis",
            "Parkinsonian syndromes",
            "Neurological disorders",
        ],
    },
    {
        icon: Waves,
        title: "Respiratory Conditions",
        description:
            "Chronic respiratory conditions may limit breathing, endurance, physical exertion, and the ability to work in certain environments.",
        examples: [
            "Chronic respiratory disorders",
            "COPD",
            "Severe asthma",
            "Pulmonary conditions",
        ],
    },
    {
        icon: Stethoscope,
        title: "Immune & Systemic Disorders",
        description:
            "Some immune and systemic disorders may cause persistent symptoms or functional limitations that interfere with regular work activities.",
        examples: [
            "Autoimmune disorders",
            "Inflammatory conditions",
            "Connective tissue disorders",
            "Systemic conditions",
        ],
    },
    {
        icon: Eye,
        title: "Vision Conditions",
        description:
            "Significant vision loss or other qualifying visual disorders may affect reading, navigation, safety, and the performance of work tasks.",
        examples: [
            "Loss of visual acuity",
            "Visual field limitations",
            "Severe vision impairment",
            "Certain eye disorders",
        ],
    },
    {
        icon: Ear,
        title: "Hearing & Communication",
        description:
            "Severe hearing loss and certain communication disorders may affect a person's ability to communicate effectively in a work setting.",
        examples: [
            "Hearing loss",
            "Communication disorders",
            "Speech limitations",
            "Sensory impairments",
        ],
    },
    {
        icon: FileHeart,
        title: "Other Serious Conditions",
        description:
            "Many other physical or mental impairments may be considered when they cause severe and long-term functional limitations.",
        examples: [
            "Digestive disorders",
            "Kidney disorders",
            "Blood disorders",
            "Other chronic conditions",
        ],
    },
];


const evaluationFactors = [
    {
        number: "01",
        icon: FileHeart,
        title: "Medical Evidence",
        description:
            "Medical records, test results, treatment history, medications, and information from medical providers can help document an impairment.",
    },
    {
        number: "02",
        icon: Activity,
        title: "Severity",
        description:
            "Social Security considers how severe the impairment is and how significantly it limits basic work-related activities.",
    },
    {
        number: "03",
        icon: UserCheck,
        title: "Functional Limitations",
        description:
            "The evaluation can consider what you are still able to do physically and mentally despite your medical condition.",
    },
    {
        number: "04",
        icon: BadgeCheck,
        title: "Duration",
        description:
            "For adult disability claims, the condition generally must have lasted or be expected to last at least 12 months, or be expected to result in death.",
    },
];


const faqs = [
    {
        question: "What medical conditions may qualify for disability benefits?",
        answer:
            "Many physical and mental impairments may potentially be considered. Eligibility is not based only on the name of a diagnosis. Social Security evaluates medical evidence, severity, duration, functional limitations, work-related factors, and other applicable requirements.",
    },
    {
        question: "Does my condition have to appear on Social Security's medical listings?",
        answer:
            "Not necessarily. Social Security may find someone disabled if an impairment meets or medically equals a listing, but the evaluation can also continue to consider the person's remaining functional capacity and ability to perform past or other work.",
    },
    {
        question: "Does having a diagnosis mean I automatically qualify?",
        answer:
            "No. A diagnosis by itself does not automatically establish disability. Social Security generally needs medical evidence showing the impairment and evaluates how it limits functioning and the ability to work.",
    },
    {
        question: "Can mental health conditions be considered?",
        answer:
            "Yes. Social Security evaluates qualifying mental disorders as well as physical impairments. The impact and severity of the condition must be supported by appropriate evidence.",
    },
    {
        question: "What if I have more than one medical condition?",
        answer:
            "Social Security can consider the combined effect of multiple medically determinable impairments when evaluating disability, including impairments that may interact with one another.",
    },
    {
        question: "How long does my condition need to last?",
        answer:
            "For adult disability claims, Social Security generally requires the impairment to have lasted or be expected to last for a continuous period of at least 12 months, or be expected to result in death.",
    },
];


const Conditions = () => {
    const [openFaq, setOpenFaq] = useState(0);

    return (
        <>
            <Helmet>
                <title>
                    Conditions That May Qualify for Disability | GetSSDISupport
                </title>

                <meta
                    name="description"
                    content="Learn about physical and mental health conditions that may be considered for SSDI or SSI disability benefits and how Social Security evaluates disability."
                />

                <meta name="robots" content="index, follow" />

                <link
                    rel="canonical"
                    href="https://getssdisupport.com/conditions"
                />

                <meta
                    property="og:title"
                    content="Conditions That May Qualify for Disability | GetSSDISupport"
                />

                <meta
                    property="og:description"
                    content="Explore medical conditions and factors Social Security may consider when evaluating SSDI and SSI disability claims."
                />

                <meta
                    property="og:url"
                    content="https://getssdisupport.com/conditions"
                />

                <meta property="og:type" content="website" />
            </Helmet>


            <main className="conditions-page">

                {/* =================================================
                    HERO
                ================================================= */}

                <section className="conditions-hero">

                    <div className="conditions-hero__glow conditions-hero__glow--one" />
                    <div className="conditions-hero__glow conditions-hero__glow--two" />

                    <div className="conditions-container conditions-hero__grid">

                        <div className="conditions-hero__content">

                            <div className="conditions-eyebrow">
                                <HeartPulse size={17} />

                                <span>
                                    Disability Conditions Guide
                                </span>
                            </div>


                            <h1>
                                What Medical Conditions May Be

                                <span>
                                    {" "}Considered for Disability Benefits?
                                </span>
                            </h1>


                            <p className="conditions-hero__description">
                                Physical and mental health conditions can affect
                                people in very different ways. Learn how medical
                                conditions and functional limitations may be
                                considered when Social Security evaluates a
                                disability claim.
                            </p>


                            <div className="conditions-hero__points">

                                <div>
                                    <Check />
                                    Physical conditions
                                </div>

                                <div>
                                    <Check />
                                    Mental health conditions
                                </div>

                                <div>
                                    <Check />
                                    Multiple impairments
                                </div>

                            </div>


                            <div className="conditions-hero__actions">

                                <Link
                                    to="/#lead-form"
                                    className="conditions-primary-btn"
                                >
                                    See If You May Qualify
                                    <ArrowRight size={18} />
                                </Link>


                                <a
                                    href="tel:+18666207617"
                                    className="conditions-call-btn"
                                >
                                    <span>
                                        <Phone />
                                    </span>

                                    <div>
                                        <small>
                                            Questions? Call Us
                                        </small>

                                        <strong>
                                            (866) 620-7617
                                        </strong>
                                    </div>
                                </a>

                            </div>


                            <div className="conditions-hero__privacy">
                                <LockKeyhole size={14} />
                                Free initial review • No obligation
                            </div>

                        </div>


                        {/* HERO VISUAL */}

                        <div className="conditions-hero__visual">

                            <div className="conditions-visual">

                                <div className="conditions-visual__top">
                                    <div>
                                        <span>UNDERSTANDING DISABILITY</span>

                                        <h2>
                                            Your Diagnosis Is Only Part of the Picture
                                        </h2>
                                    </div>

                                    <div className="conditions-visual__shield">
                                        <ShieldCheck />
                                    </div>
                                </div>


                                <p className="conditions-visual__intro">
                                    Social Security generally looks at how your
                                    medically determinable impairment affects
                                    your ability to function and work.
                                </p>


                                <div className="conditions-visual__center">

                                    <div className="conditions-visual__pulse">
                                        <HeartPulse />
                                    </div>


                                    <div className="conditions-visual__item conditions-visual__item--one">
                                        <FileHeart />
                                        <span>Evidence</span>
                                    </div>


                                    <div className="conditions-visual__item conditions-visual__item--two">
                                        <Activity />
                                        <span>Severity</span>
                                    </div>


                                    <div className="conditions-visual__item conditions-visual__item--three">
                                        <UserCheck />
                                        <span>Function</span>
                                    </div>

                                </div>


                                <div className="conditions-visual__bottom">

                                    <CircleAlert />

                                    <p>
                                        A diagnosis alone does not guarantee
                                        eligibility for SSDI or SSI benefits.
                                    </p>

                                </div>

                            </div>


                            <div className="conditions-hero__floating">

                                <BadgeCheck />

                                <div>
                                    <strong>
                                        Individual Evaluation
                                    </strong>

                                    <span>
                                        Every situation is different
                                    </span>
                                </div>

                            </div>

                        </div>

                    </div>

                </section>


                {/* =================================================
                    INTRO
                ================================================= */}

                <section className="conditions-intro">

                    <div className="conditions-container conditions-intro__grid">

                        <div className="conditions-intro__label">

                            <span>
                                MEDICAL CONDITIONS
                            </span>

                            <h2>
                                Disability Can Look
                                <strong> Different for Everyone</strong>
                            </h2>

                        </div>


                        <div className="conditions-intro__content">

                            <p>
                                Social Security disability programs are not
                                limited to one particular type of medical
                                condition. Both physical and mental impairments
                                may potentially be considered when they meet
                                applicable requirements.
                            </p>

                            <p>
                                The key question is often not simply
                                <strong> “What condition do you have?” </strong>
                                but how severe it is, how long it is expected to
                                last, and how it affects your ability to perform
                                work-related activities.
                            </p>

                        </div>

                    </div>

                </section>


                {/* =================================================
                    CONDITION CARDS
                ================================================= */}

                <section className="conditions-library">

                    <div className="conditions-container">

                        <div className="conditions-heading">

                            <span className="conditions-label">
                                COMMON CATEGORIES
                            </span>

                            <h2>
                                Conditions Social Security
                                <span> May Evaluate</span>
                            </h2>

                            <p>
                                The examples below represent broad categories
                                of impairments. They do not guarantee eligibility
                                or represent a complete list.
                            </p>

                        </div>


                        <div className="conditions-library__grid">

                            {conditions.map((condition, index) => {
                                const Icon = condition.icon;

                                return (
                                    <article
                                        className="condition-card"
                                        key={condition.title}
                                    >

                                        <span className="condition-card__number">
                                            {String(index + 1).padStart(2, "0")}
                                        </span>


                                        <div className="condition-card__icon">
                                            <Icon />
                                        </div>


                                        <h3>
                                            {condition.title}
                                        </h3>


                                        <p>
                                            {condition.description}
                                        </p>


                                        <div className="condition-card__examples">

                                            {condition.examples.map((example) => (
                                                <span key={example}>
                                                    <Check />
                                                    {example}
                                                </span>
                                            ))}

                                        </div>

                                    </article>
                                );
                            })}

                        </div>


                        <div className="conditions-library__notice">

                            <CircleAlert />

                            <p>
                                <strong>Important:</strong> This is not a
                                complete list of conditions. Social Security
                                evaluates each claim using its applicable
                                medical and non-medical requirements.
                            </p>

                        </div>

                    </div>

                </section>


                {/* =================================================
                    DIAGNOSIS SECTION
                ================================================= */}

                <section className="conditions-diagnosis">

                    <div className="conditions-container conditions-diagnosis__grid">

                        <div className="conditions-diagnosis__visual">

                            <div className="conditions-diagnosis__card">

                                <div className="conditions-diagnosis__icon">
                                    <FileHeart />
                                </div>

                                <span>
                                    THE BIGGER PICTURE
                                </span>

                                <h3>
                                    Medical Condition
                                </h3>

                                <div className="conditions-diagnosis__plus">
                                    +
                                </div>

                                <div className="conditions-diagnosis__mini">
                                    <Activity />
                                    Severity & limitations
                                </div>

                                <div className="conditions-diagnosis__mini">
                                    <FileHeart />
                                    Medical evidence
                                </div>

                                <div className="conditions-diagnosis__mini">
                                    <UserCheck />
                                    Ability to function
                                </div>


                                <div className="conditions-diagnosis__result">
                                    <ArrowRight />

                                    <span>
                                        Individual disability evaluation
                                    </span>
                                </div>

                            </div>

                        </div>


                        <div className="conditions-diagnosis__content">

                            <span className="conditions-label">
                                MORE THAN A DIAGNOSIS
                            </span>


                            <h2>
                                Having a Medical Condition Does Not
                                <span> Automatically Mean Disability</span>
                            </h2>


                            <p>
                                A medical diagnosis is important, but Social
                                Security generally needs evidence showing how
                                severe the impairment is and how it affects your
                                ability to perform work-related activities.
                            </p>


                            <div className="conditions-diagnosis__list">

                                <div>
                                    <span>
                                        <Check />
                                    </span>

                                    <p>
                                        Your medical condition must be
                                        established by appropriate medical
                                        evidence.
                                    </p>
                                </div>


                                <div>
                                    <span>
                                        <Check />
                                    </span>

                                    <p>
                                        Social Security considers physical and
                                        mental limitations caused by your
                                        impairment.
                                    </p>
                                </div>


                                <div>
                                    <span>
                                        <Check />
                                    </span>

                                    <p>
                                        Your age, education, work history, and
                                        remaining functional abilities can be
                                        relevant at certain stages of the
                                        disability evaluation.
                                    </p>
                                </div>


                                <div>
                                    <span>
                                        <Check />
                                    </span>

                                    <p>
                                        The combined effect of multiple
                                        impairments may also be considered.
                                    </p>
                                </div>

                            </div>


                            <Link
                                to="/eligibility"
                                className="conditions-text-link"
                            >
                                Learn About Eligibility
                                <ArrowRight size={17} />
                            </Link>

                        </div>

                    </div>

                </section>


                {/* =================================================
                    EVALUATION FACTORS
                ================================================= */}

                <section className="conditions-evaluation">

                    <div className="conditions-container">

                        <div className="conditions-heading">

                            <span className="conditions-label">
                                WHAT MAY BE CONSIDERED
                            </span>

                            <h2>
                                Important Parts of a
                                <span> Disability Evaluation</span>
                            </h2>

                            <p>
                                Medical evidence and functional limitations can
                                play an important role in Social Security's
                                disability determination process.
                            </p>

                        </div>


                        <div className="conditions-evaluation__grid">

                            {evaluationFactors.map((factor) => {
                                const Icon = factor.icon;

                                return (
                                    <article
                                        className="conditions-evaluation__card"
                                        key={factor.number}
                                    >

                                        <span className="conditions-evaluation__number">
                                            {factor.number}
                                        </span>


                                        <div className="conditions-evaluation__icon">
                                            <Icon />
                                        </div>


                                        <h3>
                                            {factor.title}
                                        </h3>


                                        <p>
                                            {factor.description}
                                        </p>

                                    </article>
                                );
                            })}

                        </div>

                    </div>

                </section>


                {/* =================================================
                    CALL CTA
                ================================================= */}

                <section className="conditions-call-section">

                    <div className="conditions-container">

                        <div className="conditions-call">

                            <div className="conditions-call__icon">

                                <Phone />

                                <span />

                            </div>


                            <div className="conditions-call__content">

                                <small>
                                    HAVE QUESTIONS ABOUT YOUR CONDITION?
                                </small>

                                <h2>
                                    Not Sure If Your Condition May Be Considered?
                                </h2>

                                <p>
                                    Call to learn more about common SSDI and SSI
                                    eligibility factors and possible next steps.
                                </p>

                            </div>


                            <a
                                href="tel:+18666207617"
                                className="conditions-call__button"
                            >
                                <Phone size={19} />

                                <div>
                                    <small>
                                        Call Now
                                    </small>

                                    <strong>
                                        (866) 620-7617
                                    </strong>
                                </div>
                            </a>

                        </div>

                    </div>

                </section>


                {/* =================================================
                    SIMPLE STEPS
                ================================================= */}

                <section className="conditions-steps">

                    <div className="conditions-container">

                        <div className="conditions-heading">

                            <span className="conditions-label">
                                EXPLORE YOUR OPTIONS
                            </span>

                            <h2>
                                Your Next Step Can Be
                                <span> Simple</span>
                            </h2>

                        </div>


                        <div className="conditions-steps__grid">

                            <article>
                                <span>01</span>

                                <div>
                                    <FileHeart />
                                </div>

                                <h3>
                                    Tell Us About Your Condition
                                </h3>

                                <p>
                                    Share basic information about your medical
                                    condition and how it affects everyday life
                                    and work.
                                </p>
                            </article>


                            <div className="conditions-steps__line" />


                            <article>
                                <span>02</span>

                                <div>
                                    <UserCheck />
                                </div>

                                <h3>
                                    Review Common Factors
                                </h3>

                                <p>
                                    Explore whether your circumstances may align
                                    with common disability eligibility factors.
                                </p>
                            </article>


                            <div className="conditions-steps__line" />


                            <article>
                                <span>03</span>

                                <div>
                                    <ArrowRight />
                                </div>

                                <h3>
                                    Take Your Next Step
                                </h3>

                                <p>
                                    Continue your eligibility review or call to
                                    learn more about possible next steps.
                                </p>
                            </article>

                        </div>


                        <div className="conditions-steps__action">

                            <Link
                                to="/#lead-form"
                                className="conditions-primary-btn"
                            >
                                Check My Eligibility
                                <ArrowRight size={18} />
                            </Link>

                        </div>

                    </div>

                </section>


                {/* =================================================
                    FAQ
                ================================================= */}

                <section className="conditions-faq">

                    <div className="conditions-container conditions-faq__grid">

                        <div className="conditions-faq__intro">

                            <span className="conditions-label">
                                CONDITIONS FAQ
                            </span>

                            <h2>
                                Questions About
                                <span> Disability Conditions?</span>
                            </h2>

                            <p>
                                Learn more about how medical conditions may be
                                considered during the disability evaluation
                                process.
                            </p>


                            <div className="conditions-faq__support">

                                <span>
                                    <Phone />
                                </span>

                                <div>
                                    <small>
                                        Need more information?
                                    </small>

                                    <a href="tel:+18666207617">
                                        Call (866) 620-7617
                                    </a>
                                </div>

                            </div>

                        </div>


                        <div className="conditions-faq__list">

                            {faqs.map((faq, index) => (

                                <div
                                    className={`conditions-faq__item ${openFaq === index
                                            ? "conditions-faq__item--open"
                                            : ""
                                        }`}
                                    key={faq.question}
                                >

                                    <button
                                        type="button"
                                        onClick={() =>
                                            setOpenFaq(
                                                openFaq === index
                                                    ? null
                                                    : index
                                            )
                                        }
                                        aria-expanded={openFaq === index}
                                    >
                                        <span>
                                            {faq.question}
                                        </span>

                                        <ChevronDown />
                                    </button>


                                    <div className="conditions-faq__answer">

                                        <div>
                                            <p>
                                                {faq.answer}
                                            </p>
                                        </div>

                                    </div>

                                </div>

                            ))}

                        </div>

                    </div>

                </section>


                {/* =================================================
                    FINAL CTA
                ================================================= */}

                <section className="conditions-final">

                    <div className="conditions-final__glow" />

                    <div className="conditions-container conditions-final__content">

                        <div className="conditions-final__badge">
                            <Sparkles />
                            Take the First Step
                        </div>


                        <h2>
                            Your Condition Affects More Than a
                            <span> Medical Record.</span>
                        </h2>


                        <p>
                            If a physical or mental condition is making it
                            difficult to work, explore whether SSDI or SSI may
                            be relevant to your situation.
                        </p>


                        <div className="conditions-final__actions">

                            <Link
                                to="/#lead-form"
                                className="conditions-primary-btn"
                            >
                                See If I May Qualify
                                <ArrowRight size={18} />
                            </Link>


                            <a
                                href="tel:+18666207617"
                                className="conditions-final__call"
                            >
                                <Phone />
                                Call (866) 620-7617
                            </a>

                        </div>


                        <div className="conditions-final__note">
                            <ShieldCheck />
                            Free initial review • No obligation • Private & confidential
                        </div>

                    </div>

                </section>

            </main>
        </>
    );
};

export default Conditions;