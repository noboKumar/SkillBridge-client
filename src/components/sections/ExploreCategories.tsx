import Link from "next/link";
import { Calculator, Code2, BookOpen, Microscope } from "lucide-react";
import { Category } from "@/types";

// Icon mapping – extend as needed
const ICON_MAP: Record<string, React.ElementType> = {
  calculator: Calculator,
  code: Code2,
  "book-open": BookOpen,
  microscope: Microscope,
};

interface ExploreCategoriesProps {
  categories: Category[];
}

export default function ExploreCategories({ categories }: ExploreCategoriesProps) {
  return (
    <section className="py-14 px-6 bg-white">
      <div>
        <h2 className="text-2xl font-bold text-slate-900 tracking-tight mb-8">
          Explore by Category
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {categories.map((cat) => {
            const Icon = ICON_MAP[cat.icon] ?? BookOpen;
            return (
              <Link
                key={cat.id}
                href={`/tutors?category=${cat.id}`}
                className="group flex items-center gap-3 bg-slate-100 hover:bg-blue-50 border border-slate-100 hover:border-blue-200 rounded-2xl px-5 py-5 transition-all"
              >
                <span className="w-9 h-9 rounded-xl bg-white border border-slate-200 group-hover:border-blue-200 flex items-center justify-center text-blue-600 shadow-sm transition-colors">
                  <Icon size={18} />
                </span>
                <span className="font-semibold text-sm text-slate-700 group-hover:text-blue-700 transition-colors">
                  {cat.name}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}