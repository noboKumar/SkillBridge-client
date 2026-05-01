"use client";

import { useAuth } from "@/hooks/useAuth";
import { User as UserIcon, Mail } from "lucide-react";

export default function StudentProfilePage() {
  const { user } = useAuth();

  if (user?.role !== "STUDENT") return null;

  return (
    <div className="space-y-6">
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold text-slate-800 mb-6 border-b pb-4">My Profile</h2>
        
        <div className="space-y-6">
          <div className="flex items-center gap-6">
            <div className="w-24 h-24 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-3xl font-bold">
              {user.name.charAt(0).toUpperCase()}
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-800">{user.name}</h3>
              <p className="text-slate-500">{user.role}</p>
            </div>
          </div>

          <div className="space-y-4 pt-6 border-t">
            <div className="flex items-center gap-3 text-slate-700">
              <UserIcon size={20} className="text-slate-400" />
              <span className="font-medium">Name:</span>
              <span>{user.name}</span>
            </div>
            <div className="flex items-center gap-3 text-slate-700">
              <Mail size={20} className="text-slate-400" />
              <span className="font-medium">Email:</span>
              <span>{user.email}</span>
            </div>
          </div>
          
          <div className="pt-6">
            <p className="text-sm text-slate-500 italic">Profile editing features coming soon.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
