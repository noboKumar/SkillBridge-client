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
} from "@/components/ui/alert-dialog";

type BookingStatus = "CONFIRMED" | "COMPLETED" | "CANCELLED";

export default function AdminBookingsPage() {
  const { user } = useAuth();
  const [bookings, setBookings] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState<string | null>(null);

  // Dialog state
  const [dialog, setDialog] = useState<{
    open: boolean;
    bookingId: string;
    targetStatus: BookingStatus;
    studentName: string;
    tutorName: string;
  } | null>(null);

  const fetchBookings = async () => {
    try {
      const res = await axiosInstance.get("/bookings");
      setBookings(res.data.data);
    } catch {
      toast.error("Failed to fetch bookings");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  const handleUpdateStatus = async () => {
    if (!dialog) return;
    setActionLoading(dialog.bookingId);
    try {
      await axiosInstance.patch(`/bookings/${dialog.bookingId}`, {
        status: dialog.targetStatus,
      });
      toast.success(`Booking marked as ${dialog.targetStatus.toLowerCase()}.`);
      fetchBookings();
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Failed to update status");
    } finally {
      setActionLoading(null);
      setDialog(null);
    }
  };

  const statusBadge = (status: string) => {
    const styles: Record<string, string> = {
      CONFIRMED: "bg-blue-100 text-blue-700",
      COMPLETED: "bg-green-100 text-green-700",
      CANCELLED: "bg-red-100 text-red-700",
    };
    return (
      <span className={`px-2 py-1 rounded text-xs font-semibold ${styles[status] ?? "bg-slate-100 text-slate-600"}`}>
        {status}
      </span>
    );
  };

  if (user?.role !== "ADMIN") return null;

  return (
    <>
      <div className="space-y-6 bg-white p-6 rounded-2xl shadow-sm border border-slate-100 min-h-[70vh]">
        <div className="flex justify-between items-center mb-6 border-b pb-4">
          <div>
            <h2 className="text-2xl font-bold text-slate-800">Platform Bookings</h2>
            <p className="text-slate-500 text-sm mt-1">
              View and manage all tutoring sessions across the platform.
            </p>
          </div>
        </div>

        {isLoading ? (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-600">
              <thead className="bg-slate-50 border-b">
                <tr>
                  {["Booking ID", "Student", "Tutor", "Date & Time", "Price", "Status", "Actions"].map((i) => (
                    <th key={i} className="px-4 py-3">
                      <div className="h-4 bg-slate-200 rounded animate-pulse w-20"></div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[1, 2, 3, 4, 5].map((i) => (
                  <tr key={i} className="border-b">
                    <td className="px-4 py-4"><div className="h-4 bg-slate-200 rounded animate-pulse w-20"></div></td>
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-slate-200 animate-pulse"></div>
                        <div className="h-4 bg-slate-200 rounded animate-pulse w-24"></div>
                      </div>
                    </td>
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-slate-200 animate-pulse"></div>
                        <div className="h-4 bg-slate-200 rounded animate-pulse w-24"></div>
                      </div>
                    </td>
                    <td className="px-4 py-4"><div className="h-4 bg-slate-200 rounded animate-pulse w-32"></div></td>
                    <td className="px-4 py-4"><div className="h-4 bg-slate-200 rounded animate-pulse w-12"></div></td>
                    <td className="px-4 py-4"><div className="h-6 bg-slate-200 rounded-full animate-pulse w-20"></div></td>
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
                  <th className="px-4 py-3">Booking ID</th>
                  <th className="px-4 py-3">Student</th>
                  <th className="px-4 py-3">Tutor</th>
                  <th className="px-4 py-3">Date & Time</th>
                  <th className="px-4 py-3">Price</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((b) => (
                  <tr key={b.id} className="border-b hover:bg-slate-50 transition-colors">
                    <td className="px-4 py-4 font-mono text-xs text-slate-400">
                      {b.id.substring(0, 8)}...
                    </td>
                    <td className="px-4 py-4 font-medium text-slate-800">
                      {b.student?.name}
                    </td>
                    <td className="px-4 py-4">{b.tutor?.user?.name}</td>
                    <td className="px-4 py-4">
                      {new Date(b.bookingDate).toLocaleDateString(undefined, {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                      <br />
                      <span className="text-xs text-slate-400">
                        {b.slot?.startTime} - {b.slot?.endTime}
                      </span>
                    </td>
                    <td className="px-4 py-4 font-semibold text-slate-800">
                      ${b.price}
                    </td>
                    <td className="px-4 py-4">{statusBadge(b.status)}</td>
                    <td className="px-4 py-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          disabled={b.status !== "CONFIRMED" || actionLoading === b.id}
                          onClick={() =>
                            setDialog({
                              open: true,
                              bookingId: b.id,
                              targetStatus: "COMPLETED",
                              studentName: b.student?.name,
                              tutorName: b.tutor?.user?.name,
                            })
                          }
                          className="text-xs bg-green-600 hover:bg-green-700 text-white px-3 py-1.5 rounded-lg font-medium transition disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-green-600"
                        >
                          Complete
                        </button>
                        <button
                          disabled={b.status !== "CONFIRMED" || actionLoading === b.id}
                          onClick={() =>
                            setDialog({
                              open: true,
                              bookingId: b.id,
                              targetStatus: "CANCELLED",
                              studentName: b.student?.name,
                              tutorName: b.tutor?.user?.name,
                            })
                          }
                          className="text-xs bg-red-500 hover:bg-red-600 text-white px-3 py-1.5 rounded-lg font-medium transition disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-red-500"
                        >
                          Cancel
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
                {bookings.length === 0 && (
                  <tr>
                    <td colSpan={7} className="text-center py-10 text-slate-400">
                      No bookings found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Shared confirmation dialog */}
      <AlertDialog open={!!dialog} onOpenChange={(open) => !open && setDialog(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              {dialog?.targetStatus === "COMPLETED"
                ? "Mark Booking as Completed?"
                : "Cancel this Booking?"}
            </AlertDialogTitle>
            <AlertDialogDescription>
              {dialog?.targetStatus === "COMPLETED" ? (
                <>
                  You are marking the session between{" "}
                  <span className="font-semibold text-slate-800">{dialog.studentName}</span>{" "}
                  and{" "}
                  <span className="font-semibold text-slate-800">{dialog.tutorName}</span>{" "}
                  as <span className="text-green-700 font-semibold">Completed</span>.
                  The student will be able to leave a review.
                </>
              ) : (
                <>
                  You are cancelling the session between{" "}
                  <span className="font-semibold text-slate-800">{dialog?.studentName}</span>{" "}
                  and{" "}
                  <span className="font-semibold text-slate-800">{dialog?.tutorName}</span>.
                  This action cannot be undone.
                </>
              )}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Go Back</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleUpdateStatus}
              disabled={!!actionLoading}
              className={
                dialog?.targetStatus === "COMPLETED"
                  ? "bg-green-600 hover:bg-green-700 text-white"
                  : "bg-red-500 hover:bg-red-600 text-white"
              }
            >
              {actionLoading
                ? "Updating..."
                : dialog?.targetStatus === "COMPLETED"
                ? "Yes, Mark Completed"
                : "Yes, Cancel Booking"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
