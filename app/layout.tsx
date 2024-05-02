import { Nunito } from "next/font/google";
import type { Metadata } from "next";

import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import ClientOnly from "./components/ClientOnly";
import  Modal from "./components/modals/Modal";



export const metadata: Metadata = {
  title: "Micasa",
  description: "welcome to mi casa",
};

const font = Nunito({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
          <ClientOnly>
            <Modal actionLabel="Submit" title="Hello World" isOpen />
            <Navbar />
          </ClientOnly>
      {children}
      </body>
    </html>
  );
}
