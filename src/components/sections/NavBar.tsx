import Image from "next/image";
import logo from "../../assets/skillbridge_logo.png";
import Link from "next/link";
import { Button } from "../ui/button";
import { navLinks } from "@/types";

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
      <div className="flex items-center cursor-pointer">
        <Image
          src={logo}
          alt="site-logo"
          height={100}
          width={100}
          loading="eager"
        />
        <div>
          <h1 className="font-bold text-2xl text-shadow-2xs">
            {" "}
            <span className="text-sky-700">Skill</span> Bridge
          </h1>
        </div>
      </div>
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
          <Button variant={"outline"}>Register</Button>
          <Button>Login</Button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
