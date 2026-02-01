import React from "react";

async function ServerSidePage() {
  interface Book {
    id: number;
    name: string;
    type: string;
    available: boolean;
  }

  const res = await fetch("https://simple-books-api.glitch.me/books");
  const resp: Book[] = await res.json();
  // console.log("Books fetched:", resp);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      {resp.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {resp.map((book) => (
            <div
              key={book.id}
              className="bg-white shadow-lg rounded-lg border border-gray-200 p-6 hover:shadow-xl transition duration-300"
            >
              <ul className="space-y-2">
                <li className="text-lg font-semibold">Name: {book.name}</li>
                <li>Type: {book.type}</li>
                <li>
                  Available:{" "}
                  <span
                    className={
                      book.available ? "text-green-600" : "text-red-600"
                    }
                  >{`${book.available}`}</span>
                </li>
              </ul>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-gray-600 text-lg">
          Loading or no books available...
        </div>
      )}
    </div>
  );
}

export default ServerSidePage;
