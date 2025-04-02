import type { Metadata } from "next";
import "./globals.css";
import opengraph from "../../public/images/meta/opengraph.png";
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
        url: opengraph.src,
        width: opengraph.width,
        height: opengraph.height,
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
