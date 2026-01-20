import styles from "./server.module.css";
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
    <div
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
        <div className={styles.gridContainer}>
          {resp.map((book) => (
            <div
              key={book.id}
              style={{
                backgroundColor: "white",
                borderRadius: "0.5rem",
                border: "#e5e7eb",
                padding: "24px",
              }}
            >
              <ul
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                  listStyle: "none",
                }}
              >
                <li style={{ fontSize: "18px", fontWeight: "600px" }}>
                  Name: {book.name}
                </li>
                <li>Type: {book.type}</li>
                <li>
                  Available:{" "}
                  <span
                    className={book.available ? "text-green" : "text-red"}
                  >{`${book.available}`}</span>
                </li>
              </ul>
            </div>
          ))}
        </div>
      ) : (
        <div style={{ fontSize: "18px", color: "#4b5563" }}>
          Loading or no books available...
        </div>
      )}
    </div>
  );
}

export default ServerSidePage;
