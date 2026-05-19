import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ChatBubble } from "@/components/ChatBubble";
import { CookieBanner } from "@/components/CookieBanner";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { isLocale, locales, type Locale } from "@/lib/i18n";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const safeLocale: Locale = locale;
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <>
      <Header locale={safeLocale} />
      <main className="flex-1">{children}</main>
      <Footer locale={safeLocale} />
      <ChatBubble locale={safeLocale} />
      <CookieBanner locale={safeLocale} />
      <GoogleAnalytics gaId={gaId} />
    </>
  );
}
