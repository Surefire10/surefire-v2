import Link from "next/link";

export function LinkCase() {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col items-end gap-2 font-extralight ">
        <Link className="hover:opacity-80 duration-150" href="#about">
          About
        </Link>
        <Link className="hover:opacity-80 duration-150" href="#builds">
          Builds
        </Link>
        <Link className="hover:opacity-80 duration-150" href="#contact">
          Contact
        </Link>
      </div>
    </div>
  );
}
