"use client";

import {
	createContext,
	useCallback,
	useContext,
	useEffect,
	useMemo,
	useState,
} from "react";
import en from "../locales/en.json";
import ro from "../locales/ro.json";

const dictionaries = { en, ro };
const LanguageContext = createContext(null);

export const useLanguage = () => {
	const context = useContext(LanguageContext);
	if (!context) {
		throw new Error("useLanguage must be used within a LanguageProvider");
	}
	return context;
};

export const LanguageProvider = ({ children }) => {
	const [language, setLanguageState] = useState("en");

	useEffect(() => {
		const saved = localStorage.getItem("language");
		if (saved === "en" || saved === "ro") setLanguageState(saved);
	}, []);

	useEffect(() => {
		document.documentElement.lang = language;
	}, [language]);

	const setLanguage = useCallback((next) => {
		setLanguageState(next);
		localStorage.setItem("language", next);
	}, []);

	const toggleLanguage = useCallback(() => {
		setLanguage(language === "en" ? "ro" : "en");
	}, [language, setLanguage]);

	const t = useCallback(
		(key, params = {}) => {
			let value = dictionaries[language];
			for (const k of key.split(".")) {
				if (value && typeof value === "object" && k in value) value = value[k];
				else return key;
			}
			if (typeof value === "string") {
				return value.replace(/\{(\w+)\}/g, (m, p) =>
					params[p] !== undefined ? params[p] : m,
				);
			}
			return value;
		},
		[language],
	);

	const value = useMemo(
		() => ({ language, setLanguage, toggleLanguage, t }),
		[language, setLanguage, toggleLanguage, t],
	);

	return (
		<LanguageContext.Provider value={value}>
			{children}
		</LanguageContext.Provider>
	);
};
