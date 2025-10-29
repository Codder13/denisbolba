"use client";

import React, { createContext, useState, useContext, useEffect } from "react";
import en from "../locales/en.json";
import ro from "../locales/ro.json";

const LanguageContext = createContext();

export const useLanguage = () => {
	const context = useContext(LanguageContext);
	if (!context) {
		throw new Error("useLanguage must be used within a LanguageProvider");
	}
	return context;
};

export const LanguageProvider = ({ children }) => {
	const [language, setLanguage] = useState("en");
	const [isLoaded, setIsLoaded] = useState(false);
	const [isTransitioning, setIsTransitioning] = useState(false);

	useEffect(() => {
		// Load language preference from localStorage
		const savedLanguage = localStorage.getItem("language");
		if (savedLanguage && (savedLanguage === "en" || savedLanguage === "ro")) {
			setLanguage(savedLanguage);
		}
		setIsLoaded(true);
	}, []);

	const toggleLanguage = () => {
		setIsTransitioning(true);
		const newLanguage = language === "en" ? "ro" : "en";

		// Small delay to allow fade-out animation
		setTimeout(() => {
			setLanguage(newLanguage);
			localStorage.setItem("language", newLanguage);

			// Reset transitioning state after language change
			setTimeout(() => {
				setIsTransitioning(false);
			}, 50);
		}, 150);
	};

	const translations = language === "en" ? en : ro;

	const t = (key, params = {}) => {
		const keys = key.split(".");
		let value = translations;

		for (const k of keys) {
			if (value && typeof value === "object" && k in value) {
				value = value[k];
			} else {
				return key; // Return key if translation not found
			}
		}

		// Replace parameters in the string
		if (typeof value === "string" && Object.keys(params).length > 0) {
			return value.replace(/\{(\w+)\}/g, (match, key) => {
				return params[key] !== undefined ? params[key] : match;
			});
		}

		return value;
	};

	return (
		<LanguageContext.Provider
			value={{ language, toggleLanguage, t, isLoaded, isTransitioning }}
		>
			{children}
		</LanguageContext.Provider>
	);
};
