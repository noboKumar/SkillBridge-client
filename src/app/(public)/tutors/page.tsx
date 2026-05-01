import TutorCard from "@/components/sections/home/TutorCard";
import TeacherFilter from "@/components/shared/TeacherFilter";
import { Tutor } from "@/types";

async function getTutors(searchParams?: { [key: string]: string | string[] | undefined }) {
  const query = new URLSearchParams();
  if (searchParams?.searchTerm) query.append("searchTerm", searchParams.searchTerm as string);
  if (searchParams?.rating) query.append("rating", searchParams.rating as string);
  if (searchParams?.minPrice) query.append("minPrice", searchParams.minPrice as string);
  if (searchParams?.maxPrice) query.append("maxPrice", searchParams.maxPrice as string);
  if (searchParams?.category) query.append("category", searchParams.category as string);

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tutors?${query.toString()}`, {
    cache: "no-store",
  });
  return res.json();
}

async function getCategories() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/categories`, {
    cache: "no-store",
  });
  return res.json();
}

export default async function TutorPage(props: {
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const searchParams = await props.searchParams;

  const [tutorsRes, categoriesRes] = await Promise.all([
    getTutors(searchParams),
    getCategories()
  ]);

  const tutors = tutorsRes?.data || [];
  const categories = categoriesRes?.data || [];

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-white to-blue-50 py-12">
      <div className="w-11/12 mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-8">
          {/* filter sidebar */}
          <div className="w-full md:w-1/4">
            <TeacherFilter categories={categories}></TeacherFilter>
          </div>

          <div className="w-full md:w-3/4">
            {/* Header */}
            <div className="mb-12">
              <h1 className="text-4xl font-bold text-slate-900 mb-2">
                Find Your Tutor
              </h1>
              <p className="text-slate-600">
                Discover qualified tutors for every subject
              </p>
            </div>

            {/* Tutors Grid - 3x3 since sidebar takes 1/4 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tutors.map((tutor: Tutor) => (
                <TutorCard key={tutor.id} tutor={tutor} />
              ))}
            </div>

            {/* Empty State */}
            {tutors.length === 0 && (
              <div className="text-center py-20 w-full">
                <p className="text-slate-500 text-lg">
                  No tutors found. Please try again later.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
