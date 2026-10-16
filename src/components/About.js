"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { EMAIL, getAge } from "./site";

export default function About() {
	const { t } = useLanguage();
	const age = getAge();

	return (
		<section id="about" className="section about-section">
			<div className="wrap about-layout">
				<div className="about-narrative">
					<h2 className="section-title">{t("about.title")}</h2>
					<div className="about-prose">
						<p>{t("about.p1")}</p>
						<p>{t("about.p2")}</p>
					</div>
				</div>

				<aside className="about-ledger" aria-label={t("about.label")}>
					<dl className="ledger-list">
						<div>
							<dt>{t("about.factName")}</dt>
							<dd>Denis Bolba</dd>
						</div>
						<div>
							<dt>{t("about.factAge")}</dt>
							<dd>{t("about.factAgeValue", { age })}</dd>
						</div>
						<div>
							<dt>{t("about.factFrom")}</dt>
							<dd>{t("about.factFromValue")}</dd>
						</div>
						<div>
							<dt>{t("about.factFocus")}</dt>
							<dd>{t("about.factFocusValue")}</dd>
						</div>
						<div>
							<dt>{t("about.factEmail")}</dt>
							<dd>
								<a href={`mailto:${EMAIL}`} className="text-link">
									{EMAIL}
								</a>
							</dd>
						</div>
					</dl>
				</aside>
			</div>
		</section>
	);
}
