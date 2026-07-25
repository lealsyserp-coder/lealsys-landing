import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lealsys.com"),
  title: {
    default: "Lealsys — ERP y software contable en la nube para empresas",
    template: "%s | Lealsys",
  },
  description:
    "ERP y sistema contable en la nube para empresas en crecimiento. Facturación, inventario, cuentas por cobrar, conciliación bancaria, contabilidad automática y reportes financieros en tiempo real. Multi-empresa, multi-moneda. Solicitá tu demo gratis.",
  keywords: [
    "ERP en la nube",
    "software contable en la nube",
    "sistema ERP para PYMEs",
    "facturación electrónica",
    "contabilidad automática",
    "software de gestión empresarial",
    "ERP multi-empresa",
    "sistema de inventario",
    "cuentas por cobrar y pagar",
    "alternativa a SAP Business One",
    "alternativa a QuickBooks",
    "alternativa a Odoo",
    "alternativa a Alegra",
    "alternativa a Mónica",
    "ERP Latinoamérica",
    "Lealsys",
  ],
  authors: [{ name: "Lealsys" }],
  creator: "Lealsys",
  publisher: "Lealsys",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Lealsys — ERP y software contable en la nube para empresas",
    description:
      "Facturación, inventario, cartera, contabilidad automática y reportes financieros en un solo sistema. Multi-empresa, multi-moneda, en la nube.",
    url: "https://lealsys.com",
    siteName: "Lealsys",
    locale: "es",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lealsys — ERP y software contable en la nube",
    description:
      "Facturación, inventario, cartera y contabilidad automática en un solo sistema.",
  },
  verification: {
    google: "jhYEb0xzEV-pQOFyI8Nac0nja0DWnTuYk2LLgD_P8RU",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://lealsys.com/#org",
      name: "Lealsys",
      url: "https://lealsys.com",
      logo: "https://lealsys.com/lealsys-icon.png",
      contactPoint: [{
        "@type": "ContactPoint",
        contactType: "sales",
        email: "info@lealsys.com",
        telephone: "+504-3223-5185",
        availableLanguage: ["Spanish", "English"],
      }],
    },
    {
      "@type": "SoftwareApplication",
      name: "Lealsys ERP",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      offers: {
        "@type": "Offer",
        priceCurrency: "HNL",
        price: "500",
        priceValidUntil: "2027-12-31",
      },
      description:
        "ERP y sistema contable en la nube para empresas en crecimiento. Facturación, inventario, cartera, contabilidad automática y reportes financieros. Multi-empresa y multi-moneda.",
      url: "https://lealsys.com",
      publisher: { "@id": "https://lealsys.com/#org" },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-slate-900">
        <Script
          id="ld-json-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
