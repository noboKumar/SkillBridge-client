"use client";

import { useAuth } from "@/hooks/useAuth";
import { useEffect, useState } from "react";
import { axiosInstance } from "@/lib/axios";
import { toast } from "sonner";
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

export default function TutorSessionsPage() {
  const { user } = useAuth();
  const [bookings, setBookings] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState<string | null>(null);

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

  const handleMarkCompleted = async (bookingId: string) => {
    setActionLoading(bookingId);
    try {
      await axiosInstance.patch(`/bookings/${bookingId}`, { status: "COMPLETED" });
      toast.success("Session marked as completed!");
      fetchBookings();
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Failed to update status");
    } finally {
      setActionLoading(null);
    }
  };

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
        <div className="text-center py-10 text-slate-400">Loading sessions...</div>
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
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-sm">
                        {b.student?.name?.charAt(0).toUpperCase()}
                      </div>
                      {b.student?.name}
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    {new Date(b.bookingDate).toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" })}
                  </td>
                  <td className="px-4 py-4">{b.slot?.startTime} - {b.slot?.endTime}</td>
                  <td className="px-4 py-4 font-semibold text-slate-800">${b.price}</td>
                  <td className="px-4 py-4">
                    <span className={`px-2 py-1 rounded text-xs font-semibold ${
                      b.status === "CONFIRMED" ? "bg-blue-100 text-blue-700"
                      : b.status === "COMPLETED" ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                    }`}>
                      {b.status}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-right">
                    {b.status === "CONFIRMED" ? (
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <button className="text-xs bg-green-600 hover:bg-green-700 text-white px-3 py-1.5 rounded-lg font-medium transition">
                            Mark Completed
                          </button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>Mark Session as Completed?</AlertDialogTitle>
                            <AlertDialogDescription>
                              You are about to mark the session with{" "}
                              <span className="font-semibold text-slate-800">{b.student?.name}</span> as completed.
                              Once completed, the student will be able to leave a review.
                              This action cannot be undone.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Keep as Confirmed</AlertDialogCancel>
                            <AlertDialogAction
                              onClick={() => handleMarkCompleted(b.id)}
                              disabled={actionLoading === b.id}
                              className="bg-green-600 hover:bg-green-700 text-white"
                            >
                              {actionLoading === b.id ? "Updating..." : "Yes, Mark Completed"}
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    ) : (
                      <button
                        disabled
                        className="text-xs bg-green-600 text-white px-3 py-1.5 rounded-lg font-medium opacity-40 cursor-not-allowed"
                      >
                        Mark Completed
                      </button>
                    )}
                  </td>
                </tr>
              ))}
              {bookings.length === 0 && (
                <tr>
                  <td colSpan={6} className="text-center py-10 text-slate-400">
                    You have no teaching sessions yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
