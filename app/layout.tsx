import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/app/ui/Header";
import Footer from "@/app/ui/Footer";
import HeaderMobile from "./ui/HeaderMobile";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Reserving App",
  description: "Generated by create next app",
};

/*
  Design Reference
  https://www.figma.com/community/file/1219890698200192960/traveler-and-booking-ui-kits
*/

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} antialiased h-full`}>
        <Header />
        <HeaderMobile />
        {children}
        <Footer />
      </body>
    </html>
  );
}
