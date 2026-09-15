import Hero from "../../components/Hero/Hero";
// import QuickEligibility from "../../components/QuickEligibility/QuickEligibility";z
import TrustBar from "../../components/TrustBar/TrustBar";
import Eligibility from "../../components/Eligibility/Eligibility";
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
            <Eligibility />
            <LeadForm />
            <HowItWorks />
            <CallCTA />
            <WhatWeDo />

        </main>
    );
};

export default Home;