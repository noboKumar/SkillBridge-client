"use client";

import { useAuth } from "@/hooks/useAuth";
import { useEffect, useState } from "react";
import { axiosInstance } from "@/lib/axios";
import { Users, BookOpen, UserCheck, Tag } from "lucide-react";

export default function AdminDashboardPage() {
  const { user } = useAuth();
  const [stats, setStats] = useState({
    users: 0,
    bookings: 0,
    categories: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [usersRes, bookingsRes, categoriesRes] = await Promise.all([
          axiosInstance.get("/admin/users"),
          axiosInstance.get("/bookings"),
          axiosInstance.get("/categories"),
        ]);
        
        setStats({
          users: usersRes.data.data.length || 0,
          bookings: bookingsRes.data.data.length || 0,
          categories: categoriesRes.data.data.length || 0,
        });
      } catch (error) {
        console.error("Failed to fetch admin stats", error);
      }
    };
    
    fetchStats();
  }, []);

  if (user?.role !== "ADMIN") {
    return <div className="p-6">Unauthorized access.</div>;
  }

  const statCards = [
    { title: "Total Users", value: stats.users, icon: Users, color: "text-blue-600", bg: "bg-blue-50" },
    { title: "Total Bookings", value: stats.bookings, icon: BookOpen, color: "text-green-600", bg: "bg-green-50" },
    { title: "Categories", value: stats.categories, icon: Tag, color: "text-purple-600", bg: "bg-purple-50" },
  ];

  return (
    <div className="space-y-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-800">Admin Dashboard</h1>
        <p className="text-slate-600 mt-2">Welcome back, {user.name}. Here's an overview of the platform.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {statCards.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4">
              <div className={`p-4 rounded-xl ${stat.bg} ${stat.color}`}>
                <Icon size={24} />
              </div>
              <div>
                <p className="text-sm font-medium text-slate-500">{stat.title}</p>
                <h3 className="text-2xl font-bold text-slate-800">{stat.value}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
