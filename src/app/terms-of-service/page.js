"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

const TERMS_CONTENT = {
	en: {
		backToHome: "Back to home",
		toggleLabel: "Switch to Romanian",
		toggleText: "RO",
		legal: "Legal",
		title: "Terms of Service",
		lastUpdatedLabel: "Last updated",
		contactLead: "For legal questions regarding these Terms, contact:",
		sections: [
			{
				key: "agreement",
				title: "1. Agreement to Terms",
				paragraphs: [
					'By accessing or using this website or app (the "Service"), you agree to be bound by these Terms of Service. If you do not agree, you should not use the Service.',
				],
			},
			{
				key: "eligibility",
				title: "2. Eligibility and Accounts",
				list: [
					"You must be at least the age of majority in your jurisdiction.",
					"If account creation is required, you are responsible for keeping your credentials secure.",
					"You are responsible for all activity under your account unless required law states otherwise.",
				],
			},
			{
				key: "acceptable-use",
				title: "3. Acceptable Use",
				intro: "You agree not to misuse the Service, including by:",
				list: [
					"Violating laws or infringing rights of others.",
					"Attempting unauthorized access to systems or data.",
					"Distributing malicious code, spam, or abusive content.",
					"Interfering with availability, security, or integrity of the Service.",
				],
			},
			{
				key: "user-content",
				title: "4. User Content",
				paragraphs: [
					"If you submit content (for example text, files, or media), you grant us a non-exclusive license to host, process, and display that content solely for operating and improving the Service.",
				],
			},
			{
				key: "ip",
				title: "5. Intellectual Property",
				paragraphs: [
					"All Service content, branding, design, and software are owned by or licensed to us unless stated otherwise. You may not copy, modify, distribute, or reverse engineer any part of the Service except as allowed by law.",
				],
			},
			{
				key: "third-party",
				title: "6. Third-Party Services",
				paragraphs: [
					"The Service may include links or integrations with third-party websites, tools, or services. We are not responsible for third-party content, terms, or privacy practices.",
				],
			},
			{
				key: "disclaimers",
				title: "7. Disclaimers",
				paragraphs: [
					"The Service is provided on an 'as is' and 'as available' basis. To the maximum extent permitted by law, we disclaim all warranties, express or implied, including fitness for a particular purpose and non-infringement.",
				],
			},
			{
				key: "liability",
				title: "8. Limitation of Liability",
				paragraphs: [
					"To the extent permitted by law, we are not liable for indirect, incidental, special, consequential, or punitive damages, or loss of data, profits, revenue, or business opportunities.",
				],
			},
			{
				key: "indemnification",
				title: "9. Indemnification",
				paragraphs: [
					"You agree to defend and indemnify us from claims, liabilities, damages, and expenses arising from your misuse of the Service or violation of these Terms.",
				],
			},
			{
				key: "termination",
				title: "10. Termination",
				paragraphs: [
					"We may suspend or terminate access to the Service if we reasonably believe these Terms have been violated or where required for security, legal, or operational reasons.",
				],
			},
			{
				key: "law",
				title: "11. Governing Law",
				paragraphs: [
					"These Terms are governed by the laws of your operating jurisdiction, without regard to conflict-of-law principles. You can replace this section with a specific country or state before publishing.",
				],
			},
			{
				key: "changes",
				title: "12. Changes to Terms",
				paragraphs: [
					"We may update these Terms from time to time. Updated versions will be posted on this page with a revised 'Last updated' date.",
				],
			},
			{
				key: "contact",
				title: "13. Contact",
			},
		],
	},
	ro: {
		backToHome: "Inapoi acasa",
		toggleLabel: "Switch to English",
		toggleText: "EN",
		legal: "Legal",
		title: "Termeni si Conditii",
		lastUpdatedLabel: "Ultima actualizare",
		contactLead: "Pentru intrebari legale despre acesti termeni, contacteaza:",
		sections: [
			{
				key: "agreement",
				title: "1. Acceptarea termenilor",
				paragraphs: [
					'Prin accesarea sau utilizarea acestui website sau aplicatie ("Serviciul"), esti de acord sa respecti acesti Termeni si Conditii. Daca nu esti de acord, nu trebuie sa folosesti Serviciul.',
				],
			},
			{
				key: "eligibility",
				title: "2. Eligibilitate si conturi",
				list: [
					"Trebuie sa ai cel putin varsta majoratului in jurisdictia ta.",
					"Daca este necesara crearea unui cont, esti responsabil pentru pastrarea in siguranta a credentialelor.",
					"Esti responsabil pentru activitatea desfasurata in contul tau, exceptand cazurile in care legea prevede altfel.",
				],
			},
			{
				key: "acceptable-use",
				title: "3. Utilizare acceptabila",
				intro: "Esti de acord sa nu utilizezi abuziv Serviciul, inclusiv prin:",
				list: [
					"Incalcarea legilor sau a drepturilor altor persoane.",
					"Incercari de acces neautorizat la sisteme sau date.",
					"Distribuirea de cod malitios, spam sau continut abuziv.",
					"Afectarea disponibilitatii, securitatii sau integritatii Serviciului.",
				],
			},
			{
				key: "user-content",
				title: "4. Continutul utilizatorului",
				paragraphs: [
					"Daca trimiti continut (de exemplu text, fisiere sau media), ne acorzi o licenta neexclusiva pentru a gazdui, procesa si afisa acel continut exclusiv in scopul operarii si imbunatatirii Serviciului.",
				],
			},
			{
				key: "ip",
				title: "5. Proprietate intelectuala",
				paragraphs: [
					"Tot continutul, brandingul, designul si software-ul Serviciului sunt detinute de noi sau licentiate catre noi, daca nu este specificat altfel. Nu poti copia, modifica, distribui sau decompila nicio parte a Serviciului, cu exceptia cazurilor permise de lege.",
				],
			},
			{
				key: "third-party",
				title: "6. Servicii terte",
				paragraphs: [
					"Serviciul poate include linkuri sau integrari cu website-uri, unelte sau servicii terte. Nu suntem responsabili pentru continutul, termenii sau practicile de confidentialitate ale tertilor.",
				],
			},
			{
				key: "disclaimers",
				title: "7. Exonerari",
				paragraphs: [
					"Serviciul este oferit in forma 'ca atare' si 'in limita disponibilitatii'. In masura maxima permisa de lege, excludem toate garantiile, exprese sau implicite, inclusiv adecvarea pentru un scop anume si neincalcarea drepturilor.",
				],
			},
			{
				key: "liability",
				title: "8. Limitarea raspunderii",
				paragraphs: [
					"In masura permisa de lege, nu suntem raspunzatori pentru daune indirecte, incidentale, speciale, consecutive sau punitive, ori pentru pierderea de date, profit, venit sau oportunitati de afaceri.",
				],
			},
			{
				key: "indemnification",
				title: "9. Despagubiri",
				paragraphs: [
					"Esti de acord sa ne aperi si sa ne despagubesti pentru revendicari, raspunderi, daune si cheltuieli care apar din utilizarea abuziva a Serviciului sau incalcarea acestor termeni.",
				],
			},
			{
				key: "termination",
				title: "10. Incetare",
				paragraphs: [
					"Putem suspenda sau inceta accesul la Serviciu daca avem motive rezonabile sa credem ca acesti termeni au fost incalcati sau daca este necesar din motive de securitate, legale ori operationale.",
				],
			},
			{
				key: "law",
				title: "11. Legea aplicabila",
				paragraphs: [
					"Acesti termeni sunt guvernati de legile jurisdictiei tale de operare, fara a tine cont de principiile conflictului de legi. Poti inlocui aceasta sectiune cu o tara sau un stat specific inainte de publicare.",
				],
			},
			{
				key: "changes",
				title: "12. Modificari ale termenilor",
				paragraphs: [
					"Putem actualiza periodic acesti termeni. Versiunile actualizate vor fi publicate pe aceasta pagina, cu o data revizuita la 'Ultima actualizare'.",
				],
			},
			{
				key: "contact",
				title: "13. Contact",
			},
		],
	},
};

export default function TermsOfServicePage() {
	const { language, toggleLanguage } = useLanguage();
	const updatedOn = "April 8, 2026";
	const content = language === "ro" ? TERMS_CONTENT.ro : TERMS_CONTENT.en;

	return (
		<main className="min-h-screen bg-dark text-white py-16 md:py-24">
			<div className="container mx-auto px-4 max-w-4xl">
				<div className="mb-8 flex items-center justify-between gap-4">
					<Link
						href="/"
						className="inline-flex items-center text-sm text-gray-300 hover:text-primary transition-colors"
					>
						{content.backToHome}
					</Link>
					<button
						type="button"
						onClick={toggleLanguage}
						className="text-white hover:text-primary transition-colors font-medium text-sm border border-white/20 rounded-md px-3 py-1.5 hover:border-primary/50"
						aria-label={content.toggleLabel}
					>
						{content.toggleText}
					</button>
				</div>

				<div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-10 backdrop-blur-sm">
					<p className="text-primary text-sm uppercase tracking-[0.2em] mb-3">
						{content.legal}
					</p>
					<h1 className="text-3xl md:text-5xl font-bold mb-4">
						{content.title}
					</h1>
					<p className="text-gray-300 mb-8">
						{content.lastUpdatedLabel}: {updatedOn}
					</p>

					<div className="space-y-8 text-gray-200 leading-relaxed">
						{content.sections.map((section) => (
							<section key={section.key}>
								<h2 className="text-xl font-semibold text-white mb-2">
									{section.title}
								</h2>
								{section.paragraphs?.map((paragraph) => (
									<p key={paragraph} className="mb-2 last:mb-0">
										{paragraph}
									</p>
								))}
								{section.intro ? <p className="mb-2">{section.intro}</p> : null}
								{section.list ? (
									<ul className="list-disc pl-6 space-y-2 text-gray-300">
										{section.list.map((item) => (
											<li key={item}>{item}</li>
										))}
									</ul>
								) : null}
								{section.key === "contact" ? (
									<p>
										{content.contactLead}
										<span className="text-white font-medium">
											{" "}
											contact@denisbolba.com
										</span>
									</p>
								) : null}
							</section>
						))}
					</div>
				</div>
			</div>
		</main>
	);
}
