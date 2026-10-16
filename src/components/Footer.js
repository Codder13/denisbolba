"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { SOCIALS } from "./site";

export default function Footer() {
	const { t } = useLanguage();
	return (
		<footer className="ftr">
			<div className="wrap ftr-row">
				<span className="ftr-copy">
					{t("footer.rights", { year: new Date().getFullYear() })}
				</span>
				<nav className="ftr-nav" aria-label="Footer">
					{SOCIALS.map(({ label, href }) => (
						<a
							key={label}
							href={href}
							target="_blank"
							rel="noopener noreferrer"
						>
							{label}
						</a>
					))}
					<Link href="/privacy-policy">{t("footer.privacy")}</Link>
					<Link href="/terms-of-service">{t("footer.terms")}</Link>
					<Link href="/privacy-policy#cookies-and-tracking">
						{t("footer.cookies")}
					</Link>
				</nav>
				<a href="#top" className="ftr-top">
					{t("footer.top")}
				</a>
			</div>
		</footer>
	);
}
