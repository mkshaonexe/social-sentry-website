import SocialSentryNavbar from "@/components/SocialSentry/SocialSentryNavbar";
import HeroSection from "@/components/SocialSentry/HeroSection";
import FeaturesSection from "@/components/SocialSentry/FeaturesSection";
import StatsSection from "@/components/SocialSentry/StatsSection";
import CTASection from "@/components/SocialSentry/CTASection";
import SocialSentryFooter from "@/components/SocialSentry/SocialSentryFooter";
import heroBg from "@/assets/hero-bg.jpg";

function App() {
  return (
    <div
      className="min-h-screen bg-background social-sentry-theme"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Dark overlay */}
      <div className="fixed inset-0 bg-background/85 pointer-events-none" />

      <div className="relative z-10 text-foreground">
        <SocialSentryNavbar />
        <main className="pt-20">
          <HeroSection />
          <FeaturesSection />
          <StatsSection />
          <CTASection />
        </main>
        <SocialSentryFooter />
      </div>
    </div>
  );
}

export default App;
