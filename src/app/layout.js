import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import Script from "next/script";
import Providers from "@/components/Providers";
import "./globals.css";

const geist = Geist({ subsets: ["latin", "latin-ext"], variable: "--font-geist", display: "swap" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono", display: "swap" });
const instrument = Instrument_Serif({
	subsets: ["latin", "latin-ext"],
	weight: "400",
	style: ["normal", "italic"],
	variable: "--font-instrument",
	display: "swap",
});

const title = "Denis Bolba — Web Designer & Entrepreneur";
const description =
	"Denis Bolba is a web designer and entrepreneur from Oradea, Romania, building fast, polished websites and online stores.";

export const metadata = {
	metadataBase: new URL("https://www.denisbolba.com"),
	title,
	description,
	keywords: ["Denis Bolba", "web designer", "Oradea", "web design", "Next.js", "WordPress", "portfolio"],
	authors: [{ name: "Denis Bolba" }],
	openGraph: {
		title,
		description,
		url: "https://www.denisbolba.com",
		siteName: "Denis Bolba",
		images: [{ url: "/images/opt/profile.webp", width: 1200, height: 1600, alt: "Denis Bolba" }],
		locale: "en_US",
		type: "website",
	},
	twitter: { card: "summary_large_image", title, description },
	icons: { icon: "/favicon.ico" },
};

export const viewport = {
	themeColor: "#0b0b0c",
	colorScheme: "dark",
};

export default function RootLayout({ children }) {
	return (
		<html
			lang="en"
			className={`${geist.variable} ${geistMono.variable} ${instrument.variable}`}
			suppressHydrationWarning
		>
			<head>
				{/* Enable reveal animations only when JS runs, so content never stays hidden */}
				<script
					// biome-ignore lint/security/noDangerouslySetInnerHtml: tiny bootstrap
					dangerouslySetInnerHTML={{
						__html:
							"document.documentElement.classList.add('js');try{var l=localStorage.getItem('language');if(l==='ro'||l==='en')document.documentElement.lang=l}catch(e){}",
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
