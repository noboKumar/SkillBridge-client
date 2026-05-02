import { Review } from "@/types";
import ReviewCard from "./ReviewCard";

interface StudentReviewsProps {
  /**
   * Reviews fetched from your backend.
   * Falls back to skeleton loaders when empty.
   * In production, fetch from /api/reviews.
   */
  reviews: Review[];
}

export default function StudentReviews({ reviews }: StudentReviewsProps) {
  return (
    <section className="py-24 border-t border-slate-100 overflow-hidden bg-slate-50/20">
      {/* Constrained Header */}
      <div className="w-11/12 mx-auto mb-16 text-center lg:text-left">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          What Students Are Saying
        </h2>
        <p className="mt-4 text-slate-500 text-lg max-w-2xl">
          Join thousands of satisfied learners who have found their perfect mentors through SkillBridge.
        </p>
      </div>

      {reviews.length > 0 ? (
        <div className="relative group">
          {/* Enhanced Fading Edge Masks for full-width sections */}
          <div className="absolute left-0 top-0 bottom-0 w-32 sm:w-80 bg-gradient-to-r from-slate-50/80 via-slate-50/40 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 sm:w-80 bg-gradient-to-l from-slate-50/80 via-slate-50/40 to-transparent z-10 pointer-events-none"></div>

          {/* Marquee Wrapper - Ensure it fills the screen */}
          <div className="flex animate-marquee gap-8 py-8 w-max will-change-transform">
            {/* We render the list twice to ensure seamless looping at -50% translation */}
            {[...reviews, ...reviews].map((review, i) => (
              <div key={`${review.id}-${i}`} className="flex-shrink-0">
                <ReviewCard review={review} />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="w-11/12 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="bg-white rounded-[2rem] border border-slate-100 p-8 h-64 animate-pulse shadow-sm"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-full bg-slate-100" />
                <div className="space-y-2">
                  <div className="h-4 bg-slate-100 rounded w-24" />
                  <div className="h-3 bg-slate-100 rounded w-16" />
                </div>
              </div>
              <div className="space-y-3">
                <div className="h-4 bg-slate-100 rounded w-full" />
                <div className="h-4 bg-slate-100 rounded w-full" />
                <div className="h-4 bg-slate-100 rounded w-2/3" />
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}