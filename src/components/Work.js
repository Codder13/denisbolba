"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowUpRight } from "./Icons";

const PROJECTS = [
	{ key: "lavanda", img: "/images/opt/project-1.webp", url: "https://lavandaflorarie.com", w: 1600, h: 864 },
	{ key: "douaroti", img: "/images/opt/project-2.webp", url: "https://douaroti.ro", w: 1600, h: 894 },
	{ key: "biciclete", img: "/images/opt/project-3.webp", url: "https://bicicletecopii.ro", w: 1600, h: 864 },
];

export default function Work() {
	const { t } = useLanguage();
	return (
		<section id="work" className="section">
			<div className="wrap">
				<header className="section-head">
					<span className="eyebrow reveal">
						<span className="idx">01</span> {t("work.label")}
					</span>
					<h2 className="display reveal">{t("work.title")}</h2>
					<p className="reveal" style={{ "--d": "100ms" }}>
						{t("work.intro")}
					</p>
				</header>

				<div className="projects">
					{PROJECTS.map((p, i) => {
						const title = t(`work.projects.${p.key}.title`);
						const host = p.url.replace(/^https?:\/\//, "");
						return (
							<article
								key={p.key}
								className={`project reveal ${i === 0 ? "feature" : ""}`}
								style={{ "--d": `${(i % 2) * 100}ms` }}
							>
								<a
									href={p.url}
									target="_blank"
									rel="noopener noreferrer"
									className="shot"
									aria-label={`${title} — ${t("work.visit")}`}
								>
									<span className="shot-bar" aria-hidden="true">
										<i />
										<i />
										<i />
										<span>{host}</span>
									</span>
									<img src={p.img} alt="" loading="lazy" width={p.w} height={p.h} />
									<span className="shot-cta" aria-hidden="true">
										<ArrowUpRight />
									</span>
								</a>
								<div className="project-info">
									<span className="num">0{i + 1}</span>
									<h3>{title}</h3>
									<span className="cat">{t(`work.projects.${p.key}.category`)}</span>
									<p>{t(`work.projects.${p.key}.description`)}</p>
									<a
										href={p.url}
										target="_blank"
										rel="noopener noreferrer"
										className="visit ulink"
										tabIndex={-1}
									>
										{host} <ArrowUpRight />
									</a>
								</div>
							</article>
						);
					})}
				</div>
			</div>
		</section>
	);
}
