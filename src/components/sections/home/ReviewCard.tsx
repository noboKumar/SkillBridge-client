import Image from "next/image";
import { Star, Quote } from "lucide-react";
import { Review } from "@/types";

interface ReviewCardProps {
  review: Review;
}

export default function ReviewCard({ review }: ReviewCardProps) {
  return (
    <div className="bg-white rounded-[2rem] border border-slate-100 shadow-xl shadow-slate-200/20 p-8 flex flex-col gap-6 relative overflow-hidden h-full min-w-[350px] group hover:border-blue-200 transition-colors">
      {/* Decorative Quote Icon */}
      <Quote className="absolute -top-2 -right-2 w-24 h-24 text-slate-50 opacity-[0.03] group-hover:text-blue-500 group-hover:opacity-[0.05] transition-all duration-500 rotate-12" />

      {/* Stars and Quote */}
      <div className="flex justify-between items-start relative z-10">
        <div className="flex items-center gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={14}
              className={
                i < review.rating
                  ? "text-amber-400 fill-amber-400"
                  : "text-slate-200 fill-slate-200"
              }
            />
          ))}
        </div>
        <Quote className="w-6 h-6 text-blue-500/20" />
      </div>

      {/* Content */}
      <p className="text-slate-600 leading-relaxed relative z-10 italic">
        "{review.content}"
      </p>

      {/* Author info */}
      <div className="flex items-center gap-4 mt-auto pt-6 border-t border-slate-50 relative z-10">
        <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-md">
          <Image
            src={review.avatarUrl}
            alt={review.authorName}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <p className="font-bold text-slate-900 leading-none mb-1">
            {review.authorName}
          </p>
          <p className="text-xs font-medium text-slate-400 uppercase tracking-wider">Verified Student</p>
        </div>
      </div>
    </div>
  );
}