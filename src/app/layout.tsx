import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import { Pirata_One } from "next/font/google";  
import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const pirataOne = Pirata_One({
  weight: '400', // Pirata One typically only comes in regular weight
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Hi I'm Prateek",
  description: "You are welcome to my portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${pirataOne.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
