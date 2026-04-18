import Link from "next/link";
import {
  Calculator,
  Code2,
  BookOpen,
  Microscope,
  Briefcase,
  Languages,
} from "lucide-react";
import { Category } from "@/types";

function getCategoryIcon(name: string) {
  const lower = name.toLowerCase();

  if (lower.includes("math")) return Calculator;
  if (lower.includes("program") || lower.includes("code")) return Code2;
  if (lower.includes("science")) return Microscope;
  if (lower.includes("business")) return Briefcase;
  if (lower.includes("english")) return Languages;

  return BookOpen; // fallback
}
// Server-side fetch
async function getCategories(): Promise<Category[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/categories`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch categories");
  }

  const data = await res.json();
  return data?.data || [];
}

export default async function ExploreCategories() {
  const categories = await getCategories();

  return (
    <section className="py-14 px-6 bg-white">
      <div>
        <h2 className="text-2xl font-bold text-slate-900 tracking-tight mb-8">
          Explore by Category
        </h2>

        {/* Empty state */}
        {categories.length === 0 ? (
          <div className="text-slate-500 text-sm">No categories available.</div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {categories.map((cat) => {
              const Icon = getCategoryIcon(cat.name);

              return (
                <Link
                  key={cat.id}
                  href={`/tutors?category=${cat.id}`}
                  className="group flex items-center gap-3 bg-slate-100 hover:bg-blue-50 border-2 border-transparent hover:border-blue-200 rounded-2xl px-5 py-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                >
                  <span className="w-14 h-14 rounded-xl bg-white border border-slate-200 group-hover:border-blue-200 flex items-center justify-center text-blue-600 shadow-sm transition-all">
                    <Icon size={26} />
                  </span>

                  <span className="font-semibold text-slate-700 group-hover:text-blue-700 transition-colors">
                    {cat.name}
                  </span>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
