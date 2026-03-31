
import heroBg from "@/assets/hero-bg.jpg";
import { Handshake, DollarSign, BarChart3, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Affiliate = () => {
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

            <div className="relative z-10 text-foreground pt-40 pb-20">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                            Join the Social Sentry Affiliate Program
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            Partner with us to help your audience reclaim their focus and get rewarded for every new Social Sentry Pro subscription you refer.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                        <div className="bg-card/20 backdrop-blur-xl p-10 rounded-3xl border border-border/50 text-center">
                            <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <DollarSign className="text-primary w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Earn Commissions</h3>
                            <p className="text-muted-foreground">Receive a generous percentage of every subscription payment for the full first year of each referred user.</p>
                        </div>

                        <div className="bg-card/20 backdrop-blur-xl p-10 rounded-3xl border border-border/50 text-center">
                            <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <Handshake className="text-primary w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Dedicated Support</h3>
                            <p className="text-muted-foreground">Access a dedicated affiliate dashboard, marketing materials, and personalized support to help you succeed.</p>
                        </div>

                        <div className="bg-card/20 backdrop-blur-xl p-10 rounded-3xl border border-border/50 text-center">
                            <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <BarChart3 className="text-primary w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Real-time Tracking</h3>
                            <p className="text-muted-foreground">Track your referrals, conversions, and payouts in real-time with our advanced affiliate dashboard.</p>
                        </div>
                    </div>

                    <div className="max-w-4xl mx-auto bg-gradient-to-br from-primary/20 to-primary/5 backdrop-blur-xl p-12 rounded-3xl border border-primary/20 text-center">
                        <h2 className="text-4xl font-bold mb-8">Ready to Start Earning?</h2>
                        <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                            Join thousands of creators, influencers, and platforms that are already promoting a healthier digital future.
                        </p>
                        <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-12 py-8 rounded-2xl shadow-xl shadow-primary/20">
                            Apply Now <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Affiliate;
