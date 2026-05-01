import Image from "next/image";
import { Star, Award, BookOpen, Clock } from "lucide-react";
import BackBtn from "@/components/shared/BackBtn";
import BookingCard from "@/components/shared/BookingCard";

export default async function TutorPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tutors/${id}`, {
    cache: "no-store",
  });

  const data = await res.json();
  const tutor = data?.data;

  if (!tutor) {
    return (
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-xl font-semibold">Tutor not found</h1>
      </div>
    );
  }

  const name =
    tutor?.user?.name?.charAt(0).toUpperCase() + tutor?.user?.name?.slice(1);

  return (
    <div className="min-h-screen bg-slate-50 border-4 rounded-xl">
      {/* HERO SECTION */}
      <div className="relative border">
        <BackBtn></BackBtn>
        <div className="max-w-5xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-8">
          {/* Image */}
          <div className="relative w-40 h-40 md:w-52 md:h-52 rounded-3xl overflow-hidden border-4 border-white shadow-xl">
            <Image
              src={tutor?.user?.profilePhoto}
              alt={tutor?.user?.name}
              fill
              className="object-cover"
            />
          </div>

          {/* Info */}
          <div className="flex-1">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">{name}</h1>

            <p className="mb-4">{tutor?.category?.name}</p>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 text-sm">
              {/* Rating */}
              <div className="flex items-center gap-2">
                <Star className="fill-yellow-400 text-yellow-400" />
                <span className="font-semibold">{tutor.ratingAverage}</span>
                <span>({tutor.totalReview} reviews)</span>
              </div>

              {/* Experience */}
              <div className="flex items-center gap-2">
                <Award />
                <span>{tutor.experienceYears} years experience</span>
              </div>

              {/* Rate */}
              <div className="flex items-center gap-2">
                <Clock />
                <span className="font-semibold">${tutor.hourlyRate}/hour</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BODY */}
      <div className="max-w-5xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-6">
        {/* LEFT SIDE */}
        <div className="md:col-span-2 space-y-6">
          {/* About */}
          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <h2 className="text-xl font-bold mb-3">About</h2>
            <p className="text-slate-600 leading-relaxed">
              {tutor?.bio || "This tutor has not added a bio yet."}
            </p>
          </div>

          {/* Subjects / Category */}
          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <h2 className="text-xl font-bold mb-3">Category</h2>
            <span className="inline-block bg-sky-50 text-sky-600 px-4 py-2 rounded-full font-semibold">
              {tutor?.category?.name}
            </span>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-6">
          <BookingCard tutor={tutor} />

          {/* Quick Info */}
          <div className="bg-white p-6 rounded-2xl shadow-sm space-y-3">
            <h2 className="text-lg font-bold">Quick Info</h2>

            <div className="flex items-center gap-2 text-slate-600">
              <BookOpen size={16} />
              <span>{tutor.reviews?.length || 0} total reviews</span>
            </div>

            <div className="flex items-center gap-2 text-slate-600">
              <Award size={16} />
              <span>{tutor.experienceYears} years teaching</span>
            </div>
          </div>
        </div>
      </div>

      {/* REVIEWS SECTION */}
      <div className="max-w-5xl mx-auto px-6 py-10 border-t">
        <h2 className="text-2xl font-bold mb-6">Student Reviews</h2>
        {tutor.reviews && tutor.reviews.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-6">
            {tutor.reviews.map((review: any) => (
              <div key={review.id} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                    {review.student?.name?.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800">{review.student?.name}</h3>
                    <div className="flex text-yellow-400 text-sm">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={i < review.rating ? "fill-yellow-400" : "fill-slate-200 text-slate-200"} size={14} />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-slate-600 italic">"{review.comment}"</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-slate-500">No reviews yet. Be the first to review this tutor after your session!</p>
        )}
      </div>
    </div>
  );
}
