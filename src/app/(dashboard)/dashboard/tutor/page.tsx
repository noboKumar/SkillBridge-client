"use client";

import { useAuth } from "@/hooks/useAuth";
import { BookOpen, UserCheck, CalendarDays } from "lucide-react";
import Link from "next/link";

export default function TutorDashboardPage() {
  const { user } = useAuth();

  if (user?.role !== "TUTOR") return null;

  const quickActions = [
    { title: "My Sessions", desc: "View your upcoming and past teaching sessions", href: "/dashboard/tutor/sessions", icon: BookOpen, color: "text-blue-600", bg: "bg-blue-50" },
    { title: "Manage Availability", desc: "Set your working hours and available slots", href: "/dashboard/tutor/availability", icon: CalendarDays, color: "text-purple-600", bg: "bg-purple-50" },
    { title: "Update Profile", desc: "Manage your tutor profile, bio, and hourly rate", href: "/dashboard/tutor/profile", icon: UserCheck, color: "text-green-600", bg: "bg-green-50" },
  ];

  return (
    <div className="space-y-6">
      <div className="mb-8 bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
        <h1 className="text-3xl font-bold text-slate-800">Welcome, {user.name}!</h1>
        <p className="text-slate-600 mt-2 text-lg">Manage your tutoring business here.</p>
      </div>

      <h2 className="text-xl font-bold text-slate-800 mb-4">Quick Actions</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {quickActions.map((action, index) => {
          const Icon = action.icon;
          return (
            <Link key={index} href={action.href}>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow flex flex-col h-full gap-4">
                <div className={`p-4 rounded-xl w-max ${action.bg} ${action.color}`}>
                  <Icon size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-1">{action.title}</h3>
                  <p className="text-sm text-slate-500">{action.desc}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
