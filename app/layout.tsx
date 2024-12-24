import type { Metadata } from "next";
import { Poppins, DM_Sans } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "8M Divulgações | Comunidade Discord",
  description: "A maior comunidade de divulgação e networking do Discord. Conecte-se com milhares de pessoas, divulgue seu conteúdo e expanda sua rede de forma profissional.",
  keywords: ["discord", "comunidade", "divulgação", "networking", "marketing digital", "crescimento", "social media"],
  authors: [{ name: "8M Divulgações" }],
  creator: "8M Divulgações",
  publisher: "8M Divulgações",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/assets/8m_logo.svg",
    shortcut: "/assets/8m_logo.svg",
    apple: "/assets/8m_logo.svg",
  },
  openGraph: {
    title: "8M Divulgações | Comunidade Discord",
    description: "A maior comunidade de divulgação e networking do Discord. Conecte-se com milhares de pessoas, divulgue seu conteúdo e expanda sua rede de forma profissional.",
    url: "https://8mdivulgacoes.com.br",
    siteName: "8M Divulgações",
    images: [
      {
        url: "/assets/banner.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "8M Divulgações | Comunidade Discord",
    description: "A maior comunidade de divulgação e networking do Discord. Conecte-se com milhares de pessoas, divulgue seu conteúdo e expanda sua rede de forma profissional.",
    images: ["/assets/banner.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport = {
  themeColor: "#0066FF",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${poppins.variable} ${dmSans.variable} font-poppins antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
