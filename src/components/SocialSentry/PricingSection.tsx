
import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
    {
        name: "1 Month",
        price: "149",
        originalPrice: "249",
        description: "Flexible monthly plan",
        features: ["All Pro Features", "Cancel anytime"],
    },
    {
        name: "3 Months",
        price: "349",
        originalPrice: "499",
        description: "Most popular choice",
        features: ["All Pro Features", "Priority support"],
    },
    {
        name: "6 Months",
        price: "549",
        originalPrice: "799",
        description: "Best for building habits",
        features: ["All Pro Features", "Premium assistance", "Most Popular"],
        popular: true,
    },
    {
        name: "12 Months",
        price: "999",
        originalPrice: "1299",
        description: "Ultimate value plan",
        features: ["All Pro Features", "Lifetime access", "Massive Savings"],
    },
];

const PricingSection = () => {
    return (
        <section id="pricing" className="py-24 relative">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-black mb-6"
                    >
                        Select Your <span className="text-gradient-green">Plan</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-muted-foreground text-xl max-w-2xl mx-auto"
                    >
                        Unlock premium protection and reclaim your focus with Social Sentry PRO.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`relative group bg-card/50 backdrop-blur-md border ${plan.popular ? 'border-primary/50 ring-1 ring-primary/20' : 'border-white/5'} rounded-3xl p-8 hover:bg-card/60 transition-all duration-300 shadow-2xl flex flex-col`}
                        >
                            {plan.popular && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest flex items-center gap-1.5 shadow-xl glow-green-sm">
                                    <Star className="w-3 h-3 fill-current" />
                                    Most Popular
                                </div>
                            )}

                            <div className="text-center mb-8">
                                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                                <p className="text-sm text-muted-foreground mb-6 h-10">{plan.description}</p>
                                
                                <div className="flex items-baseline justify-center gap-2 mb-4">
                                    <span className="text-lg font-medium text-muted-foreground line-through">৳{plan.originalPrice}</span>
                                    <span className="text-4xl font-black text-primary">৳{plan.price}</span>
                                </div>
                            </div>

                            <ul className="space-y-4 mb-10 flex-grow">
                                {plan.features.map(feature => (
                                    <li key={feature} className="flex items-center gap-3 text-sm">
                                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                                            <Check className="w-3.5 h-3.5 text-primary" />
                                        </div>
                                        <span className="text-muted-foreground">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <Button 
                                className={`w-full py-6 rounded-2xl font-bold transition-all duration-300 ${
                                    plan.popular 
                                    ? 'bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg glow-green-sm' 
                                    : 'bg-white/5 hover:bg-white/10 text-foreground border border-white/10'
                                }`}
                                asChild
                            >
                                <a href="https://play.google.com/store/apps/details?id=com.socialsentry.ai" target="_blank" rel="noopener noreferrer">
                                    Buy Now
                                </a>
                            </Button>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="inline-block p-6 rounded-2xl bg-white/5 border border-white/5"
                    >
                        <p className="text-sm text-muted-foreground">
                            Looking for a custom plan for your organization? <a href="mailto:socialsentry.ai@gmail.com" className="text-primary font-bold hover:underline">Contact us</a>
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Background elements */}
            <div className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[80%] h-[300px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
        </section>
    );
};

export default PricingSection;
