"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
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
			<div className="wrap hero-grid">
				<div className="hero-copy">
					<div className="hero-dateline">
						<span>{t("hero.status")}</span>
						<span className="hero-clock">
							<LocalTime /> {t("hero.localTime")}
						</span>
					</div>

					<div className="hero-main">
						<h1 className="hero-title">{t("hero.headline")}</h1>
						<p className="hero-intro">{t("hero.intro", { age })}</p>
						<div className="hero-actions">
							<a href="#contact" className="btn btn-primary">
								{t("hero.ctaPrimary")}
							</a>
							<a href="#work" className="btn btn-secondary">
								{t("hero.ctaSecondary")}
							</a>
							<a href={`mailto:${EMAIL}`} className="hero-mail text-link">
								{EMAIL}
							</a>
						</div>
					</div>
				</div>

				<div className="hero-portrait-col">
					<figure className="portrait-figure">
						<div className="portrait-frame">
							<Image
								src="/images/opt/profile.webp"
								alt={t("hero.portraitAlt")}
								width={1200}
								height={1600}
								priority
							/>
						</div>
						<figcaption className="portrait-caption">
							<strong>{t("hero.captionName")}</strong>
							<span>{t("hero.captionRole")}</span>
						</figcaption>
					</figure>
				</div>
			</div>
		</section>
	);
}
