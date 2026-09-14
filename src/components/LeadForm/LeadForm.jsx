import { useMemo, useState } from "react";
import {
    ArrowLeft,
    ArrowRight,
    CalendarDays,
    Check,
    CheckCircle2,
    FileCheck2,
    Headphones,
    LockKeyhole,
    Phone,
    ShieldCheck,
    UserRound,
} from "lucide-react";

import "./lead-form.css";

const questions = [
    {
        id: "applicationStatus",
        title: "Where are you in the process?",
        description: "Pick the one closest to your situation.",
        options: [
            "I haven't applied yet",
            "I applied and I'm waiting",
            "I was denied once",
            "Denied twice, or a hearing is coming",
        ],
    },
    {
        id: "workStatus",
        title: "Are you working at the moment?",
        description:
            "Your current work situation can affect which information may be relevant to you.",
        options: [
            "Not working at all",
            "A little part-time work",
            "Full-time",
        ],
    },
    {
        id: "conditionDuration",
        title: "How long has your condition kept you from working?",
        description:
            "Some disability programs consider whether a condition has lasted, or is expected to last, for a significant period.",
        options: [
            "Less than 3 months",
            "3–12 months, and it isn't improving",
            "Twelve months or more",
            "It's permanent or terminal",
        ],
    },
    {
        id: "medicalTreatment",
        title:
            "Have you been treated by a doctor, hospital or clinic in the past 12 months?",
        description:
            "Medical records may be relevant when evaluating a disability claim.",
        options: [
            "Yes, I see someone regularly",
            "Occasionally, when I can afford it",
            "Not currently",
        ],
    },
    {
        id: "conditionImpact",
        title:
            "Do you have an injury, disability or health issue keeping you out of work for the past 12 months?",
        description:
            "Tell us which situation most closely describes your circumstances.",
        options: ["Yes", "No", "I'm not sure"],
    },
    {
        id: "receivingBenefits",
        title:
            "Are you currently receiving Social Security Disability benefits?",
        description:
            "This information helps us understand your current situation.",
        options: ["Yes", "No", "I'm not sure"],
    },
    {
        id: "attorney",
        title:
            "Do you currently have an attorney representing your case?",
        description:
            "Please select the option that best describes your current situation.",
        options: ["Yes", "No", "I'm not sure"],
    },
];

const states = [
    "Alabama",
    "Alaska",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "Florida",
    "Georgia",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming",
    "District of Columbia",
];

const contactMethods = ["Phone", "Email", "Either"];

const callbackTimes = [
    "8:00 AM",
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
    "6:00 PM",
    "7:00 PM",
];

const LeadForm = () => {
    /*
        stage 1 = case questions + personal details
        stage 2 = claimant info
        stage 3 = review
    */

    const [stage, setStage] = useState(1);
    const [questionIndex, setQuestionIndex] = useState(0);
    const [showPersonalDetails, setShowPersonalDetails] =
        useState(false);

    const [answers, setAnswers] = useState({
        applicationStatus: "",
        workStatus: "",
        conditionDuration: "",
        medicalTreatment: "",
        conditionImpact: "",
        receivingBenefits: "",
        attorney: "",

        age: "",
        state: "",
        condition: "",

        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        zip: "",
        dateOfBirth: "",
        contactMethod: "Either",

        consent: false,

        callbackEnabled: false,
        callbackDay: "",
        callbackTime: "",
    });

    const [error, setError] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const currentQuestion = questions[questionIndex];

    const progress = useMemo(() => {
        if (stage === 1 && !showPersonalDetails) {
            return Math.round(
                ((questionIndex + 1) / 8) * 33.33
            );
        }

        if (stage === 1 && showPersonalDetails) {
            return 33;
        }

        if (stage === 2) {
            return 67;
        }

        return 100;
    }, [stage, questionIndex, showPersonalDetails]);

    const updateAnswer = (field, value) => {
        setAnswers((prev) => ({
            ...prev,
            [field]: value,
        }));

        setError("");
    };

    const validateCaseQuestion = () => {
        if (!answers[currentQuestion.id]) {
            setError("Please select an answer before continuing.");
            return false;
        }

        return true;
    };

    const validatePersonalDetails = () => {
        if (
            !answers.age ||
            !answers.state ||
            !answers.condition.trim()
        ) {
            setError(
                "Please complete your age, state, and condition."
            );

            return false;
        }

        return true;
    };

    const validateClaimant = () => {
        const required = [
            "firstName",
            "lastName",
            "email",
            "phone",
            "zip",
            "dateOfBirth",
        ];

        const missing = required.some(
            (field) => !String(answers[field]).trim()
        );

        if (missing) {
            setError("Please complete all required fields.");
            return false;
        }

        const emailRegex =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(answers.email)) {
            setError("Please enter a valid email address.");
            return false;
        }

        const phoneDigits =
            answers.phone.replace(/\D/g, "");

        if (
            phoneDigits.length !== 10 &&
            phoneDigits.length !== 11
        ) {
            setError("Please enter a valid U.S. phone number.");
            return false;
        }

        if (!/^\d{5}$/.test(answers.zip)) {
            setError("Please enter a valid 5-digit U.S. ZIP code.");
            return false;
        }

        return true;
    };

    const handleContinue = () => {
        setError("");

        if (stage === 1 && !showPersonalDetails) {
            if (!validateCaseQuestion()) return;

            if (questionIndex < questions.length - 1) {
                setQuestionIndex((prev) => prev + 1);
                return;
            }

            setShowPersonalDetails(true);
            return;
        }

        if (stage === 1 && showPersonalDetails) {
            if (!validatePersonalDetails()) return;

            setStage(2);
            return;
        }

        if (stage === 2) {
            if (!validateClaimant()) return;

            setStage(3);
        }
    };

    const handleBack = () => {
        setError("");

        if (stage === 3) {
            setStage(2);
            return;
        }

        if (stage === 2) {
            setStage(1);
            setShowPersonalDetails(true);
            return;
        }

        if (showPersonalDetails) {
            setShowPersonalDetails(false);
            setQuestionIndex(questions.length - 1);
            return;
        }

        if (questionIndex > 0) {
            setQuestionIndex((prev) => prev - 1);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!answers.consent) {
            setError(
                "Please review and agree to the consent before submitting."
            );

            return;
        }

        /*
            Replace this with your backend API later.

            fetch("/api/leads", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(answers),
            });
        */

        console.log("GetSSDISupport Lead:", answers);

        setSubmitted(true);
    };

    const showBack =
        stage > 1 ||
        showPersonalDetails ||
        questionIndex > 0;

    return (
        <section
            className="lead-review"
            id="apply"
            aria-labelledby="lead-review-title"
        >
            <div className="lead-review__glow lead-review__glow--one" />
            <div className="lead-review__glow lead-review__glow--two" />

            <div className="lead-review__container">

                {/* =====================================================
                    LEFT TRUST CONTENT
                ====================================================== */}

                <aside className="lead-review__intro">

                    <div className="lead-review__eyebrow">
                        <ShieldCheck size={15} />
                        Free Eligibility Review
                    </div>

                    <h2 id="lead-review-title">
                        Take the Next Step With
                        <span> More Clarity.</span>
                    </h2>

                    <p className="lead-review__lead">
                        Answer a few questions about your situation.
                        It&apos;s free, confidential, and designed to
                        make the next step easier to understand.
                    </p>

                    <div className="lead-review__trust-list">

                        <TrustItem
                            icon={<CheckCircle2 size={19} />}
                            title="Quick Evaluation"
                            text="Answer a few basic questions about your work and health situation."
                        />

                        <TrustItem
                            icon={<FileCheck2 size={19} />}
                            title="No Payment Details"
                            text="No credit card or payment information is needed to get started."
                        />

                        <TrustItem
                            icon={<UserRound size={19} />}
                            title="No Document Uploads"
                            text="You can begin without searching for medical records or paperwork."
                        />

                        <TrustItem
                            icon={<ShieldCheck size={19} />}
                            title="Simple Review"
                            text="Your answers help organize the information you provide."
                        />

                    </div>


                    {/* PRIVACY */}

                    <div className="lead-review__privacy">

                        <div className="lead-review__privacy-icon">
                            <LockKeyhole size={20} />
                        </div>

                        <div>
                            <h3>
                                Your Privacy & Data Security
                            </h3>

                            <p>
                                Your information is used to process
                                the inquiry and services you request.
                                Do not provide sensitive information
                                unless specifically requested.
                            </p>
                        </div>

                    </div>


                    {/* PHONE CARD */}

                    <div className="lead-review__phone-card">

                        <div className="lead-review__phone-icon">
                            <Headphones size={22} />
                        </div>

                        <div className="lead-review__phone-content">

                            <span>
                                Prefer speaking to someone?
                            </span>

                            <strong>
                                Our support team is available to help.
                            </strong>

                            <a href="tel:+18005555555">
                                <Phone size={16} />
                                Call Now
                            </a>

                        </div>

                    </div>

                </aside>


                {/* =====================================================
                    FORM CARD
                ====================================================== */}

                <div className="lead-form-card">

                    <div className="lead-form-card__header">

                        <div className="lead-form-card__label">
                            <ShieldCheck size={14} />
                            Free Evaluation
                        </div>

                        <h3>
                            Social Security Disability
                            <span> Benefits Evaluation</span>
                        </h3>

                        <p>
                            Answer a few questions about your situation.
                            Your responses help organize the information
                            you provide.
                        </p>

                    </div>


                    {/* =================================================
                        STEPPER
                    ================================================== */}

                    <div className="lead-stepper">

                        <Step
                            number="1"
                            title="Case Details"
                            active={stage === 1}
                            completed={stage > 1}
                        />

                        <div
                            className={`lead-stepper__line ${stage > 1
                                    ? "lead-stepper__line--complete"
                                    : ""
                                }`}
                        />

                        <Step
                            number="2"
                            title="Claimant Info"
                            active={stage === 2}
                            completed={stage > 2}
                        />

                        <div
                            className={`lead-stepper__line ${stage > 2
                                    ? "lead-stepper__line--complete"
                                    : ""
                                }`}
                        />

                        <Step
                            number="3"
                            title="Review"
                            active={stage === 3}
                            completed={submitted}
                        />

                    </div>


                    {/* =================================================
                        PROGRESS
                    ================================================== */}

                    <div className="lead-progress">

                        <div className="lead-progress__meta">
                            <span>
                                {stage === 1 &&
                                    !showPersonalDetails
                                    ? `Question ${questionIndex + 1
                                    } of 7`
                                    : stage === 1
                                        ? "Personal Details"
                                        : stage === 2
                                            ? "Claimant Information"
                                            : "Review & Submit"}
                            </span>

                            <strong>{progress}%</strong>
                        </div>

                        <div className="lead-progress__track">
                            <div
                                className="lead-progress__bar"
                                style={{
                                    width: `${progress}%`,
                                }}
                            />
                        </div>

                    </div>


                    {/* =================================================
                        ERROR
                    ================================================== */}

                    {error && (
                        <div
                            className="lead-form__error"
                            role="alert"
                        >
                            {error}
                        </div>
                    )}


                    {/* =================================================
                        FORM BODY
                    ================================================== */}

                    {!submitted ? (
                        <form
                            className="lead-form"
                            onSubmit={handleSubmit}
                            noValidate
                        >

                            {/* CASE QUESTIONS */}

                            {stage === 1 &&
                                !showPersonalDetails && (
                                    <QuestionScreen
                                        question={
                                            currentQuestion
                                        }
                                        index={questionIndex}
                                        value={
                                            answers[
                                            currentQuestion
                                                .id
                                            ]
                                        }
                                        onSelect={(value) =>
                                            updateAnswer(
                                                currentQuestion.id,
                                                value
                                            )
                                        }
                                    />
                                )}


                            {/* PERSONAL DETAILS */}

                            {stage === 1 &&
                                showPersonalDetails && (
                                    <PersonalDetails
                                        answers={answers}
                                        updateAnswer={
                                            updateAnswer
                                        }
                                    />
                                )}


                            {/* CLAIMANT INFO */}

                            {stage === 2 && (
                                <ClaimantInformation
                                    answers={answers}
                                    updateAnswer={
                                        updateAnswer
                                    }
                                />
                            )}


                            {/* REVIEW */}

                            {stage === 3 && (
                                <ReviewStep
                                    answers={answers}
                                    updateAnswer={
                                        updateAnswer
                                    }
                                />
                            )}


                            {/* ACTIONS */}

                            <div className="lead-form__actions">

                                {showBack && (
                                    <button
                                        type="button"
                                        className="lead-form__back"
                                        onClick={handleBack}
                                    >
                                        <ArrowLeft size={17} />
                                        Back
                                    </button>
                                )}

                                {stage < 3 ? (
                                    <button
                                        type="button"
                                        className="lead-form__continue"
                                        onClick={handleContinue}
                                    >
                                        Continue
                                        <ArrowRight size={18} />
                                    </button>
                                ) : (
                                    <button
                                        type="submit"
                                        className="lead-form__continue"
                                    >
                                        Submit Request
                                        <ArrowRight size={18} />
                                    </button>
                                )}

                            </div>

                        </form>
                    ) : (
                        <SuccessState />
                    )}


                    {/* SECURITY FOOTER */}

                    <div className="lead-form__security">

                        <span>
                            <LockKeyhole size={13} />
                            Secure
                        </span>

                        <span>
                            <Check size={13} />
                            Confidential
                        </span>

                        <span>
                            <ShieldCheck size={13} />
                            No obligation
                        </span>

                    </div>

                </div>
            </div>
        </section>
    );
};


/* =========================================================
   TRUST ITEM
========================================================= */

const TrustItem = ({ icon, title, text }) => (
    <div className="lead-review__trust-item">

        <div className="lead-review__trust-icon">
            {icon}
        </div>

        <div>
            <strong>{title}</strong>
            <p>{text}</p>
        </div>

    </div>
);


/* =========================================================
   STEPPER ITEM
========================================================= */

const Step = ({
    number,
    title,
    active,
    completed,
}) => (
    <div
        className={`lead-step ${active ? "lead-step--active" : ""
            } ${completed ? "lead-step--completed" : ""}`}
    >
        <div className="lead-step__circle">
            {completed ? <Check size={15} /> : number}
        </div>

        <span>{title}</span>
    </div>
);


/* =========================================================
   QUESTION
========================================================= */

const QuestionScreen = ({
    question,
    index,
    value,
    onSelect,
}) => (
    <div className="lead-question">

        <span className="lead-question__number">
            Question {index + 1} of 7
        </span>

        <h4>{question.title}</h4>

        <p>{question.description}</p>

        <div className="lead-question__options">

            {question.options.map((option) => (
                <button
                    key={option}
                    type="button"
                    className={`lead-option ${value === option
                            ? "lead-option--selected"
                            : ""
                        }`}
                    onClick={() => onSelect(option)}
                >
                    <span className="lead-option__radio">
                        {value === option && (
                            <Check size={12} />
                        )}
                    </span>

                    <span>{option}</span>

                    <ArrowRight
                        size={16}
                        className="lead-option__arrow"
                    />
                </button>
            ))}

        </div>
    </div>
);


/* =========================================================
   PERSONAL DETAILS
========================================================= */

const PersonalDetails = ({
    answers,
    updateAnswer,
}) => (
    <div className="lead-fields-screen">

        <span className="lead-question__number">
            Question 8 — Personal Details
        </span>

        <h4>A little about your situation</h4>

        <p>
            Tell us a little more about your circumstances.
        </p>

        <div className="lead-form__grid">

            <Field label="Age *">
                <select
                    value={answers.age}
                    onChange={(e) =>
                        updateAnswer(
                            "age",
                            e.target.value
                        )
                    }
                >
                    <option value="">
                        Please Select
                    </option>

                    <option>18–24</option>
                    <option>25–29</option>
                    <option>30–39</option>
                    <option>40–49</option>
                    <option>50–59</option>
                    <option>60+</option>
                </select>
            </Field>

            <Field label="State *">
                <select
                    value={answers.state}
                    onChange={(e) =>
                        updateAnswer(
                            "state",
                            e.target.value
                        )
                    }
                >
                    <option value="">
                        Please Select
                    </option>

                    {states.map((state) => (
                        <option key={state}>
                            {state}
                        </option>
                    ))}
                </select>
            </Field>

            <Field
                label="Describe your disability or condition in more detail *"
                full
            >
                <textarea
                    rows="5"
                    value={answers.condition}
                    placeholder="Tell us briefly what condition or situation is affecting your ability to work."
                    onChange={(e) =>
                        updateAnswer(
                            "condition",
                            e.target.value
                        )
                    }
                />
            </Field>

        </div>
    </div>
);


/* =========================================================
   CLAIMANT INFO
========================================================= */

const ClaimantInformation = ({
    answers,
    updateAnswer,
}) => (
    <div className="lead-fields-screen">

        <span className="lead-question__number">
            Step 2 — Claimant Information
        </span>

        <h4>Your Contact Information</h4>

        <p>
            Please provide your contact information so your
            submitted request can be followed up.
        </p>

        <div className="lead-form__grid">

            <Field label="First Name *">
                <input
                    type="text"
                    autoComplete="given-name"
                    value={answers.firstName}
                    onChange={(e) =>
                        updateAnswer(
                            "firstName",
                            e.target.value
                        )
                    }
                />
            </Field>

            <Field label="Last Name *">
                <input
                    type="text"
                    autoComplete="family-name"
                    value={answers.lastName}
                    onChange={(e) =>
                        updateAnswer(
                            "lastName",
                            e.target.value
                        )
                    }
                />
            </Field>

            <Field label="Email *">
                <input
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    value={answers.email}
                    onChange={(e) =>
                        updateAnswer(
                            "email",
                            e.target.value
                        )
                    }
                />
            </Field>

            <Field label="Phone *">
                <input
                    type="tel"
                    autoComplete="tel"
                    placeholder="(555) 123-4567"
                    value={answers.phone}
                    onChange={(e) =>
                        updateAnswer(
                            "phone",
                            e.target.value
                        )
                    }
                />
            </Field>

            <Field label="ZIP *">
                <input
                    type="text"
                    inputMode="numeric"
                    maxLength="5"
                    autoComplete="postal-code"
                    placeholder="12345"
                    value={answers.zip}
                    onChange={(e) =>
                        updateAnswer(
                            "zip",
                            e.target.value.replace(
                                /\D/g,
                                ""
                            )
                        )
                    }
                />
            </Field>

            <Field label="Date of Birth *">
                <input
                    type="date"
                    autoComplete="bday"
                    value={answers.dateOfBirth}
                    onChange={(e) =>
                        updateAnswer(
                            "dateOfBirth",
                            e.target.value
                        )
                    }
                />
            </Field>

            <Field
                label="Preferred Contact Method"
                full
            >
                <div className="lead-contact-methods">

                    {contactMethods.map((method) => (
                        <button
                            key={method}
                            type="button"
                            className={`lead-contact-method ${answers.contactMethod ===
                                    method
                                    ? "lead-contact-method--selected"
                                    : ""
                                }`}
                            onClick={() =>
                                updateAnswer(
                                    "contactMethod",
                                    method
                                )
                            }
                        >
                            {method}
                        </button>
                    ))}

                </div>
            </Field>

        </div>
    </div>
);


/* =========================================================
   FIELD
========================================================= */

const Field = ({
    label,
    children,
    full = false,
}) => (
    <label
        className={`lead-field ${full ? "lead-field--full" : ""
            }`}
    >
        <span>{label}</span>
        {children}
    </label>
);


/* =========================================================
   REVIEW
========================================================= */

const ReviewStep = ({
    answers,
    updateAnswer,
}) => {
    const reviewItems = [
        ["Application Status", answers.applicationStatus],
        ["Work Status", answers.workStatus],
        ["Condition Duration", answers.conditionDuration],
        ["Medical Treatment", answers.medicalTreatment],
        ["Condition Impact", answers.conditionImpact],
        ["Receiving Benefits", answers.receivingBenefits],
        ["Attorney", answers.attorney],
        ["Age", answers.age],
        ["State", answers.state],
        ["Condition", answers.condition],
        ["Name", `${answers.firstName} ${answers.lastName}`],
        ["Email", answers.email],
        ["Phone", answers.phone],
        ["ZIP", answers.zip],
        ["Date of Birth", answers.dateOfBirth],
        ["Preferred Contact", answers.contactMethod],
    ];

    return (
        <div className="lead-review-step">

            <span className="lead-question__number">
                Step 3 — Review
            </span>

            <h4>Review Your Information</h4>

            <p>
                Please review the information below before
                submitting your request.
            </p>

            <div className="lead-review-grid">
                {reviewItems.map(([label, value]) => (
                    <div
                        className="lead-review-item"
                        key={label}
                    >
                        <span>{label}</span>
                        <strong>
                            {value || "Not provided"}
                        </strong>
                    </div>
                ))}
            </div>


            {/* CONSENT */}

            <div className="lead-consent">

                <label>
                    <input
                        type="checkbox"
                        checked={answers.consent}
                        onChange={(e) =>
                            updateAnswer(
                                "consent",
                                e.target.checked
                            )
                        }
                    />

                    <span>
                        I agree to be contacted regarding
                        the information and services I requested.
                    </span>
                </label>

                <p>
                    By submitting, you acknowledge that you have
                    reviewed the applicable disclosures. Final
                    consent language should match your actual
                    communication and lead-partner requirements.
                </p>

                <div className="lead-consent__links">
                    <a href="/privacy-policy">
                        Privacy Policy
                    </a>

                    <a href="/terms">
                        Terms
                    </a>

                    <a href="/disclaimer">
                        Disclaimer
                    </a>
                </div>

            </div>


            {/* CALLBACK */}

            <div className="lead-callback">

                <button
                    type="button"
                    className="lead-callback__toggle"
                    onClick={() =>
                        updateAnswer(
                            "callbackEnabled",
                            !answers.callbackEnabled
                        )
                    }
                >
                    <CalendarDays size={17} />

                    {answers.callbackEnabled
                        ? "Remove Callback Request"
                        : "Schedule a Callback"}
                </button>

                {answers.callbackEnabled && (
                    <div className="lead-callback__content">

                        <Field label="Preferred Day">
                            <input
                                type="date"
                                value={
                                    answers.callbackDay
                                }
                                onChange={(e) =>
                                    updateAnswer(
                                        "callbackDay",
                                        e.target.value
                                    )
                                }
                            />
                        </Field>

                        <div className="lead-callback__times">

                            {callbackTimes.map((time) => (
                                <button
                                    type="button"
                                    key={time}
                                    className={`lead-callback__time ${answers.callbackTime ===
                                            time
                                            ? "lead-callback__time--selected"
                                            : ""
                                        }`}
                                    onClick={() =>
                                        updateAnswer(
                                            "callbackTime",
                                            time
                                        )
                                    }
                                >
                                    {time}
                                </button>
                            ))}

                        </div>

                    </div>
                )}

            </div>

        </div>
    );
};


/* =========================================================
   SUCCESS
========================================================= */

const SuccessState = () => (
    <div className="lead-success">

        <div className="lead-success__icon">
            <Check size={30} />
        </div>

        <span>Request Received</span>

        <h4>Thank you for getting started.</h4>

        <p>
            Your information has been received. A representative
            or relevant service partner may contact you using the
            information you provided.
        </p>

    </div>
);

export default LeadForm;