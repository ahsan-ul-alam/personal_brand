import { Poppins } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata = {
  title: {
    default: "Ahsan Alam | Full Stack Web Developer",
    template: "%s | Ahsan Alam",
  },
  description:
    "I build modern, scalable, and high-performance websites and web applications using React, Next.js, PHP, and Laravel.",

  metadataBase: new URL("https://ahsanalam.online"),

  keywords: [
    "Ahsan Alam",
    "Ahsan Ul Alam",
    "Ahsan Alam Developer",
    "Ahsan Alam Portfolio",
    "Learn With Ahsan",
    "Freelance Web Developer Bangladesh",

    "Full Stack Developer",
    "Full Stack Web Developer Bangladesh",
    "Professional Web Developer",
    "Freelance Web Developer",
    "Remote Full Stack Developer",

    "Laravel Developer",
    "Laravel Expert Developer",
    "PHP Developer",
    "PHP Backend Developer",
    "Next.js Developer",
    "Next.js Portfolio Developer",
    "React Developer",
    "React Frontend Developer",

    "Web Developer Dhaka",
    "Bangladesh Web Developer",
    "Hire Web Developer Bangladesh",

    "REST API Developer",
    "MySQL Database Developer",
    "Scalable Web Application Developer",
    "High Performance Website Developer",
    "Secure Web Application Developer",

    "Ecommerce Developer",
    "Ecommerce Website Developer",
    "Custom Web Application Developer",
    "ERP Developer",
    "CRM Developer",
    "SaaS Application Developer",

    "Portfolio Website Developer",
    "Modern Web Developer",
    "AI Web Developer",
  ],

  authors: [{ name: "Ahsan Alam", url: "https://ahsanalam.online" }],
  creator: "Ahsan Alam",
  publisher: "Ahsan Alam",

  alternates: {
    canonical: "https://ahsanalam.online",
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

  openGraph: {
    title: "Ahsan Alam | Full Stack Web Developer",
    description:
      "I build modern, scalable, and high-performance websites and web applications.",
    url: "https://ahsanalam.online",
    siteName: "Ahsan Alam Portfolio",
    images: [
      {
        url: "/ahsan_alam.jpg",
        width: 1200,
        height: 630,
        alt: "Ahsan Alam Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Ahsan Alam | Full Stack Developer",
    description:
      "Full Stack Developer specializing in React, Next.js & Laravel.",
    images: ["/ahsan_alam.jpg"],
  },

  category: "technology",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-HSRCWVX5C7"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-HSRCWVX5C7');
          `}
        </Script>
      </head>

      <body className={`${poppins.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
