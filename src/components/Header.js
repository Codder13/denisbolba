"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowUpRight, BrandMark } from "./Icons";
import { NAV } from "./site";

export function LangSwitch() {
	const { language, setLanguage, t } = useLanguage();
	return (
		<div className="lang" role="group" aria-label={t("nav.switchTo")}>
			{["en", "ro"].map((l) => (
				<button key={l} type="button" aria-pressed={language === l} onClick={() => setLanguage(l)}>
					{l.toUpperCase()}
				</button>
			))}
		</div>
	);
}

export default function Header({ home = true }) {
	const { t } = useLanguage();
	const [scrolled, setScrolled] = useState(false);
	const [open, setOpen] = useState(false);
	const [active, setActive] = useState(null);

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 8);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	useEffect(() => {
		if (!home) return;
		const sections = NAV.map((id) => document.getElementById(id)).filter(Boolean);
		const io = new IntersectionObserver(
			(entries) => {
				for (const e of entries) if (e.isIntersecting) setActive(e.target.id);
			},
			{ rootMargin: "-45% 0px -50% 0px" },
		);
		for (const s of sections) io.observe(s);
		return () => io.disconnect();
	}, [home]);

	useEffect(() => {
		document.body.style.overflow = open ? "hidden" : "";
		const onKey = (e) => e.key === "Escape" && setOpen(false);
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [open]);

	const href = (id) => (home ? `#${id}` : `/#${id}`);

	return (
		<>
			<a href="#main" className="skip">
				{t("meta.skip")}
			</a>
			<header className={`hdr ${scrolled || open ? "scrolled" : ""}`}>
				<div className="wrap hdr-row">
					<a href={home ? "#top" : "/"} className="brand" aria-label="Denis Bolba — home">
						<span className="brand-mark" aria-hidden="true">
							<BrandMark />
						</span>
						Denis Bolba
					</a>

					<nav className="nav" aria-label="Primary">
						{NAV.map((id) => (
							<a key={id} href={href(id)} aria-current={active === id ? "true" : undefined}>
								{t(`nav.${id}`)}
							</a>
						))}
					</nav>

					<div className="hdr-right">
						<LangSwitch />
						<a href={href("contact")} className="btn btn-primary btn-sm">
							{t("nav.cta")}
							<ArrowUpRight />
						</a>
						<button
							type="button"
							className="burger"
							aria-expanded={open}
							aria-controls="mnav"
							aria-label={open ? t("nav.close") : t("nav.menu")}
							onClick={() => setOpen((o) => !o)}
						>
							<span />
						</button>
					</div>
				</div>
			</header>

			<div id="mnav" className={`mnav ${open ? "open" : ""}`} aria-hidden={!open} inert={open ? undefined : ""}>
				<ol>
					{NAV.map((id, i) => (
						<li key={id}>
							<a href={href(id)} onClick={() => setOpen(false)}>
								<small>0{i + 1}</small>
								{t(`nav.${id}`)}
							</a>
						</li>
					))}
				</ol>
				<a href={href("contact")} className="btn btn-primary" onClick={() => setOpen(false)}>
					{t("nav.cta")}
					<ArrowUpRight />
				</a>
			</div>
		</>
	);
}
