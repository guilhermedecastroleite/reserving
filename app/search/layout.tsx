import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Header from "@/app/ui/Header";
import Footer from "@/app/ui/Footer";
import HeaderMobile from "../ui/HeaderMobile";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Reserving",
  description:
    "A reserving website made for study, based loosely on Booking.com",
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
        <div
          id="HeaderBackground"
          className="absolute w-full h-52 top-0 left-0 background"
          style={{
            background: "linear-gradient(180deg, #2969BF 0%, #144E9D 100%)",
          }}
        />
        <Header className="text-white" />
        <HeaderMobile className="text-white" />
        {children}
        <Footer />
      </body>
    </html>
  );
}
