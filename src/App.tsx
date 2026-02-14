import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SocialSentryNavbar from "@/components/SocialSentry/SocialSentryNavbar";
import SocialSentryFooter from "@/components/SocialSentry/SocialSentryFooter";
import Home from "@/pages/Home";
import PrivacyPolicy from "@/pages/PrivacyPolicy";

function App() {
  return (
    <Router>
      <SocialSentryNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
      <SocialSentryFooter />
    </Router>
  );
}

export default App;
