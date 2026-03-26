import { Tutor } from "@/types";
import TutorCard from "./TutorCard";

interface FeaturedTutorsProps {
  /**
   * Pass tutors fetched from your backend.
   * Falls back to an empty array; in production,
   * fetch from your API route (e.g. /api/tutors?featured=true).
   */
  tutors: Tutor[];
}

export default function FeaturedTutors({ tutors }: FeaturedTutorsProps) {
  return (
    <section className="px-6">
      <div className="">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
            Featured Tutors
          </h2>
          <p className="mt-1 text-slate-500 text-sm">
            Meet our top-rated educators.
          </p>
        </div>

        {/* Grid */}
        {tutors.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {tutors.map((tutor) => (
              <TutorCard key={tutor.id} tutor={tutor} />
            ))}
          </div>
        ) : (
          // Skeleton placeholders while data loads
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="bg-slate-100 animate-pulse rounded-2xl overflow-hidden"
              >
                <div className="aspect-4/3 bg-slate-200" />
                <div className="p-4 space-y-2">
                  <div className="h-4 bg-slate-200 rounded w-3/4" />
                  <div className="h-3 bg-slate-200 rounded w-1/2" />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
