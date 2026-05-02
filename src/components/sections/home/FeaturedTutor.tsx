import { Tutor } from "@/types";
import TutorCard from "./TutorCard";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const getTutors = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tutors/featured`);
  if (!res.ok) {
    throw new Error("Failed to fetch featured tutors");
  }

  const data = await res.json();
  return data?.data || [];
};

export default async function FeaturedTutors() {
  const tutors = await getTutors();

  return (
    <section className="py-16">
      <div className="w-11/12 mx-auto">
        {/* Header */}
        <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Featured Tutors
            </h2>
            <p className="mt-2 text-slate-500 text-lg">
              Learn from the best educators in our community.
            </p>
          </div>
          <Link href="/tutors" className="text-blue-600 font-bold hover:underline flex items-center gap-1">
            Browse all tutors
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Grid */}
        {tutors.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {tutors.map((tutor: Tutor) => (
              <TutorCard key={tutor.id} tutor={tutor} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="bg-white border border-slate-100 p-4 rounded-3xl shadow-sm animate-pulse"
              >
                <div className="aspect-[4/3] bg-slate-100 rounded-2xl mb-4" />
                <div className="space-y-3">
                  <div className="h-5 bg-slate-100 rounded-full w-3/4" />
                  <div className="h-4 bg-slate-100 rounded-full w-1/2" />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
