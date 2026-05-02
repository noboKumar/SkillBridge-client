"use client";

import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import DashboardSidebar, { SidebarContent } from "@/components/shared/DashboardSidebar";
import UserAvatar from "@/components/shared/UserAvatar";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, isLoading } = useAuth();
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (!isLoading && !user) {
      router.push("/login");
    }
  }, [user, isLoading, router]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!user) return null;

  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* Sidebar */}
      <DashboardSidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Header */}
        <header className="bg-white border-b h-16 flex items-center justify-between px-4 sm:px-6 sticky top-0 z-10">
          <div className="md:hidden flex items-center gap-3">
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <button className="p-2 -ml-2 text-slate-600 hover:bg-slate-100 rounded-lg">
                  <Menu size={24} />
                </button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[280px] p-0">
                <div className="flex flex-col h-full bg-white">
                  <SidebarContent onLinkClick={() => setMobileMenuOpen(false)} />
                </div>
              </SheetContent>
            </Sheet>
            <span className="font-bold text-lg text-slate-800">SkillBridge</span>
          </div>
          <div className="flex-1"></div>
          <div className="flex items-center gap-4">
            <span className="hidden sm:block text-sm font-medium text-slate-600">
              {user.name} ({user.role})
            </span>
            <UserAvatar />
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6 md:p-8 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
