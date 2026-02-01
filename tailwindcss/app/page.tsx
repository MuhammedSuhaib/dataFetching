import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home | Data Fetching Demo",
  description: "Compare client-side vs server-side data fetching approaches using Tailwind CSS in Next.js. Choose between different rendering strategies.",
  openGraph: {
    title: 'Home - Data Fetching Demo',
    description: 'Compare client-side vs server-side data fetching approaches using Tailwind CSS in Next.js.',
    type: 'website',
    url: 'https://muhammedsuhaib.github.io/dataFetching/tailwindcss/',
  },
  alternates: {
    canonical: 'https://muhammedsuhaib.github.io/dataFetching/tailwindcss/',
  },
};

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center bg-slate-300 h-screen">
      <header>
        <img src="./7.png" alt="Data Fetching Demo Logo" />
      </header>

      <nav aria-label="Main navigation">
        <ul className="flex gap-4 text-2xl font-semibold">
          <li>
            <Link
              href="/ServerSide"
              className="active:text-black focus:text-black visited:text-[#354f77]"
            >
              Server Side
            </Link>
          </li>
          <li>
            <Link
              href="/ClientSide"
              className="active:text-black focus:text-black visited:text-[#354f77]"
            >
              Client Side
            </Link>
          </li>
        </ul>
      </nav>
    </main>
  );
}
