import HeroSection from "@/components/SocialSentry/HeroSection";
import FeaturesSection from "@/components/SocialSentry/FeaturesSection";
import StatsSection from "@/components/SocialSentry/StatsSection";
import CTASection from "@/components/SocialSentry/CTASection";
import heroBg from "@/assets/hero-bg.jpg";
import SEOHead from "@/components/SEO/SEOHead";

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
            <SEOHead 
                title="Social Sentry | Powerful AI Reels & Porn Blocker"
                description="Stop doomscrolling with Social Sentry. Block Instagram Reels, TikTok, YouTube Shorts, and adult content. Build discipline using Prime Mode, Force Mode, and Hakari AI."
                keywords="Reels blocker, doomscrolling app, block TikTok shorts, block porn on Android, focus app for students, Hakari AI waifu"
                canonicalUrl="https://socialsentry.online/"
            />

            {/* Dark overlay */}
            <div className="fixed inset-0 bg-background/85 pointer-events-none" />

            <div className="relative z-10 text-foreground pt-20">
                <HeroSection />
                <FeaturesSection />
                <StatsSection />
                <CTASection />
            </div>
        </div>
    );
};

export default Home;
