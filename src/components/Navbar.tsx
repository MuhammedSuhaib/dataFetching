import Link from "next/link";
import styles from "./Navbar.module.css"
const Navbar = () => {
  return (
    <nav  style={{ backgroundColor: "#3b82f6", padding: "16px" , color:"white"}}>
      <div  style={{ display: "flex", justifyContent:"space-between" , fontWeight: "600px", listStyle: "none" ,alignItems:"center"}}  className={styles.flex}>
        <Link href="/">
        <img src="./7.png" alt="Logo " />
        </Link>
      <ul className=" gap-4 text-2xl font-semibold" style={{ display: "flex", gap: "16px", fontSize: "24px", fontWeight: "600px", listStyle: "none" }} >
        <li>
          <Link
            href="/ServerSide"
          >
            Server Side
          </Link>{" "}
        </li>
        <li>
          <Link
            href="/ClientSide"
          >
            Client Side
          </Link>{" "}
        </li>
      </ul>
      </div>
    </nav>
  );
};

export default Navbar;
