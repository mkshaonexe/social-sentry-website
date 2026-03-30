
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
                                <a 
                                    href={`https://wa.me/8801710459562?text=${encodeURIComponent("i need help and i want to clear a confussion about social sentry pp app i come form the social sentry website")}`} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2"
                                >
                                    <svg 
                                        className="w-5 h-5 fill-current" 
                                        viewBox="0 0 24 24" 
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                                    </svg>
                                    Get on WhatsApp
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
