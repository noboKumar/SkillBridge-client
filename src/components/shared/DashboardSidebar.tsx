"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";
import { useQueryClient } from "@tanstack/react-query";
import {
  LayoutDashboard,
  BookOpen,
  User,
  Calendar,
  Users,
  Tags,
  LogOut,
} from "lucide-react";
import Logo from "./Logo";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export const SidebarContent = ({ onLinkClick }: { onLinkClick?: () => void }) => {
  const pathname = usePathname();
  const { user } = useAuth();
  const queryClient = useQueryClient();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    queryClient.clear();
    window.location.href = "/login";
  };

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
    <>
      <div className="p-6 border-b">
        <Link href="/">
          <Logo />
        </Link>
      </div>

      {/* User info */}
      {user && (
        <div className="px-6 py-4 border-b bg-slate-50">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-sm shrink-0">
              {user.name?.charAt(0).toUpperCase()}
            </div>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-slate-800 truncate">{user.name}</p>
              <p className="text-xs text-slate-400 truncate">{user.role}</p>
            </div>
          </div>
        </div>
      )}

      <div className="flex-1 py-6 px-4 space-y-2">
        {links.map((link) => {
          const isActive = pathname === link.href || pathname.startsWith(`${link.href}/`);
          const Icon = link.icon;
          return (
            <Link
              key={link.href}
              href={link.href}
              onClick={onLinkClick}
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
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <button className="flex w-full items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-xl transition-colors font-medium">
              <LogOut size={20} />
              <span>Logout</span>
            </button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Log out of SkillBridge?</AlertDialogTitle>
              <AlertDialogDescription>
                You will be signed out of your account and redirected to the login page.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Stay Logged In</AlertDialogCancel>
              <AlertDialogAction
                onClick={handleLogout}
                className="bg-red-600 hover:bg-red-700 text-white"
              >
                Yes, Log Out
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </>
  );
};

const DashboardSidebar = () => {
  return (
    <div className="w-64 bg-white border-r min-h-screen flex flex-col hidden md:flex sticky top-0 h-screen overflow-y-auto">
      <SidebarContent />
    </div>
  );
};

export default DashboardSidebar;
