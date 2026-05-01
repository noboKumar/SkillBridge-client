"use client";

import { useAuth } from "@/hooks/useAuth";
import { useState } from "react";
import { axiosInstance } from "@/lib/axios";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function TutorProfilePage() {
  const { user } = useAuth();
  const [bio, setBio] = useState("");
  const [hourlyRate, setHourlyRate] = useState(25);
  const [experienceYears, setExperienceYears] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await axiosInstance.put(`/tutors/${user?.id}`, {
        bio,
        hourlyRate: Number(hourlyRate),
        experienceYears: Number(experienceYears),
      });
      toast.success("Profile updated successfully");
    } catch (error) {
      toast.error("Failed to update profile");
    } finally {
      setIsLoading(false);
    }
  };

  if (user?.role !== "TUTOR") return null;

  return (
    <div className="space-y-6">
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold text-slate-800 mb-6 border-b pb-4">Tutor Profile</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">Bio</label>
            <textarea 
              value={bio} 
              onChange={e => setBio(e.target.value)}
              placeholder="Tell students about your teaching experience..."
              className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">Hourly Rate ($)</label>
              <Input type="number" min={0} value={hourlyRate} onChange={e => setHourlyRate(Number(e.target.value))} />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">Years of Experience</label>
              <Input type="number" min={0} value={experienceYears} onChange={e => setExperienceYears(Number(e.target.value))} />
            </div>
          </div>

          <Button type="submit" disabled={isLoading} className="w-full bg-blue-600 hover:bg-blue-700">
            {isLoading ? "Saving..." : "Update Profile"}
          </Button>
        </form>
      </div>
    </div>
  );
}
