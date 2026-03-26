import Image from "next/image";
import { Star } from "lucide-react";
import { Review } from "@/types";

interface ReviewCardProps {
  review: Review;
}

export default function ReviewCard({ review }: ReviewCardProps) {
  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5 space-y-3">
      {/* Author */}
      <div className="flex items-center gap-3">
        <Image
          src={review.avatarUrl}
          alt={review.authorName}
          width={40}
          height={40}
          className="rounded-full object-cover"
        />
        <div>
          <p className="font-semibold text-slate-900 text-sm leading-tight">
            {review.authorName}
          </p>
          {/* Stars */}
          <div className="flex items-center gap-0.5 mt-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={12}
                className={
                  i < review.rating
                    ? "text-amber-400 fill-amber-400"
                    : "text-slate-200 fill-slate-200"
                }
              />
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <p className="text-sm text-slate-600 leading-relaxed">
        &ldquo;{review.content}&rdquo;
      </p>
    </div>
  );
}