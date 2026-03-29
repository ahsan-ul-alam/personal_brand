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

  alternates: {
    canonical: "https://ahsanalam.online",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-G9MKCPLRQM"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-G9MKCPLRQM');
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
