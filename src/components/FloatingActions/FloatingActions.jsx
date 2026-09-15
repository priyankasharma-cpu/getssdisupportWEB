import { MessageCircle, Phone } from "lucide-react";
import "./floating-actions.css";

const PHONE_NUMBER = "+18339917969";

// WhatsApp URL me + use nahi hota
const WHATSAPP_NUMBER = "18339917969";

const WHATSAPP_MESSAGE =
    "Hi, I’m visiting GetSSDISupport and would like more information about disability benefit options.";

const FloatingActions = () => {
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
        WHATSAPP_MESSAGE
    )}`;

    return (
        <div
            className="gss-floating-actions"
            aria-label="Contact options"
        >
            {/* ================= WHATSAPP ================= */}

            <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="gss-floating-action gss-floating-action--whatsapp"
                aria-label="Chat with GetSSDISupport on WhatsApp"
            >
                <span className="gss-floating-action__tooltip">
                    Chat on WhatsApp
                </span>

                <span className="gss-floating-action__icon">
                    <MessageCircle size={25} strokeWidth={2.3} />
                </span>

                <span
                    className="gss-floating-action__online"
                    aria-hidden="true"
                />
            </a>


            {/* ================= CALL ================= */}

            <a
                href={`tel:${PHONE_NUMBER}`}
                className="gss-floating-action gss-floating-action--call"
                aria-label="Call GetSSDISupport at 1 833 991 7969"
            >
                {/* incoming call rings */}

                <span
                    className="gss-call-ring gss-call-ring--one"
                    aria-hidden="true"
                />

                <span
                    className="gss-call-ring gss-call-ring--two"
                    aria-hidden="true"
                />

                <span className="gss-floating-action__tooltip">
                    Call +1 (833) 991-7969
                </span>

                <span className="gss-floating-action__icon gss-floating-action__phone">
                    <Phone size={25} strokeWidth={2.4} />
                </span>
            </a>
        </div>
    );
};

export default FloatingActions;