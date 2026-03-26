import Logo from "@/components/shared/Logo";
import Link from "next/link";

const FOOTER_LINKS = [
  "About",
  "FAQ",
  "Contact",
  "Privacy Policy",
  "Terms of Service",
];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-100 py-8 px-6">
      <div>
        <Logo></Logo>
        <h1>
          Find the perfect tutor to help you master any subject. anytime.
        </h1>
      </div>
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-4">
        {/* Links */}
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          {FOOTER_LINKS.map((label) => (
            <Link
              key={label}
              href={`/${label.toLowerCase().replace(/ /g, "-")}`}
              className="text-xs text-slate-500 hover:text-slate-800 transition-colors"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Copyright */}
        <p className="text-xs text-slate-400">
          © {new Date().getFullYear()} SkillBridge. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
