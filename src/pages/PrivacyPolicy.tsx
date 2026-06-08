import { motion } from "framer-motion";
import SEOHead from "@/components/SEO/SEOHead";
import heroBg from "@/assets/hero-bg.jpg";

const PrivacyPolicy = () => {
    return (
        <div
            className="min-h-screen bg-background social-sentry-theme relative"
            style={{
                backgroundImage: `url(${heroBg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
            }}
        >
            <SEOHead 
                title="Privacy Policy | Social Sentry App"
                description="Read the privacy policy for Social Sentry. Learn how we protect your data, implement offline-first blocking, and ensure a secure digital wellbeing experience."
                keywords="Social Sentry privacy policy, data protection, offline app blocker privacy, on-device processing"
                canonicalUrl="https://socialsentry.online/privacy-policy"
            />
            {/* Dark overlay */}
            <div className="fixed inset-0 bg-background/85 pointer-events-none" />

            <div className="relative z-10 text-foreground pt-40 pb-20 px-6">
                <div className="container mx-auto max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="bg-card/30 backdrop-blur-xl p-8 md:p-12 rounded-3xl border border-border/50 shadow-2xl"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                            Privacy & Data Protection
                        </h1>
                        <p className="text-muted-foreground mb-8">At Social Sentry, privacy is a core design principle.</p>

                        <div className="space-y-8 text-base md:text-lg leading-relaxed">
                            <p className="text-muted-foreground">
                                Most blocking, monitoring, focus enforcement, NSFW detection, scrolling analysis, productivity tracking, and digital wellbeing features operate directly on your device whenever technically possible.
                            </p>

                            <section className="border-t border-border/30 pt-6">
                                <h2 className="text-2xl font-bold mb-4 text-foreground">On-Device Processing</h2>
                                <p className="text-muted-foreground mb-4">
                                    The following features primarily process information locally on your device:
                                </p>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 pl-2">
                                    {[
                                        "Reels and Shorts detection",
                                        "Social media blocking",
                                        "Study Mode enforcement",
                                        "Safety Mode",
                                        "Scroll Limiter",
                                        "App Usage Limits",
                                        "Website Blocking",
                                        "Adult Content Detection",
                                        "NSFW Shield",
                                        "Focus Session Tracking",
                                        "Habit and Discipline Statistics"
                                    ].map((feature, idx) => (
                                        <li key={idx} className="flex items-center gap-2 text-muted-foreground text-sm md:text-base">
                                            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <p className="text-muted-foreground mt-4">
                                    Personal content such as messages, passwords, banking information, photos, videos, emails, and private conversations are not collected for advertising purposes.
                                </p>
                            </section>

                            <section className="border-t border-border/30 pt-6">
                                <h2 className="text-2xl font-bold mb-4 text-foreground">Community Features</h2>
                                <p className="text-muted-foreground mb-4">
                                    Certain optional community features require limited cloud synchronization. When you voluntarily participate in community features, we may store:
                                </p>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 pl-2">
                                    {[
                                        "Username",
                                        "Profile picture",
                                        "XP score",
                                        "Ranking information",
                                        "Study time statistics",
                                        "Community posts",
                                        "Comments",
                                        "Upvotes",
                                        "Public accountability data"
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-center gap-2 text-muted-foreground text-sm md:text-base">
                                            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <p className="text-muted-foreground mt-4">
                                    Only information that you intentionally choose to share through community features may become visible to other users.
                                </p>
                            </section>

                            <section className="border-t border-border/30 pt-6">
                                <h2 className="text-2xl font-bold mb-4 text-foreground">AI Features</h2>
                                <p className="text-muted-foreground text-sm md:text-base">
                                    Social Sentry's AI features are designed with privacy in mind. Where technically possible, processing is performed on-device or with minimal information required to generate responses.
                                </p>
                                <p className="text-muted-foreground mt-2 font-medium text-sm md:text-base">
                                    Users should avoid sharing highly sensitive personal, financial, medical, or confidential information through AI chat features.
                                </p>
                            </section>

                            <section className="border-t border-border/30 pt-6">
                                <h2 className="text-2xl font-bold mb-4 text-foreground">Data Encryption</h2>
                                <p className="text-muted-foreground text-sm md:text-base">
                                    Data transmitted between your device and Social Sentry services is encrypted using industry-standard secure connections. Sensitive account and subscription information is protected using modern security practices.
                                </p>
                            </section>

                            <section className="border-t border-border/30 pt-6">
                                <h2 className="text-2xl font-bold mb-4 text-foreground">We Do Not</h2>
                                <ul className="space-y-2 pl-2 text-sm md:text-base">
                                    {[
                                        "Sell personal information",
                                        "Share personal information with advertisers",
                                        "Read private messages for advertising purposes",
                                        "Collect banking passwords or PINs",
                                        "Collect payment account credentials",
                                        "Track users across unrelated third-party applications for advertising purposes"
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                                            <span className="text-destructive font-bold">✕</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </section>

                            <section className="border-t border-border/30 pt-6">
                                <h2 className="text-2xl font-bold mb-4 text-foreground">Your Control</h2>
                                <p className="text-muted-foreground text-sm md:text-base">
                                    You control what information is shared with the Social Sentry community. Many productivity, blocking, and digital wellbeing features continue to function without publicly sharing personal activity with other users.
                                </p>
                            </section>

                            <section className="border-t border-border/30 pt-6">
                                <h2 className="text-2xl font-bold mb-4 text-foreground">Contact Us</h2>
                                <p className="text-muted-foreground text-sm md:text-base">
                                    If you have questions, concerns, or requests regarding this Privacy Policy or your data, please contact us:
                                </p>
                                <p className="mt-4 text-primary font-semibold text-sm md:text-base">
                                    Email: <a href="mailto:socialsentryapp@gmail.com" className="hover:underline">socialsentryapp@gmail.com</a>
                                </p>
                            </section>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
