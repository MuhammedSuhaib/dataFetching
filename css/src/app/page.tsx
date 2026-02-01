import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div
      className={styles.div}
      style={{ height: "100vh", backgroundColor: "#cbd5e1" }}
    >
      <img src="./../../../public/7.png" alt="Logo " />
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
          <Link href="/ServerSide">Server Side</Link>{" "}
        </li>
        <li>
          <Link href="/ClientSide">Client Side</Link>{" "}
        </li>
      </ul>
    </div>
  );
}
