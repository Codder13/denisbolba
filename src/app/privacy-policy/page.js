"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

const PRIVACY_CONTENT = {
	en: {
		backToHome: "Back to home",
		toggleLabel: "Switch to Romanian",
		toggleText: "RO",
		legal: "Legal",
		title: "Privacy Policy",
		lastUpdatedLabel: "Last updated",
		contactLead: "For privacy questions or requests, contact us at:",
		sections: [
			{
				key: "overview",
				title: "1. Overview",
				paragraphs: [
					'This Privacy Policy explains how we collect, use, store, and protect information when you use this website or app (the "Service"). It is designed as a general-purpose policy that can be adapted to most digital products.',
				],
			},
			{
				key: "collect",
				title: "2. Information We Collect",
				intro: "We may collect the following categories of data:",
				list: [
					"Account details such as name, username, and email address.",
					"Usage data such as pages viewed, features used, and session timing.",
					"Technical data such as device type, browser, IP address, and logs.",
					"Communication data when you contact support or submit forms.",
				],
			},
			{
				key: "use",
				title: "3. How We Use Information",
				list: [
					"To provide, maintain, and improve the Service.",
					"To personalize features and user experience.",
					"To communicate updates, support responses, and security notices.",
					"To detect abuse, fraud, and unauthorized access.",
					"To comply with legal obligations.",
				],
			},
			{
				key: "cookies",
				anchor: "cookies-and-tracking",
				title: "4. Cookies and Tracking",
				paragraphs: [
					"We may use cookies and similar technologies for authentication, analytics, preferences, and performance monitoring. You can manage cookie settings in your browser or device.",
				],
			},
			{
				key: "sharing",
				title: "5. Sharing of Information",
				intro: "We do not sell personal information. We may share data with:",
				list: [
					"Service providers that support hosting, analytics, or operations.",
					"Professional advisors or legal authorities when required by law.",
					"Business successors in case of a merger, acquisition, or asset sale.",
				],
			},
			{
				key: "retention",
				title: "6. Data Retention",
				paragraphs: [
					"We retain personal data only as long as needed for the purposes described in this policy, unless a longer period is required by law.",
				],
			},
			{
				key: "rights",
				title: "7. Your Rights",
				intro: "Depending on your location, you may have rights to:",
				list: [
					"Access, correct, or delete your personal information.",
					"Object to or restrict certain processing.",
					"Withdraw consent where processing is based on consent.",
					"Request data portability.",
				],
			},
			{
				key: "security",
				title: "8. Security",
				paragraphs: [
					"We apply commercially reasonable technical and organizational measures to protect your data. No method of transmission or storage is completely secure, so absolute security cannot be guaranteed.",
				],
			},
			{
				key: "children",
				title: "9. Children's Privacy",
				paragraphs: [
					"The Service is not intended for children under 13 (or the minimum age required in your region), and we do not knowingly collect personal information from children.",
				],
			},
			{
				key: "changes",
				title: "10. Changes to This Policy",
				paragraphs: [
					"We may update this Privacy Policy from time to time. Updated versions will be posted on this page with a revised 'Last updated' date.",
				],
			},
			{
				key: "contact",
				title: "11. Contact",
			},
		],
	},
	ro: {
		backToHome: "Inapoi acasa",
		toggleLabel: "Switch to English",
		toggleText: "EN",
		legal: "Legal",
		title: "Politica de Confidentialitate",
		lastUpdatedLabel: "Ultima actualizare",
		contactLead:
			"Pentru intrebari sau solicitari privind confidentialitatea, contacteaza-ne la:",
		sections: [
			{
				key: "overview",
				title: "1. Prezentare generala",
				paragraphs: [
					'Prezenta Politica de Confidentialitate explica modul in care colectam, folosim, stocam si protejam informatiile atunci cand folosesti acest website sau aplicatie ("Serviciul"). Este conceputa ca o politica generala care poate fi adaptata pentru majoritatea produselor digitale.',
				],
			},
			{
				key: "collect",
				title: "2. Ce informatii colectam",
				intro: "Putem colecta urmatoarele categorii de date:",
				list: [
					"Date de cont, precum nume, nume de utilizator si adresa de email.",
					"Date de utilizare, precum paginile vizitate, functionalitatile folosite si durata sesiunii.",
					"Date tehnice, precum tipul dispozitivului, browserul, adresa IP si jurnalele.",
					"Date de comunicare atunci cand contactezi suportul sau trimiti formulare.",
				],
			},
			{
				key: "use",
				title: "3. Cum folosim informatiile",
				list: [
					"Pentru a furniza, mentine si imbunatati Serviciul.",
					"Pentru a personaliza functionalitatile si experienta utilizatorului.",
					"Pentru a comunica actualizari, raspunsuri de suport si notificari de securitate.",
					"Pentru a detecta abuzul, frauda si accesul neautorizat.",
					"Pentru a respecta obligatiile legale.",
				],
			},
			{
				key: "cookies",
				anchor: "cookies-and-tracking",
				title: "4. Cookie-uri si urmarire",
				paragraphs: [
					"Putem utiliza cookie-uri si tehnologii similare pentru autentificare, analiza, preferinte si monitorizarea performantei. Poti gestiona setarile cookie-urilor din browser sau dispozitiv.",
				],
			},
			{
				key: "sharing",
				title: "5. Partajarea informatiilor",
				intro: "Nu vindem date personale. Putem partaja date cu:",
				list: [
					"Furnizori de servicii care sustin gazduirea, analiza sau operatiunile.",
					"Consultanti profesionali sau autoritati legale, cand este cerut de lege.",
					"Succesorii afacerii in caz de fuziune, achizitie sau vanzare de active.",
				],
			},
			{
				key: "retention",
				title: "6. Retentia datelor",
				paragraphs: [
					"Pastram datele personale doar atat timp cat este necesar pentru scopurile descrise in aceasta politica, cu exceptia cazurilor in care legea impune o perioada mai lunga.",
				],
			},
			{
				key: "rights",
				title: "7. Drepturile tale",
				intro: "In functie de locatia ta, poti avea dreptul sa:",
				list: [
					"Accesezi, corectezi sau stergi informatiile tale personale.",
					"Te opui sau restrictionezi anumite prelucrari.",
					"Retragi consimtamantul, acolo unde prelucrarea se bazeaza pe consimtamant.",
					"Soliciti portabilitatea datelor.",
				],
			},
			{
				key: "security",
				title: "8. Securitate",
				paragraphs: [
					"Aplicam masuri tehnice si organizationale rezonabile din punct de vedere comercial pentru a-ti proteja datele. Nicio metoda de transmitere sau stocare nu este complet sigura, astfel ca securitatea absoluta nu poate fi garantata.",
				],
			},
			{
				key: "children",
				title: "9. Confidentialitatea copiilor",
				paragraphs: [
					"Serviciul nu este destinat copiilor sub 13 ani (sau varsta minima ceruta in regiunea ta), iar noi nu colectam in mod intentionat date personale de la copii.",
				],
			},
			{
				key: "changes",
				title: "10. Modificari ale acestei politici",
				paragraphs: [
					"Putem actualiza periodic aceasta Politica de Confidentialitate. Versiunile actualizate vor fi publicate pe aceasta pagina, cu o data revizuita la 'Ultima actualizare'.",
				],
			},
			{
				key: "contact",
				title: "11. Contact",
			},
		],
	},
};

export default function PrivacyPolicyPage() {
	const { language, toggleLanguage } = useLanguage();
	const updatedOn = "April 8, 2026";
	const content = language === "ro" ? PRIVACY_CONTENT.ro : PRIVACY_CONTENT.en;

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
							<section key={section.key} id={section.anchor}>
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
