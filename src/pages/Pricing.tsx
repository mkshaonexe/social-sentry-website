import ProFeaturesSection from "@/components/SocialSentry/ProFeaturesSection";
import PricingSection from "@/components/SocialSentry/PricingSection";
import heroBg from "@/assets/hero-bg.jpg";
import SEOHead from "@/components/SEO/SEOHead";

const Pricing = () => {
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
                title="Social Sentry PRO Pricing | Unlock Focus & Force Mode"
                description="Upgrade to Social Sentry PRO via bKash to unlock Auto-Focus Schedules, Prime Mode, NSFW AI Shield, and the Scroll Limiter. Affordable plans for students."
                keywords="Social Sentry PRO, buy app blocker, lifetime access app blocker, bKash subscription, unlock Force mode, unlock porn blocker"
                canonicalUrl="https://socialsentry.online/pricing"
            />
            {/* Dark overlay */}
            <div className="fixed inset-0 bg-background/85 pointer-events-none" />

            <div className="relative z-10 text-foreground pt-20">
                <div className="container mx-auto px-6 py-12 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                        Simple, Transparent Pricing
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Choose the plan that's right for you and start protecting your digital well-being today.
                    </p>
                </div>
                <PricingSection />
                <ProFeaturesSection />
            </div>
        </div>
    );
};

export default Pricing;
