"use client";

import Image from "next/image";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const PROJECTS = [
	{
		key: "lavanda",
		img: "/images/opt/project-1.webp",
		url: "https://lavandaflorarie.com",
		domain: "lavandaflorarie.com",
		w: 1600,
		h: 864,
	},
	{
		key: "douaroti",
		img: "/images/opt/project-2.webp",
		url: "https://douaroti.ro",
		domain: "douaroti.ro",
		w: 1600,
		h: 894,
	},
	{
		key: "biciclete",
		img: "/images/opt/project-3.webp",
		url: "https://bicicletecopii.ro",
		domain: "bicicletecopii.ro",
		w: 1600,
		h: 864,
	},
];

export default function Work() {
	const { t } = useLanguage();
	const [activeKey, setActiveKey] = useState(PROJECTS[0].key);
	const activeProject =
		PROJECTS.find((p) => p.key === activeKey) || PROJECTS[0];

	const activeTitle = t(`work.projects.${activeProject.key}.title`);
	const activeDeliverables = t(
		`work.projects.${activeProject.key}.deliverables`,
	);

	return (
		<section id="work" className="section work-section">
			<div className="wrap">
				<header className="section-head">
					<h2 className="section-title">{t("work.title")}</h2>
					<p className="section-lead">{t("work.intro")}</p>
				</header>

				<div className="showcase-split">
					<div
						className="showcase-list"
						role="tablist"
						aria-label={t("work.title")}
					>
						{PROJECTS.map((p) => {
							const isSelected = p.key === activeProject.key;
							const title = t(`work.projects.${p.key}.title`);
							const category = t(`work.projects.${p.key}.category`);
							const description = t(`work.projects.${p.key}.description`);
							const deliverables = t(`work.projects.${p.key}.deliverables`);
							const stack = t(`work.projects.${p.key}.stack`);
							const stackList = Array.isArray(stack) ? stack : [];

							return (
								<article
									key={p.key}
									className={`showcase-item ${isSelected ? "is-active" : ""}`}
									onMouseEnter={() => setActiveKey(p.key)}
								>
									<button
										type="button"
										role="tab"
										id={`tab-${p.key}`}
										aria-selected={isSelected}
										aria-controls={`stage-${p.key}`}
										className="showcase-trigger"
										onClick={() => setActiveKey(p.key)}
									>
										<div className="showcase-trigger-top">
											<h3>{title}</h3>
											<span className="showcase-domain">{p.domain}</span>
										</div>
										<p className="showcase-cat">{category}</p>
									</button>

									<div className="showcase-body">
										<p className="showcase-desc">{description}</p>
										<p className="showcase-scope">
											<span>{t("work.deliverablesLabel")}:</span> {deliverables}
										</p>
										<div className="showcase-footer">
											<ul className="showcase-tags">
												{stackList.map((tech) => (
													<li key={tech}>{tech}</li>
												))}
											</ul>
											<a
												href={p.url}
												target="_blank"
												rel="noopener noreferrer"
												className="text-link showcase-visit"
											>
												{t("work.visit")}
											</a>
										</div>

										<a
											href={p.url}
											target="_blank"
											rel="noopener noreferrer"
											className="showcase-mobile-shot"
											aria-label={`${title}, ${t("work.visit")}`}
										>
											<Image src={p.img} alt={title} width={p.w} height={p.h} />
										</a>
									</div>
								</article>
							);
						})}
					</div>

					<div
						id={`stage-${activeProject.key}`}
						role="tabpanel"
						aria-labelledby={`tab-${activeProject.key}`}
						className="showcase-stage"
					>
						<div className="stage-frame">
							<div className="stage-topbar">
								<span className="stage-url">{activeProject.domain}</span>
								<a
									href={activeProject.url}
									target="_blank"
									rel="noopener noreferrer"
									className="stage-open-link"
								>
									{t("work.visit")}
								</a>
							</div>

							<a
								href={activeProject.url}
								target="_blank"
								rel="noopener noreferrer"
								className="stage-canvas"
								aria-label={`${activeTitle}, ${t("work.visit")}`}
							>
								{PROJECTS.map((p) => (
									<Image
										key={p.key}
										src={p.img}
										alt={t(`work.projects.${p.key}.title`)}
										width={p.w}
										height={p.h}
										className={
											p.key === activeProject.key ? "is-visible" : "is-hidden"
										}
									/>
								))}
							</a>

							<div className="stage-captionbar">
								<strong>{activeTitle}</strong>
								<span>{activeDeliverables}</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
