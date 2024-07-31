import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gerenciador de Contratos",
  description: "Gerenciador de contratos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <header className="header">
          <div className="header__logo">
            <Image src="/favicon.ico" alt="icone da empresa" width={30} height={30} />
            <h1> Empresa eXemplo </h1>
          </div>
          <div className="nav_bar">
            <Link href="/">Dashboard</Link>
            <Link href="/">Contratos</Link>
            <Link href="/">Empresas</Link>
          </div>
        </header>
        {children}
        </body>
    </html>
  );
}
