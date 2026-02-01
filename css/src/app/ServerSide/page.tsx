import { Metadata } from "next";
import styles from "./server.module.css";

interface Book {
  id: number;
  name: string;
  type: string;
  available: boolean;
}

export async function generateMetadata(): Promise<Metadata> {
  const res = await fetch("https://simple-books-api.glitch.me/books");
  const books: Book[] = await res.json();

  return {
    title: `Server-Side Data Fetching | ${books.length} Books Available | Data Fetching Demo`,
    description: `Explore ${books.length} books fetched server-side using Next.js App Router. Compare performance between server and client-side rendering.`,
    openGraph: {
      title: 'Server-Side Data Fetching - Books List',
      description: `Explore ${books.length} books fetched server-side using Next.js App Router.`,
      type: 'website',
      url: 'https://muhammedsuhaib.github.io/dataFetching/css/ServerSide',
    },
    alternates: {
      canonical: 'https://muhammedsuhaib.github.io/dataFetching/css/ServerSide',
    },
  };
}

async function ServerSidePage() {
  const res = await fetch("https://simple-books-api.glitch.me/books");
  const resp: Book[] = await res.json();
  // console.log("Books fetched:", resp);

  return (
    <main
      style={{
        display: "flex",
        color: "black",
        padding: "16px",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f3f4f6",
      }}
    >
      {resp.length > 0 ? (
        <section aria-labelledby="books-heading">
          <h1 id="books-heading" className="sr-only">Book Listings</h1>
          <div className={styles.gridContainer}>
            {resp.map((book) => (
              <article
                key={book.id}
                style={{
                  backgroundColor: "white",
                  borderRadius: "0.5rem",
                  border: "#e5e7eb",
                  padding: "24px",
                }}
              >
                <header>
                  <h2 style={{ fontSize: "18px", fontWeight: "600px" }}>{book.name}</h2>
                </header>
                <dl
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                  }}
                >
                  <div>
                    <dt>Type:</dt>
                    <dd>{book.type}</dd>
                  </div>
                  <div>
                    <dt>Availability:</dt>
                    <dd>
                      <span
                        className={book.available ? "text-green" : "text-red"}
                      >{book.available ? 'Available' : 'Unavailable'}</span>
                    </dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
        </section>
      ) : (
        <div style={{ fontSize: "18px", color: "#4b5563" }}>
          Loading or no books available...
        </div>
      )}
    </main>
  );
}

export default ServerSidePage;
