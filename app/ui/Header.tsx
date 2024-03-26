import clsx from "clsx";
import Link from "next/link";

interface HeaderProps {
  className?: string;
}

const Header = ({ className }: HeaderProps) => {
  return (
    <header
      id="Header"
      className={clsx(
        "top-0 left-0 h-16 bg-white hidden md:flex justify-center z-auto",
        className
      )}
    >
      <div
        id="HeaderContent"
        className="relative w-full max-w-screen-xl flex items-center justify-center px-4 lg:px-12"
      >
        <div className="font-semibold text-xl left-4 lg:left-12 absolute">
          Reserving
        </div>
        <ul id="HeaderNavigation" className="flex gap-8 lg:gap-12">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/search">Discover</Link>
          </li>
          <li>
            <Link href="/">Activities</Link>
          </li>
          <li>
            <Link href="/">About</Link>
          </li>
          <li>
            <Link href="/">Contact</Link>
          </li>
        </ul>
        <div className="absolute right-4 lg:right-12">Login</div>
      </div>
    </header>
  );
};

export default Header;
