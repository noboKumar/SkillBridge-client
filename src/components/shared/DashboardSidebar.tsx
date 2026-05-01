"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";
import { 
  LayoutDashboard, 
  BookOpen, 
  User, 
  Calendar, 
  Users, 
  Tags,
  LogOut
} from "lucide-react";
import Logo from "./Logo";
import { useLogout } from "@/hooks/useLogOut";

const DashboardSidebar = () => {
  const pathname = usePathname();
  const { user } = useAuth();
  const logout = useLogout();

  const getLinks = () => {
    if (!user) return [];

    switch (user.role) {
      case "STUDENT":
        return [
          { href: "/dashboard/student", label: "Overview", icon: LayoutDashboard },
          { href: "/dashboard/student/bookings", label: "My Bookings", icon: BookOpen },
          { href: "/dashboard/student/profile", label: "My Profile", icon: User },
        ];
      case "TUTOR":
        return [
          { href: "/dashboard/tutor", label: "Overview", icon: LayoutDashboard },
          { href: "/dashboard/tutor/sessions", label: "My Sessions", icon: BookOpen },
          { href: "/dashboard/tutor/availability", label: "Availability", icon: Calendar },
          { href: "/dashboard/tutor/profile", label: "Tutor Profile", icon: User },
        ];
      case "ADMIN":
        return [
          { href: "/dashboard/admin", label: "Overview", icon: LayoutDashboard },
          { href: "/dashboard/admin/users", label: "Manage Users", icon: Users },
          { href: "/dashboard/admin/bookings", label: "All Bookings", icon: BookOpen },
          { href: "/dashboard/admin/categories", label: "Categories", icon: Tags },
        ];
      default:
        return [];
    }
  };

  const links = getLinks();

  return (
    <div className="w-64 bg-white border-r min-h-screen flex flex-col hidden md:flex sticky top-0 h-screen overflow-y-auto">
      <div className="p-6 border-b">
        <Link href="/">
          <Logo />
        </Link>
      </div>

      <div className="flex-1 py-6 px-4 space-y-2">
        {links.map((link) => {
          const isActive = pathname === link.href || pathname.startsWith(`${link.href}/`);
          const Icon = link.icon;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                isActive
                  ? "bg-blue-50 text-blue-600 font-medium"
                  : "text-slate-600 hover:bg-slate-50"
              }`}
            >
              <Icon size={20} />
              <span>{link.label}</span>
            </Link>
          );
        })}
      </div>

      <div className="p-4 border-t">
        <button
          onClick={() => logout()}
          className="flex w-full items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-xl transition-colors font-medium"
        >
          <LogOut size={20} />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default DashboardSidebar;
