"use client";

import { useAuth } from "@/hooks/useAuth";
import { useEffect, useState } from "react";
import { axiosInstance } from "@/lib/axios";
import { Ban, CheckCircle } from "lucide-react";
import { toast } from "sonner";
import { User } from "@/types";

export default function AdminUsersPage() {
  const { user } = useAuth();
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchUsers = async () => {
    try {
      const res = await axiosInstance.get("/admin/users");
      setUsers(res.data.data);
    } catch (error) {
      toast.error("Failed to fetch users");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleToggleStatus = async (userId: string, currentStatus: string) => {
    try {
      const newStatus = currentStatus === "ACTIVE" ? "BANNED" : "ACTIVE";
      await axiosInstance.patch(`/admin/users/${userId}`, { status: newStatus });
      toast.success(`User marked as ${newStatus}`);
      fetchUsers();
    } catch (error) {
      toast.error("Failed to update status");
    }
  };

  if (user?.role !== "ADMIN") return null;

  return (
    <div className="space-y-6 bg-white p-6 rounded-2xl shadow-sm border border-slate-100 min-h-[70vh]">
      <div className="flex justify-between items-center mb-6 border-b pb-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Manage Users</h2>
          <p className="text-slate-500 text-sm mt-1">View and manage all registered users.</p>
        </div>
      </div>

      {isLoading ? (
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-slate-600">
            <thead className="bg-slate-50 border-b">
              <tr>
                {["Name", "Email", "Role", "Status", "Actions"].map((i) => (
                  <th key={i} className="px-4 py-3">
                    <div className="h-4 bg-slate-200 rounded animate-pulse w-20"></div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4, 5].map((i) => (
                <tr key={i} className="border-b">
                  <td className="px-4 py-4"><div className="h-4 bg-slate-200 rounded animate-pulse w-32"></div></td>
                  <td className="px-4 py-4"><div className="h-4 bg-slate-200 rounded animate-pulse w-40"></div></td>
                  <td className="px-4 py-4"><div className="h-6 bg-slate-200 rounded animate-pulse w-16"></div></td>
                  <td className="px-4 py-4"><div className="h-6 bg-slate-200 rounded animate-pulse w-16"></div></td>
                  <td className="px-4 py-4 text-right"><div className="h-8 bg-slate-200 rounded-md animate-pulse w-20 ml-auto"></div></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-slate-600">
            <thead className="bg-slate-50 text-slate-700 font-semibold border-b">
              <tr>
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Email</th>
                <th className="px-4 py-3">Role</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((u: any) => (
                <tr key={u.id} className="border-b hover:bg-slate-50 transition-colors">
                  <td className="px-4 py-4 font-medium text-slate-800">{u.name}</td>
                  <td className="px-4 py-4">{u.email}</td>
                  <td className="px-4 py-4">
                    <span className="bg-slate-100 px-2 py-1 rounded text-xs font-semibold">
                      {u.role}
                    </span>
                  </td>
                  <td className="px-4 py-4">
                    <span className={`px-2 py-1 rounded text-xs font-semibold ${u.status === 'ACTIVE' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                      {u.status}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-right">
                    <button
                      onClick={() => handleToggleStatus(u.id, u.status)}
                      disabled={u.role === "ADMIN"}
                      className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium rounded-md border disabled:opacity-50 disabled:cursor-not-allowed hover:bg-slate-50"
                    >
                      {u.status === "ACTIVE" ? (
                        <><Ban size={14} className="text-red-500" /> Ban</>
                      ) : (
                        <><CheckCircle size={14} className="text-green-500" /> Unban</>
                      )}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
