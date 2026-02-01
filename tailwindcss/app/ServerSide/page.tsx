import { Metadata } from "next";

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
      url: 'https://muhammedsuhaib.github.io/dataFetching/tailwindcss/ServerSide',
    },
    alternates: {
      canonical: 'https://muhammedsuhaib.github.io/dataFetching/tailwindcss/ServerSide',
    },
  };
}

async function ServerSidePage() {
  const res = await fetch("https://simple-books-api.glitch.me/books");
  const resp: Book[] = await res.json();
  // console.log("Books fetched:", resp);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            'itemListElement': resp.map((book, index) => ({
              '@type': 'Book',
              'position': index + 1,
              'name': book.name,
              'bookFormat': book.type,
              'offers': {
                '@type': 'Offer',
                'availability': book.available
                  ? 'https://schema.org/InStock'
                  : 'https://schema.org/OutOfStock'
              }
            }))
          })
        }}
      />
      <main className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
        {resp.length > 0 ? (
          <section aria-labelledby="books-heading">
            <h1 id="books-heading" className="sr-only">Book Listings</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {resp.map((book) => (
                <article
                  key={book.id}
                  className="bg-white shadow-lg rounded-lg border border-gray-200 p-6 hover:shadow-xl transition duration-300"
                >
                  <header>
                    <h2 className="text-lg font-semibold">{book.name}</h2>
                  </header>
                  <dl className="space-y-2">
                    <div>
                      <dt>Type:</dt>
                      <dd>{book.type}</dd>
                    </div>
                    <div>
                      <dt>Availability:</dt>
                      <dd>
                        <span
                          className={
                            book.available ? "text-green-600" : "text-red-600"
                          }
                        >{book.available ? 'Available' : 'Unavailable'}</span>
                      </dd>
                    </div>
                  </dl>
                </article>
              ))}
            </div>
          </section>
        ) : (
          <div className="text-gray-600 text-lg">
            Loading or no books available...
          </div>
        )}
      </main>
    </>
  );
}

export default ServerSidePage;
