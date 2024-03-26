import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header
      id="Header"
      className="top-0 left-0 h-16 bg-white hidden md:flex justify-center z-auto"
    >
      <div
        id="HeaderContent"
        className="relative w-full max-w-screen-xl flex items-center justify-center px-4 lg:px-12"
      >
        <Image
          src="/logo.svg"
          alt="Reserving"
          width={131}
          height={21}
          priority
          className="absolute left-4 lg:left-12"
        />
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
