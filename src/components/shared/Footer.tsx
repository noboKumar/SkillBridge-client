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
    <footer className="bg-white border-t border-slate-100 py-12">
      <div className="w-11/12 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-10">
          <div className="max-w-xs">
            <Logo />
            <p className="mt-4 text-sm text-slate-500 leading-relaxed">
              Empowering learners through personalized, expert-led education. Find the perfect tutor and master any subject, anytime.
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-10">
            <div>
              <h4 className="text-sm font-bold text-slate-900 mb-4 uppercase tracking-wider">Platform</h4>
              <nav className="flex flex-col gap-2">
                <Link href="/tutors" className="text-sm text-slate-500 hover:text-blue-600 transition-colors">Find Tutors</Link>
                <Link href="/about" className="text-sm text-slate-500 hover:text-blue-600 transition-colors">How it Works</Link>
                <Link href="/register" className="text-sm text-slate-500 hover:text-blue-600 transition-colors">Become a Tutor</Link>
              </nav>
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900 mb-4 uppercase tracking-wider">Company</h4>
              <nav className="flex flex-col gap-2">
                <Link href="/about" className="text-sm text-slate-500 hover:text-blue-600 transition-colors">About Us</Link>
                <Link href="#" className="text-sm text-slate-500 hover:text-blue-600 transition-colors">Contact</Link>
                <Link href="#" className="text-sm text-slate-500 hover:text-blue-600 transition-colors">FAQ</Link>
              </nav>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-50 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()} SkillBridge. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-sm text-slate-400 hover:text-slate-600 transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-sm text-slate-400 hover:text-slate-600 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
