import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import "./globals.css";

const josefin = Josefin_Sans({
  variable: "--font-josefin",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.jane.nl"),
  title: {
    default: "Jane® — Ontdek identiteit en bestemming",
    template: "%s | Jane®",
  },
  description:
    "De Jane® Talenten Methodiek biedt een betrouwbare manier om tot de kern te komen van jouw unieke identiteit op basis van talent.",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className={`${josefin.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-jane-navy">
        {children}
      </body>
    </html>
  );
}
