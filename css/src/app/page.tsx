import { Metadata } from "next";
import styles from "./page.module.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home | Data Fetching Demo",
  description: "Compare client-side vs server-side data fetching approaches using CSS in Next.js. Choose between different rendering strategies.",
  openGraph: {
    title: 'Home - Data Fetching Demo',
    description: 'Compare client-side vs server-side data fetching approaches using CSS in Next.js.',
    type: 'website',
    url: 'https://muhammedsuhaib.github.io/dataFetching/css/',
  },
  alternates: {
    canonical: 'https://muhammedsuhaib.github.io/dataFetching/css/',
  },
};

export default function Home() {
  return (
    <main
      className={styles.div}
      style={{ height: "100vh", backgroundColor: "#cbd5e1" }}
    >
      <header>
        <img src="./7.png" alt="Data Fetching Demo Logo" />
      </header>
      <nav aria-label="Main navigation">
        <ul
          className=" gap-4 text-2xl font-semibold"
          style={{
            display: "flex",
            gap: "16px",
            fontSize: "24px",
            fontWeight: "600px",
            listStyle: "none",
          }}
        >
          <li>
            <Link href="/ServerSide">Server Side</Link>
          </li>
          <li>
            <Link href="/ClientSide">Client Side</Link>
          </li>
        </ul>
      </nav>
    </main>
  );
}
