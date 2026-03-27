import Link from "next/link";
import { Button } from "../ui/button";
import { navLinks } from "@/types";
import Logo from "@/components/shared/Logo";

const NavBar = () => {
  const links: navLinks[] = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ];
  return (
    <div className="flex items-center justify-between border-b ">
      {/* logo */}
      <Logo></Logo>
      <div className="flex items-center gap-5">
        {/* links */}
        <div>
          <ul className="flex items-center gap-5">
            {links.map((link) => (
              <li className="hover:underline" key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        {/* button */}
        <div className="space-x-2">
          <Button variant={"outline"}>
            <Link href={"/register"}>Register</Link>
          </Button>
          <Button>
            <Link href={"/login"}>Login</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
