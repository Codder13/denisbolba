import { Bricolage_Grotesque, Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import Providers from "@/components/Providers";
import "./globals.css";

const displayFont = Bricolage_Grotesque({
	subsets: ["latin", "latin-ext"],
	weight: ["500", "600", "700"],
	variable: "--font-display",
	display: "swap",
});

const bodyFont = Plus_Jakarta_Sans({
	subsets: ["latin", "latin-ext"],
	weight: ["400", "500", "600", "700"],
	variable: "--font-body",
	display: "swap",
});

const title = "Denis Bolba | Web Designer & Entrepreneur in Oradea";
const description =
	"Denis Bolba is a web designer and entrepreneur in Oradea, Romania, designing and building fast, clear websites and online stores.";

export const metadata = {
	metadataBase: new URL("https://www.denisbolba.com"),
	title,
	description,
	keywords: [
		"Denis Bolba",
		"web designer",
		"Oradea",
		"web design",
		"Next.js",
		"WordPress",
		"portfolio",
	],
	authors: [{ name: "Denis Bolba" }],
	openGraph: {
		title,
		description,
		url: "https://www.denisbolba.com",
		siteName: "Denis Bolba",
		images: [
			{
				url: "/images/opt/profile.webp",
				width: 1200,
				height: 1600,
				alt: "Denis Bolba",
			},
		],
		locale: "en_US",
		type: "website",
	},
	twitter: { card: "summary_large_image", title, description },
	icons: { icon: "/favicon.ico" },
};

export const viewport = {
	themeColor: "#F4F6F9",
	colorScheme: "light",
};

export default function RootLayout({ children }) {
	return (
		<html
			lang="en"
			className={`${displayFont.variable} ${bodyFont.variable}`}
			suppressHydrationWarning
		>
			<head>
				<script
					// biome-ignore lint/security/noDangerouslySetInnerHtml: language hydration bootstrap
					dangerouslySetInnerHTML={{
						__html:
							"try{var l=localStorage.getItem('language');if(l==='ro'||l==='en')document.documentElement.lang=l}catch(e){}",
					}}
				/>
			</head>
			<body>
				<Providers>{children}</Providers>
				<Script
					src="https://umami.denisbolba.xyz/script.js"
					data-website-id="f0947877-6b8a-454a-b4b0-6af31493706b"
					strategy="afterInteractive"
				/>
			</body>
		</html>
	);
}
