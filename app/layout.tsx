'use client'
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { useState} from "react";
import {showNav } from "@/app/hook/showNav";
const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [nav,setNav] = useState(false)


  return (
    <html lang="en">

      <body >
      <showNav.Provider value={{nav,setNav}}>
        {children}
      </showNav.Provider>
     </body>
    </html>
  );
}
