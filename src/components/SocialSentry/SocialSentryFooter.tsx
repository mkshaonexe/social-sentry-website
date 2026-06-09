import { Shield, Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const SocialSentryFooter = () => {
    return (
        <footer className="py-16 border-t border-white/5 bg-background/30 backdrop-blur-md relative z-10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    {/* Logo & Description */}
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                                <Shield className="w-5 h-5 text-primary" />
                            </div>
                            <span className="text-xl font-bold">Social Sentry</span>
                        </div>
                        <p className="text-sm text-muted-foreground max-w-sm mt-2 leading-relaxed">
                            Stop doomscrolling, block adult content, and reclaim your digital wellbeing. Powered by on-device AI.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="flex flex-col gap-4">
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">Quick Links</h4>
                        <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
                            <Link to="/pricing" className="hover:text-primary transition-colors">Pricing</Link>
                            <Link to="/about-us" className="hover:text-primary transition-colors">About Us</Link>
                            <Link to="/affiliate" className="hover:text-primary transition-colors">Affiliate</Link>
                            <Link to="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
                            <Link to="/refund-policy" className="hover:text-primary transition-colors">Refund Policy</Link>
                            <a
                                href="https://play.google.com/store/apps/details?id=com.socialsentry.ai"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-primary transition-colors col-span-2 mt-1"
                            >
                                Google Play Store
                            </a>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className="flex flex-col gap-4">
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">Contact Us</h4>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li className="flex items-center gap-3">
                                <Phone className="w-4 h-4 text-primary shrink-0" />
                                <a href="tel:+8801805748720" className="hover:text-primary transition-colors">+880 1805-748720</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-4 h-4 text-primary shrink-0" />
                                <a href="mailto:socialsentryapp@gmail.com" className="hover:text-primary transition-colors">socialsentryapp@gmail.com</a>
                            </li>
                            <li className="flex items-start gap-3">
                                <MapPin className="w-4.5 h-4.5 text-primary shrink-0 mt-0.5" />
                                <span>Mirpur, Dhaka, Bangladesh</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-muted-foreground">
                        © 2026 Social Sentry. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default SocialSentryFooter;
