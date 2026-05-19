import type { Metadata } from "next";
import { headers } from "next/headers";
import { Josefin_Sans } from "next/font/google";
import { defaultLocale, isLocale } from "@/lib/i18n";
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
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "32x32", type: "image/x-icon" },
    ],
    apple: "/apple-icon.png",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const h = await headers();
  const pathname = h.get("x-pathname") ?? "";
  const first = pathname.split("/").filter(Boolean)[0];
  const lang = isLocale(first) ? first : defaultLocale;
  return (
    <html lang={lang} className={`${josefin.variable} h-full antialiased`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('jane-theme');var m=window.matchMedia&&window.matchMedia('(prefers-color-scheme: dark)').matches;if(t==='dark'||(!t&&m)){document.documentElement.classList.add('dark');}}catch(e){}})();`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-jane-navy">
        {children}
      </body>
    </html>
  );
}
