import { Shield } from "lucide-react";
import { Link } from "react-router-dom";

const SocialSentryFooter = () => {
    return (
        <footer className="py-12 border-t border-border">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                            <Shield className="w-5 h-5 text-primary" />
                        </div>
                        <span className="text-xl font-bold">Social Sentry</span>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm text-muted-foreground">
                        <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
                        <Link to="/pricing" className="hover:text-foreground transition-colors">Pricing</Link>
                        <Link to="/about-us" className="hover:text-foreground transition-colors">About Us</Link>
                        <Link to="/affiliate" className="hover:text-foreground transition-colors">Affiliate</Link>
                        <Link to="/privacy-policy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
                        <a
                            href="https://play.google.com/store/apps/details?id=com.socialsentry.ai"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-foreground transition-colors"
                        >
                            Google Play
                        </a>
                    </div>

                    <p className="text-sm text-muted-foreground">
                        © 2024 Social Sentry. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default SocialSentryFooter;
