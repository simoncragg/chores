import type { Metadata } from "next";

import Link from "next/link";
import { PiPottedPlantDuotone } from "react-icons/pi";
import { inter } from "@/app/ui/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chores",
  description: "Simplify your to-do list",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <div className="flex flex-col items-center pt-8 gap-8 max-w-screen-lg mx-auto overflow-x-auto">
          <Link 
            href="/chores"
            className="flex gap-2 justify-center text-xl"
          >
            <PiPottedPlantDuotone className="w-7 h-7" /><h2 className="self-center">CHORES</h2>
          </Link>
        </div>
        {children}
      </body>
    </html>
  );
}
