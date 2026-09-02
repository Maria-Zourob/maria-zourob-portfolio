import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import Providers from "@/components/Providers";
import "./globals.css";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Maria Zourob — Full Stack Developer",
  description:
    "Full Stack Developer with hands-on experience building web applications using ASP.NET Core, C#, SQL Server, REST APIs, and modern frontend technologies.",
  openGraph: {
    title: "Maria Zourob — Full Stack Developer",
    description:
      "Full Stack Developer with hands-on experience building web applications using ASP.NET Core, C#, SQL Server, REST APIs, and modern frontend technologies.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body className="bg-paper text-ink font-body antialiased">
        <Providers>{children}</Providers>
        {/* Bootstrap JS bundle is loaded only for the video/lightbox modal's
            accessible focus-trap + Escape-key behavior. Bootstrap's CSS is
            intentionally NOT imported globally to avoid conflicting with
            Tailwind — modal styling lives in components/ui/video-modal.css. */}
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
