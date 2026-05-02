"use client";

import { Users, GraduationCap, Star, Globe2 } from "lucide-react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const stats = [
  { id: 1, name: "Active Students", value: 15000, suffix: "+", icon: Users, color: "text-blue-600", bg: "bg-blue-50", ring: "ring-blue-100" },
  { id: 2, name: "Expert Tutors", value: 1200, suffix: "+", icon: GraduationCap, color: "text-emerald-600", bg: "bg-emerald-50", ring: "ring-emerald-100" },
  { id: 3, name: "5-Star Reviews", value: 50, suffix: "k+", icon: Star, color: "text-amber-500", bg: "bg-amber-50", ring: "ring-amber-100" },
  { id: 4, name: "Subjects Covered", value: 300, suffix: "+", icon: Globe2, color: "text-purple-600", bg: "bg-purple-50", ring: "ring-purple-100" },
];

export default function Stats() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-24 relative overflow-hidden bg-white border-b border-slate-100" ref={ref}>
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-24 w-96 h-96 bg-blue-50/50 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-50/50 rounded-full blur-3xl opacity-50"></div>
      </div>

      <div className="w-11/12 mx-auto relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl mb-4">
            Trusted by learners worldwide
          </h2>
          <p className="text-lg sm:text-xl text-slate-600">
            Join our rapidly growing community and experience the difference of personalized, 1-on-1 education.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.id}
                className="relative group p-8 rounded-[2rem] bg-white border border-slate-100 shadow-xl shadow-slate-200/30 hover:-translate-y-2 hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-300"
              >
                <div className={`absolute top-0 left-0 w-full h-1 rounded-t-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${stat.bg.replace('bg-', 'bg-gradient-to-r from-')}`}></div>

                <div className="flex flex-col items-center text-center">
                  <div className={`p-4 rounded-2xl ${stat.bg} ${stat.color} ring-8 ${stat.ring} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-8 w-8" strokeWidth={2} />
                  </div>

                  <div className="flex items-baseline justify-center gap-1 mb-2">
                    <span className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
                      {inView ? (
                        <CountUp end={stat.value} duration={2.5} separator="," />
                      ) : (
                        "0"
                      )}
                    </span>
                    <span className={`text-2xl font-bold ${stat.color}`}>
                      {stat.suffix}
                    </span>
                  </div>

                  <p className="text-base font-medium text-slate-500 uppercase tracking-wide">
                    {stat.name}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
