import type { Metadata } from "next";
import { Geist, JetBrains_Mono } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { company } from "@/lib/data/company";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.iconpowersolutions.com"),
  title: {
    default: `${company.name} | ${company.tagline}`,
    template: `%s | ${company.shortName}`,
  },
  description: `${company.shortName} designs and manufactures power electronics, electrical and mechanical systems since ${company.established}. ${company.yearsExperience} years experience, ${company.certification}, PAN India and global service support.`,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-white text-brand-navy-900">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
