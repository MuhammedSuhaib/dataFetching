import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col  justify-center items-center bg-slate-300 h-screen">
      <img src="./7.png" alt="Logo " />

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
  );
}
