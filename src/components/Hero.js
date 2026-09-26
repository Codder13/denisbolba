"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowUpRight } from "./Icons";
import { EMAIL, getAge } from "./site";

function LocalTime() {
	const [time, setTime] = useState(null);
	useEffect(() => {
		const fmt = new Intl.DateTimeFormat("en-GB", {
			timeZone: "Europe/Bucharest",
			hour: "2-digit",
			minute: "2-digit",
		});
		const tick = () => setTime(fmt.format(new Date()));
		tick();
		const id = setInterval(tick, 15_000);
		return () => clearInterval(id);
	}, []);
	return <time suppressHydrationWarning>{time ?? "--:--"}</time>;
}

export default function Hero() {
	const { t } = useLanguage();
	const age = getAge();

	return (
		<section id="top" className="hero">
			<div className="wrap">
				<div className="hero-grid">
					<div className="hero-copy">
						<p className="status reveal">
							<span className="dot" aria-hidden="true" />
							{t("hero.status")}
							<span className="sep" aria-hidden="true" />
							<LocalTime />
							<span>{t("hero.localTime")}</span>
						</p>
						<h1 className="display reveal" style={{ "--d": "80ms" }}>
							{t("hero.headlineA")} <span className="serif">{t("hero.headlineEm")}</span>
						</h1>
						<p className="hero-intro reveal" style={{ "--d": "160ms" }}>
							{t("hero.intro", { age })}
						</p>
						<div className="hero-cta reveal" style={{ "--d": "240ms" }}>
							<a href="#contact" className="btn btn-primary">
								{t("hero.ctaPrimary")}
								<ArrowUpRight />
							</a>
							<a href="#work" className="btn btn-ghost">
								{t("hero.ctaSecondary")}
							</a>
						</div>
					</div>

					<div className="hero-media reveal" style={{ "--d": "120ms" }}>
						<figure className="portrait" style={{ margin: 0 }}>
							<img
								src="/images/opt/profile.webp"
								alt={t("hero.portraitAlt")}
								width={1200}
								height={1600}
								fetchPriority="high"
							/>
							<figcaption>
								<span>{t("hero.caption")}</span>
								<span>47.05°N 21.92°E</span>
							</figcaption>
						</figure>
					</div>
				</div>

				<dl className="hero-meta reveal" style={{ "--d": "320ms" }}>
					<div>
						<dt>{t("hero.metaRoleLabel")}</dt>
						<dd>{t("hero.metaRole")}</dd>
					</div>
					<div>
						<dt>{t("hero.metaBasedLabel")}</dt>
						<dd>{t("hero.metaBased")}</dd>
					</div>
					<div>
						<dt>{t("hero.metaFocusLabel")}</dt>
						<dd>{t("hero.metaFocus")}</dd>
					</div>
					<div>
						<dt>{t("hero.metaContactLabel")}</dt>
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
