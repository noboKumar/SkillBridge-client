"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/types";
import Logo from "@/components/shared/Logo";
import UserAvatar from "./UserAvatar";
import { useAuth } from "@/hooks/useAuth";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { useState } from "react";

const NavBar = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { user } = useAuth();

  const links: navLinks[] = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Tutors", href: "/tutors" },
  ];

  if (user) {
    links.push({ label: "Dashboard", href: "/dashboard" });
  }

  return (
    <div className="flex items-center justify-between border-b sticky top-0 z-40 backdrop-blur-md bg-background/50">
      {/* logo */}
      <Link href="/">
        <Logo></Logo>
      </Link>
      <div className="flex items-center gap-5">
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-5">
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
          <div className="space-x-2 border-l pl-5">
            <UserAvatar></UserAvatar>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <button className="p-2 -mr-2 text-slate-600 hover:bg-slate-100 rounded-lg">
                <Menu size={24} />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] px-5">
              <SheetHeader className="text-left mb-6">
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              
              <div className="flex flex-col gap-6">
                <ul className="flex flex-col gap-4">
                  {links.map((link) => {
                    const isActive =
                      link.href === "/"
                        ? pathname === "/"
                        : pathname.startsWith(link.href);

                    return (
                      <li key={link.href}>
                        <Link 
                          href={link.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className={`block py-2 text-lg font-medium transition-colors border-b border-slate-100 ${
                            isActive
                              ? "text-sky-600 font-bold border-sky-100"
                              : "text-slate-600 hover:text-sky-600"
                          }`}
                        >
                          {link.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
                
                <div className="pt-4 border-t border-slate-100">
                  <UserAvatar></UserAvatar>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
