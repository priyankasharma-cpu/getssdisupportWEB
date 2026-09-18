import {
    ArrowRight,
    BadgeCheck,
    Check,
    HeartHandshake,
    LockKeyhole,
    Phone,
    ShieldCheck,
    Sparkles,
    Users,
} from "lucide-react";

import { Link } from "react-router-dom";
import "./about.css";

const About = () => {
    return (
        <main className="about-page">

            {/* ================= HERO ================= */}
            <section className="about-hero">
                <div className="about-hero__glow about-hero__glow--one" />
                <div className="about-hero__glow about-hero__glow--two" />

                <div className="about-container about-hero__grid">

                    {/* LEFT CONTENT */}
                    <div className="about-hero__content">

                        <div className="about-eyebrow">
                            <ShieldCheck size={17} />
                            <span>About GetSSDISupport</span>
                        </div>

                        <h1 className="about-hero__title">
                            Helping You Take the
                            <span> Next Step With Confidence</span>
                        </h1>

                        <p className="about-hero__description">
                            GetSSDISupport helps people explore SSDI and SSI
                            benefit options and connect with resources that may
                            help them understand their next steps.
                        </p>

                        <div className="about-hero__points">
                            <div>
                                <span className="about-check">
                                    <Check size={16} />
                                </span>
                                Simple eligibility guidance
                            </div>

                            <div>
                                <span className="about-check">
                                    <Check size={16} />
                                </span>
                                Free initial review
                            </div>

                            <div>
                                <span className="about-check">
                                    <Check size={16} />
                                </span>
                                No obligation to get started
                            </div>
                        </div>

                        <div className="about-hero__actions">
                            <Link
                                to="/#lead-form"
                                className="about-btn about-btn--primary"
                            >
                                Check Your Eligibility
                                <ArrowRight size={18} />
                            </Link>

                            <a
                                href="tel:+18339917969 "
                                className="about-btn about-btn--call"
                            >
                                <span className="about-call-icon">
                                    <Phone size={18} />
                                </span>

                                <span>
                                    <small>Questions? Call Us</small>
                                    +1 (833) 991-7969
                                </span>
                            </a>
                        </div>
                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="about-hero__media">

                        <div className="about-hero__image-shell">

                            <img
                                src="/image/newimabout.png"
                                alt="People from different professions exploring disability benefit support"
                                className="about-hero__image"
                            />

                            <div className="about-hero__image-shade" />

                            <div className="about-hero__floating-card">

                                <div className="about-hero__floating-icon">
                                    <HeartHandshake size={24} />
                                </div>

                                <div>
                                    <strong>
                                        Support That Starts With You
                                    </strong>

                                    <span>
                                        Clear guidance for your next step
                                    </span>
                                </div>

                            </div>

                        </div>


                        <div className="about-hero__trust-card">

                            <ShieldCheck size={21} />

                            <div>
                                <strong>
                                    Private &amp; Confidential
                                </strong>

                                <span>
                                    Your information is handled with care.
                                </span>
                            </div>

                        </div>

                    </div>
                </div>
            </section>

            {/* ================= TRUST STRIP ================= */}
            <section className="about-trust-strip">
                <div className="about-container about-trust-strip__grid">

                    <div className="about-trust-item">
                        <ShieldCheck />
                        <div>
                            <strong>Privacy Focused</strong>
                            <span>Your information matters</span>
                        </div>
                    </div>

                    <div className="about-trust-item">
                        <HeartHandshake />
                        <div>
                            <strong>People First</strong>
                            <span>Guidance built around you</span>
                        </div>
                    </div>

                    <div className="about-trust-item">
                        <BadgeCheck />
                        <div>
                            <strong>Simple Process</strong>
                            <span>Easy-to-understand next steps</span>
                        </div>
                    </div>

                    <div className="about-trust-item">
                        <Phone />
                        <div>
                            <strong>Call Support</strong>
                            <span>Speak with someone today</span>
                        </div>
                    </div>

                </div>
            </section>

            {/* ================= WHO WE ARE ================= */}
            <section className="about-story">
                <div className="about-container about-story__grid">

                    <div className="about-story__visual">
                        <div className="about-story__card">

                            <div className="about-story__icon">
                                <Users size={30} />
                            </div>

                            <span className="about-section-label">
                                WHO WE ARE
                            </span>

                            <h2>
                                A Simpler Way to Explore Disability Support
                            </h2>

                            <p>
                                Understanding disability benefit options can
                                feel complicated. Our goal is to make the
                                starting point easier to understand.
                            </p>

                            <div className="about-story__mini">
                                <Sparkles size={19} />
                                Clear information. Simple steps. Human support.
                            </div>

                        </div>
                    </div>

                    <div className="about-story__content">

                        <span className="about-section-label">
                            OUR PURPOSE
                        </span>

                        <h2 className="about-section-title">
                            Helping People Understand
                            <span> What Comes Next</span>
                        </h2>

                        <p>
                            GetSSDISupport was created to provide an accessible
                            starting point for people who want to learn more
                            about Social Security Disability Insurance (SSDI)
                            and Supplemental Security Income (SSI).
                        </p>

                        <p>
                            We focus on making the process easier to navigate by
                            helping visitors review basic eligibility factors,
                            learn about available programs, and take an
                            appropriate next step.
                        </p>

                        <div className="about-story__features">

                            <div>
                                <Check />
                                Straightforward information
                            </div>

                            <div>
                                <Check />
                                Easy eligibility questions
                            </div>

                            <div>
                                <Check />
                                Convenient phone support
                            </div>

                            <div>
                                <Check />
                                No-obligation starting point
                            </div>

                        </div>

                    </div>
                </div>
            </section>

            {/* ================= VALUES ================= */}
            <section className="about-values">

                <div className="about-container">

                    <div className="about-section-heading">
                        <span className="about-section-label">
                            WHAT MATTERS TO US
                        </span>

                        <h2 className="about-section-title">
                            Support Built Around
                            <span> Clarity & Trust</span>
                        </h2>

                        <p>
                            We believe getting information about disability
                            benefits should feel understandable, respectful,
                            and straightforward.
                        </p>
                    </div>

                    <div className="about-values__grid">

                        <article className="about-value-card">
                            <div className="about-value-card__icon">
                                <HeartHandshake />
                            </div>

                            <span className="about-value-card__number">
                                01
                            </span>

                            <h3>People First</h3>

                            <p>
                                Every person's circumstances are different.
                                Our experience is designed to provide a simple
                                and supportive starting point.
                            </p>
                        </article>

                        <article className="about-value-card">
                            <div className="about-value-card__icon">
                                <Sparkles />
                            </div>

                            <span className="about-value-card__number">
                                02
                            </span>

                            <h3>Keep It Clear</h3>

                            <p>
                                We simplify complex topics into clear
                                information so you can better understand your
                                available options.
                            </p>
                        </article>

                        <article className="about-value-card">
                            <div className="about-value-card__icon">
                                <LockKeyhole />
                            </div>

                            <span className="about-value-card__number">
                                03
                            </span>

                            <h3>Respect Your Privacy</h3>

                            <p>
                                We believe personal information should be
                                treated responsibly and with appropriate care.
                            </p>
                        </article>

                    </div>
                </div>
            </section>

            {/* ================= HOW WE HELP ================= */}
            <section className="about-process">

                <div className="about-container">

                    <div className="about-section-heading">
                        <span className="about-section-label">
                            HOW WE HELP
                        </span>

                        <h2 className="about-section-title">
                            Your Next Step Can Be
                            <span> Simple</span>
                        </h2>
                    </div>

                    <div className="about-process__grid">

                        <div className="about-process__item">
                            <span className="about-process__number">01</span>
                            <h3>Tell Us About Your Situation</h3>
                            <p>
                                Answer a few basic questions about your work
                                status and circumstances.
                            </p>
                        </div>

                        <div className="about-process__line" />

                        <div className="about-process__item">
                            <span className="about-process__number">02</span>
                            <h3>Review Your Options</h3>
                            <p>
                                Learn whether your situation may align with
                                common SSDI or SSI eligibility factors.
                            </p>
                        </div>

                        <div className="about-process__line" />

                        <div className="about-process__item">
                            <span className="about-process__number">03</span>
                            <h3>Take the Next Step</h3>
                            <p>
                                Continue online or call to learn more about
                                possible next steps.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* ================= FINAL CTA ================= */}
            <section className="about-final">

                <div className="about-final__glow" />

                <div className="about-container about-final__content">

                    <div className="about-final__badge">
                        <Phone size={16} />
                        Ready When You Are
                    </div>

                    <h2>
                        Have Questions About
                        <span> SSDI or SSI?</span>
                    </h2>

                    <p>
                        Take the first step today. Explore your options online
                        or call to learn more.
                    </p>

                    <div className="about-final__actions">

                        <Link
                            to="/#lead-form"
                            className="about-btn about-btn--primary"
                        >
                            Check Eligibility
                            <ArrowRight size={18} />
                        </Link>

                        <a
                            href="tel:+18339917969"
                            className="about-final__call"
                        >
                            <Phone size={19} />
                            Call +1 (833) 991-7969
                        </a>

                    </div>

                    <div className="about-final__note">
                        <ShieldCheck size={16} />
                        Free initial review • No obligation
                    </div>

                </div>
            </section>

        </main>
    );
};

export default About;