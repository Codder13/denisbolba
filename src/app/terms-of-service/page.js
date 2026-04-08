import Link from "next/link";

export default function TermsOfServicePage() {
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
						Terms of Service
					</h1>
					<p className="text-gray-300 mb-8">Last updated: {updatedOn}</p>

					<div className="space-y-8 text-gray-200 leading-relaxed">
						<section>
							<h2 className="text-xl font-semibold text-white mb-2">
								1. Agreement to Terms
							</h2>
							<p>
								By accessing or using this website or app (the "Service"), you
								agree to be bound by these Terms of Service. If you do not
								agree, you should not use the Service.
							</p>
						</section>

						<section>
							<h2 className="text-xl font-semibold text-white mb-2">
								2. Eligibility and Accounts
							</h2>
							<ul className="list-disc pl-6 space-y-2 text-gray-300">
								<li>
									You must be at least the age of majority in your jurisdiction.
								</li>
								<li>
									If account creation is required, you are responsible for
									keeping your credentials secure.
								</li>
								<li>
									You are responsible for all activity under your account unless
									required law states otherwise.
								</li>
							</ul>
						</section>

						<section>
							<h2 className="text-xl font-semibold text-white mb-2">
								3. Acceptable Use
							</h2>
							<p className="mb-2">
								You agree not to misuse the Service, including by:
							</p>
							<ul className="list-disc pl-6 space-y-2 text-gray-300">
								<li>Violating laws or infringing rights of others.</li>
								<li>Attempting unauthorized access to systems or data.</li>
								<li>Distributing malicious code, spam, or abusive content.</li>
								<li>
									Interfering with availability, security, or integrity of the
									Service.
								</li>
							</ul>
						</section>

						<section>
							<h2 className="text-xl font-semibold text-white mb-2">
								4. User Content
							</h2>
							<p>
								If you submit content (for example text, files, or media), you
								grant us a non-exclusive license to host, process, and display
								that content solely for operating and improving the Service.
							</p>
						</section>

						<section>
							<h2 className="text-xl font-semibold text-white mb-2">
								5. Intellectual Property
							</h2>
							<p>
								All Service content, branding, design, and software are owned by
								or licensed to us unless stated otherwise. You may not copy,
								modify, distribute, or reverse engineer any part of the Service
								except as allowed by law.
							</p>
						</section>

						<section>
							<h2 className="text-xl font-semibold text-white mb-2">
								6. Third-Party Services
							</h2>
							<p>
								The Service may include links or integrations with third-party
								websites, tools, or services. We are not responsible for
								third-party content, terms, or privacy practices.
							</p>
						</section>

						<section>
							<h2 className="text-xl font-semibold text-white mb-2">
								7. Disclaimers
							</h2>
							<p>
								The Service is provided on an "as is" and "as available" basis.
								To the maximum extent permitted by law, we disclaim all
								warranties, express or implied, including fitness for a
								particular purpose and non-infringement.
							</p>
						</section>

						<section>
							<h2 className="text-xl font-semibold text-white mb-2">
								8. Limitation of Liability
							</h2>
							<p>
								To the extent permitted by law, we are not liable for indirect,
								incidental, special, consequential, or punitive damages, or loss
								of data, profits, revenue, or business opportunities.
							</p>
						</section>

						<section>
							<h2 className="text-xl font-semibold text-white mb-2">
								9. Indemnification
							</h2>
							<p>
								You agree to defend and indemnify us from claims, liabilities,
								damages, and expenses arising from your misuse of the Service or
								violation of these Terms.
							</p>
						</section>

						<section>
							<h2 className="text-xl font-semibold text-white mb-2">
								10. Termination
							</h2>
							<p>
								We may suspend or terminate access to the Service if we
								reasonably believe these Terms have been violated or where
								required for security, legal, or operational reasons.
							</p>
						</section>

						<section>
							<h2 className="text-xl font-semibold text-white mb-2">
								11. Governing Law
							</h2>
							<p>
								These Terms are governed by the laws of your operating
								jurisdiction, without regard to conflict-of-law principles. You
								can replace this section with a specific country or state before
								publishing.
							</p>
						</section>

						<section>
							<h2 className="text-xl font-semibold text-white mb-2">
								12. Changes to Terms
							</h2>
							<p>
								We may update these Terms from time to time. Updated versions
								will be posted on this page with a revised "Last updated" date.
							</p>
						</section>

						<section>
							<h2 className="text-xl font-semibold text-white mb-2">
								13. Contact
							</h2>
							<p>
								For legal questions regarding these Terms, contact:
								<span className="text-white font-medium">
									{" "}
									contact@denisbolba.com
								</span>
							</p>
						</section>
					</div>
				</div>
			</div>
		</main>
	);
}
