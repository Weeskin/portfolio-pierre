import type { Metadata as NextMetadata } from "next";
import "./globals.css";

interface Icon {
	rel: string;
	sizes?: string;
	type?: string;
	href: string;
}

interface OpenGraphImage {
	type: string;
	width: number;
	height: number;
	url: string;
}

interface OpenGraph {
	title: string;
	description: string;
	type: string;
	url: string;
	images: OpenGraphImage[];
	siteName: string;
	locale: string;
}

interface CustomNextMetadata {
	title: string;
	description: string;
	icons: {
		icon: Icon[];
		apple: Icon[];
		other: Icon[];
	};
	meta: { name: string; content: string }[];
	openGraph: OpenGraph;
}

export const metadata: CustomNextMetadata = {
	title: "Site personnel de Pierre Sourice",
	description:
		"Développeur Frontend, passionné du design et du développement web. Je suis expert en création de sites web, dédié à répondre aux exigences spécifiques de chaque client.",
	icons: {
		icon: [
			{
				rel: "icon",
				type: "image/png",
				sizes: "32x32",
				href: "/src/assets/favicon/favicon-32x32.png"
			},
			{
				rel: "icon",
				type: "image/png",
				sizes: "16x16",
				href: "/src/assets/favicon/favicon-16x16.png"
			}
		],
		apple: [
			{
				rel: "apple-touch-icon",
				sizes: "180x180",
				href: "/src/assets/favicon/apple-touch-icon.png"
			}
		],
		other: [{ rel: "manifest", href: "/src/assets/favicon/site.webmanifest" }]
	},
	meta: [
		{ name: "msapplication-TileColor", content: "#da532c" },
		{ name: "theme-color", content: "#ffffff" }
	],
	openGraph: {
		title: "Pierre SOURICE - Développeur Frontend",
		description:
			"Développeur Frontend, passionné du design et du développement web. Je suis expert en création de sites web, dédié à répondre aux exigences spécifiques de chaque client.",
		type: "website",
		url: "https://pierresourice.fr",
		images: [
			{
				type: "image/jpeg",
				width: 1200,
				height: 630,
				url: "https://res.cloudinary.com/duqrhths8/image/upload/v1721987131/Logo_hq2fas.ico"
			}
		],
		siteName: "Pierre SOURICE - Développeur Frontend",
		locale: "fr_FR"
	}
};

export default function RootLayout({
	children
}: {
	children: React.ReactNode | string;
}) {
	return (
		<html lang="fr">
			<head>
				<title>{metadata.title || ""}</title>
				<meta
					name="description"
					content={metadata.description || ""}
				/>
				{metadata.icons.icon?.map((icon, index) => (
					<link
						key={index}
						rel={icon.rel}
						sizes={icon.sizes}
						type={icon.type}
						href={icon.href}
					/>
				))}
				{metadata.icons.apple?.map((appleIcon, index) => (
					<link
						key={index}
						rel={appleIcon.rel}
						sizes={appleIcon.sizes}
						href={appleIcon.href}
					/>
				))}
				{metadata.icons.other?.map((otherIcon, index) => (
					<link
						key={index}
						rel={otherIcon.rel}
						href={otherIcon.href}
					/>
				))}
				{metadata.meta?.map((meta, index) => (
					<meta
						key={index}
						name={meta.name}
						content={meta.content}
					/>
				))}
				{metadata.openGraph && (
					<>
						<meta
							property="og:title"
							content={metadata.openGraph.title}
						/>
						<meta
							property="og:description"
							content={metadata.openGraph.description}
						/>
						<meta
							property="og:type"
							content={metadata.openGraph.type}
						/>
						<meta
							property="og:url"
							content={metadata.openGraph.url}
						/>
						<meta
							property="og:site_name"
							content={metadata.openGraph.siteName}
						/>
						<meta
							property="og:locale"
							content={metadata.openGraph.locale}
						/>
						{metadata.openGraph.images?.map((image, index) => (
							<meta
								key={index}
								property="og:image"
								content={image.url}
							/>
						))}
					</>
				)}
			</head>
			<body>{children}</body>
		</html>
	);
}
