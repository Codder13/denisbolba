"use client";

import { useLanguage } from "@/contexts/LanguageContext";

const ITEMS = ["design", "uiux", "development", "wordpress"];
const TOOLS = [
	"Figma",
	"Next.js",
	"React",
	"Tailwind CSS",
	"JavaScript",
	"WordPress",
	"WooCommerce",
	"Framer Motion",
];

export default function Services() {
	const { t } = useLanguage();
	return (
		<section id="services" className="section services-section">
			<div className="wrap">
				<header className="section-head">
					<h2 className="section-title">{t("services.title")}</h2>
					<p className="section-lead">{t("services.intro")}</p>
				</header>

				<div className="capability-ledger">
					{ITEMS.map((k) => (
						<article key={k} className="capability-row">
							<h3 className="capability-title">
								{t(`services.items.${k}.title`)}
							</h3>
							<p className="capability-desc">
								{t(`services.items.${k}.description`)}
							</p>
							<p className="capability-scope">
								{t(`services.items.${k}.scope`)}
							</p>
						</article>
					))}
				</div>

				<div className="stack-bar">
					<span className="stack-label">{t("services.toolsLabel")}</span>
					<ul className="stack-list">
						{TOOLS.map((tool) => (
							<li key={tool}>{tool}</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	);
}
