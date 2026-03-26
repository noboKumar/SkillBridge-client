import Image from "next/image";
import { Star } from "lucide-react";
import { Tutor } from "@/types";

interface TutorCardProps {
  tutor: Tutor;
}

export default function TutorCard({ tutor }: TutorCardProps) {
  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden group cursor-pointer">
      {/* Tutor image */}
      <div className="relative w-full aspect-4/3 bg-slate-100">
        <Image
          src={tutor.imageUrl}
          alt={tutor.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Info */}
      <div className="p-4">
        <p className="font-semibold text-slate-900 text-base leading-tight">{tutor.name}</p>
        <div className="mt-1.5 flex items-center gap-1.5 text-sm text-slate-500">
          <span>{tutor.subject}</span>
          <span className="text-slate-300">·</span>
          <Star size={13} className="text-amber-400 fill-amber-400" />
          <span className="font-medium text-slate-700">{tutor.rating.toFixed(1)}</span>
          <span className="text-slate-300">·</span>
          <span className="font-medium text-blue-600">${tutor.hourlyRate}/hr</span>
        </div>
      </div>
    </div>
  );
}