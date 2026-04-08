import Link from "next/link";

export default function PrivacyPolicyPage() {
	const updatedOn = "April 8, 2026";

	return (
		<main className="min-h-screen bg-dark text-white py-16 md:py-24">
			<div className="container mx-auto px-4 max-w-4xl">
				<div className="mb-8">
					<Link
						href="/"
						className="inline-flex items-center text-sm text-gray-300 hover:text-primary transition-colors"
					>
						Back to home
					</Link>
				</div>

				<div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-10 backdrop-blur-sm">
					<p className="text-primary text-sm uppercase tracking-[0.2em] mb-3">
						Legal
					</p>
					<h1 className="text-3xl md:text-5xl font-bold mb-4">
						Privacy Policy
					</h1>
					<p className="text-gray-300 mb-8">Last updated: {updatedOn}</p>

					<div className="space-y-8 text-gray-200 leading-relaxed">
						<section>
							<h2 className="text-xl font-semibold text-white mb-2">
								1. Overview
							</h2>
							<p>
								This Privacy Policy explains how we collect, use, store, and
								protect information when you use this website or app (the
								"Service"). It is designed as a general-purpose policy that can
								be adapted to most digital products.
							</p>
						</section>

						<section>
							<h2 className="text-xl font-semibold text-white mb-2">
								2. Information We Collect
							</h2>
							<p className="mb-2">
								We may collect the following categories of data:
							</p>
							<ul className="list-disc pl-6 space-y-2 text-gray-300">
								<li>
									Account details such as name, username, and email address.
								</li>
								<li>
									Usage data such as pages viewed, features used, and session
									timing.
								</li>
								<li>
									Technical data such as device type, browser, IP address, and
									logs.
								</li>
								<li>
									Communication data when you contact support or submit forms.
								</li>
							</ul>
						</section>

						<section>
							<h2 className="text-xl font-semibold text-white mb-2">
								3. How We Use Information
							</h2>
							<ul className="list-disc pl-6 space-y-2 text-gray-300">
								<li>To provide, maintain, and improve the Service.</li>
								<li>To personalize features and user experience.</li>
								<li>
									To communicate updates, support responses, and security
									notices.
								</li>
								<li>To detect abuse, fraud, and unauthorized access.</li>
								<li>To comply with legal obligations.</li>
							</ul>
						</section>

						<section id="cookies-and-tracking">
							<h2 className="text-xl font-semibold text-white mb-2">
								4. Cookies and Tracking
							</h2>
							<p>
								We may use cookies and similar technologies for authentication,
								analytics, preferences, and performance monitoring. You can
								manage cookie settings in your browser or device.
							</p>
						</section>

						<section>
							<h2 className="text-xl font-semibold text-white mb-2">
								5. Sharing of Information
							</h2>
							<p className="mb-2">
								We do not sell personal information. We may share data with:
							</p>
							<ul className="list-disc pl-6 space-y-2 text-gray-300">
								<li>
									Service providers that support hosting, analytics, or
									operations.
								</li>
								<li>
									Professional advisors or legal authorities when required by
									law.
								</li>
								<li>
									Business successors in case of a merger, acquisition, or asset
									sale.
								</li>
							</ul>
						</section>

						<section>
							<h2 className="text-xl font-semibold text-white mb-2">
								6. Data Retention
							</h2>
							<p>
								We retain personal data only as long as needed for the purposes
								described in this policy, unless a longer period is required by
								law.
							</p>
						</section>

						<section>
							<h2 className="text-xl font-semibold text-white mb-2">
								7. Your Rights
							</h2>
							<p className="mb-2">
								Depending on your location, you may have rights to:
							</p>
							<ul className="list-disc pl-6 space-y-2 text-gray-300">
								<li>Access, correct, or delete your personal information.</li>
								<li>Object to or restrict certain processing.</li>
								<li>Withdraw consent where processing is based on consent.</li>
								<li>Request data portability.</li>
							</ul>
						</section>

						<section>
							<h2 className="text-xl font-semibold text-white mb-2">
								8. Security
							</h2>
							<p>
								We apply commercially reasonable technical and organizational
								measures to protect your data. No method of transmission or
								storage is completely secure, so absolute security cannot be
								guaranteed.
							</p>
						</section>

						<section>
							<h2 className="text-xl font-semibold text-white mb-2">
								9. Children&apos;s Privacy
							</h2>
							<p>
								The Service is not intended for children under 13 (or the
								minimum age required in your region), and we do not knowingly
								collect personal information from children.
							</p>
						</section>

						<section>
							<h2 className="text-xl font-semibold text-white mb-2">
								10. Changes to This Policy
							</h2>
							<p>
								We may update this Privacy Policy from time to time. Updated
								versions will be posted on this page with a revised "Last
								updated" date.
							</p>
						</section>

						<section>
							<h2 className="text-xl font-semibold text-white mb-2">
								11. Contact
							</h2>
							<p>
								For privacy questions or requests, contact us at:
								<span className="text-white font-medium">
									{" "}
									contact@yourdomain.com
								</span>
							</p>
						</section>
					</div>
				</div>
			</div>
		</main>
	);
}
