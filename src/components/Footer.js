"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowUp } from "./Icons";
import { SOCIALS } from "./site";

export default function Footer() {
	const { t } = useLanguage();
	return (
		<footer className="ftr">
			<div className="wrap">
				<div className="ftr-row">
					<span>{t("footer.rights", { year: new Date().getFullYear() })}</span>
					<nav aria-label="Footer">
						{SOCIALS.map(({ label, href }) => (
							<a key={label} href={href} target="_blank" rel="noopener noreferrer">
								{label}
							</a>
						))}
						<Link href="/privacy-policy">{t("footer.privacy")}</Link>
						<Link href="/terms-of-service">{t("footer.terms")}</Link>
						<Link href="/privacy-policy#cookies-and-tracking">{t("footer.cookies")}</Link>
					</nav>
					<a href="#top" className="ulink" style={{ display: "inline-flex", gap: ".4rem", alignItems: "center" }}>
						{t("footer.top")} <ArrowUp width={14} height={14} />
					</a>
				</div>
				<div className="ftr-word" aria-hidden="true">
					denis bolba
				</div>
			</div>
		</footer>
	);
}
