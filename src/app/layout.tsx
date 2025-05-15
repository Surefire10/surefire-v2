import type { Metadata } from "next";
import "./globals.css";
import { Header } from "./components/ui/header";
import { Gradient } from "./components/ui/gradient";

export const metadata: Metadata = {
  title: "Yara Khairat | Web-centric Software Developer",
  description:
    "Check out my work and do reach out—I'm always up for new challenges!",
  openGraph: {
    title: "Yara Khairat | Web-centric Software Developer",
    description:
      "Check out my work and do reach out—I'm always up for new challenges!",
    type: "website",
    locale: "en_US",
    siteName: "Yara's website ;(",
    images: [
      {
        url: "https://surefire10.github.io/surefire-v2/images/meta/opengraph.png",
        width: 1200,
        height: 630,
        alt: "Yara's website ;(",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="apple-mobile-web-app-title" content="Surefire10" />
      </head>
      <body className="font-manrope relative">
        <Gradient className="bg-gradient-to-tr" />
        <Gradient className="bg-gradient-to-bl" />
        <div className="flex items-center">
          <Header />
        </div>
        {children}
      </body>
    </html>
  );
}
