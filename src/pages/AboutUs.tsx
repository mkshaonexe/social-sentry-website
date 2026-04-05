
import heroBg from "@/assets/hero-bg.jpg";
import { Users, Shield, Rocket } from "lucide-react";
import SEOHead from "@/components/SEO/SEOHead";

const AboutUs = () => {
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
                title="About Us | Social Sentry's Mission"
                description="Learn about Social Sentry's mission to combat social media addiction and doomscrolling. We protect teens, students, and professionals from short-form content traps using an advanced Accessibility engine and ML NSFW Shield."
                keywords="about Social Sentry, mission, combat social media addiction, protect teens online, ML NSFW Shield, accessibility app blocker"
                canonicalUrl="https://socialsentry.online/about-us"
            />
            {/* Dark overlay */}
            <div className="fixed inset-0 bg-background/85 pointer-events-none" />

            <div className="relative z-10 text-foreground pt-40 pb-20">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                            Reclaiming Your Digital Life
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            Social Sentry was born from a simple observation: our digital tools, designed to connect us, have become sources of constant distraction and mental fatigue. We're on a mission to help you build a healthier relationship with technology.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
                        <div className="bg-card/30 backdrop-blur-md p-8 rounded-2xl border border-border/50">
                            <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-6">
                                <Users className="text-primary w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-4">User-Centric</h3>
                            <p className="text-muted-foreground">Everything we build is designed with your mental well-being as the top priority. We don't track your data; we track your progress.</p>
                        </div>

                        <div className="bg-card/30 backdrop-blur-md p-8 rounded-2xl border border-border/50">
                            <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-6">
                                <Shield className="text-primary w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-4">Privacy First</h3>
                            <p className="text-muted-foreground">Your attention is yours. We ensure your data stays private and your browsing experience remains yours alone.</p>
                        </div>

                        <div className="bg-card/30 backdrop-blur-md p-8 rounded-2xl border border-border/50">
                            <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-6">
                                <Rocket className="text-primary w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-4">Innovation</h3>
                            <p className="text-muted-foreground">We use the latest AI technology to provide real-time, context-aware protection against digital distractions.</p>
                        </div>
                    </div>

                    <div className="max-w-3xl mx-auto bg-card/20 backdrop-blur-xl p-10 rounded-3xl border border-border/50 text-center">
                        <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
                        <p className="text-lg text-muted-foreground italic">
                            "A world where technology serves humanity, not the other way around. We believe everyone deserves the freedom to focus on what truly matters."
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
