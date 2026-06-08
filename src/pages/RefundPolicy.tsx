import { motion } from "framer-motion";
import SEOHead from "@/components/SEO/SEOHead";
import heroBg from "@/assets/hero-bg.jpg";

const RefundPolicy = () => {
    return (
        <div
            className="min-h-screen bg-background social-sentry-theme relative"
            style={{
                backgroundImage: `url(${heroBg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
            }}
        >
            <SEOHead 
                title="Refund Policy | Social Sentry App"
                description="Read the refund policy for Social Sentry. Find details on subscription service refunds, eligibility, non-refundable situations, and contact support."
                keywords="Social Sentry refund policy, subscription refund, digital purchase refund"
                canonicalUrl="https://socialsentry.online/refund-policy"
            />
            {/* Dark overlay */}
            <div className="fixed inset-0 bg-background/85 pointer-events-none" />

            <div className="relative z-10 text-foreground pt-40 pb-20 px-6">
                <div className="container mx-auto max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="bg-card/30 backdrop-blur-xl p-8 md:p-12 rounded-3xl border border-border/50 shadow-2xl"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                            Refund Policy
                        </h1>
                        <p className="text-muted-foreground mb-8">Last Updated: June 2026</p>

                        <div className="space-y-8 text-base md:text-lg leading-relaxed text-muted-foreground">
                            <p>
                                Thank you for choosing Social Sentry. This Refund Policy explains the conditions under which refunds may be requested for purchases made through Social Sentry.
                            </p>

                            <section className="border-t border-border/30 pt-6">
                                <h2 className="text-2xl font-bold mb-4 text-foreground">1. Subscription Services</h2>
                                <p>
                                    Social Sentry offers digital subscription services that provide access to premium features and functionality. By purchasing a subscription, you acknowledge that access to premium features may be granted immediately after successful payment verification.
                                </p>
                            </section>

                            <section className="border-t border-border/30 pt-6">
                                <h2 className="text-2xl font-bold mb-4 text-foreground">2. Refund Eligibility</h2>
                                <p className="mb-4">
                                    Refund requests may be considered in the following situations:
                                </p>
                                <ul className="space-y-2 pl-2">
                                    {[
                                        "Duplicate or accidental payments.",
                                        "Technical issues that prevent activation of premium features and cannot be resolved by our support team.",
                                        "Incorrect charges caused by system errors.",
                                        "Unauthorized payments that can be reasonably verified."
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-2 text-sm md:text-base">
                                            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <p className="mt-4">
                                    All refund requests are reviewed on a case-by-case basis.
                                </p>
                            </section>

                            <section className="border-t border-border/30 pt-6">
                                <h2 className="text-2xl font-bold mb-4 text-foreground">3. Non-Refundable Situations</h2>
                                <p className="mb-4">
                                    Refunds are generally not provided in the following circumstances:
                                </p>
                                <ul className="space-y-2 pl-2">
                                    {[
                                        "Change of mind after purchase.",
                                        "Failure to use the subscription after activation.",
                                        "Dissatisfaction with features that were clearly described before purchase.",
                                        "Violation of Social Sentry's Terms of Service.",
                                        "Requests made after a significant portion of the subscription period has already been used.",
                                        "Promotional, discounted, coupon-based, or special-offer purchases unless required by applicable law."
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-2 text-sm md:text-base">
                                            <span className="text-destructive font-bold">✕</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </section>

                            <section className="border-t border-border/30 pt-6">
                                <h2 className="text-2xl font-bold mb-4 text-foreground">4. Subscription Activation</h2>
                                <p>
                                    Once a subscription has been successfully activated and premium features have been delivered to the account, the purchase may become non-refundable except where required by law or under special circumstances reviewed by our support team.
                                </p>
                            </section>

                            <section className="border-t border-border/30 pt-6">
                                <h2 className="text-2xl font-bold mb-4 text-foreground">5. Duplicate Payments</h2>
                                <p>
                                    If you are charged more than once for the same subscription purchase, please contact us with the transaction details. Verified duplicate payments will generally be refunded or credited to your account.
                                </p>
                            </section>

                            <section className="border-t border-border/30 pt-6">
                                <h2 className="text-2xl font-bold mb-4 text-foreground">6. Failed Activation</h2>
                                <p>
                                    If payment was successfully completed but premium access was not activated, please contact support before requesting a refund. Our team will first attempt to verify the payment and activate the subscription.
                                </p>
                            </section>

                            <section className="border-t border-border/30 pt-6">
                                <h2 className="text-2xl font-bold mb-4 text-foreground">7. Refund Request Process</h2>
                                <p className="mb-4">
                                    To request a refund, please contact us with:
                                </p>
                                <ul className="space-y-2 pl-2">
                                    {[
                                        "Registered email address",
                                        "Transaction ID (TrxID)",
                                        "Payment amount",
                                        "Purchase date",
                                        "Description of the issue"
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-center gap-2 text-sm md:text-base">
                                            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <p className="mt-4">
                                    Refund requests should be submitted within 7 days of the original payment whenever possible.
                                </p>
                            </section>

                            <section className="border-t border-border/30 pt-6">
                                <h2 className="text-2xl font-bold mb-4 text-foreground">8. Processing Time</h2>
                                <p>
                                    Approved refunds may take several business days to process depending on the payment provider, banking system, and payment method used. Processing times may vary.
                                </p>
                            </section>

                            <section className="border-t border-border/30 pt-6">
                                <h2 className="text-2xl font-bold mb-4 text-foreground">9. Contact Us</h2>
                                <p>
                                    For refund requests or billing support, please contact:
                                </p>
                                <p className="mt-4 text-primary font-semibold text-sm md:text-base">
                                    Email: <a href="mailto:socialsentryapp@gmail.com" className="hover:underline">socialsentryapp@gmail.com</a>
                                </p>
                            </section>

                            <section className="border-t border-border/30 pt-6">
                                <h2 className="text-2xl font-bold mb-4 text-foreground">10. Changes to This Policy</h2>
                                <p>
                                    Social Sentry reserves the right to modify this Refund Policy at any time. Updated versions will be posted on our website or within the application.
                                </p>
                                <p className="mt-4 text-foreground font-semibold">
                                    By purchasing a Social Sentry subscription, you agree to this Refund Policy.
                                </p>
                            </section>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default RefundPolicy;
