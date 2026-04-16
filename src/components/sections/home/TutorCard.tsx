import Image from "next/image";
import { Star, Award, Flame } from "lucide-react";
import { Tutor } from "@/types";

interface TutorCardProps {
  tutor: Tutor;
}

export default function TutorCard({ tutor }: TutorCardProps) {
  // Determine if tutor is trending based on rating
  const isTrending = tutor.ratingAverage >= 4.8;
  const name = tutor?.user?.name || "";
  const formattedName = name.charAt(0).toUpperCase() + name.slice(1);

  return (
    <div className="group h-full">
      <div className="relative h-full bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col hover:scale-105 hover:-translate-y-2">
        {/* Trending Badge */}
        {isTrending && (
          <div className="absolute top-4 right-4 z-10 flex items-center gap-1.5 bg-linear-to-r from-orange-400 to-red-500 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg">
            <Flame size={12} className="fill-white" />
            Trending
          </div>
        )}

        {/* Image Container with Gradient Overlay */}
        <div className="relative w-full aspect-4/3 bg-linear-to-br from-slate-200 to-slate-300 overflow-hidden">
          <Image
            src={tutor?.user?.profilePhoto}
            alt={tutor?.user?.name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
            priority
          />

          {/* Subtle Gradient Overlay on Hover */}
          <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>

        {/* Content Section */}
        <div className="flex-1 p-5 flex flex-col justify-between">
          {/* Header */}
          <div>
            {/* Name */}
            <h3 className="font-bold text-slate-900 text-lg leading-snug mb-1 group-hover:text-sky-600 transition-colors duration-300">
              {formattedName}
            </h3>

            {/* Category Tag */}
            <div className="inline-block pb-5">
              <span className="text-xs font-semibold text-sky-600 bg-sky-50 px-3 py-1.5 rounded-full mb-3 group-hover:bg-sky-100 transition-colors duration-300">
                {tutor?.category?.name}
              </span>
            </div>
          </div>

          {/* Stats */}
          <div className="space-y-3 border-t border-slate-100 pt-4">
            {/* Rating and Reviews */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={`transition-all duration-300 ${
                      i < Math.floor(tutor.ratingAverage)
                        ? "fill-amber-400 text-amber-400"
                        : "fill-slate-200 text-slate-200"
                    }`}
                  />
                ))}
              </div>
              <span className="font-bold text-slate-900 text-sm">
                {tutor.ratingAverage}
              </span>
              <span className="text-xs text-slate-500">
                {tutor.totalReview || 0} reviews
              </span>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-1.5">
              <span className="text-2xl font-black text-slate-900">
                ${tutor.hourlyRate}
              </span>
              <span className="text-sm text-slate-500">/hour</span>
            </div>

            {/* Experience Badge */}
            <div className="flex items-center gap-2 text-xs text-slate-600 bg-slate-50 px-3 py-2 rounded-lg group-hover:bg-slate-100 transition-colors duration-300">
              <Award size={14} className="text-slate-400" />
              <span className="font-bold">
                {tutor.experienceYears} year
                {tutor.experienceYears !== 1 ? "s" : ""} experience
              </span>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="px-5 pb-5 pt-0">
          <button
            className="w-full bg-linear-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 text-white font-semibold py-2.5 rounded-xl transition-all duration-300 transform group-hover:shadow-lg active:scale-95 cursor-pointer"
            aria-label={`View ${tutor?.user?.name}'s profile`}
          >
            View Profile
          </button>
        </div>

        {/* Animated Border Glow on Hover */}
        <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none border-2 border-sky-400/30 shadow-inset" />
      </div>
    </div>
  );
}
