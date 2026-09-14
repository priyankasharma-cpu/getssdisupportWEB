import {
    ArrowRight,
    CheckCircle2,
    ClipboardCheck,
    FileSearch,
    PhoneCall,
    ShieldCheck,
} from "lucide-react";

import "./how-it-works.css";

const steps = [
    {
        number: "01",
        icon: ClipboardCheck,

        image: "/image/STEP1.png",

        imageAlt:
            "Person answering disability benefits eligibility questions at home",

        title: "Tell Us About Your Situation",

        description:
            "Answer a few simple questions about your work status, health condition, and where you are in the disability benefits process.",

        status: "Quick questions",
    },

    {
        number: "02",
        icon: FileSearch,

        image: "/image/STEP2.png",

        imageAlt:
            "Couple reviewing SSDI and SSI disability benefit information together",

        title: "Review Your Options",

        description:
            "Your answers help organize the information you provide and make it easier to understand which next steps may be relevant.",

        status: "Clear information",
    },

    {
        number: "03",
        icon: PhoneCall,

        image: "/image/STEP3.png",

        imageAlt:
            "Person speaking with a disability benefits support representative",

        title: "Take the Next Step",

        description:
            "Continue online or speak with someone if you would like help understanding the next step in your situation.",

        status: "Flexible next step",
    },
];

const HowItWorks = () => {
    return (
        <section
            id="how-it-works"
            className="how-it-works"
            aria-labelledby="how-it-works-title"
        >
            <div className="how-it-works__orb how-it-works__orb--one" />
            <div className="how-it-works__orb how-it-works__orb--two" />

            <div className="how-it-works__container">

                {/* ================= HEADER ================= */}

                <div className="how-it-works__header">

                    <div className="how-it-works__eyebrow">
                        <ShieldCheck size={15} />
                        How It Works
                    </div>

                    <h2 id="how-it-works-title">
                        Getting Started Is
                        <span> Simple.</span>
                    </h2>

                    <p>
                        Learn more about your disability benefit options
                        in a few straightforward steps, without unnecessary
                        complexity.
                    </p>

                </div>


                {/* ================= STEPS ================= */}

                <div className="how-it-works__steps">

                    {steps.map((step, index) => {
                        const Icon = step.icon;

                        return (
                            <div
                                className="how-step-wrap"
                                key={step.number}
                            >

                                <article className="how-step">

                                    {/* IMAGE */}

                                    <div className="how-step__media">

                                        <img
                                            src={step.image}
                                            alt={step.imageAlt}
                                            className="how-step__image"
                                        />

                                        <div className="how-step__image-overlay" />


                                        {/* STEP BADGE */}

                                        <div className="how-step__number">
                                            <span>STEP</span>
                                            {step.number}
                                        </div>


                                        {/* ICON */}

                                        <div className="how-step__icon">
                                            <Icon size={23} />
                                        </div>

                                    </div>


                                    {/* CONTENT */}

                                    <div className="how-step__content">

                                        <span className="how-step__mini-label">
                                            Step {step.number}
                                        </span>

                                        <h3>
                                            {step.title}
                                        </h3>

                                        <p>
                                            {step.description}
                                        </p>

                                        <div className="how-step__status">
                                            <CheckCircle2 size={16} />

                                            <span>
                                                {step.status}
                                            </span>
                                        </div>

                                    </div>

                                </article>


                                {/* CONNECTOR */}

                                {index < steps.length - 1 && (
                                    <div className="how-step__connector">
                                        <ArrowRight size={18} />
                                    </div>
                                )}

                            </div>
                        );
                    })}

                </div>


                {/* ================= CTA ================= */}

                <div className="how-it-works__cta">

                    <div className="how-it-works__cta-content">

                        <span>
                            Ready to get started?
                        </span>

                        <strong>
                            Begin with a few simple eligibility questions.
                        </strong>

                    </div>

                    <div className="how-it-works__cta-actions">

                        <a
                            href="#quick-eligibility"
                            className="how-it-works__button how-it-works__button--primary"
                        >
                            Start My Eligibility Check

                            <ArrowRight size={18} />
                        </a>

                        <a
                            href="tel:+18005555555"
                            className="how-it-works__button how-it-works__button--secondary"
                        >
                            <PhoneCall size={17} />

                            Call Now
                        </a>

                    </div>

                </div>

            </div>
        </section>
    );
};

export default HowItWorks;