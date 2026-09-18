import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import {
    ArrowLeft,
    ArrowRight,
    BadgeCheck,
    BookOpenCheck,
    BriefcaseBusiness,
    Check,
    ChevronDown,
    ChevronRight,
    CircleDollarSign,
    ClipboardCheck,
    ExternalLink,
    FileCheck2,
    FileText,
    HeartHandshake,
    Home,
    Info,
    Landmark,
    LockKeyhole,
    PhoneIncoming,
    Scale,
    SearchCheck,
    ShieldCheck,
    Sparkles,
    Stethoscope,
    Users,
    WalletCards,
} from "lucide-react";

import "./disability-resources.css";


/* =========================================================
   DATA
========================================================= */

const ssdiResources = [
    {
        icon: BriefcaseBusiness,
        title: "Work History & Credits",
        text:
            "SSDI generally requires enough qualifying Social Security work credits. The number of credits needed can depend on the age at which disability begins.",
    },
    {
        icon: Stethoscope,
        title: "Medical Evidence",
        text:
            "Medical records, treatment history, tests, medications, symptoms, and functional limitations may all help document how a condition affects you.",
    },
    {
        icon: FileText,
        title: "Application Preparation",
        text:
            "Organizing medical providers, treatment dates, employment history, medications, and other relevant information can make the application process easier to navigate.",
    },
    {
        icon: Scale,
        title: "Denied Claims & Appeals",
        text:
            "If you disagree with a Social Security disability decision, review your notice carefully because you may have appeal rights and an applicable deadline.",
    },
];


const ssiResources = [
    {
        icon: CircleDollarSign,
        title: "Income Considerations",
        text:
            "SSI is a needs-based program. Social Security considers countable income and applicable exclusions when determining eligibility and payment amounts.",
    },
    {
        icon: WalletCards,
        title: "Resource Requirements",
        text:
            "Certain financial resources are considered when SSA evaluates SSI eligibility, subject to applicable rules and exclusions.",
    },
    {
        icon: HeartHandshake,
        title: "Disability Requirements",
        text:
            "When applying for SSI based on disability, medical evidence and the effect of your condition on functioning can be important parts of the evaluation.",
    },
    {
        icon: Users,
        title: "Different Life Situations",
        text:
            "SSI may be available to eligible people who are aged, blind, or disabled, including qualifying adults and children, subject to program requirements.",
    },
];


const comparisonRows = [
    {
        label: "Program Type",
        ssdi: "Social Security disability insurance program.",
        ssi: "Needs-based Supplemental Security Income program.",
    },
    {
        label: "Work History",
        ssdi:
            "Qualifying Social Security-covered work history and work credits generally matter.",
        ssi:
            "SSI eligibility is not based on having your own Social Security work credits.",
    },
    {
        label: "Financial Factors",
        ssdi:
            "SSDI is not subject to the same needs-based income and resource rules used for SSI.",
        ssi:
            "Income and resources are important parts of SSI eligibility.",
    },
    {
        label: "Medical Disability",
        ssdi:
            "SSA disability requirements generally apply when seeking SSDI based on disability.",
        ssi:
            "SSA disability requirements generally apply when seeking SSI based on disability.",
    },
    {
        label: "Official Administration",
        ssdi:
            "Administered by the Social Security Administration.",
        ssi:
            "Administered by the Social Security Administration.",
    },
];


const preparationItems = [
    "Names and contact information for doctors, clinics, and hospitals",
    "Dates of treatment and information about your medical conditions",
    "Prescription and non-prescription medications you currently take",
    "Medical tests, examinations, and relevant treatment history",
    "Recent work history and information about previous job duties",
    "Financial information that may be relevant when exploring SSI",
    "Important notices or letters received from Social Security",
    "Personal identification and other information requested by SSA",
];


const processSteps = [
    {
        number: "01",
        icon: SearchCheck,
        title: "Understand Your Options",
        text:
            "Learn the basic differences between SSDI and SSI so you can better understand which program requirements may be relevant to your circumstances.",
    },
    {
        number: "02",
        icon: ClipboardCheck,
        title: "Review Eligibility Factors",
        text:
            "Consider medical, work-history, income, resource, and other non-medical requirements that may apply to the program you are exploring.",
    },
    {
        number: "03",
        icon: FileCheck2,
        title: "Prepare Your Information",
        text:
            "Organize medical providers, treatment details, employment information, medications, tests, and other information that may be requested.",
    },
    {
        number: "04",
        icon: BadgeCheck,
        title: "Understand the Next Step",
        text:
            "Whether you are preparing an initial application or responding to a decision, review the official instructions and applicable deadlines before proceeding.",
    },
];


const appealSteps = [
    {
        number: "01",
        title: "Reconsideration",
        text:
            "A request for Social Security to review an initial determination again.",
    },
    {
        number: "02",
        title: "Administrative Law Judge Hearing",
        text:
            "If you disagree with the reconsideration determination, the next level may involve requesting a hearing before an administrative law judge.",
    },
    {
        number: "03",
        title: "Appeals Council Review",
        text:
            "After an administrative law judge decision, an eligible claimant may request review by the Social Security Appeals Council.",
    },
    {
        number: "04",
        title: "Federal Court Review",
        text:
            "After the applicable administrative appeal stages, federal court review may be available in certain circumstances.",
    },
];


const faqItems = [
    {
        question: "What is the main difference between SSDI and SSI?",
        answer:
            "SSDI is generally connected to a person's Social Security-covered work history and insured status. SSI is a needs-based program that considers income, resources, and other eligibility requirements. Individual circumstances determine which program requirements may apply.",
    },
    {
        question:
            "Does having a medical diagnosis automatically qualify me for disability benefits?",
        answer:
            "No. A medical diagnosis by itself does not automatically establish disability eligibility. Social Security considers medical evidence, the severity and duration of the impairment, functional limitations, work activity, and other applicable requirements.",
    },
    {
        question: "What medical information may Social Security request?",
        answer:
            "SSA may request information about medical conditions, doctors and hospitals, treatment dates, medications, medical tests, work history, job duties, and other information relevant to evaluating the claim.",
    },
    {
        question: "Can I apply for Social Security disability benefits myself?",
        answer:
            "Yes. You do not have to use GetSSDI Support to apply. You may work directly with the Social Security Administration and use SSA's official application and information resources.",
    },
    {
        question: "What happens if my disability claim is denied?",
        answer:
            "Social Security provides an appeals process. Depending on the stage of the claim, this can include reconsideration, a hearing before an administrative law judge, Appeals Council review, and federal court review. Always read your notice carefully because deadlines apply.",
    },
    {
        question: "How long do I generally have to appeal?",
        answer:
            "Social Security generally requires an appeal request within 60 days after you receive the applicable determination or decision notice. Your own notice contains the instructions and deadline that apply to your case.",
    },
    {
        question: "Does contacting GetSSDI Support guarantee approval?",
        answer:
            "No. Contacting GetSSDI Support, submitting information, or speaking with someone does not guarantee eligibility, representation, approval, any particular benefit amount, processing time, or claim outcome.",
    },
];


/* =========================================================
   COMPONENT
========================================================= */

const DisabilityResources = () => {
    const navigate = useNavigate();

    const [openFaq, setOpenFaq] = useState(0);


    const handleBack = () => {
        if (window.history.length > 1) {
            navigate(-1);
        } else {
            navigate("/");
        }
    };


    return (
        <>
            {/* =====================================================
                SEO
            ===================================================== */}

            <Helmet>
                <title>
                    SSDI & SSI Disability Support Resources | GetSSDI Support
                </title>

                <meta
                    name="description"
                    content="Explore clear SSDI and SSI disability support resources, eligibility information, application preparation guidance, medical evidence information, appeals resources, and official Social Security resources."
                />

                <meta
                    name="keywords"
                    content="SSDI resources, SSI resources, disability support resources, Social Security disability information, SSDI eligibility, SSI eligibility, disability application information, disability appeals"
                />

                <meta
                    name="robots"
                    content="index, follow, max-image-preview:large"
                />

                <link
                    rel="canonical"
                    href="https://getssdisupport.com/disability-resources"
                />

                <meta
                    property="og:title"
                    content="SSDI & SSI Disability Support Resources | GetSSDI Support"
                />

                <meta
                    property="og:description"
                    content="Clear resources for understanding SSDI, SSI, disability eligibility considerations, medical evidence, application preparation, and appeals."
                />

                <meta
                    property="og:type"
                    content="website"
                />

                <meta
                    property="og:url"
                    content="https://getssdisupport.com/disability-resources"
                />

                <meta
                    name="twitter:card"
                    content="summary_large_image"
                />
            </Helmet>


            <main className="resources-page">

                {/* =====================================================
                    TOP NAVIGATION
                ===================================================== */}

                <section className="resources-navigation">

                    <div className="resources-container resources-navigation__inner">

                        <button
                            type="button"
                            className="resources-back"
                            onClick={handleBack}
                        >
                            <ArrowLeft size={18} />

                            Back
                        </button>


                        <Link
                            to="/"
                            className="resources-home"
                        >
                            <Home size={17} />

                            Home
                        </Link>

                    </div>

                </section>


                {/* =====================================================
                    HERO
                ===================================================== */}

                <section className="resources-hero">

                    <div
                        className="resources-hero__glow resources-hero__glow--one"
                        aria-hidden="true"
                    />

                    <div
                        className="resources-hero__glow resources-hero__glow--two"
                        aria-hidden="true"
                    />


                    <div className="resources-container resources-hero__grid">

                        {/* LEFT */}

                        <div className="resources-hero__content">

                            <div className="resources-eyebrow">
                                <BookOpenCheck size={17} />

                                Disability Support Resource Center
                            </div>


                            <h1>
                                Clear Resources for Understanding
                                <span> SSDI &amp; SSI</span>
                            </h1>


                            <p className="resources-hero__lead">
                                Learn about Social Security Disability
                                Insurance (SSDI), Supplemental Security
                                Income (SSI), eligibility considerations,
                                medical information, application preparation,
                                appeals, and official Social Security resources
                                in one easy-to-understand guide.
                            </p>


                            <div className="resources-hero__checks">

                                <span>
                                    <Check size={17} />
                                    SSDI guidance
                                </span>

                                <span>
                                    <Check size={17} />
                                    SSI guidance
                                </span>

                                <span>
                                    <Check size={17} />
                                    Application preparation
                                </span>

                                <span>
                                    <Check size={17} />
                                    Appeals information
                                </span>

                            </div>


                            <div className="resources-hero__actions">

                                <a
                                    href="tel:+18339917969"
                                    className="resources-btn resources-btn--primary"
                                    aria-label="Call GetSSDI Support at +1 833 991 7969"
                                >
                                    <span className="resources-phone-icon">
                                        <PhoneIncoming size={20} />
                                    </span>

                                    <span>
                                        <small>
                                            Talk With Our Team
                                        </small>

                                        <strong>
                                            +1 (833) 991-7969
                                        </strong>
                                    </span>
                                </a>


                                <Link
                                    to="/"
                                    className="resources-btn resources-btn--secondary"
                                >
                                    Visit Home Page

                                    <ArrowRight size={18} />
                                </Link>

                            </div>


                            <p className="resources-hero__disclaimer">
                                Independent resource. Not affiliated with or
                                endorsed by the Social Security Administration
                                or any U.S. government agency.
                            </p>

                        </div>


                        {/* RIGHT */}

                        <aside className="resources-hero__panel">

                            <div className="resources-hero__panel-icon">
                                <ShieldCheck size={30} />
                            </div>


                            <span className="resources-hero__panel-label">
                                Start With the Basics
                            </span>


                            <h2>
                                Not sure whether SSDI or SSI may apply?
                            </h2>


                            <p>
                                Both programs are administered by Social
                                Security, but their non-medical eligibility
                                requirements are different. Understanding
                                those differences is a useful first step.
                            </p>


                            <a
                                href="#ssdi"
                                className="resources-mini-program"
                            >
                                <div>
                                    <strong>
                                        SSDI
                                    </strong>

                                    <span>
                                        Disability insurance generally
                                        connected to qualifying Social
                                        Security work history.
                                    </span>
                                </div>

                                <ChevronRight size={19} />
                            </a>


                            <a
                                href="#ssi"
                                className="resources-mini-program"
                            >
                                <div>
                                    <strong>
                                        SSI
                                    </strong>

                                    <span>
                                        Needs-based assistance that considers
                                        applicable income and resource rules.
                                    </span>
                                </div>

                                <ChevronRight size={19} />
                            </a>


                            <div className="resources-privacy">
                                <LockKeyhole size={17} />

                                <span>
                                    Learn about your options with no
                                    obligation.
                                </span>
                            </div>

                        </aside>

                    </div>

                </section>


                {/* =====================================================
                    TRANSPARENCY STRIP
                ===================================================== */}

                <section className="resources-trust-strip">

                    <div className="resources-container resources-trust-strip__grid">

                        <div className="resources-trust-point">

                            <div className="resources-trust-point__icon">
                                <ShieldCheck size={21} />
                            </div>

                            <div>
                                <strong>
                                    Independent Resource
                                </strong>

                                <span>
                                    Not a U.S. government agency
                                </span>
                            </div>

                        </div>


                        <div className="resources-trust-point">

                            <div className="resources-trust-point__icon">
                                <BookOpenCheck size={21} />
                            </div>

                            <div>
                                <strong>
                                    Educational Guidance
                                </strong>

                                <span>
                                    SSDI &amp; SSI information in plain language
                                </span>
                            </div>

                        </div>


                        <div className="resources-trust-point">

                            <div className="resources-trust-point__icon">
                                <LockKeyhole size={21} />
                            </div>

                            <div>
                                <strong>
                                    Privacy Focused
                                </strong>

                                <span>
                                    Review information before submitting
                                </span>
                            </div>

                        </div>


                        <div className="resources-trust-point">

                            <div className="resources-trust-point__icon">
                                <BadgeCheck size={21} />
                            </div>

                            <div>
                                <strong>
                                    Clear Expectations
                                </strong>

                                <span>
                                    No approval or benefit guarantee
                                </span>
                            </div>

                        </div>

                    </div>

                </section>


                {/* =====================================================
                    QUICK NAVIGATION
                ===================================================== */}

                <section className="resources-quick-nav">

                    <div className="resources-container resources-quick-nav__inner">

                        <span>
                            Explore:
                        </span>

                        <a href="#compare">
                            SSDI vs SSI
                        </a>

                        <a href="#ssdi">
                            SSDI
                        </a>

                        <a href="#ssi">
                            SSI
                        </a>

                        <a href="#prepare">
                            Prepare
                        </a>

                        <a href="#medical-evidence">
                            Medical Evidence
                        </a>

                        <a href="#appeals">
                            Appeals
                        </a>

                        <a href="#official-resources">
                            Official Resources
                        </a>

                        <a href="#faq">
                            FAQ
                        </a>

                    </div>

                </section>


                {/* =====================================================
                    INTRO
                ===================================================== */}

                <section className="resources-section resources-intro">

                    <div className="resources-container resources-heading">

                        <span className="resources-section-tag">
                            Understand Your Options
                        </span>

                        <h2>
                            Two Disability Programs With Different
                            Eligibility Considerations
                        </h2>

                        <p>
                            SSDI and SSI are separate Social Security
                            programs. Both can involve disability-related
                            requirements, but the programs differ in important
                            ways, including how work history, income, and
                            resources may be considered.
                        </p>

                    </div>


                    <div className="resources-container resources-program-overview">

                        <article className="resources-overview-card">

                            <div className="resources-overview-card__top">

                                <div className="resources-overview-card__icon">
                                    <BriefcaseBusiness size={26} />
                                </div>

                                <span className="resources-program-badge">
                                    Work-history based
                                </span>

                            </div>


                            <span>
                                Social Security Disability Insurance
                            </span>

                            <h3>
                                SSDI
                            </h3>

                            <p>
                                SSDI generally provides disability benefits
                                to eligible people who meet Social Security's
                                disability requirements and have enough
                                qualifying work credits under Social Security.
                            </p>


                            <a href="#ssdi">
                                Explore SSDI Resources

                                <ArrowRight size={17} />
                            </a>

                        </article>


                        <article className="resources-overview-card resources-overview-card--mint">

                            <div className="resources-overview-card__top">

                                <div className="resources-overview-card__icon">
                                    <HeartHandshake size={26} />
                                </div>

                                <span className="resources-program-badge">
                                    Needs based
                                </span>

                            </div>


                            <span>
                                Supplemental Security Income
                            </span>

                            <h3>
                                SSI
                            </h3>

                            <p>
                                SSI is a needs-based program for eligible
                                people who are aged, blind, or disabled and
                                who meet applicable income, resource, and
                                other program requirements.
                            </p>


                            <a href="#ssi">
                                Explore SSI Resources

                                <ArrowRight size={17} />
                            </a>

                        </article>

                    </div>

                </section>


                {/* =====================================================
                    COMPARISON
                ===================================================== */}

                <section
                    className="resources-comparison"
                    id="compare"
                >

                    <div className="resources-container">

                        <div className="resources-heading">

                            <span className="resources-section-tag">
                                SSDI vs. SSI
                            </span>

                            <h2>
                                Understand the Basic Differences
                            </h2>

                            <p>
                                Knowing how SSDI and SSI differ can help you
                                identify which eligibility factors and
                                documents may be relevant when you explore
                                your options.
                            </p>

                        </div>


                        <div className="resources-comparison__table">

                            <div className="resources-comparison__header">

                                <div>
                                    Eligibility Factor
                                </div>

                                <div>
                                    <strong>
                                        SSDI
                                    </strong>

                                    <span>
                                        Social Security Disability Insurance
                                    </span>
                                </div>

                                <div>
                                    <strong>
                                        SSI
                                    </strong>

                                    <span>
                                        Supplemental Security Income
                                    </span>
                                </div>

                            </div>


                            {comparisonRows.map((row) => (
                                <div
                                    className="resources-comparison__row"
                                    key={row.label}
                                >

                                    <strong>
                                        {row.label}
                                    </strong>


                                    <p>
                                        <Check size={16} />

                                        <span>
                                            {row.ssdi}
                                        </span>
                                    </p>


                                    <p>
                                        <Check size={16} />

                                        <span>
                                            {row.ssi}
                                        </span>
                                    </p>

                                </div>
                            ))}

                        </div>


                        <div className="resources-comparison__notice">

                            <Info size={19} />

                            <p>
                                This comparison is a general educational
                                overview. Eligibility depends on individual
                                circumstances and applicable Social Security
                                Administration rules.
                            </p>

                        </div>

                    </div>

                </section>


                {/* =====================================================
                    SSDI
                ===================================================== */}

                <section
                    className="resources-section resources-program-section"
                    id="ssdi"
                >

                    <div className="resources-container">

                        <div className="resources-heading resources-heading--left">

                            <span className="resources-section-tag">
                                SSDI Resource Guide
                            </span>

                            <h2>
                                Understanding Social Security Disability
                                Insurance
                            </h2>

                            <p>
                                SSDI is an insurance program connected to
                                Social Security-covered work. A person
                                generally must satisfy applicable disability
                                requirements and have enough qualifying work
                                credits.
                            </p>

                        </div>


                        <div className="resources-card-grid">

                            {ssdiResources.map((resource) => {

                                const Icon = resource.icon;

                                return (
                                    <article
                                        className="resources-info-card"
                                        key={resource.title}
                                    >

                                        <div className="resources-info-card__icon">
                                            <Icon size={23} />
                                        </div>

                                        <h3>
                                            {resource.title}
                                        </h3>

                                        <p>
                                            {resource.text}
                                        </p>

                                    </article>
                                );
                            })}

                        </div>


                        <div className="resources-program-note">

                            <Info size={19} />

                            <p>
                                Work-credit requirements vary. Age and work
                                history can affect the number of credits
                                required, and younger workers may qualify
                                with fewer credits.
                            </p>

                        </div>

                    </div>

                </section>


                {/* =====================================================
                    SSI
                ===================================================== */}

                <section
                    className="resources-section resources-program-section resources-program-section--pastel"
                    id="ssi"
                >

                    <div className="resources-container">

                        <div className="resources-heading resources-heading--left">

                            <span className="resources-section-tag">
                                SSI Resource Guide
                            </span>

                            <h2>
                                Understanding Supplemental Security Income
                            </h2>

                            <p>
                                SSI differs from SSDI because it is
                                needs-based. SSA considers applicable income
                                and resources along with age, blindness,
                                disability, citizenship or immigration
                                requirements, living arrangements, and other
                                program rules.
                            </p>

                        </div>


                        <div className="resources-card-grid">

                            {ssiResources.map((resource) => {

                                const Icon = resource.icon;

                                return (
                                    <article
                                        className="resources-info-card"
                                        key={resource.title}
                                    >

                                        <div className="resources-info-card__icon">
                                            <Icon size={23} />
                                        </div>

                                        <h3>
                                            {resource.title}
                                        </h3>

                                        <p>
                                            {resource.text}
                                        </p>

                                    </article>
                                );
                            })}

                        </div>

                    </div>

                </section>


                {/* =====================================================
                    PREPARATION
                ===================================================== */}

                <section
                    className="resources-section"
                    id="prepare"
                >

                    <div className="resources-container resources-preparation">

                        <div className="resources-preparation__content">

                            <span className="resources-section-tag">
                                Application Preparation
                            </span>

                            <h2>
                                Information You May Want to Gather
                            </h2>

                            <p>
                                Keeping relevant information organized can
                                make it easier to complete forms, answer
                                questions, and understand what information
                                may be needed during the disability process.
                            </p>


                            <div className="resources-preparation__list">

                                {preparationItems.map((item) => (
                                    <div
                                        className="resources-check-item"
                                        key={item}
                                    >

                                        <span>
                                            <Check size={16} />
                                        </span>

                                        <p>
                                            {item}
                                        </p>

                                    </div>
                                ))}

                            </div>

                        </div>


                        <aside className="resources-note-card">

                            <div className="resources-note-card__icon">
                                <FileText size={27} />
                            </div>

                            <span>
                                Helpful Reminder
                            </span>

                            <h3>
                                Keep Your Information Organized
                            </h3>

                            <p>
                                Consider keeping medical records, provider
                                information, employment details, medication
                                information, test information, and Social
                                Security notices together so they are easier
                                to reference when needed.
                            </p>


                            <div className="resources-note-card__tip">

                                <ShieldCheck size={18} />

                                <span>
                                    Keep personal documents secure and only
                                    share sensitive information through
                                    appropriate channels.
                                </span>

                            </div>

                        </aside>

                    </div>

                </section>


                {/* =====================================================
                    MEDICAL EVIDENCE
                ===================================================== */}

                <section
                    className="resources-section resources-evidence"
                    id="medical-evidence"
                >

                    <div className="resources-container resources-evidence__grid">

                        <div className="resources-evidence__content">

                            <span className="resources-section-tag">
                                Medical Evidence
                            </span>

                            <h2>
                                A Diagnosis Is Only Part of the Picture
                            </h2>

                            <p>
                                Disability evaluations can involve more than
                                the name of a condition. Medical information
                                can help document treatment, symptoms,
                                severity, duration, and how limitations affect
                                daily functioning and work-related activities.
                            </p>


                            <div className="resources-evidence__points">

                                <div>
                                    <Check size={17} />

                                    <span>
                                        Doctors, clinics, hospitals, and
                                        treatment providers
                                    </span>
                                </div>


                                <div>
                                    <Check size={17} />

                                    <span>
                                        Treatment dates and medical history
                                    </span>
                                </div>


                                <div>
                                    <Check size={17} />

                                    <span>
                                        Prescription and non-prescription
                                        medications
                                    </span>
                                </div>


                                <div>
                                    <Check size={17} />

                                    <span>
                                        Medical tests and examination
                                        information
                                    </span>
                                </div>


                                <div>
                                    <Check size={17} />

                                    <span>
                                        Symptoms and functional limitations
                                    </span>
                                </div>


                                <div>
                                    <Check size={17} />

                                    <span>
                                        Work history and previous job duties
                                    </span>
                                </div>

                            </div>

                        </div>


                        <aside className="resources-evidence__card">

                            <div className="resources-evidence__card-icon">
                                <Stethoscope size={28} />
                            </div>

                            <span>
                                Helpful to Know
                            </span>

                            <h3>
                                Complete Information Can Be Important
                            </h3>

                            <p>
                                Social Security may request information about
                                your conditions, treatment providers,
                                medications, tests, previous work, and other
                                details when evaluating a disability claim.
                            </p>


                            <div className="resources-evidence__tip">

                                <FileCheck2 size={18} />

                                <span>
                                    Keep provider names, addresses, phone
                                    numbers, treatment dates, and medication
                                    information organized where possible.
                                </span>

                            </div>

                        </aside>

                    </div>

                </section>


                {/* =====================================================
                    PROCESS
                ===================================================== */}

                <section className="resources-section resources-process">

                    <div className="resources-container">

                        <div className="resources-heading">

                            <span className="resources-section-tag">
                                A Clearer Path Forward
                            </span>

                            <h2>
                                A Simple Way to Approach the Process
                            </h2>

                            <p>
                                Breaking disability information into smaller
                                steps can make the process easier to
                                understand and help you prepare more
                                effectively.
                            </p>

                        </div>


                        <div className="resources-process__grid">

                            {processSteps.map((step) => {

                                const Icon = step.icon;

                                return (
                                    <article
                                        className="resources-step"
                                        key={step.number}
                                    >

                                        <span className="resources-step__number">
                                            {step.number}
                                        </span>

                                        <div className="resources-step__icon">
                                            <Icon size={23} />
                                        </div>

                                        <h3>
                                            {step.title}
                                        </h3>

                                        <p>
                                            {step.text}
                                        </p>

                                    </article>
                                );
                            })}

                        </div>

                    </div>

                </section>


                {/* =====================================================
                    MID CALL CTA
                ===================================================== */}

                <section className="resources-call-banner">

                    <div className="resources-container">

                        <div className="resources-call-banner__inner">

                            <div>

                                <span>
                                    Need Help Understanding the Information?
                                </span>

                                <h2>
                                    Talk With Our Support Team
                                </h2>

                                <p>
                                    Have questions about SSDI, SSI, or the
                                    disability process? Call to discuss your
                                    questions and learn more about available
                                    next steps.
                                </p>

                            </div>


                            <a
                                href="tel:+18339917969"
                                className="resources-call-banner__button"
                            >

                                <span className="resources-call-banner__icon">
                                    <PhoneIncoming size={22} />
                                </span>

                                <div>
                                    <small>
                                        Tap to Call
                                    </small>

                                    <strong>
                                        +1 (833) 991-7969
                                    </strong>
                                </div>

                            </a>

                        </div>

                    </div>

                </section>


                {/* =====================================================
                    APPEALS
                ===================================================== */}

                <section
                    className="resources-section resources-appeals"
                    id="appeals"
                >

                    <div className="resources-container resources-appeals__grid">

                        <div className="resources-appeals__content">

                            <span className="resources-section-tag">
                                If You Disagree With a Decision
                            </span>

                            <h2>
                                Understanding the Social Security Appeals
                                Process
                            </h2>

                            <p>
                                If you disagree with a Social Security
                                determination or decision, there may be a
                                formal process for asking SSA to review it.
                                The applicable appeal level depends on where
                                your claim is in the process.
                            </p>


                            <div className="resources-alert">

                                <FileCheck2 size={21} />

                                <p>
                                    Social Security generally requires an
                                    appeal request within 60 days after you
                                    receive the applicable notice. Always
                                    review your own notice for the deadline
                                    and instructions that apply to your case.
                                </p>

                            </div>

                        </div>


                        <div className="resources-appeal-list">

                            {appealSteps.map((step) => (
                                <div
                                    className="resources-appeal-item"
                                    key={step.number}
                                >

                                    <span>
                                        {step.number}
                                    </span>

                                    <div>
                                        <strong>
                                            {step.title}
                                        </strong>

                                        <small>
                                            {step.text}
                                        </small>
                                    </div>

                                </div>
                            ))}

                        </div>

                    </div>

                </section>


                {/* =====================================================
                    OFFICIAL SSA RESOURCES
                ===================================================== */}

                <section
                    className="resources-section resources-official"
                    id="official-resources"
                >

                    <div className="resources-container">

                        <div className="resources-heading">

                            <span className="resources-section-tag">
                                Official Government Resources
                            </span>

                            <h2>
                                You Can Work Directly With Social Security
                            </h2>

                            <p>
                                GetSSDI Support is an independent resource.
                                You do not have to use this website to apply
                                for benefits. Official information and
                                services are available directly from the
                                Social Security Administration.
                            </p>

                        </div>


                        <div className="resources-official__grid">

                            <a
                                href="https://www.ssa.gov/disability"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="resources-official__card"
                            >

                                <div className="resources-official__icon">
                                    <Landmark size={24} />
                                </div>

                                <div>
                                    <span>
                                        Official SSA Resource
                                    </span>

                                    <h3>
                                        Disability Information
                                    </h3>

                                    <p>
                                        Review official Social Security
                                        disability information directly
                                        from SSA.
                                    </p>
                                </div>

                                <ExternalLink size={18} />

                            </a>


                            <a
                                href="https://www.ssa.gov/ssi"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="resources-official__card"
                            >

                                <div className="resources-official__icon">
                                    <CircleDollarSign size={24} />
                                </div>

                                <div>
                                    <span>
                                        Official SSA Resource
                                    </span>

                                    <h3>
                                        SSI Information
                                    </h3>

                                    <p>
                                        Review Supplemental Security Income
                                        program information directly from
                                        SSA.
                                    </p>
                                </div>

                                <ExternalLink size={18} />

                            </a>


                            <a
                                href="https://www.ssa.gov/disability/appeal.html"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="resources-official__card"
                            >

                                <div className="resources-official__icon">
                                    <Scale size={24} />
                                </div>

                                <div>
                                    <span>
                                        Official SSA Resource
                                    </span>

                                    <h3>
                                        Appeal a Decision
                                    </h3>

                                    <p>
                                        Review official information about
                                        requesting a disability appeal.
                                    </p>
                                </div>

                                <ExternalLink size={18} />

                            </a>

                        </div>


                        <div className="resources-official__notice">

                            <ShieldCheck size={19} />

                            <p>
                                Links above lead to official Social Security
                                Administration websites. GetSSDI Support does
                                not operate or control those government
                                websites.
                            </p>

                        </div>

                    </div>

                </section>


                {/* =====================================================
                    FAQ
                ===================================================== */}

                <section
                    className="resources-section resources-faq"
                    id="faq"
                >

                    <div className="resources-container resources-faq__layout">

                        <div className="resources-faq__intro">

                            <span className="resources-section-tag">
                                Frequently Asked Questions
                            </span>

                            <h2>
                                Common SSDI &amp; SSI Questions
                            </h2>

                            <p>
                                Straightforward information about disability
                                benefits, medical documentation, applications,
                                and appeals.
                            </p>


                            <a
                                href="tel:+18339917969"
                                className="resources-faq__call"
                            >
                                <PhoneIncoming size={19} />

                                <span>
                                    Questions? Call +1 (833) 991-7969
                                </span>
                            </a>

                        </div>


                        <div className="resources-faq__list">

                            {faqItems.map((item, index) => {

                                const isOpen = openFaq === index;

                                return (
                                    <div
                                        className={`resources-faq__item ${isOpen ? "is-open" : ""
                                            }`}
                                        key={item.question}
                                    >

                                        <button
                                            type="button"
                                            onClick={() =>
                                                setOpenFaq(
                                                    isOpen ? -1 : index
                                                )
                                            }
                                            aria-expanded={isOpen}
                                        >

                                            <span>
                                                {item.question}
                                            </span>

                                            <ChevronDown size={20} />

                                        </button>


                                        {isOpen && (
                                            <div className="resources-faq__answer">

                                                <p>
                                                    {item.answer}
                                                </p>

                                            </div>
                                        )}

                                    </div>
                                );
                            })}

                        </div>

                    </div>

                </section>


                {/* =====================================================
                    FINAL CTA
                ===================================================== */}

                <section
                    className="resources-final"
                    id="next-steps"
                >

                    <div className="resources-container">

                        <div className="resources-final__card">

                            <div className="resources-final__content">

                                <div className="resources-final__icon">
                                    <Sparkles size={23} />
                                </div>

                                <span>
                                    Need Help Understanding Your Next Step?
                                </span>

                                <h2>
                                    Get Clearer About Your Disability
                                    Benefit Options
                                </h2>

                                <p>
                                    Whether you're learning about SSDI or
                                    SSI, preparing an application, organizing
                                    medical information, or reviewing an
                                    unfavorable decision, understanding the
                                    process can help you decide what to do
                                    next.
                                </p>

                            </div>


                            <div className="resources-final__actions">

                                <a
                                    href="tel:+18339917969"
                                    className="resources-final__call"
                                >

                                    <span>
                                        <PhoneIncoming size={22} />
                                    </span>

                                    <div>
                                        <small>
                                            Call for Support
                                        </small>

                                        <strong>
                                            +1 (833) 991-7969
                                        </strong>
                                    </div>

                                </a>


                                <Link
                                    to="/"
                                    className="resources-final__home"
                                >
                                    <Home size={18} />

                                    Back to Home
                                </Link>

                            </div>

                        </div>

                    </div>

                </section>


                {/* =====================================================
                    ADVERTISING / WEBSITE DISCLOSURE
                ===================================================== */}

                <section className="resources-disclosure">

                    <div className="resources-container">

                        <div className="resources-disclosure__card">

                            <div className="resources-disclosure__header">

                                <div className="resources-disclosure__icon">
                                    <Landmark size={25} />
                                </div>

                                <div>
                                    <span>
                                        Advertising &amp; Website Disclosure
                                    </span>

                                    <h2>
                                        Important Information About
                                        GetSSDI Support
                                    </h2>
                                </div>

                            </div>


                            <div className="resources-disclosure__content">

                                <p>
                                    <strong>
                                        THIS IS AN ADVERTISEMENT.
                                    </strong>{" "}
                                    GetSSDI Support is an independently
                                    operated disability support resource and
                                    is not affiliated with, endorsed by, or
                                    acting on behalf of the Social Security
                                    Administration (SSA) or any other U.S.
                                    government agency.
                                </p>


                                <p>
                                    You may apply for Social Security benefits
                                    directly through the Social Security
                                    Administration without using this website.
                                    You do not have to use GetSSDI Support to
                                    file a claim or obtain information about
                                    Social Security disability benefits.
                                </p>


                                <p>
                                    Information submitted through this website
                                    may be used to review your inquiry,
                                    evaluate potential eligibility for
                                    available support or services, and, where
                                    applicable, connect you with an
                                    appropriate service provider. Submitting
                                    information or contacting us does not
                                    create an attorney-client relationship
                                    and does not guarantee that representation
                                    will be offered.
                                </p>


                                <p>
                                    No representation or guarantee is made
                                    regarding eligibility, approval, benefit
                                    amounts, processing times, representation,
                                    or the outcome of any Social Security
                                    claim or appeal. Any examples, estimates,
                                    or general benefit information appearing
                                    on this website are illustrative and
                                    informational only and should not be
                                    considered a prediction, quote, or
                                    guarantee.
                                </p>


                                <p>
                                    Information provided by GetSSDI Support is
                                    general educational information and is not
                                    legal advice. Individual circumstances
                                    vary, and official eligibility and benefit
                                    determinations are made by the Social
                                    Security Administration.
                                </p>

                            </div>


                            <div className="resources-disclosure__footer">

                                <ShieldCheck size={18} />

                                <span>
                                    Transparency matters. Please review this
                                    information before submitting personal
                                    information or requesting support.
                                </span>

                            </div>

                        </div>

                    </div>

                </section>


                {/* =====================================================
                    BOTTOM NAVIGATION
                ===================================================== */}

                <section className="resources-bottom-nav">

                    <div className="resources-container resources-bottom-nav__inner">

                        <button
                            type="button"
                            onClick={handleBack}
                        >
                            <ArrowLeft size={17} />

                            Go Back
                        </button>


                        <Link to="/">
                            Go to Home Page

                            <ArrowRight size={17} />
                        </Link>

                    </div>

                </section>

            </main>
        </>
    );
};


export default DisabilityResources;