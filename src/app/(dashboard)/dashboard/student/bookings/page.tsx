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

export default function StudentBookingsPage() {
  const { user } = useAuth();
  const [bookings, setBookings] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [cancelLoading, setCancelLoading] = useState<string | null>(null);
  
  // Review State
  const [reviewModalOpen, setReviewModalOpen] = useState(false);
  const [selectedBookingId, setSelectedBookingId] = useState("");
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const fetchBookings = async () => {
    try {
      const res = await axiosInstance.get("/bookings");
      setBookings(res.data.data);
    } catch (error) {
      toast.error("Failed to fetch bookings");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  const handleSubmitReview = async () => {
    if (!comment) return toast.error("Please add a comment");
    
    setIsSubmitting(true);
    try {
      await axiosInstance.post("/reviews", {
        bookingId: selectedBookingId,
        rating,
        comment
      });
      toast.success("Review submitted successfully!");
      setReviewModalOpen(false);
      fetchBookings();
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Failed to submit review");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCancelBooking = async (bookingId: string) => {
    setCancelLoading(bookingId);
    try {
      await axiosInstance.patch(`/bookings/${bookingId}`, { status: "CANCELLED" });
      toast.success("Session cancelled.");
      fetchBookings();
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Failed to cancel booking");
    } finally {
      setCancelLoading(null);
    }
  };

  if (user?.role !== "STUDENT") return null;

  return (
    <div className="space-y-6 bg-white p-6 rounded-2xl shadow-sm border border-slate-100 min-h-[70vh] relative">
      <div className="flex justify-between items-center mb-6 border-b pb-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">My Bookings</h2>
          <p className="text-slate-500 text-sm mt-1">View your past and upcoming tutoring sessions.</p>
        </div>
      </div>

      {isLoading ? (
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-slate-600">
            <thead className="bg-slate-50 border-b">
              <tr>
                {["Tutor", "Date", "Time", "Status", "Action"].map((i) => (
                  <th key={i} className="px-4 py-3">
                    <div className="h-4 bg-slate-200 rounded animate-pulse w-20"></div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3].map((i) => (
                <tr key={i} className="border-b">
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-slate-200 animate-pulse"></div>
                      <div className="h-4 bg-slate-200 rounded animate-pulse w-24"></div>
                    </div>
                  </td>
                  <td className="px-4 py-4"><div className="h-4 bg-slate-200 rounded animate-pulse w-24"></div></td>
                  <td className="px-4 py-4"><div className="h-4 bg-slate-200 rounded animate-pulse w-32"></div></td>
                  <td className="px-4 py-4"><div className="h-6 bg-slate-200 rounded-full animate-pulse w-24"></div></td>
                  <td className="px-4 py-4"><div className="h-8 bg-slate-200 rounded-md animate-pulse w-20"></div></td>
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
                <th className="px-4 py-3">Tutor</th>
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
                  <td className="px-4 py-4 font-medium text-slate-800">{b.tutor?.user?.name}</td>
                  <td className="px-4 py-4">{new Date(b.bookingDate).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })}</td>
                  <td className="px-4 py-4">{b.slot?.startTime} - {b.slot?.endTime}</td>
                  <td className="px-4 py-4 font-semibold text-slate-800">${b.price}</td>
                  <td className="px-4 py-4">
                    <span className={`px-2 py-1 rounded text-xs font-semibold ${b.status === 'CONFIRMED' ? 'bg-blue-100 text-blue-700' : b.status === 'COMPLETED' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                      {b.status}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-right space-x-2">
                    {/* CONFIRMED: student can cancel */}
                    {b.status === 'CONFIRMED' ? (
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <button className="text-xs bg-red-500 hover:bg-red-600 text-white px-3 py-1.5 rounded-lg font-medium transition">
                            Cancel
                          </button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>Cancel this session?</AlertDialogTitle>
                            <AlertDialogDescription>
                              You are about to cancel your session with{" "}
                              <span className="font-semibold text-slate-800">{b.tutor?.user?.name}</span>.
                              This action cannot be undone.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Keep Session</AlertDialogCancel>
                            <AlertDialogAction
                              onClick={() => handleCancelBooking(b.id)}
                              disabled={cancelLoading === b.id}
                              className="bg-red-500 hover:bg-red-600 text-white"
                            >
                              {cancelLoading === b.id ? "Cancelling..." : "Yes, Cancel"}
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    ) : (
                      <button
                        disabled
                        className="text-xs bg-red-500 text-white px-3 py-1.5 rounded-lg font-medium opacity-40 cursor-not-allowed"
                      >
                        Cancel
                      </button>
                    )}
                    {/* COMPLETED: student can leave a review once */}
                    {b.status === 'COMPLETED' && !b.reviews && (
                      <button
                        onClick={() => {
                          setSelectedBookingId(b.id);
                          setRating(5);
                          setComment("");
                          setReviewModalOpen(true);
                        }}
                        className="text-xs bg-sky-600 hover:bg-sky-700 text-white px-3 py-1.5 rounded-lg font-medium transition"
                      >
                        Leave Review
                      </button>
                    )}
                  </td>
                </tr>
              ))}
              {bookings.length === 0 && (
                <tr>
                  <td colSpan={6} className="text-center py-10">You haven't booked any sessions yet.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}

      {/* Review Modal */}
      {reviewModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-xl">
            <h3 className="text-xl font-bold mb-4 text-slate-800">Leave a Review</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Rating (1-5)</label>
                <input 
                  type="number" 
                  min="1" max="5" 
                  value={rating} 
                  onChange={(e) => setRating(Number(e.target.value))}
                  className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-sky-600 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Comment</label>
                <textarea 
                  value={comment} 
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="How was the session?"
                  className="w-full min-h-[100px] border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-sky-600 focus:outline-none"
                />
              </div>
              <div className="flex justify-end gap-2 mt-6">
                <button 
                  onClick={() => setReviewModalOpen(false)}
                  className="px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 rounded-lg"
                >
                  Cancel
                </button>
                <button 
                  onClick={handleSubmitReview}
                  disabled={isSubmitting}
                  className="px-4 py-2 text-sm font-medium bg-sky-600 text-white hover:bg-sky-700 rounded-lg disabled:opacity-50"
                >
                  {isSubmitting ? "Submitting..." : "Submit Review"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
