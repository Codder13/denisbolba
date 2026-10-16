"use client";

import emailjs from "@emailjs/browser";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Check } from "./Icons";
import { EMAIL, PHONE, PHONE_HREF, SOCIALS } from "./site";

const EMPTY = { name: "", email: "", subject: "", message: "" };

export default function Contact() {
	const { t } = useLanguage();
	const [form, setForm] = useState(EMPTY);
	const [status, setStatus] = useState("idle");
	const [copied, setCopied] = useState(false);

	const onChange = (e) =>
		setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

	const copyEmail = async () => {
		try {
			await navigator.clipboard.writeText(EMAIL);
			setCopied(true);
			setTimeout(() => setCopied(false), 2000);
		} catch {
			window.location.href = `mailto:${EMAIL}`;
		}
	};

	const onSubmit = async (e) => {
		e.preventDefault();
		setStatus("sending");
		try {
			await emailjs.send(
				process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
				process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
				{
					from_name: form.name,
					from_email: form.email,
					subject: form.subject,
					message: form.message,
					to_email: EMAIL,
				},
				process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
			);
			setStatus("success");
			setForm(EMPTY);
		} catch (err) {
			console.error("Error sending email:", err);
			setStatus("error");
		}
	};

	return (
		<section id="contact" className="section contact-section">
			<div className="wrap contact-grid">
				<div className="contact-info">
					<h2 className="contact-title">{t("contact.title")}</h2>
					<p className="contact-lead">{t("contact.description")}</p>

					<div className="contact-direct">
						<a href={`mailto:${EMAIL}`} className="contact-email">
							{EMAIL}
						</a>
						<button
							type="button"
							className="copy-btn"
							onClick={copyEmail}
							data-copied={copied}
							aria-live="polite"
						>
							{copied ? t("contact.copied") : t("contact.copy")}
						</button>
					</div>

					<dl className="contact-meta">
						<div>
							<dt>{t("contact.phone")}</dt>
							<dd>
								<a href={PHONE_HREF}>{PHONE}</a>
							</dd>
						</div>
						<div>
							<dt>{t("contact.location")}</dt>
							<dd>
								<a
									href="https://maps.google.com/?q=Oradea,Romania"
									target="_blank"
									rel="noopener noreferrer"
								>
									{t("contact.locationValue")}
								</a>
							</dd>
						</div>
						<div>
							<dt>{t("contact.elsewhere")}</dt>
							<dd className="contact-socials">
								{SOCIALS.map(({ label, href, Icon }) => (
									<a
										key={label}
										href={href}
										target="_blank"
										rel="noopener noreferrer"
										aria-label={label}
									>
										<Icon />
									</a>
								))}
							</dd>
						</div>
					</dl>
				</div>

				<div className="contact-form-panel">
					{status === "success" ? (
						<output className="form-success">
							<span className="success-badge">
								<Check width={20} height={20} />
							</span>
							<h3>{t("contact.form.successTitle")}</h3>
							<p>{t("contact.form.successMessage")}</p>
							<button
								type="button"
								className="btn btn-secondary"
								onClick={() => setStatus("idle")}
							>
								{t("contact.form.successCta")}
							</button>
						</output>
					) : (
						<form className="contact-form" onSubmit={onSubmit}>
							<div className="field">
								<label htmlFor="f-name">{t("contact.form.name")}</label>
								<input
									id="f-name"
									name="name"
									required
									autoComplete="name"
									value={form.name}
									onChange={onChange}
								/>
							</div>
							<div className="field">
								<label htmlFor="f-email">{t("contact.form.email")}</label>
								<input
									id="f-email"
									name="email"
									type="email"
									required
									autoComplete="email"
									value={form.email}
									onChange={onChange}
								/>
							</div>
							<div className="field full">
								<label htmlFor="f-subject">{t("contact.form.subject")}</label>
								<input
									id="f-subject"
									name="subject"
									required
									value={form.subject}
									onChange={onChange}
								/>
							</div>
							<div className="field full">
								<label htmlFor="f-message">{t("contact.form.message")}</label>
								<textarea
									id="f-message"
									name="message"
									required
									rows={5}
									value={form.message}
									onChange={onChange}
								/>
							</div>
							{status === "error" && (
								<p className="form-error" role="alert">
									{t("contact.form.errorMessage")}
								</p>
							)}
							<div className="form-footer">
								<small>{t("contact.form.privacy")}</small>
								<button
									type="submit"
									className="btn btn-submit"
									disabled={status === "sending"}
								>
									{status === "sending"
										? t("contact.form.sending")
										: t("contact.form.submit")}
								</button>
							</div>
						</form>
					)}
				</div>
			</div>
		</section>
	);
}
