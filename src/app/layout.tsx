import type { Metadata } from "next";
import { Playfair, Poppins } from "next/font/google";
import "@/globals.css";
import Background from "@/components/common/background";

const playfair = Playfair({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Aprycot Food",
  description: "Delivery food app",
};

export default function RootLayout({
  children,
  header,
  sidebar,
}: Readonly<{
  header: React.ReactNode;
  sidebar: React.ReactNode;
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="./icons/favicon.svg" />
      </head>
      <body className={`${poppins.variable} ${playfair.variable}`}>
        <div id="root">
          {sidebar}
          <main>
            {header}
            {children}
            <Background />
          </main>
        </div>
      </body>
    </html>
  );
}
