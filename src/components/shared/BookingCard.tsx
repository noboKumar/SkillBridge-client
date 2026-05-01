"use client";

import { useState } from "react";
import { axiosInstance } from "@/lib/axios";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";

export default function BookingCard({ tutor }: { tutor: any }) {
  const [selectedSlot, setSelectedSlot] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useAuth();
  const router = useRouter();

  const slots = (tutor?.availabilitySlots || []).filter((slot: any) => !slot.isBooked);

  const handleBookSession = async () => {
    if (!user) {
      toast.error("Please login to book a session");
      router.push("/login");
      return;
    }

    if (user.role !== "STUDENT") {
      toast.error("Only students can book sessions");
      return;
    }

    if (!selectedSlot) {
      toast.error("Please select an availability slot");
      return;
    }

    setIsLoading(true);
    try {
      await axiosInstance.post("/bookings", {
        slotId: selectedSlot,
      });
      toast.success("Session booked successfully!");
      router.push("/dashboard/student/bookings");
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Failed to book session");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm text-center">
      <h2 className="text-lg font-bold mb-2">Hourly Rate</h2>
      <p className="text-3xl font-black text-slate-900">${tutor.hourlyRate}</p>
      <p className="text-slate-500 mb-6">per hour</p>

      {slots.length > 0 ? (
        <div className="space-y-4 text-left mb-6">
          <label className="text-sm font-semibold text-slate-700 block">Available Slots</label>
          <select 
            value={selectedSlot}
            onChange={(e) => setSelectedSlot(e.target.value)}
            className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-sky-600 focus:outline-none"
          >
            <option value="">Select a time slot...</option>
            {slots.map((slot: any) => (
              <option key={slot.id} value={slot.id}>
                {slot.daysOfWeek}: {slot.startTime} - {slot.endTime}
              </option>
            ))}
          </select>
        </div>
      ) : (
        <p className="text-red-500 text-sm font-medium mb-6">No available slots</p>
      )}

      <button 
        onClick={handleBookSession}
        disabled={isLoading || slots.length === 0}
        className="w-full bg-sky-600 hover:bg-sky-700 disabled:bg-slate-300 text-white py-2.5 rounded-xl font-semibold transition"
      >
        {isLoading ? "Booking..." : "Book Session"}
      </button>
    </div>
  );
}
