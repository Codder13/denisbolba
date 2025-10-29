"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const LanguageTransition = ({ children, className = "" }) => {
	const { language } = useLanguage();

	return (
		<AnimatePresence mode="wait">
			<motion.div
				key={language}
				initial={{ opacity: 0, y: 10 }}
				animate={{ opacity: 1, y: 0 }}
				exit={{ opacity: 0, y: -10 }}
				transition={{ duration: 0.3, ease: "easeInOut" }}
				className={className}
			>
				{children}
			</motion.div>
		</AnimatePresence>
	);
};

export default LanguageTransition;
