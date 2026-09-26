"use client";

import { useLanguage } from "@/contexts/LanguageContext";

const ITEMS = ["design", "uiux", "development", "wordpress"];
const TOOLS = ["Figma", "Next.js", "React", "Tailwind CSS", "JavaScript", "WordPress", "WooCommerce", "Framer Motion"];

export default function Services() {
	const { t } = useLanguage();
	return (
		<section id="services" className="section">
			<div className="wrap services-grid">
				<div className="services-aside">
					<div className="sticky">
						<span className="eyebrow reveal">
							<span className="idx">02</span> {t("services.label")}
						</span>
						<h2 className="display reveal">{t("services.title")}</h2>
						<div className="tools reveal" style={{ "--d": "120ms" }}>
							<span className="eyebrow">{t("services.toolsLabel")}</span>
							<ul>
								{TOOLS.map((tool) => (
									<li key={tool}>{tool}</li>
								))}
							</ul>
						</div>
					</div>
				</div>
				<ol className="services-list">
					{ITEMS.map((k, i) => (
						<li key={k} className="reveal" style={{ "--d": `${i * 70}ms` }}>
							<h3>{t(`services.items.${k}.title`)}</h3>
							<p>{t(`services.items.${k}.description`)}</p>
						</li>
					))}
				</ol>
			</div>
		</section>
	);
}
