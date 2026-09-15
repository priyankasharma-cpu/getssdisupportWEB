import { useState } from "react";
import {
    ArrowRight,
    BadgeCheck,
    CheckCircle2,
    ChevronDown,
    CircleHelp,
    Phone,
    Search,
    ShieldCheck,
    Star,
} from "lucide-react";

import CallCTA from "../../components/CallCTA/CallCTA";
import "./faq-page.css";

const PHONE_NUMBER = "+18005555555";
const DISPLAY_PHONE = "+1 (800) 555-5555";

const categories = [
    "All Questions",
    "Eligibility",
    "SSDI & SSI",
    "Application",
    "Denials",
    "Benefits",
];

const faqs = [
    {
        category: "Eligibility",
        question: "How do I know if I may qualify for disability benefits?",
        answer:
            "Eligibility depends on several factors, including how your medical condition affects your ability to work, how long the condition has lasted or is expected to last, and the requirements of the benefit program you are considering. SSDI and SSI also have different non-medical requirements.",
    },
    {
        category: "SSDI & SSI",
        question: "What is the difference between SSDI and SSI?",
        answer:
            "SSDI generally relates to a person's work history and Social Security-covered earnings, while SSI is a needs-based program with financial eligibility requirements. Some people may potentially qualify for one program or, in certain circumstances, both.",
    },
    {
        category: "Eligibility",
        question: "Can I apply if I am still working?",
        answer:
            "Working does not automatically answer whether you may qualify. Social Security considers your work activity and earnings along with other eligibility requirements. Your individual circumstances matter.",
    },
    {
        category: "Eligibility",
        question: "What medical conditions may qualify for disability benefits?",
        answer:
            "Disability claims can involve many physical or mental health conditions. A diagnosis alone does not determine eligibility. The key issue is generally how the condition and resulting limitations affect your ability to perform substantial work over the required period.",
    },
    {
        category: "Eligibility",
        question: "How long does my condition need to last?",
        answer:
            "For Social Security disability programs, the disability generally must have lasted or be expected to last for at least 12 months, or be expected to result in death, subject to the program's complete eligibility rules.",
    },
    {
        category: "Application",
        question: "What information may I need when applying?",
        answer:
            "Applicants may need information about medical conditions, treatment providers, medications, employment history, education, and other personal or financial details depending on the program. Having accurate records available can make completing an application easier.",
    },
    {
        category: "Application",
        question: "Do I need medical records before I start?",
        answer:
            "Medical evidence is important in a disability claim, but you do not necessarily need to personally collect every medical record before beginning. You should be prepared to provide accurate information about your doctors, treatment, tests, medications, and medical history.",
    },
    {
        category: "Application",
        question: "Can I apply for disability benefits online?",
        answer:
            "Some Social Security disability applications and related steps can be completed online, while other circumstances may require additional contact or documentation. The available process can depend on the benefit being requested and your situation.",
    },
    {
        category: "Denials",
        question: "What happens if my disability claim is denied?",
        answer:
            "A denial does not necessarily mean the process is over. Social Security provides an appeals process with specific stages and deadlines. The notice you receive should explain the decision and available next steps.",
    },
    {
        category: "Denials",
        question: "Can I appeal a denied SSDI or SSI claim?",
        answer:
            "Depending on your situation and the stage of the claim, you may have the right to request an appeal. Appeal deadlines are important, so review your notice carefully and act within the applicable time limit.",
    },
    {
        category: "Denials",
        question: "Should I submit a new application after a denial?",
        answer:
            "That depends on the circumstances. In some situations, using the appeals process may be more appropriate than simply starting a new application. Review the denial notice and your available options before deciding what to do next.",
    },
    {
        category: "Benefits",
        question: "How much could I receive in disability benefits?",
        answer:
            "Benefit amounts are not the same for everyone. SSDI payments are generally tied to a person's earnings record, while SSI payment amounts are governed by program rules and can be affected by income, resources, living arrangements, and other factors.",
    },
    {
        category: "Benefits",
        question: "How long does a disability decision take?",
        answer:
            "Processing times vary based on the type of claim, location, medical evidence, whether additional information is needed, and whether the claim moves through an appeal. There is no single processing time that applies to every applicant.",
    },
    {
        category: "Benefits",
        question: "Can disability benefits include health coverage?",
        answer:
            "Certain disability beneficiaries may become eligible for Medicare or Medicaid depending on the program, timing, state rules, and individual circumstances. Health coverage eligibility is separate from simply filing a disability application.",
    },
    {
        category: "SSDI & SSI",
        question: "Can someone receive both SSDI and SSI?",
        answer:
            "In some circumstances, a person may qualify for both programs if they satisfy the applicable requirements. This is sometimes referred to as concurrent eligibility, but qualification depends on the individual's work record, income, resources, and other factors.",
    },
];

const reviews = [
    {
        quote:
            "The information was organized in a way that made the disability process much easier to understand.",
        name: "Website Visitor",
    },
    {
        quote:
            "I appreciated being able to understand the basic differences between the programs before deciding what to do next.",
        name: "Website Visitor",
    },
    {
        quote:
            "The questions helped me think through what information I needed before moving forward.",
        name: "Website Visitor",
    },
];

const FAQPage = () => {
    const [activeCategory, setActiveCategory] = useState("All Questions");
    const [openFAQ, setOpenFAQ] = useState(0);
    const [search, setSearch] = useState("");

    const filteredFAQs = faqs.filter((faq) => {
        const categoryMatch =
            activeCategory === "All Questions" ||
            faq.category === activeCategory;

        const searchMatch =
            faq.question.toLowerCase().includes(search.toLowerCase()) ||
            faq.answer.toLowerCase().includes(search.toLowerCase());

        return categoryMatch && searchMatch;
    });

    return (
        <main className="faq-page">

            {/* =====================================================
                HERO
            ===================================================== */}

            <section className="faq-hero">
                <div className="faq-hero__glow faq-hero__glow--one" />
                <div className="faq-hero__glow faq-hero__glow--two" />

                <div className="faq-container faq-hero__inner">

                    <div className="faq-hero__eyebrow">
                        <CircleHelp size={15} />
                        Disability Benefits FAQ
                    </div>

                    <h1>
                        Questions About Disability Benefits?
                        <span> Start Here.</span>
                    </h1>

                    <p>
                        Get straightforward answers to common questions
                        about SSDI, SSI, eligibility, applications,
                        denials, appeals, and possible next steps.
                    </p>

                    <div className="faq-search">
                        <Search size={20} />

                        <input
                            type="search"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search a question..."
                            aria-label="Search frequently asked questions"
                        />

                        <span>
                            {filteredFAQs.length} answers
                        </span>
                    </div>

                    <div className="faq-hero__trust">
                        <span>
                            <CheckCircle2 size={15} />
                            Clear information
                        </span>

                        <span>
                            <CheckCircle2 size={15} />
                            Common applicant questions
                        </span>

                        <span>
                            <CheckCircle2 size={15} />
                            Easy to understand
                        </span>
                    </div>

                </div>
            </section>


            {/* =====================================================
                FAQ CONTENT
            ===================================================== */}

            <section className="faq-content">
                <div className="faq-container">

                    <div className="faq-content__heading">
                        <div>
                            <span className="faq-section-label">
                                FIND YOUR ANSWER
                            </span>

                            <h2>
                                Frequently Asked
                                <span> Questions</span>
                            </h2>
                        </div>

                        <p>
                            Select a topic or search above to quickly find
                            information relevant to your situation.
                        </p>
                    </div>


                    {/* CATEGORIES */}

                    <div className="faq-categories">
                        {categories.map((category) => (
                            <button
                                key={category}
                                type="button"
                                className={
                                    activeCategory === category
                                        ? "faq-category faq-category--active"
                                        : "faq-category"
                                }
                                onClick={() => {
                                    setActiveCategory(category);
                                    setOpenFAQ(null);
                                }}
                            >
                                {category}
                            </button>
                        ))}
                    </div>


                    {/* FAQ ROWS */}

                    <div className="faq-list">

                        {filteredFAQs.map((faq, index) => {
                            const isOpen = openFAQ === index;

                            return (
                                <article
                                    className={`faq-item ${isOpen ? "faq-item--open" : ""
                                        }`}
                                    key={`${faq.category}-${faq.question}`}
                                >
                                    <button
                                        type="button"
                                        className="faq-item__question"
                                        onClick={() =>
                                            setOpenFAQ(
                                                isOpen ? null : index
                                            )
                                        }
                                        aria-expanded={isOpen}
                                    >
                                        <div className="faq-item__question-main">

                                            <span className="faq-item__number">
                                                {String(index + 1).padStart(
                                                    2,
                                                    "0"
                                                )}
                                            </span>

                                            <div>
                                                <span className="faq-item__category">
                                                    {faq.category}
                                                </span>

                                                <h3>
                                                    {faq.question}
                                                </h3>
                                            </div>

                                        </div>

                                        <span className="faq-item__toggle">
                                            <ChevronDown size={20} />
                                        </span>
                                    </button>


                                    <div className="faq-item__answer">
                                        <div className="faq-item__answer-inner">

                                            <p>
                                                {faq.answer}
                                            </p>

                                            {/* SMALL CALL CTA */}

                                            <div className="faq-item__help">
                                                <div>
                                                    <CircleHelp size={15} />

                                                    <span>
                                                        Have more questions
                                                        about this topic?
                                                    </span>
                                                </div>

                                                <a
                                                    href={`tel:${PHONE_NUMBER}`}
                                                >
                                                    <Phone size={14} />
                                                    Call for More Details
                                                </a>
                                            </div>

                                        </div>
                                    </div>

                                </article>
                            );
                        })}

                    </div>


                    {filteredFAQs.length === 0 && (
                        <div className="faq-empty">
                            <CircleHelp size={30} />

                            <h3>No matching questions found</h3>

                            <p>
                                Try another search or speak with someone
                                about your question.
                            </p>

                            <a href={`tel:${PHONE_NUMBER}`}>
                                <Phone size={16} />
                                Call {DISPLAY_PHONE}
                            </a>
                        </div>
                    )}

                </div>
            </section>


            {/* =====================================================
                MINI CALL STRIP
            ===================================================== */}

            <section className="faq-help">
                <div className="faq-container">

                    <div className="faq-help__box">

                        <div className="faq-help__icon">
                            <Phone size={23} />
                        </div>

                        <div className="faq-help__content">
                            <span>STILL HAVE A QUESTION?</span>

                            <h2>
                                Your situation may not fit neatly into an FAQ.
                            </h2>

                            <p>
                                Call if you would like to discuss your
                                questions and learn more about possible
                                next steps.
                            </p>
                        </div>

                        <a
                            href={`tel:${PHONE_NUMBER}`}
                            className="faq-help__button"
                        >
                            <Phone size={18} />

                            <span>
                                <small>Call Now</small>
                                {DISPLAY_PHONE}
                            </span>

                            <ArrowRight size={18} />
                        </a>

                    </div>

                </div>
            </section>


            {/* =====================================================
                REVIEWS
            ===================================================== */}

            <section className="faq-reviews">
                <div className="faq-container">

                    <div className="faq-reviews__header">

                        <div>
                            <div className="faq-reviews__eyebrow">
                                <BadgeCheck size={15} />
                                Helpful Information
                            </div>

                            <h2>
                                Helping People Find
                                <span> More Clarity.</span>
                            </h2>
                        </div>

                        <p>
                            Our goal is to make complicated disability
                            benefit information easier to understand before
                            you decide what comes next.
                        </p>

                    </div>


                    <div className="faq-reviews__grid">

                        {reviews.map((review) => (
                            <article
                                className="faq-review"
                                key={review.quote}
                            >
                                <div className="faq-review__top">

                                    <div className="faq-review__quote">
                                        “
                                    </div>

                                    <div
                                        className="faq-review__stars"
                                        aria-label="Five star review"
                                    >
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <Star
                                                key={star}
                                                size={14}
                                                fill="currentColor"
                                            />
                                        ))}
                                    </div>

                                </div>

                                <blockquote>
                                    {review.quote}
                                </blockquote>

                                <div className="faq-review__footer">

                                    <div className="faq-review__avatar">
                                        <ShieldCheck size={18} />
                                    </div>

                                    <div>
                                        <strong>{review.name}</strong>
                                        <span>
                                            Shared experience
                                        </span>
                                    </div>

                                </div>
                            </article>
                        ))}

                    </div>

                </div>
            </section>


            {/* YOUR EXISTING FULL CALL CTA */}

            <CallCTA />

        </main>
    );
};

export default FAQPage;