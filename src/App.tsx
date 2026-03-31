import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SocialSentryNavbar from "@/components/SocialSentry/SocialSentryNavbar";
import SocialSentryFooter from "@/components/SocialSentry/SocialSentryFooter";
import Home from "@/pages/Home";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import Pricing from "@/pages/Pricing";
import AboutUs from "@/pages/AboutUs";
import Affiliate from "@/pages/Affiliate";

function App() {
  return (
    <Router>
      <SocialSentryNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/affiliate" element={<Affiliate />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
      <SocialSentryFooter />
    </Router>
  );
}

export default App;
