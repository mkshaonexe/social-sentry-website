
import HeroSection from "@/components/SocialSentry/HeroSection";
import FeaturesSection from "@/components/SocialSentry/FeaturesSection";
import StatsSection from "@/components/SocialSentry/StatsSection";
import ProFeaturesSection from "@/components/SocialSentry/ProFeaturesSection";
import PricingSection from "@/components/SocialSentry/PricingSection";
import CTASection from "@/components/SocialSentry/CTASection";
import heroBg from "@/assets/hero-bg.jpg";

const Home = () => {
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

            <div className="relative z-10 text-foreground pt-20">
                <HeroSection />
                <FeaturesSection />
                <StatsSection />
                <ProFeaturesSection />
                <PricingSection />
                <CTASection />
            </div>
        </div>
    );
};

export default Home;
