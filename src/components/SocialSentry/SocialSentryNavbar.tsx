import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";

import logo from "@/assets/app_logo_new.png";

const SocialSentryNavbar = () => {
    return (
        <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50"
        >
            <div className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                        <img
                            src={logo}
                            alt="Social Sentry"
                            className="w-10 h-10 rounded-xl object-cover"
                        />
                        <span className="text-xl font-bold">Social Sentry</span>
                    </Link>

                    {/* Navigation */}
                    <div className="hidden md:flex items-center gap-8 text-sm font-medium">
                        <Link to="/" className="hover:text-primary transition-colors">Home</Link>
                        <Link to="/pricing" className="hover:text-primary transition-colors">Pricing</Link>
                        <Link to="/about-us" className="hover:text-primary transition-colors">About Us</Link>
                        <Link to="/affiliate" className="hover:text-primary transition-colors">Affiliate</Link>
                        <Link to="/tutorial" target="_blank" className="hover:text-primary transition-colors">Tutorial</Link>
                    </div>

                    {/* CTA */}
                    <Button
                        size="sm"
                        className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                        asChild
                    >
                        <a
                            href="https://play.google.com/store/apps/details?id=com.socialsentry.ai"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-foreground transition-colors"
                        >
                            <Play className="w-4 h-4 mr-1 fill-current" />
                            Download
                        </a>
                    </Button>
                </div>
            </div>
        </motion.nav>
    );
};

export default SocialSentryNavbar;
