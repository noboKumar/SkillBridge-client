"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/types";
import Logo from "@/components/shared/Logo";
import UserAvatar from "./UserAvatar";

const NavBar = () => {
  const pathname = usePathname();

  const links: navLinks[] = [
    { label: "Home", href: "/" },
    { label: "Tutors", href: "/tutors" },
    { label: "Dashboard", href: "/dashboard" },
  ];

  return (
    <div className="flex items-center justify-between border-b sticky top-0 z-40 backdrop-blur-md bg-background/80">
      {/* logo */}
      <Link href="/">
        <Logo></Logo>
      </Link>
      <div className="flex items-center gap-5">
        {/* links */}  
        <div>
          <ul className="flex items-center gap-5">
            {links.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              return (
                <li
                  key={link.href}
                  className={`font-medium transition-colors ${
                    isActive
                      ? "text-sky-600 font-bold"
                      : "text-slate-600 hover:text-sky-600"
                  }`}
                >
                  <Link href={link.href}>{link.label}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        {/* button */}
        <div className="space-x-2">
          <UserAvatar></UserAvatar>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
