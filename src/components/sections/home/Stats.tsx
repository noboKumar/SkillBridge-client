import { Users, GraduationCap, Star, Globe2 } from "lucide-react";

const stats = [
  { id: 1, name: "Active Students", value: "15,000+", icon: Users, color: "text-blue-500", bg: "bg-blue-50" },
  { id: 2, name: "Expert Tutors", value: "1,200+", icon: GraduationCap, color: "text-emerald-500", bg: "bg-emerald-50" },
  { id: 3, name: "5-Star Reviews", value: "50,000+", icon: Star, color: "text-amber-500", bg: "bg-amber-50" },
  { id: 4, name: "Subjects Covered", value: "300+", icon: Globe2, color: "text-purple-500", bg: "bg-purple-50" },
];

export default function Stats() {
  return (
    <section className="py-24 bg-white relative overflow-hidden border-y border-slate-100">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-50 rounded-full blur-3xl opacity-50"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Trusted by learners worldwide
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Join our rapidly growing community and experience the difference of personalized, 1-on-1 education.
          </p>
        </div>

        <dl className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.id}
                className="relative bg-white pt-8 px-6 pb-12 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow overflow-hidden group"
              >
                <dt>
                  <div className={`absolute rounded-2xl p-3 ${stat.bg} ${stat.color} group-hover:scale-110 transition-transform`}>
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-sm font-medium text-slate-500 truncate">{stat.name}</p>
                </dt>
                <dd className="ml-16 pb-6 flex items-baseline sm:pb-7">
                  <p className="text-3xl font-black text-slate-900">{stat.value}</p>
                </dd>
              </div>
            );
          })}
        </dl>
      </div>
    </section>
  );
}
