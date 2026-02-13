
import { motion } from "framer-motion";
import { Shield, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import phoneMockup from "@/assets/phone-mockup.png";

const HeroSection = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background gradient overlay */}
            <div className="absolute inset-0 bg-gradient-radial" />

            {/* Animated glow orbs */}
            <motion.div
                className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-3xl"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
            <motion.div
                className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-glow-secondary/10 blur-3xl"
                animate={{
                    scale: [1.2, 1, 1.2],
                    opacity: [0.4, 0.2, 0.4],
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-center lg:text-left"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
                        >
                            <Shield className="w-4 h-4 text-primary" />
                            <span className="text-sm text-primary font-medium">Digital Wellbeing App</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-6"
                        >
                            Take Back
                            <br />
                            <span className="text-gradient-green">Your Focus</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0"
                        >
                            Block Reels, adult content & addictive apps. Reduce screen time
                            and reclaim your digital wellbeing with AI-powered protection.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                        >
                            <Button
                                size="lg"
                                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg glow-green-sm"
                                asChild
                            >
                                <a
                                    href="https://play.google.com/store/apps/details?id=com.socialsentry.ai"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Play className="w-5 h-5 mr-2 fill-current" />
                                    Install
                                </a>
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="border-border hover:bg-secondary font-semibold px-8 py-6 text-lg"
                                asChild
                            >
                                <a
                                    href="https://youtu.be/TAJFU-9kkK0?si=BdkdiZSqMi6b_ECu"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Demo
                                </a>
                            </Button>
                        </motion.div>
                    </motion.div>

                    {/* Right content - Phone mockup */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                        className="relative flex justify-center"
                    >
                        {/* Glow behind phone */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-80 h-80 rounded-full bg-primary/20 blur-3xl animate-pulse-glow" />
                        </div>

                        {/* Phone */}
                        <motion.div
                            animate={{ y: [0, -15, 0] }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="relative z-10"
                        >
                            <img
                                src={phoneMockup}
                                alt="Social Sentry App"
                                className="w-72 md:w-96 drop-shadow-2xl"
                            />
                        </motion.div>

                        {/* Floating badges */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.8 }}
                            className="absolute top-20 left-0 lg:-left-10"
                        >
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                                className="bg-card/80 backdrop-blur-sm border border-border rounded-xl px-4 py-3 shadow-lg"
                            >
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                                        <Shield className="w-4 h-4 text-primary" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-muted-foreground">Reels Blocked</p>
                                        <p className="text-lg font-bold text-primary">+2,847</p>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1 }}
                            className="absolute bottom-32 right-0 lg:-right-10"
                        >
                            <motion.div
                                animate={{ y: [0, -8, 0] }}
                                transition={{ duration: 3.5, repeat: Infinity, delay: 1 }}
                                className="bg-card/80 backdrop-blur-sm border border-border rounded-xl px-4 py-3 shadow-lg"
                            >
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 rounded-full bg-glow-secondary/20 flex items-center justify-center">
                                        <span className="text-sm">⏱️</span>
                                    </div>
                                    <div>
                                        <p className="text-xs text-muted-foreground">Time Saved</p>
                                        <p className="text-lg font-bold text-glow-secondary">4.2 hrs</p>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
