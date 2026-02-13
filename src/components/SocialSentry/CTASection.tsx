
import { motion } from "framer-motion";
import { Shield, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-3xl" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-3xl mx-auto text-center"
                >
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary/10 mb-8">
                        <Shield className="w-10 h-10 text-primary" />
                    </div>

                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        Ready to <span className="text-gradient-green">Break Free?</span>
                    </h2>

                    <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
                        Download Social Sentry today and start your journey towards a healthier
                        relationship with technology.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                            size="lg"
                            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-10 py-6 text-lg glow-green-sm"
                            asChild
                        >
                            <a
                                href="https://play.google.com/store/apps/details?id=com.socialsentry.ai"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Play className="w-5 h-5 mr-2 fill-current" />
                                Download Free
                            </a>
                        </Button>
                    </div>

                    <p className="text-sm text-muted-foreground mt-6">
                        Free to use · No credit card required · Android only
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default CTASection;
