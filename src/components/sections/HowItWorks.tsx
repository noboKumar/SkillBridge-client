import { Search, CalendarCheck, GraduationCap, ChevronRight } from "lucide-react";

const STEPS = [
  {
    icon: Search,
    number: "1",
    title: "Browse",
    description: "Find the right tutor for your needs.",
  },
  {
    icon: CalendarCheck,
    number: "2",
    title: "Book",
    description: "Schedule your session easily online.",
  },
  {
    icon: GraduationCap,
    number: "3",
    title: "Learn",
    description: "Improve your skills with expert guidance.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-14 px-6 bg-slate-50 border-y border-slate-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-slate-900 tracking-tight mb-8">
          How It Works
        </h2>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          {STEPS.map((step, index) => (
            <div key={step.number} className="flex items-center gap-4 flex-1">
              {/* Step card */}
              <div className="flex items-start gap-4 bg-white rounded-2xl border border-slate-100 shadow-sm px-5 py-4 flex-1">
                {/* Icon */}
                <div className="shrink-0 w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                  <step.icon size={20} />
                </div>

                {/* Text */}
                <div>
                  <p className="font-semibold text-slate-900 text-sm">
                    {step.number}. {step.title}
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Connector arrow */}
              {index < STEPS.length - 1 && (
                <ChevronRight size={18} className="text-slate-300 shrink-0 hidden sm:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}