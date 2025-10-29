"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaYoutube, FaInstagram } from "react-icons/fa";
import { useLanguage } from "@/contexts/LanguageContext";

const Header = () => {
	const [scrolled, setScrolled] = useState(false);
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [activeSection, setActiveSection] = useState("home");
	const { language, toggleLanguage, t } = useLanguage();

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 50) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}

			// Determine active section based on scroll position
			const sections = ["home", "about", "skills", "projects", "contact"];
			const sectionElements = sections.map((id) => {
				const element = document.getElementById(id);
				if (element) {
					return {
						id,
						offsetTop: element.offsetTop - 100,
						offsetHeight: element.offsetHeight,
					};
				}
				return { id, offsetTop: 0, offsetHeight: 0 };
			});

			const scrollPosition = window.scrollY;

			for (let i = sectionElements.length - 1; i >= 0; i--) {
				const section = sectionElements[i];
				if (scrollPosition >= section.offsetTop) {
					setActiveSection(section.id);
					break;
				}
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const navVariants = {
		hidden: { opacity: 0, y: -20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				type: "spring",
				stiffness: 100,
				duration: 0.5,
				staggerChildren: 0.1,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: -10 },
		visible: { opacity: 1, y: 0 },
	};

	return (
		<motion.header
			className={`fixed w-full z-50 transition-all duration-300 ${
				scrolled
					? "bg-dark/70 backdrop-blur-md shadow-lg py-2"
					: "bg-transparent py-4"
			}`}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.5 }}
		>
			<div className="w-full px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24 flex justify-between items-center">
				<motion.a
					initial={{ opacity: 0, x: -20 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.5 }}
					className="text-2xl font-bold text-gradient cursor-pointer mr-8"
					href="#home"
					aria-label="Go to home section"
				>
					Denis Bolba
				</motion.a>

				{/* Desktop Navigation */}
				<motion.nav
					className="hidden md:flex items-center space-x-12"
					variants={navVariants}
					initial="hidden"
					animate="visible"
				>
					<motion.a
						variants={itemVariants}
						href="#home"
						className={`text-white hover:text-primary transition-colors px-2 py-1 ${
							activeSection === "home"
								? "text-primary border-b-2 border-primary"
								: ""
						}`}
					>
						{t("header.home")}
					</motion.a>
					<motion.a
						variants={itemVariants}
						href="#about"
						className={`text-white hover:text-primary transition-colors px-2 py-1 ${
							activeSection === "about"
								? "text-primary border-b-2 border-primary"
								: ""
						}`}
					>
						{t("header.about")}
					</motion.a>
					<motion.a
						variants={itemVariants}
						href="#skills"
						className={`text-white hover:text-primary transition-colors px-2 py-1 ${
							activeSection === "skills"
								? "text-primary border-b-2 border-primary"
								: ""
						}`}
					>
						{t("header.skills")}
					</motion.a>
					<motion.a
						variants={itemVariants}
						href="#projects"
						className={`text-white hover:text-primary transition-colors px-2 py-1 ${
							activeSection === "projects"
								? "text-primary border-b-2 border-primary"
								: ""
						}`}
					>
						{t("header.projects")}
					</motion.a>
					<motion.a
						variants={itemVariants}
						href="#contact"
						className={`text-white hover:text-primary transition-colors px-2 py-1 ${
							activeSection === "contact"
								? "text-primary border-b-2 border-primary"
								: ""
						}`}
					>
						{t("header.contact")}
					</motion.a>
				</motion.nav>

				{/* Language Toggle & Social Icons */}
				<div className="hidden md:flex items-center space-x-6 ml-12">
					{/* Language Toggle Button */}
					<motion.button
						onClick={toggleLanguage}
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						className="text-white hover:text-primary transition-colors font-medium text-sm border border-white/20 rounded-md px-3 py-1.5 hover:border-primary/50"
						aria-label={`Switch to ${language === "en" ? "Romanian" : "English"}`}
					>
						{language === "en" ? "RO" : "EN"}
					</motion.button>

					<div className="flex items-center space-x-6 pl-2 border-l border-white/20">
						<motion.a
							href="https://github.com/Codder13"
							target="_blank"
							rel="noopener noreferrer"
							whileHover={{ scale: 1.2 }}
							whileTap={{ scale: 0.9 }}
							className="text-white hover:text-primary transition-colors"
							aria-label="GitHub Profile"
							title="GitHub Profile"
						>
							<FaGithub size={20} />
						</motion.a>
						<motion.a
							href="https://youtube.com/@denisbolba"
							target="_blank"
							rel="noopener noreferrer"
							whileHover={{ scale: 1.2 }}
							whileTap={{ scale: 0.9 }}
							className="text-white hover:text-primary transition-colors"
							aria-label="YouTube Channel"
							title="YouTube Channel"
						>
							<FaYoutube size={20} />
						</motion.a>
						<motion.a
							href="https://instagram.com/denisbolba"
							target="_blank"
							rel="noopener noreferrer"
							whileHover={{ scale: 1.2 }}
							whileTap={{ scale: 0.9 }}
							className="text-white hover:text-primary transition-colors"
							aria-label="Instagram Profile"
							title="Instagram Profile"
						>
							<FaInstagram size={20} />
						</motion.a>
					</div>
				</div>

				{/* Mobile Menu Button */}
				<motion.button
					className="md:hidden text-white focus:outline-none"
					onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
					whileTap={{ scale: 0.9 }}
					aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
				>
					<svg
						className="w-6 h-6"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						{mobileMenuOpen ? (
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M6 18L18 6M6 6l12 12"
							/>
						) : (
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M4 6h16M4 12h16M4 18h16"
							/>
						)}
					</svg>
				</motion.button>

				{/* Mobile Menu */}
				{mobileMenuOpen && (
					<motion.div
						className="absolute top-full left-0 w-full bg-dark/70 backdrop-blur-md shadow-lg py-4 md:hidden"
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: "auto" }}
						exit={{ opacity: 0, height: 0 }}
						transition={{ duration: 0.3 }}
					>
						<div className="flex flex-col space-y-4 px-6">
							<a
								href="#home"
								className={`text-white hover:text-primary transition-colors py-2 ${
									activeSection === "home"
										? "text-primary pl-2 border-l-2 border-primary"
										: ""
								}`}
								onClick={() => setMobileMenuOpen(false)}
							>
								{t("header.home")}
							</a>
							<a
								href="#about"
								className={`text-white hover:text-primary transition-colors py-2 ${
									activeSection === "about"
										? "text-primary pl-2 border-l-2 border-primary"
										: ""
								}`}
								onClick={() => setMobileMenuOpen(false)}
							>
								{t("header.about")}
							</a>
							<a
								href="#skills"
								className={`text-white hover:text-primary transition-colors py-2 ${
									activeSection === "skills"
										? "text-primary pl-2 border-l-2 border-primary"
										: ""
								}`}
								onClick={() => setMobileMenuOpen(false)}
							>
								{t("header.skills")}
							</a>
							<a
								href="#projects"
								className={`text-white hover:text-primary transition-colors py-2 ${
									activeSection === "projects"
										? "text-primary pl-2 border-l-2 border-primary"
										: ""
								}`}
								onClick={() => setMobileMenuOpen(false)}
							>
								{t("header.projects")}
							</a>
							<a
								href="#contact"
								className={`text-white hover:text-primary transition-colors py-2 ${
									activeSection === "contact"
										? "text-primary pl-2 border-l-2 border-primary"
										: ""
								}`}
								onClick={() => setMobileMenuOpen(false)}
							>
								{t("header.contact")}
							</a>

							{/* Language Toggle for Mobile */}
							<button
								onClick={() => {
									toggleLanguage();
									setMobileMenuOpen(false);
								}}
								className="text-white hover:text-primary transition-colors py-2 border border-white/20 rounded-md text-center font-medium text-sm hover:border-primary/50"
							>
								{language === "en" ? "RO - Română" : "EN - English"}
							</button>

							<div className="flex space-x-6 pt-2">
								<a
									href="https://github.com/denisbolba"
									target="_blank"
									rel="noopener noreferrer"
									className="text-white hover:text-primary transition-colors"
									aria-label="GitHub Profile"
									title="GitHub Profile"
								>
									<FaGithub size={20} />
								</a>
								<a
									href="https://youtube.com/@denisbolba"
									target="_blank"
									rel="noopener noreferrer"
									className="text-white hover:text-primary transition-colors"
									aria-label="YouTube Channel"
									title="YouTube Channel"
								>
									<FaYoutube size={20} />
								</a>
								<a
									href="https://instagram.com/denisbolba"
									target="_blank"
									rel="noopener noreferrer"
									className="text-white hover:text-primary transition-colors"
									aria-label="Instagram Profile"
									title="Instagram Profile"
								>
									<FaInstagram size={20} />
								</a>
							</div>
						</div>
					</motion.div>
				)}
			</div>
		</motion.header>
	);
};

export default Header;
