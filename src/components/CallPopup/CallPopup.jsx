import { useCallback, useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import {
    Check,
    Phone,
    ShieldCheck,
    X,
} from "lucide-react";

import "./call-popup.css";

const PHONE_NUMBER = "+18339917969";
const DISPLAY_PHONE = "+1 (833) 991-7969";

const COOLDOWN = 90 * 1000; // 1.5 minutes

const CallPopup = () => {
    const location = useLocation();

    const [isOpen, setIsOpen] = useState(false);

    const lastClosedAt = useRef(0);
    const previousPath = useRef(location.pathname);

    /* =====================================================
       CHECK IF POPUP CAN OPEN
    ===================================================== */

    const canOpenPopup = useCallback(() => {
        if (isOpen) return false;

        const timeSinceClose =
            Date.now() - lastClosedAt.current;

        return (
            lastClosedAt.current === 0 ||
            timeSinceClose >= COOLDOWN
        );
    }, [isOpen]);


    /* =====================================================
       OPEN POPUP
    ===================================================== */

    const openPopup = useCallback(() => {
        if (canOpenPopup()) {
            setIsOpen(true);
        }
    }, [canOpenPopup]);


    /* =====================================================
       CLOSE POPUP
    ===================================================== */

    const closePopup = () => {
        setIsOpen(false);

        lastClosedAt.current = Date.now();
    };


    /* =====================================================
       FIRST WEBSITE LOAD / RELOAD
    ===================================================== */

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsOpen(true);
        }, 700);

        return () => clearTimeout(timer);
    }, []);


    /* =====================================================
       ROUTE CHANGE
       HOME -> FAQ -> ABOUT etc.
    ===================================================== */

    useEffect(() => {
        if (previousPath.current !== location.pathname) {
            previousPath.current = location.pathname;

            const timer = setTimeout(() => {
                openPopup();
            }, 650);

            return () => clearTimeout(timer);
        }
    }, [location.pathname, openPopup]);


    /* =====================================================
       EXIT INTENT
       Desktop: cursor leaves top of browser
    ===================================================== */

    useEffect(() => {
        const handleExitIntent = (event) => {
            if (
                event.clientY <= 5 &&
                !event.relatedTarget
            ) {
                openPopup();
            }
        };

        document.addEventListener(
            "mouseout",
            handleExitIntent
        );

        return () => {
            document.removeEventListener(
                "mouseout",
                handleExitIntent
            );
        };
    }, [openPopup]);


    /* =====================================================
       ESC KEY
    ===================================================== */

    useEffect(() => {
        if (!isOpen) return;

        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                closePopup();
            }
        };

        window.addEventListener(
            "keydown",
            handleKeyDown
        );

        return () => {
            window.removeEventListener(
                "keydown",
                handleKeyDown
            );
        };
    }, [isOpen]);


    /* =====================================================
       LOCK BODY
    ===================================================== */

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add(
                "call-popup-open"
            );
        } else {
            document.body.classList.remove(
                "call-popup-open"
            );
        }

        return () => {
            document.body.classList.remove(
                "call-popup-open"
            );
        };
    }, [isOpen]);


    if (!isOpen) {
        return null;
    }


    return (
        <div
            className="call-popup"
            role="dialog"
            aria-modal="true"
            aria-labelledby="call-popup-title"
        >
            {/* OVERLAY */}

            <button
                type="button"
                className="call-popup__overlay"
                onClick={closePopup}
                aria-label="Close call popup"
            />


            {/* MODAL */}

            <div className="call-popup__modal">

                {/* CLOSE */}

                <button
                    type="button"
                    className="call-popup__close"
                    onClick={closePopup}
                    aria-label="Close"
                >
                    <X size={18} />
                </button>


                {/* TOP BRAND */}

                <div className="call-popup__brand">
                    <ShieldCheck size={15} />

                    <span>
                        GetSSDISupport
                    </span>

                    <small>
                        Disability Support
                    </small>
                </div>


                {/* INCOMING CALL ICON */}

                <div className="call-popup__call-animation">

                    <span className="call-popup__ring call-popup__ring--one" />
                    <span className="call-popup__ring call-popup__ring--two" />
                    <span className="call-popup__ring call-popup__ring--three" />

                    <div className="call-popup__phone-circle">
                        <Phone
                            size={34}
                            strokeWidth={2.2}
                        />
                    </div>

                </div>


                {/* STATUS */}

                <div className="call-popup__status">
                    <span className="call-popup__status-dot" />

                    CALL SUPPORT
                </div>


                {/* CONTENT */}

                <h2 id="call-popup-title">
                    Questions About
                    <span> Disability Benefits?</span>
                </h2>

                <p className="call-popup__lead">
                    One call can help you better understand
                    your options and possible next steps.
                </p>


                {/* TRUST */}

                <div className="call-popup__trust">

                    <span>
                        <Check size={14} />
                        Free to call
                    </span>

                    <span>
                        <Check size={14} />
                        No obligation
                    </span>

                    <span>
                        <Check size={14} />
                        Private conversation
                    </span>

                </div>


                {/* CALL BUTTON */}

                <a
                    href={`tel:${PHONE_NUMBER}`}
                    className="call-popup__button"
                >
                    <span className="call-popup__button-icon">
                        <Phone size={21} />
                    </span>

                    <span className="call-popup__button-copy">
                        <small>
                            TAP TO CALL NOW
                        </small>

                        <strong>
                            {DISPLAY_PHONE}
                        </strong>
                    </span>

                    <span className="call-popup__button-live">
                        CALL
                    </span>
                </a>


                {/* FOOTER TRUST */}

                <div className="call-popup__footer">
                    <ShieldCheck size={13} />

                    <span>
                        GetSSDISupport is an independent
                        information resource.
                    </span>
                </div>

            </div>
        </div>
    );
};

export default CallPopup;