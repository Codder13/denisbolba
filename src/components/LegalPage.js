"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import Footer from "./Footer";
import Header from "./Header";
import { EMAIL } from "./site";

export default function LegalPage({ content, updatedOn }) {
	const { language } = useLanguage();
	const c = language === "ro" ? content.ro : content.en;

	return (
		<>
			<Header home={false} />
			<main id="main" className="legal">
				<div className="wrap">
					<div className="legal-inner">
						<Link href="/" className="text-link legal-back">
							{c.backToHome}
						</Link>
						<h1 className="legal-title">{c.title}</h1>
						<p className="legal-updated">
							{c.lastUpdatedLabel}: {updatedOn}
						</p>
						{c.sections.map((s) => (
							<section key={s.key} id={s.anchor}>
								<h2>{s.title}</h2>
								{s.paragraphs?.map((p) => (
									<p key={p}>{p}</p>
								))}
								{s.intro && <p>{s.intro}</p>}
								{s.list && (
									<ul>
										{s.list.map((li) => (
											<li key={li}>{li}</li>
										))}
									</ul>
								)}
								{s.key === "contact" && (
									<p>
										{c.contactLead}{" "}
										<a href={`mailto:${EMAIL}`} className="text-link">
											{EMAIL}
										</a>
									</p>
								)}
							</section>
						))}
					</div>
				</div>
			</main>
			<Footer />
		</>
	);
}
