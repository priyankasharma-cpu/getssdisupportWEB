import Hero from "../../components/Hero/Hero";
import TrustBar from "../../components/TrustBar/TrustBar";

import AboutSection from "../../components/AboutSection/AboutSection";
import LeadForm from "../../components/LeadForm/LeadForm";
import HowItWorks from "../HowItWorks/HowItWorks";
import WhatWeDo from "../../components/WhatWeDo/WhatWeDo";
import CallCTA from "../../components/CallCTA/CallCTA";

const Home = () => {
    return (
        <main className="home-page">

            <Hero />

            <AboutSection />

            <TrustBar />

            {/* LEAD FORM TARGET */}
            <section
                id="lead-form"
                className="home-lead-form-section"
            >
                <LeadForm />
            </section>

            <HowItWorks />

            <CallCTA />

            <WhatWeDo />

        </main>
    );
};

export default Home;