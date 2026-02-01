import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "../components/Navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    default: "Data Fetching Demo | Compare CSS vs Tailwind Approaches",
    template: "%s | Data Fetching Demo"
  },
  description: "Compare client-side vs server-side data fetching approaches using CSS and Tailwind CSS in Next.js. Explore different rendering strategies and performance optimizations.",
  keywords: ['Next.js', 'Data Fetching', 'Client-Side', 'Server-Side', 'CSS', 'Tailwind CSS', 'React'],
  authors: [{ name: "Data Fetching Demo" }],
  creator: "Next.js App Router",
  publisher: "Next.js",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://muhammedsuhaib.github.io/dataFetching/tailwindcss/',
    title: 'Data Fetching Demo - Tailwind CSS Version',
    description: 'Compare client-side vs server-side data fetching approaches using Tailwind CSS in Next.js.',
    siteName: 'Data Fetching Demo',
    images: [
      {
        url: '/7.png',
        width: 800,
        height: 600,
        alt: 'Data Fetching Demo Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Data Fetching Demo - Tailwind CSS Version',
    description: 'Compare client-side vs server-side data fetching approaches using Tailwind CSS in Next.js.',
    images: ['/7.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
