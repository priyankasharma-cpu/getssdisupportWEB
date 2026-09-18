import {
    LockKeyhole,
    ShieldCheck,
    CheckCircle2,
    HeartHandshake,
} from "lucide-react";

import "./trust-bar.css";


const trustItems = [
    {
        icon: LockKeyhole,
        title: "Private & Confidential",
        text: "Your information is handled with care.",
    },
    {
        icon: CheckCircle2,
        title: "Simple Process",
        text: "Clear steps without unnecessary complexity.",
    },
    {
        icon: ShieldCheck,
        title: "Independent Resource",
        text: "Not affiliated with the U.S. government.",
    },
    {
        icon: HeartHandshake,
        title: "No Obligation",
        text: "Learn about your options at your own pace.",
    },
];


const TrustBar = () => {
    return (
        <section
            className="trust-bar"
            aria-label="GetSSDISupport trust information"
        >
            <div className="trust-bar__container">

                {/* ================= INTRO ================= */}

                <div className="trust-bar__intro">
                    <span className="trust-bar__eyebrow">
                        Built Around Clarity
                    </span>

                    <p>
                        A simple way to learn more about your disability
                        benefit options.
                    </p>
                </div>


                {/* ================= TRUST CARDS ================= */}

                <div className="trust-bar__grid">
                    {trustItems.map((item) => {
                        const Icon = item.icon;

                        return (
                            <div
                                className="trust-bar__item"
                                key={item.title}
                            >
                                <div
                                    className="trust-bar__icon"
                                    aria-hidden="true"
                                >
                                    <Icon />
                                </div>

                                <div className="trust-bar__content">
                                    <strong>
                                        {item.title}
                                    </strong>

                                    <span>
                                        {item.text}
                                    </span>
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
};


export default TrustBar;