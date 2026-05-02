import { Fragment } from "react";
import { Search, CalendarCheck, GraduationCap, ArrowRight } from "lucide-react";

const STEPS = [
  {
    icon: Search,
    number: "01",
    title: "Browse",
    description: "Find the right tutor by subject, rating, or availability.",
  },
  {
    icon: CalendarCheck,
    number: "02",
    title: "Book",
    description: "Schedule your session in seconds — flexible times that fit your day.",
  },
  {
    icon: GraduationCap,
    number: "03",
    title: "Learn",
    description: "Improve your skills with personalized, expert-led guidance.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-12">
      <div className="w-11/12 mx-auto">
        {/* Header with inline rule */}
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-xl font-bold text-slate-900 whitespace-nowrap">
            How it works
          </h2>
          <div className="flex-1 h-px bg-slate-200" />
        </div>

        {/* Steps */}
        <div className="flex flex-col sm:flex-row items-stretch gap-4">
          {STEPS.map((step, index) => (
            <Fragment key={step.number}>
              <div
                className="flex-1 bg-white border border-slate-100 rounded-3xl p-6 flex flex-col gap-5 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300 group"
              >
                {/* Top row: icon + step number */}
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <step.icon size={22} className="text-blue-600" strokeWidth={2} />
                  </div>
                  <span className="text-sm font-bold text-slate-300 tracking-tight">
                    STEP {step.number}
                  </span>
                </div>

                {/* Text */}
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-slate-500 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Arrow connector */}
              {index < STEPS.length - 1 && (
                <div className="hidden sm:flex items-center text-slate-200 flex-shrink-0">
                  <ArrowRight size={20} />
                </div>
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}