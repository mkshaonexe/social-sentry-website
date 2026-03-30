
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const features = [
    { name: "Reels Block", free: "Basic", pro: "Advance" },
    { name: "Porn Block", free: "Basic", pro: "Advance" },
    { name: "Prime mode", free: false, pro: true },
    { name: "Uninstall prevention", free: false, pro: true },
    { name: "Force mode", free: "Basic", pro: "Advance" },
    { name: "Modes", free: "Basic", pro: "Advance" },
    { name: "Reminders", free: true, pro: true },
    { name: "App limit", free: true, pro: true },
    { name: "Scrolling Limit", free: false, pro: true },
    { name: "Ai Assistance (Hakari)", free: "Basic", pro: "Advance" },
    { name: "User commit", free: false, pro: true },
    { name: "On device NSFW Adult content filtering", free: false, pro: true },
    { name: "Schedule block", free: false, pro: true },
];

const ProFeaturesSection = () => {
    return (
        <section id="features-comparison" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-black mb-4"
                    >
                        Social Sentry <span className="text-gradient-green">PRO</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-muted-foreground text-lg max-w-2xl mx-auto"
                    >
                        Unlock the full potential of your focus with our premium protection features.
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto bg-card/40 backdrop-blur-md border border-white/5 rounded-3xl overflow-hidden shadow-2xl"
                >
                    <div className="grid grid-cols-3 bg-white/5 py-6 px-4 md:px-8 border-b border-white/5">
                        <div className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Features</div>
                        <div className="text-center text-sm font-bold uppercase tracking-wider text-muted-foreground">Free</div>
                        <div className="text-center text-sm font-bold uppercase tracking-wider text-primary">Pro</div>
                    </div>

                    <div className="divide-y divide-white/5">
                        {features.map((feature, index) => (
                            <motion.div
                                key={feature.name}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="grid grid-cols-3 py-5 px-4 md:px-8 items-center hover:bg-white/5 transition-colors"
                            >
                                <div className="text-sm md:text-base font-medium">{feature.name}</div>
                                <div className="flex justify-center">
                                    {typeof feature.free === "string" ? (
                                        <span className="text-xs font-bold px-2 py-1 rounded bg-muted text-muted-foreground uppercase">{feature.free}</span>
                                    ) : feature.free ? (
                                        <Check className="w-5 h-5 text-primary" />
                                    ) : (
                                        <X className="w-5 h-5 text-muted-foreground/30" />
                                    )}
                                </div>
                                <div className="flex justify-center">
                                    {typeof feature.pro === "string" ? (
                                        <span className="text-xs font-bold px-2 py-1 rounded bg-primary/20 text-primary border border-primary/20 uppercase">{feature.pro}</span>
                                    ) : feature.pro ? (
                                        <Check className="w-5 h-5 text-primary scale-110" />
                                    ) : (
                                        <X className="w-5 h-5 text-muted-foreground/30" />
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="p-8 text-center bg-white/5">
                        <p className="text-sm text-muted-foreground">
                            Premium Protection needs PRO access. Upgrade your account to unlock all premium features.
                        </p>
                    </div>
                </motion.div>
            </div>
            
            {/* Background decorative elements */}
            <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/5 blur-3xl -translate-y-1/2 -translate-x-1/2" />
            <div className="absolute top-1/2 right-0 w-64 h-64 bg-primary/5 blur-3xl -translate-y-1/2 translate-x-1/2" />
        </section>
    );
};

export default ProFeaturesSection;
