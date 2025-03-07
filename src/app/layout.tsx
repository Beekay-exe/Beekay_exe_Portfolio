import type { Metadata } from "next";
import { Inter, Calistoga } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import { ThemeProvider } from '@/context/ThemeContext';

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const calistoga = Calistoga({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "Beekay.exe",
  description: "Created by bk with love",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css?family=Share+Tech+Mono" rel="stylesheet" />
      </head>
      <body className={twMerge(
        inter.variable,
        calistoga.variable,
        "font-['Share_Tech_Mono'] bg-black text-white antialiased overflow-x-hidden" 
      )}>
        <ThemeProvider>
          <div className="crt-overlay"></div>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
