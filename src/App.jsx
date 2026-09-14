import { useEffect } from "react";
import {
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";


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


      </Routes>

      <Footer />
    </>
  );
}

export default App;