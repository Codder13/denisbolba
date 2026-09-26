"use client";

import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import useReveal from "@/components/useReveal";
import Work from "@/components/Work";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Home() {
	const { language } = useLanguage();
	useReveal([language]);

	return (
		<>
			<Header />
			<main id="main">
				<Hero />
				<Work />
				<Services />
				<About />
				<Contact />
			</main>
			<Footer />
		</>
	);
}
