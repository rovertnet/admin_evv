"use client"
import { Inter, Karla } from "next/font/google";
import "./globals.css";
import SideBar from "@/components/SideBar";
import Header from "@/components/Header";
import PageWrapper from "@/components/PageWrapper";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

const karla = Karla({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-karla"
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [toggleCollaps, setToggleCollaps] = useState(false)

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex min-h-screen">
          <SideBar toggleCollaps={toggleCollaps}></SideBar>
          <Header toggleCollaps={toggleCollaps} setToggleCollaps={setToggleCollaps}></Header>
          <PageWrapper>{children}</PageWrapper>
        </div>
      </body>
    </html>
  );
}
