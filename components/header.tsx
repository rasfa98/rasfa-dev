import Link from "next/link";

const Header = () => {
  return (
    <header className="flex items-center justify-between py-10">
      <div className="font-bold text-3xl">
        <Link href="/">
          <span className="cursor-pointer">Rasfa.dev</span>
        </Link>
      </div>

      <div className="flex gap-x-10">
        <Link href="/blog">Blog</Link>
        <Link href="/about">About</Link>
      </div>
    </header>
  );
};

export default Header;
