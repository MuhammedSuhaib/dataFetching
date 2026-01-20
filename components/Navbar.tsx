import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-blue-500 md:p-4 text-white">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <Link href="/">
        <img src="./7.png" alt="Logo " />
        </Link>
        <ul className="flex gap-4 text-2xl font-semibold">
          <li>
            <Link
              href="/ServerSide"
              className="active:text-black focus:text-black visited:text-[#354f77] "
            >
              Server Side
            </Link>{" "}
          </li>
          <li>
            <Link
              href="/ClientSide"
              className="active:text-black focus:text-black visited:text-[#354f77] "
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
