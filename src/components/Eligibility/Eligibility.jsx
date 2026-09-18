import {
    ArrowRight,
    BriefcaseBusiness,
    CalendarClock,
    CircleHelp,
    FileWarning,
    HeartPulse,
    ShieldCheck,
    PhoneIncoming,
} from "lucide-react";
import { Link } from "react-router-dom";

import "./eligibility.css";

const eligibilityPoints = [
    {
        icon: BriefcaseBusiness,
        title: "Work Has Become Difficult",
        description:
            "A health condition is making it harder to continue working or maintain your usual schedule.",
    },
    {
        icon: HeartPulse,
        title: "Your Condition Affects Daily Life",
        description:
            "Physical or mental health limitations are interfering with your ability to perform normal work activities.",
    },
    {
        icon: CalendarClock,
        title: "Your Condition May Be Long-Term",
        description:
            "Your medical condition has lasted or may be expected to continue for an extended period.",
    },
    {
        icon: FileWarning,
        title: "You Already Applied",
        description:
            "You have submitted a disability claim, are waiting for a decision, or received a denial.",
    },
    {
        icon: CircleHelp,
        title: "You Are Not Sure Which Program Fits",
        description:
            "You want to better understand whether SSDI, SSI, or another next step may be relevant.",
    },
    {
        icon: ShieldCheck,
        title: "You Want Clear Information",
        description:
            "You are looking for a simpler way to understand disability benefit options and what to do next.",
    },
];

const cardAccents = ["emerald", "teal", "gold", "blue", "peach", "emerald"];

const Eligibility = () => {
    return (
        <section
            className="eligibility-section"
            aria-labelledby="eligibility-section-title"
        >
            <div className="eligibility-section__orb eligibility-section__orb--one" aria-hidden="true" />
            <div className="eligibility-section__orb eligibility-section__orb--two" aria-hidden="true" />

            <div className="eligibility-section__container">

                {/* HEADER */}
                <div className="eligibility-section__header">

                    <div className="eligibility-section__eyebrow">
                        <ShieldCheck size={16} aria-hidden="true" />
                        Understanding Eligibility
                    </div>

                    <h2 id="eligibility-section-title">
                        Could You Be Eligible for
                        <span> Disability Benefits?</span>
                    </h2>

                    <p>
                        Every situation is different, but certain work and
                        health circumstances may make it worth learning more
                        about SSDI or SSI.
                    </p>

                </div>


                {/* GRID */}
                <div className="eligibility-section__grid">

                    {eligibilityPoints.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <article
                                className={`eligibility-card eligibility-card--${cardAccents[index]}`}
                                key={item.title}
                            >
                                <div className="eligibility-card__number" aria-hidden="true">
                                    {String(index + 1).padStart(2, "0")}
                                </div>

                                <div className="eligibility-card__icon" aria-hidden="true">
                                    <Icon size={23} strokeWidth={2} />
                                </div>

                                <h3>{item.title}</h3>

                                <p>
                                    {item.description}
                                </p>

                            </article>
                        );
                    })}

                </div>


                {/* BOTTOM CTA */}
                <div className="eligibility-section__cta">

                    <div className="eligibility-section__cta-content">
                        <span>
                            Not sure if any of these apply to you?
                        </span>

                        <strong>
                            Start with a few simple questions.
                        </strong>
                    </div>


                    <div className="eligibility-section__cta-actions">

                        {/* CHECK ELIGIBILITY */}
                        <Link
                            to="/#lead-form"
                            className="eligibility-section__button eligibility-section__button--eligibility"
                        >
                            Check Free Eligibility

                            <ArrowRight
                                size={18}
                                aria-hidden="true"
                            />
                        </Link>


                        {/* DIRECT CALL */}
                        <a
                            href="tel:+18339917969"
                            className="eligibility-section__button eligibility-section__button--call"
                            aria-label="Call now at +1 833 991 7969"
                        >
                            <span className="eligibility-section__call-icon">
                                <span className="eligibility-section__call-ring" />

                                <PhoneIncoming
                                    size={19}
                                    aria-hidden="true"
                                />
                            </span>

                            <span className="eligibility-section__call-text">
                                <small>Call Now</small>
                                <strong>+1 (833) 991-7969</strong>
                            </span>
                        </a>

                    </div>

                </div>

            </div>
        </section>
    );
};

export default Eligibility;