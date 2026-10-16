"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { NAV } from "./site";

export function LangSwitch() {
	const { language, setLanguage, t } = useLanguage();
	return (
		<fieldset className="lang" aria-label={t("nav.switchTo")}>
			{[
				{ code: "en", label: "English", short: "En" },
				{ code: "ro", label: "Română", short: "Ro" },
			].map(({ code, label, short }) => (
				<button
					key={code}
					type="button"
					aria-pressed={language === code}
					aria-label={label}
					onClick={() => setLanguage(code)}
				>
					{short}
				</button>
			))}
		</fieldset>
	);
}

export default function Header({ home = true }) {
	const { t } = useLanguage();
	const [scrolled, setScrolled] = useState(false);
	const [open, setOpen] = useState(false);
	const [active, setActive] = useState(null);

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 12);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	useEffect(() => {
		if (!home) return;
		const sections = NAV.map((id) => document.getElementById(id)).filter(
			Boolean,
		);
		const io = new IntersectionObserver(
			(entries) => {
				for (const e of entries) if (e.isIntersecting) setActive(e.target.id);
			},
			{ rootMargin: "-40% 0px -50% 0px" },
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
					<a
						href={home ? "#top" : "/"}
						className="brand"
						aria-label="Denis Bolba"
					>
						<span className="brand-square" aria-hidden="true" />
						<span className="brand-name">Denis Bolba</span>
						<span className="brand-city">Oradea</span>
					</a>

					<nav className="nav" aria-label="Primary">
						{NAV.map((id) => (
							<a
								key={id}
								href={href(id)}
								aria-current={active === id ? "true" : undefined}
							>
								{t(`nav.${id}`)}
							</a>
						))}
					</nav>

					<div className="hdr-right">
						<LangSwitch />
						<a href={href("contact")} className="btn btn-primary btn-sm">
							{t("nav.cta")}
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

			<div
				id="mnav"
				className={`mnav ${open ? "open" : ""}`}
				aria-hidden={!open}
				inert={open ? undefined : ""}
			>
				<nav aria-label="Mobile">
					<ul>
						{NAV.map((id) => (
							<li key={id}>
								<a href={href(id)} onClick={() => setOpen(false)}>
									{t(`nav.${id}`)}
								</a>
							</li>
						))}
					</ul>
				</nav>
				<a
					href={href("contact")}
					className="btn btn-primary"
					onClick={() => setOpen(false)}
				>
					{t("nav.cta")}
				</a>
			</div>
		</>
	);
}
