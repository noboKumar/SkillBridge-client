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
    <section className="py-8 px-6">
      {/* Header with inline rule */}
      <div className="flex items-center gap-4 mb-6">
        <h2 className="text-lg font-semibold text-slate-900 whitespace-nowrap">
          How it works
        </h2>
        <div className="flex-1 h-px bg-slate-200" />
      </div>

      {/* Steps */}
      <div className="flex flex-col sm:flex-row items-stretch gap-3">
        {STEPS.map((step, index) => (
          <>
            <div
              key={step.number}
              className="flex-1 bg-white border border-slate-100 rounded-2xl p-5 flex flex-col gap-4 hover:border-slate-200 transition-colors"
            >
              {/* Top row: icon + step number */}
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
                  <step.icon size={18} className="text-blue-600" strokeWidth={2} />
                </div>
                <span className="text-xs font-medium text-slate-400 tracking-wide">
                  Step {step.number}
                </span>
              </div>

              {/* Text */}
              <div>
                <p className="font-semibold text-slate-900 mb-1">{step.title}</p>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>

            {/* Arrow connector */}
            {index < STEPS.length - 1 && (
              <div className="hidden sm:flex items-center text-slate-300 flex-shrink-0">
                <ArrowRight size={16} />
              </div>
            )}
          </>
        ))}
      </div>
    </section>
  );
}