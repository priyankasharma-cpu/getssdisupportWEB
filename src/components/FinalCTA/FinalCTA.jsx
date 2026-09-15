import { Phone, ClipboardCheck } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import "./final-cta.css";

const PHONE_NUMBER = "+18339917969";

const FinalCTA = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const handleEligibility = () => {
        if (location.pathname === "/") {
            document
                .getElementById("eligibility")
                ?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });

            return;
        }

        navigate("/#eligibility");

        setTimeout(() => {
            document
                .getElementById("eligibility")
                ?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
        }, 250);
    };

    return (
        <nav
            className="mobile-final-cta"
            aria-label="Quick disability support actions"
        >
            <div className="mobile-final-cta__inner">

                {/* CALL */}

                <a
                    href={`tel:${PHONE_NUMBER}`}
                    className="
                        mobile-final-cta__button
                        mobile-final-cta__button--call
                    "
                    aria-label="Call GetSSDISupport"
                >
                    <span className="mobile-final-cta__icon">
                        <span className="mobile-final-cta__call-ring" />

                        <Phone
                            size={19}
                            strokeWidth={2.6}
                        />
                    </span>

                    <span className="mobile-final-cta__text">
                        <small>QUESTIONS?</small>
                        <strong>CALL NOW</strong>
                    </span>
                </a>


                {/* CHECK ELIGIBILITY */}

                <button
                    type="button"
                    onClick={handleEligibility}
                    className="
                        mobile-final-cta__button
                        mobile-final-cta__button--check
                    "
                    aria-label="Check disability eligibility"
                >
                    <span className="mobile-final-cta__icon">
                        <ClipboardCheck
                            size={19}
                            strokeWidth={2.5}
                        />
                    </span>

                    <span className="mobile-final-cta__text">
                        <small>GET STARTED</small>
                        <strong>CHECK NOW</strong>
                    </span>
                </button>

            </div>
        </nav>
    );
};

export default FinalCTA;