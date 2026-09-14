import {
    ArrowRight,
    BadgeCheck,
    FileCheck2,
    HeartHandshake,
    MapPinned,
    ShieldCheck,
    Sparkles,
} from "lucide-react";

import "./what-we-do.css";

const services = [
    {
        icon: Sparkles,
        number: "01",
        title: "Explore Benefit Options",
        description:
            "Learn more about disability benefit programs and understand options that may be relevant to your situation.",
        accent: "emerald",
    },
    {
        icon: ShieldCheck,
        number: "02",
        title: "Understand Medicare Options",
        description:
            "Get clearer information about Medicare-related considerations that may apply alongside disability benefits.",
        accent: "gold",
    },
    {
        icon: FileCheck2,
        number: "03",
        title: "Prepare With More Clarity",
        description:
            "Understand common application details and organize the information that may be important during the disability process.",
        accent: "blue",
    },
    {
        icon: HeartHandshake,
        number: "04",
        title: "Navigate Your Next Step",
        description:
            "Whether you are considering applying, waiting on a decision, or reviewing a denial, understand possible next steps.",
        accent: "peach",
    },
    {
        icon: MapPinned,
        number: "05",
        title: "Nationwide Support",
        description:
            "Access disability benefit information and support designed for individuals across the United States.",
        accent: "teal",
    },
];

const WhatWeDo = () => {
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
            className="what-we-do"
            aria-labelledby="what-we-do-title"
        >
            <div
                className="what-we-do__orb what-we-do__orb--one"
                aria-hidden="true"
            />
            <div
                className="what-we-do__orb what-we-do__orb--two"
                aria-hidden="true"
            />

            <div className="what-we-do__container">

                {/* ================= HEADER ================= */}

                <div className="what-we-do__header">
                    <div className="what-we-do__heading">

                        <div className="what-we-do__eyebrow">
                            <BadgeCheck size={15} />
                            How We Help
                        </div>

                        <h2 id="what-we-do-title">
                            Clearer Support for Your
                            <span> Disability Journey.</span>
                        </h2>

                    </div>

                    <div className="what-we-do__intro">
                        <p>
                            Disability benefits can feel complicated.
                            We help make the information easier to
                            understand so you can explore your options
                            and move forward with more clarity.
                        </p>

                        <button
                            type="button"
                            onClick={scrollToEligibility}
                            className="what-we-do__header-link"
                        >
                            Check My Eligibility
                            <ArrowRight size={17} />
                        </button>
                    </div>
                </div>


                {/* ================= CARDS ================= */}

                <div className="what-we-do__grid">

                    {services.map((service) => {
                        const Icon = service.icon;

                        return (
                            <article
                                className={`what-service-card what-service-card--${service.accent}`}
                                key={service.title}
                            >
                                <div className="what-service-card__top">

                                    <div className="what-service-card__icon">
                                        <Icon
                                            size={25}
                                            strokeWidth={1.9}
                                        />
                                    </div>

                                    <span className="what-service-card__number">
                                        {service.number}
                                    </span>

                                </div>

                                <div className="what-service-card__content">
                                    <h3>{service.title}</h3>

                                    <p>
                                        {service.description}
                                    </p>
                                </div>

                                <div
                                    className="what-service-card__line"
                                    aria-hidden="true"
                                />

                            </article>
                        );
                    })}

                </div>


                {/* ================= BOTTOM CTA ================= */}

                <div className="what-we-do__cta">

                    <div className="what-we-do__cta-icon">
                        <ShieldCheck size={25} />
                    </div>

                    <div className="what-we-do__cta-content">
                        <span>
                            NOT SURE WHERE TO START?
                        </span>

                        <strong>
                            Start with a simple eligibility review.
                        </strong>

                        <p>
                            Answer a few questions about your situation
                            and learn more about options that may apply.
                        </p>
                    </div>

                    <button
                        type="button"
                        className="what-we-do__cta-button"
                        onClick={scrollToEligibility}
                    >
                        Check My Eligibility
                        <ArrowRight size={18} />
                    </button>

                </div>

            </div>
        </section>
    );
};

export default WhatWeDo;