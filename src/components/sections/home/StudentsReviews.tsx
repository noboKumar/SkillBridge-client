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
    <section className="py-14 px-6 border-t border-slate-100">
      <div className="">
        <h2 className="text-2xl font-bold text-slate-900 tracking-tight mb-8">
          What Students Are Saying
        </h2>

        {reviews.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {reviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        ) : (
          // Skeleton placeholders
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-slate-100 p-5 space-y-3 animate-pulse"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-slate-200" />
                  <div className="space-y-1.5">
                    <div className="h-3 w-24 bg-slate-200 rounded" />
                    <div className="h-2.5 w-16 bg-slate-200 rounded" />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <div className="h-3 bg-slate-200 rounded w-full" />
                  <div className="h-3 bg-slate-200 rounded w-4/5" />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}