import type { Metadata } from "next";
import "./globals.css";
import { Inter, IBM_Plex_Sans_Arabic } from "next/font/google";

// Inter with a CSS variable
const inter = Inter({ 
  subsets: ["latin"], 
  variable: '--font-inter' 
});

// Arabic font 
const ibmPlexArabic = IBM_Plex_Sans_Arabic({ 
  weight: ['300', '400', '700'],
  subsets: ["arabic"],
  variable: '--font-arabic'
});
//Metadata
export const metadata: Metadata = {
  title: "Astrah OS | Technical Execution",
  description: "Senior-level execution for the next era of business.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
 
    <html lang="en" className={`${inter.variable} ${ibmPlexArabic.variable}`}>
      <body className={`bg-black text-white antialiased font-sans rtl:font-arabic`}>
        {children}
      </body>
    </html>
  );
}