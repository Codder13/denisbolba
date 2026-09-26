"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { EMAIL, getAge } from "./site";

function splitLast(title) {
	// Italicise the final clause after the comma for typographic rhythm
	const i = title.lastIndexOf(",");
	if (i === -1) return [title, ""];
	return [title.slice(0, i + 1), title.slice(i + 1)];
}

export default function About() {
	const { t } = useLanguage();
	const age = getAge();
	const [a, b] = splitLast(t("about.title"));

	return (
		<section id="about" className="section">
			<div className="wrap about-grid">
				<span className="eyebrow reveal">
					<span className="idx">03</span> {t("about.label")}
				</span>
				<h2 className="about-title display reveal">
					{a}
					{b && <span className="serif">{b}</span>}
				</h2>
				<div className="about-body reveal" style={{ "--d": "100ms" }}>
					<p>{t("about.p1")}</p>
					<p>{t("about.p2")}</p>
				</div>
				<dl className="facts reveal" style={{ "--d": "180ms" }}>
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
						<dt>{t("about.factEmail")}</dt>
						<dd>
							<a href={`mailto:${EMAIL}`} className="ulink">
								{EMAIL}
							</a>
						</dd>
					</div>
				</dl>
			</div>
		</section>
	);
}
