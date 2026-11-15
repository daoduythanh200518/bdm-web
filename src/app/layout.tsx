import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingCTA from "@/components/layout/FloatingCTA";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { Toaster } from "sonner";
import { SITE } from "@/config/site";
import JsonLd from "@/components/seo/JsonLd";
import { organizationJsonLd } from "@/lib/seo";

const beVietnam = Be_Vietnam_Pro({
  variable: "--font-be-vietnam",
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin", "vietnamese"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | ${SITE.tagline}`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  // Mặc định cho trang không tự khai báo; mỗi trang dùng buildPageMetadata() để có og:url/canonical riêng
  openGraph: {
    title: `${SITE.name} | ${SITE.tagline}`,
    description: SITE.description,
    siteName: SITE.name,
    locale: "vi_VN",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: SITE.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} | ${SITE.tagline}`,
    description: SITE.description,
    images: ["/og-image.jpg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="vi" className={`${beVietnam.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col bg-[var(--background)] text-[var(--foreground)]">
        <JsonLd data={organizationJsonLd()} />
        <ThemeProvider>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[200] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-[var(--primary)] focus:text-white focus:shadow-xl"
          >
            Bỏ qua đến nội dung
          </a>
          <Header />
          <main id="main-content" className="flex-1">{children}</main>
          <Footer />
          <FloatingCTA />
          <Toaster
            position="top-right"
            richColors
            closeButton
            toastOptions={{
              className: "!rounded-xl !font-medium",
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
