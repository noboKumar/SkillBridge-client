"use client";

import { useAuth } from "@/hooks/useAuth";
import { useEffect, useState } from "react";
import { axiosInstance } from "@/lib/axios";
import { toast } from "sonner";

export default function TutorSessionsPage() {
  const { user } = useAuth();
  const [bookings, setBookings] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchBookings = async () => {
    try {
      const res = await axiosInstance.get("/bookings");
      setBookings(res.data.data);
    } catch (error) {
      toast.error("Failed to fetch sessions");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  if (user?.role !== "TUTOR") return null;

  return (
    <div className="space-y-6 bg-white p-6 rounded-2xl shadow-sm border border-slate-100 min-h-[70vh]">
      <div className="flex justify-between items-center mb-6 border-b pb-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">My Teaching Sessions</h2>
          <p className="text-slate-500 text-sm mt-1">View your past and upcoming sessions with students.</p>
        </div>
      </div>

      {isLoading ? (
        <div className="text-center py-10">Loading sessions...</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-slate-600">
            <thead className="bg-slate-50 text-slate-700 font-semibold border-b">
              <tr>
                <th className="px-4 py-3">Student</th>
                <th className="px-4 py-3">Date</th>
                <th className="px-4 py-3">Time</th>
                <th className="px-4 py-3">Price</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((b) => (
                <tr key={b.id} className="border-b hover:bg-slate-50 transition-colors">
                  <td className="px-4 py-4 font-medium text-slate-800">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold">
                        {b.student?.name?.charAt(0).toUpperCase()}
                      </div>
                      {b.student?.name}
                    </div>
                  </td>
                  <td className="px-4 py-4">{new Date(b.bookingDate).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })}</td>
                  <td className="px-4 py-4">{b.slot?.startTime} - {b.slot?.endTime}</td>
                  <td className="px-4 py-4 font-semibold text-slate-800">${b.price}</td>
                  <td className="px-4 py-4">
                    <span className={`px-2 py-1 rounded text-xs font-semibold ${b.status === 'CONFIRMED' ? 'bg-blue-100 text-blue-700' : b.status === 'COMPLETED' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                      {b.status}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-right">
                    {b.status === 'CONFIRMED' && (
                      <button 
                        onClick={async () => {
                          try {
                            await axiosInstance.patch(`/bookings/${b.id}`, { status: 'COMPLETED' });
                            toast.success("Session marked as completed!");
                            fetchBookings();
                          } catch (err) {
                            toast.error("Failed to update status");
                          }
                        }}
                        className="text-xs bg-green-600 hover:bg-green-700 text-white px-3 py-1.5 rounded-lg font-medium transition"
                      >
                        Mark Completed
                      </button>
                    )}
                  </td>
                </tr>
              ))}
              {bookings.length === 0 && (
                <tr>
                  <td colSpan={6} className="text-center py-10">You have no teaching sessions yet.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
