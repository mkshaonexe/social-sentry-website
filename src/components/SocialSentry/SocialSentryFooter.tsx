
import { Shield } from "lucide-react";

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

                    <div className="flex items-center gap-8 text-sm text-muted-foreground">
                        <a
                            href="https://play.google.com/store/apps/details?id=com.socialsentry.ai"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-foreground transition-colors"
                        >
                            Google Play
                        </a>
                        <a
                            href="https://youtu.be/TAJFU-9kkK0?si=BdkdiZSqMi6b_ECu"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-foreground transition-colors"
                        >
                            Watch Demo
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
