import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/logo.png",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="container relative flex flex-col h-screen">
            <Navbar />
            <main className="flex-grow pt-16 px-6">
              {children}
            </main>
            <footer className="bg-gray-800 text-white py-4 flex justify-between items-center px-6">
              {/* Espacio para el Logo */}
              <div className="flex-shrink-0">
                <img src="/logo completo.png" alt="Logo" className="h-32" />
              </div>
              {/* Información de Contacto */}
              <div className="flex flex-col">
                <h2 className="text-lg font-bold">Contáctanos:</h2>
                <p>(+57) 304 419 2414</p>
                <p>(+57) 322 418 5190</p>
                <p>info@beaupair.co</p>
              </div>
              {/* Términos y Condiciones */}
              <div className="flex-shrink-0">
                <a href="/terminos-y-condiciones" className="text-sm text-gray-400 hover:text-white">
                  Términos y Condiciones
                </a>
              </div>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
