import { GitHub, Instagram, YouTube } from "./Icons";

export const EMAIL = "contact@denisbolba.com";
export const PHONE = "+40 772 266 156";
export const PHONE_HREF = "tel:+40772266156";
export const BIRTH_YEAR = 2005;

export const getAge = () => new Date().getFullYear() - BIRTH_YEAR;

export const SOCIALS = [
	{ label: "GitHub", href: "https://github.com/Codder13", Icon: GitHub },
	{ label: "YouTube", href: "https://youtube.com/@denisbolba", Icon: YouTube },
	{
		label: "Instagram",
		href: "https://instagram.com/denisbolba",
		Icon: Instagram,
	},
];

export const NAV = ["work", "services", "about", "contact"];
