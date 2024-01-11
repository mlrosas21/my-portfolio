"use client"

import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import { ThemeProvider } from "@/theme/ThemeProvider";

const lato = Lato({ weight: "400", subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Martín Rosas | Web Developer",
//   description: "Martín Rosas' personal portfolio",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={lato.className} suppressHydrationWarning>
        <ThemeProvider>
          <NavBar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
