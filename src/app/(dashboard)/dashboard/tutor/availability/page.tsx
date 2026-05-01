"use client";

import { useAuth } from "@/hooks/useAuth";
import { useState } from "react";
import { axiosInstance } from "@/lib/axios";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function TutorAvailabilityPage() {
  const { user } = useAuth();
  const [day, setDay] = useState("MONDAY");
  const [startTime, setStartTime] = useState("10:00 AM");
  const [endTime, setEndTime] = useState("11:00 AM");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await axiosInstance.put("/tutors/availability", {
        daysOfWeek: day,
        startTime,
        endTime,
        isBooked: false,
      });
      toast.success("Availability updated successfully");
    } catch (error) {
      toast.error("Failed to update availability");
    } finally {
      setIsLoading(false);
    }
  };

  if (user?.role !== "TUTOR") return null;

  return (
    <div className="space-y-6">
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold text-slate-800 mb-6 border-b pb-4">Manage Availability</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">Day of the Week</label>
            <select 
              value={day} 
              onChange={e => setDay(e.target.value)}
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              <option value="SUNDAY">Sunday</option>
              <option value="MONDAY">Monday</option>
              <option value="TUESDAY">Tuesday</option>
              <option value="WEDNESDAY">Wednesday</option>
              <option value="THURSDAY">Thursday</option>
              <option value="FRIDAY">Friday</option>
              <option value="SATURDAY">Saturday</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">Start Time</label>
              <Input value={startTime} onChange={e => setStartTime(e.target.value)} placeholder="e.g. 10:00 AM" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">End Time</label>
              <Input value={endTime} onChange={e => setEndTime(e.target.value)} placeholder="e.g. 11:00 AM" />
            </div>
          </div>

          <Button type="submit" disabled={isLoading} className="w-full bg-blue-600 hover:bg-blue-700">
            {isLoading ? "Saving..." : "Save Availability"}
          </Button>
        </form>
      </div>
    </div>
  );
}
