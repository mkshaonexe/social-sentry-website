
import { motion } from "framer-motion";
import { Shield, Clock, Eye, Brain, Lock, BarChart3 } from "lucide-react";

const features = [
    {
        icon: Shield,
        title: "Reels Blocker",
        description: "Automatically blocks addictive short-form video content across all major platforms.",
    },
    {
        icon: Eye,
        title: "Adult Content Filter",
        description: "AI-powered filtering to protect you from inappropriate and adult content.",
    },
    {
        icon: Clock,
        title: "Screen Time Limits",
        description: "Set daily limits on apps and get gentle reminders to take breaks.",
    },
    {
        icon: Brain,
        title: "Focus Mode",
        description: "Block distracting apps during work or study sessions to stay productive.",
    },
    {
        icon: Lock,
        title: "App Lock",
        description: "Lock specific apps with password or biometric protection.",
    },
    {
        icon: BarChart3,
        title: "Usage Analytics",
        description: "Track your digital habits with detailed insights and progress reports.",
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut" as const,
        },
    },
};

const FeaturesSection = () => {
    return (
        <section className="py-24 relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        Powerful <span className="text-gradient-green">Protection</span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Everything you need to break free from digital addiction and reclaim your time.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="group relative bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-300"
                        >
                            {/* Hover glow effect */}
                            <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                            <div className="relative z-10">
                                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                                    <feature.icon className="w-7 h-7 text-primary" />
                                </div>
                                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                                <p className="text-muted-foreground">{feature.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default FeaturesSection;
