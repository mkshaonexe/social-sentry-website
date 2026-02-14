
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen bg-background text-foreground pt-24 pb-12 px-6">
            <div className="container mx-auto max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-4xl font-bold mb-4 text-primary">Privacy Policy for SocialSentry</h1>
                    <p className="text-muted-foreground mb-8">Last Updated: February 14, 2026</p>

                    <div className="space-y-8 text-lg leading-relaxed">
                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-foreground">Introduction</h2>
                            <p className="text-muted-foreground">
                                At SocialSentry, user privacy is our top priority. We are committed to ensuring that your personal data remains private and secure. This policy outlines our data handling practices, which are designed to minimize data collection and maximize your privacy.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-foreground">Data Collection and Usage</h2>
                            <p className="text-muted-foreground mb-4">
                                <strong>We do not collect any personal data</strong> from our users, with the following limited exceptions for app stability and improvement:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                                <li>
                                    <strong>Crash Reports & App Improvement:</strong> We use <strong>Firebase</strong> to collect anonymous crash reports and performance data. This helps us identify and fix bugs to improve the app experience.
                                </li>
                                <li>
                                    <strong>User-Reported Bugs:</strong> When you explicitly choose to report a bug, specific device and app information is sent to our server. This allows us to investigate and fix the specific issue you are experiencing.
                                </li>
                                <li>
                                    <strong>No Other Data Collection:</strong> Apart from the technical data mentioned above (crash reports and manual bug reports), we do not collect, store, or process any other personal information on our servers. All other data is <strong>encrypted and stored locally</strong> on your device.
                                </li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-foreground">Community Features</h2>
                            <p className="text-muted-foreground mb-4">
                                SocialSentry offers a Community section where users can interact and have conversations with each other.
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                                <li>
                                    <strong>Community Messages & Ranking:</strong> To facilitate these interactions and the ranking system, data related to community messages and user rankings is stored on our secure server (<strong>Supabase</strong>). This is solely to enable the sharing of messages between users and to maintain the ranking leaderboard.
                                </li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-foreground">Offline Functionality & Local Storage</h2>
                            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                                <li>
                                    <strong>Offline First:</strong> All features of the app, other than the Community section and the anonymous crash reporting mentioned above, function entirely <strong>offline</strong>.
                                </li>
                                <li>
                                    <strong>Push Notifications:</strong> Data related to push notifications is stored directly on your (the user's) device with encryption. We do not store this data on external servers.
                                </li>
                                <li>
                                    <strong>Security:</strong> Your data remains safe on your device.
                                </li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-foreground">Data Sharing</h2>
                            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                                <li>
                                    <strong>No Third-Party Sharing:</strong> We do not share any user data with third-party websites or servers.
                                </li>
                                <li>
                                    <strong>No Sale of Data:</strong> We do not sell user data.
                                </li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-foreground">Business Model</h2>
                            <p className="text-muted-foreground">
                                We do not rely on selling data or ads. <strong>We rely solely on user donations</strong> to sustain and improve SocialSentry.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-foreground">Contact Us</h2>
                            <p className="text-muted-foreground">
                                If you have any questions about this Privacy Policy, please contact us:
                            </p>
                            <p className="mt-2 font-medium text-primary">
                                Email: mkshaonnew31@gmail.com
                            </p>
                        </section>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
