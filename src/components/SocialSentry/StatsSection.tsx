import { motion, useInView, useSpring, useMotionValue } from "framer-motion";
import { useEffect, useRef } from "react";

const stats = [
    { value: 50, label: "Active Users", suffix: "K+" },
    { value: 2, label: "Reels Blocked", suffix: "M+" },
    { value: 10, label: "Hours Saved", suffix: "M+" },
    { value: 4.8, label: "Play Store Rating", suffix: "", isFloat: true },
];

const AnimatedNumber = ({ value, suffix, isFloat = false }: { value: number, suffix: string, isFloat?: boolean }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });

    // Use motion value and spring for smooth animation
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 2000, bounce: 0 });

    useEffect(() => {
        if (inView) {
            motionValue.set(value);
        }
    }, [inView, value, motionValue]);

    // Format the number for display
    useEffect(() => {
        return springValue.on("change", (latest) => {
            if (ref.current) {
                // @ts-ignore
                ref.current.textContent = isFloat
                    ? latest.toFixed(1) + suffix
                    : Math.floor(latest).toLocaleString() + suffix;
            }
        });
    }, [springValue, suffix, isFloat]);

    return <span ref={ref} className="text-4xl md:text-6xl font-black text-gradient-green" />;
};

const StatsSection = () => {
    return (
        <section className="py-20 relative overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-glow-secondary/5" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Trusted by <span className="text-gradient-green">Thousands</span>
                    </h2>
                    <p className="text-muted-foreground">
                        Join the growing community taking control of their digital lives.
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="text-center"
                        >
                            <div className="relative inline-block">
                                <AnimatedNumber value={stat.value} suffix={stat.suffix} isFloat={stat.isFloat} />
                            </div>
                            <p className="text-muted-foreground mt-2 font-medium">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
