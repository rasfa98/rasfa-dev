import Link from "next/link";
import ThemeToggle from "./theme-toggle";

const Header = () => {
  return (
    <header className="flex items-center justify-between gap-10 py-10">
      <div className="font-bold text-3xl">
        <Link href="/">Rasfa.dev</Link>
      </div>

      <div className="flex gap-x-10 items-center">
        <Link href="/blog">Blog</Link>
        <Link href="/about">About</Link>
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;
