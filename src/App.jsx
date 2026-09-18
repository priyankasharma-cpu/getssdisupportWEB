import { useEffect } from "react";
import {
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import CallPopup from "./components/CallPopup/CallPopup";
import FloatingActions from "./components/FloatingActions/FloatingActions";
import FinalCTA from "./components/FinalCTA/FinalCTA";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import FAQPage from "./pages/FAQ/FAQPage";
import Eligibility from "./pages/Eligibility/Eligibility";
import Conditions from "./pages/Conditions/Conditions";
import HowItWorks from "./pages/HowItWorks/HowItWorks";

import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";
import Terms from "./pages/Terms/Terms";

/* =====================================================
   SCROLL HANDLER
===================================================== */

function ScrollHandler() {
  const { pathname, hash } = useLocation();

  useEffect(() => {

    // If URL contains #eligibility / #how-it-works
    if (hash) {
      const sectionId = hash.replace("#", "");

      const timer = setTimeout(() => {
        const section =
          document.getElementById(sectionId);

        if (section) {
          section.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 100);

      return () => clearTimeout(timer);
    }

    // Normal page change -> scroll top
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });

  }, [pathname, hash]);

  return null;
}


/* =====================================================
   APP
===================================================== */

function App() {
  return (
    <>
      <ScrollHandler />

      <Navbar />

      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/eligibility" element={<Eligibility />} />
        <Route path="/conditions" element={<Conditions />} />
        <Route path="/how-it-works" element={<HowItWorks />} />


        <Route
          path="/privacy-policy"
          element={<PrivacyPolicy />}
        />

        <Route
          path="/terms"
          element={<Terms />}
        />

      </Routes>

      <Footer />

      {/* GLOBAL FLOATING CONTACT BUTTONS */}
      <FloatingActions />

      {/* GLOBAL CALL POPUP */}
      <CallPopup />

      {/* GLOBAL MOBILE STICKY CTA */}
      <FinalCTA />
    </>
  );
}

export default App;