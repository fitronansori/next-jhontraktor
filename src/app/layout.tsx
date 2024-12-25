import type { Metadata } from "next";
import { Poppins, Unlock } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Header from "@/components/layouts/Header";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const unlock = Unlock({
  variable: "--font-unlock",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "John Traktor",
  description: "John Traktor by ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={cn("antialiased", poppins.variable, unlock.variable)}>
        <Header />
        {children}
      </body>
    </html>
  );
}
