import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import { WhatsAppButton } from "./components/WhatsAppButton/WhatsAppButton";
import {
  contactEmail,
  linkedinUrl,
  siteDescription,
  siteName,
  siteTagline,
  siteTitle,
  siteUrl,
} from "./data/site";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  keywords: [
    "Kimberly Pulido",
    "marketing",
    "brand experiences",
    "gestión de marca",
    "gestión integral de campañas",
    "BTL",
    "eventos y activaciones",
    "estrategia digital",
    "trade marketing",
    "marketing de promociones",
    "portafolio marketing Colombia",
  ],
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  category: "business",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "profile",
    firstName: "Kimberly",
    lastName: "Pulido",
    url: siteUrl,
    siteName,
    title: siteTitle,
    description: siteTagline,
    locale: "es_CO",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteTagline,
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  other: {
    "codex-preview": "development",
  },
};

export const viewport: Viewport = {
  themeColor: "#5a1718",
  colorScheme: "light",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteName,
  url: siteUrl,
  image: `${siteUrl}/opengraph-image`,
  jobTitle: "Marketing & Brand Experiences",
  description: siteTagline,
  email: `mailto:${contactEmail}`,
  sameAs: [linkedinUrl],
  knowsAbout: [
    "Estrategia de marketing",
    "Gestión integral de campañas",
    "Brand experiences",
    "BTL y eventos",
    "Marketing digital",
    "Trade marketing",
    "Coordinación de equipos multidisciplinarios",
    "Producción audiovisual",
    "Social media & launch strategy",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-CO">
      <body className={`${poppins.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
