"use client";

import { useAuth } from "@/hooks/useAuth";
import { useEffect, useState } from "react";
import { axiosInstance } from "@/lib/axios";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CalendarDays, Clock } from "lucide-react";

const DAYS = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];

export default function TutorAvailabilityPage() {
  const { user } = useAuth();
  const [day, setDay] = useState("MONDAY");
  const [startTime, setStartTime] = useState("10:00 AM");
  const [endTime, setEndTime] = useState("11:00 AM");
  const [existingSlot, setExistingSlot] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isFetching, setIsFetching] = useState(true);

  // Load existing slot on mount
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axiosInstance.get("/tutors/me");
        const slots = res.data.data?.availabilitySlots;
        if (slots && slots.length > 0) {
          const slot = slots[0];
          setExistingSlot(slot);
          setDay(slot.daysOfWeek);
          setStartTime(slot.startTime);
          setEndTime(slot.endTime);
        }
      } catch {
        // No existing slot yet — fine
      } finally {
        setIsFetching(false);
      }
    };
    if (user?.id) fetchProfile();
  }, [user?.id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await axiosInstance.put("/tutors/availability", {
        daysOfWeek: day,
        startTime,
        endTime,
      });
      toast.success(existingSlot ? "Availability updated!" : "Availability created! Students can now book you.");
      setExistingSlot({ daysOfWeek: day, startTime, endTime });
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Failed to save availability");
    } finally {
      setIsLoading(false);
    }
  };

  if (user?.role !== "TUTOR") return null;

  return (
    <div className="space-y-6 max-w-2xl mx-auto">
      {/* Info banner */}
      <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4 flex gap-3 items-start">
        <CalendarDays className="text-blue-600 mt-0.5 shrink-0" size={20} />
        <div>
          <p className="font-semibold text-blue-800">How this works</p>
          <p className="text-sm text-blue-700 mt-1">
            Set your available day and time window. Students will see this slot on your profile and can book it. Once booked, the slot becomes unavailable until you reset it.
          </p>
        </div>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
        <h2 className="text-2xl font-bold text-slate-800 mb-6 border-b pb-4">
          {existingSlot ? "Update Your Availability" : "Set Your Availability"}
        </h2>

        {isFetching ? (
          <div className="text-center py-6 text-slate-400">Loading...</div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">Day of the Week</label>
              <select
                value={day}
                onChange={(e) => setDay(e.target.value)}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
              >
                {DAYS.map((d) => (
                  <option key={d} value={d}>{d.charAt(0) + d.slice(1).toLowerCase()}</option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Start Time</label>
                <Input value={startTime} onChange={(e) => setStartTime(e.target.value)} placeholder="e.g. 10:00 AM" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">End Time</label>
                <Input value={endTime} onChange={(e) => setEndTime(e.target.value)} placeholder="e.g. 11:00 AM" />
              </div>
            </div>

            {/* Preview card */}
            <div className="border border-dashed border-slate-300 rounded-xl p-4 bg-slate-50">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Preview (what students see)</p>
              <div className="flex items-center gap-3 text-slate-700">
                <CalendarDays size={16} className="text-sky-600" />
                <span className="font-medium">{day.charAt(0) + day.slice(1).toLowerCase()}</span>
                <Clock size={16} className="text-sky-600 ml-2" />
                <span>{startTime} – {endTime}</span>
              </div>
            </div>

            <Button type="submit" disabled={isLoading} className="w-full bg-blue-600 hover:bg-blue-700">
              {isLoading ? "Saving..." : existingSlot ? "Update Availability" : "Set Availability"}
            </Button>
          </form>
        )}
      </div>

      {/* Current active slot */}
      {existingSlot && !existingSlot.isBooked && (
        <div className="bg-green-50 border border-green-200 rounded-2xl p-4">
          <p className="text-sm font-semibold text-green-800">✅ You have an active slot visible to students:</p>
          <p className="text-sm text-green-700 mt-1">
            {existingSlot.daysOfWeek?.charAt(0) + existingSlot.daysOfWeek?.slice(1).toLowerCase()} · {existingSlot.startTime} – {existingSlot.endTime}
          </p>
        </div>
      )}
      {existingSlot?.isBooked && (
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4">
          <p className="text-sm font-semibold text-amber-800">⏳ Your current slot is booked.</p>
          <p className="text-sm text-amber-700 mt-1">
            Save new availability above to open a fresh slot for students to book.
          </p>
        </div>
      )}
    </div>
  );
}
